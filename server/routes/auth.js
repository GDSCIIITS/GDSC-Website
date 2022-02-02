const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
// get user data request
// localhost:5000/api/auth
// GET request
router.get("/auth", auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (error) {
        res.status(500).send("Server Error");
    }
});

// signin user request
// localhost:5000/api/auth/signin
// POST request
router.post(
    "/auth/signin",
    [
        check("email", "Enter valid emial").isEmail(),
        check("password", "password is required").exists(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        try {
            let user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({
                    errors: [{ message: "Enter valid email" }],
                });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({
                    errors: [{ message: "Enter valid password" }],
                });
            }
            const payload = {
                user: {
                    id: user.id,
                },
            };
            jwt.sign(
                payload,
                process.env.jwtToken,
                { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({
                        token,
                        name: user.name,
                        email: user.email,
                        avatar: user.avatar,
                    });
                }
            );
        } catch (error) {
            res.status(500).send("Server Erroe!");
        }
    }
);
// signup user request
// localhost:5000/api/auth/signup
// POST request
router.post(
    "/auth/signup",
    [
        check("name", "name is required").not().isEmpty(),
        check("email", "Enter valid emial").isEmail(),
        check("password", "Enter valid password").isLength({ min: 6 }),
        check("secretCode", "secret code is required").not().isEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        if (req.body.secretCode !== process.env.secretCode) {
            return res.status(404).json({
                errors: [{ message: "you have used wrong secret code" }],
            });
        }

        const { name, email, password } = req.body;
        try {
            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({
                    errors: [{ message: "user already exists" }],
                });
            }
            
            user = new User({
                name,
                email,
                password,
            });
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            await user.save();
            const payload = {
                user: {
                    id: user.id,
                },
            };
            jwt.sign(
                payload,
                process.env.jwtToken,
                { expiresIn: 86400 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token, name, email});
                }
            );
        } catch (error) {
            res.status(500).send("Server Error!");
        }
    }
);

module.exports = router;

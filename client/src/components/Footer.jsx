import React from 'react';
import Content from './content';
import classes from './Footer.module.css'

const Footer = () => {
    return <footer>
        <div className={`container ${classes.heading}`}>
            <h4>Follow Us:</h4>
            <div className={`d-flex flex-row bd-highlight mb-3 ${classes.icons}`}>
                <div className={`p-2 bd-highlight`}>
                    <a href="#" target="_blank"><i className="bi bi-facebook"></i></a>
                </div>
                <div className="p-2 bd-highlight">
                    <a href="https://twitter.com/gdsciiits" target="_blank"><i className="bi bi-twitter"></i></a>
                </div>
                <div className="p-2 bd-highlight">
                    <a href="https://www.instagram.com/gdsciiits/" target="_blank"><i className="bi bi-instagram"></i></a>
                </div>
                <div className="p-2 bd-highlight">
                    <a href="https://github.com/GDSCIIITS" target="_blank"><i className="bi bi-github"></i></a>
                </div>
                <div className="p-2 bd-highlight">
                    <a href="https://in.linkedin.com/company/gdsc-iiit-sri-city" target="_blank"><i className="bi bi-linkedin"></i></a>
                </div>
                <div className="p-2 bd-highlight">
                    <a href="#" target="_blank"><i className="bi bi-youtube"></i></a>
                </div>
            </div>
        </div>
        <div className={`container ${classes.content}`}>
            < Content />
        </div>
        <div className={`container ${classes.trailing}`}>
            <div className="row">
                <div className="col-sm-12 col-md-2">
                    <h2>GDCSIIITS</h2>
                </div>
                <div className={`col-md-2 col-sm-12 ${classes.options}`}><a href="#" target="_blank">Code Of Conduct</a></div>
                <div className={`col-md-2 col-sm-12 ${classes.options}`}><a href="#" target="_blank">Terms & Services</a></div>
                <div className={`col-md-4 col-sm-12 ${classes.options}`}><a href="#" target="_blank">Community Guidelines</a></div>
                <div className={`col-md-2 col-sm-12 ${classes.ref}`}>
                    Based on Project
                    <a href="https://github.com/GDSCIIITS/GDSC-Website"> gdsciiits</a>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer;
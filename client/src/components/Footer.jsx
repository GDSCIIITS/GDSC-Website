import React from 'react';
import Content from './content';
import classes from './Footer.module.css'
import gdsciiits from '../assets/gdsciiits.png'

const Footer = () => {
    return <footer>
        <div className={`container ${classes.heading}`}>
            <img src={gdsciiits} alt="gdsciiits" />
        </div>
        <div className={`container ${classes.content}`}>
            < Content />
        </div>
        <div className={`container ${classes.trailing}`}>
            <div className="row">
                <div className={`col-md-9 col-sm-12 ${classes.ref}`}>
                    &copy; <a href="https://github.com/GDSCIIITS/GDSC-Website"> GDSCIIITS</a>, All rights reserved.
                </div>
                <div className={`col-md-3 col-sm-12 ${classes.social_media}`}>
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
            </div>
        </div>
    </footer>
}

export default Footer;
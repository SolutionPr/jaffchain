import React from 'react'
import logo from "../../../assets/images/logo.png";
import social1 from "../../../assets/images/social-1.png";
import social2 from "../../../assets/images/social-2.png";
import social3 from "../../../assets/images/social-3.png";
import social4 from "../../../assets/images/social-4.png";
const Footer = () => {
    return (
        <>
            <section className="header-custom footer-only">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-right">
                                <ul className="ul-social">
                                    <li>
                                        <a className="zoom-effets" target="_blank" href="https://t.me/+Z312UPwGOtRkMTg0">
                                            <img src={social1} alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="zoom-effets"
                                            target="_blank"
                                            href="https://www.instagram.com/jafchain.official"
                                        >
                                            <img src={social2} alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="zoom-effets"
                                            target="_blank"
                                            href="https://www.youtube.com/channel/UCz9e1QFTuez5LvE7TOe0XMA"
                                        >
                                            <img src={social3} alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="zoom-effets" href="JavaScript:void(0)">
                                            <img src={social4} alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="header-flex">
                                <ul>
                                    <li>
                                        <a className="zoom-effets" href="JavaScript:void(0)">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a className="zoom-effets" href="JavaScript:void(0)">
                                            COMMUNITY
                                        </a>
                                    </li>
                                    <li>
                                        <a href="JavaScript:void(0)">
                                            <img src={logo} alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="zoom-effets" href="JavaScript:void(0)">
                                            COMPANY
                                        </a>
                                    </li>
                                    <li>
                                        <a className="zoom-effets" href="JavaScript:void(0)">
                                            LAUNCH APP
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
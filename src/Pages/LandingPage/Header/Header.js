import React from 'react'
import logo from "../../../assets/images/logo.png"
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();

    const homePath = () => {
        navigate("/")
    }
    return (
        <>
            <section className="header-custom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
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
                                        <a className="zoom-effets" onClick={homePath} style={{ cursor: "pointer" }}>
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

export default Header
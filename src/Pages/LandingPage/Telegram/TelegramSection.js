import React from 'react'
import icImage from "../../../assets/images/ic.png";

const TelegramSection = () => {
    return (
        <>
            <section className="join-community">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="join-card">
                                <img src={icImage} className="ic-img" alt="" />
                                <div className="join-card-margin">
                                    <p className="join-card-p">
                                        <span>JOIN</span> OUR <br />
                                        COMMUNITY
                                    </p>
                                    <p className="join-card-p1">
                                        Our Telegram is the best place to be for all news, <br />
                                        updates, troubleshooting and to connect with other users.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TelegramSection
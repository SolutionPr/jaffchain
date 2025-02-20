import React from 'react'
import menImage from "../../../assets/images/men.png";
import social1 from "../../../assets/images/social-1.png";
import social2 from "../../../assets/images/social-2.png";
import social3 from "../../../assets/images/social-3.png";
import social4 from "../../../assets/images/social-4.png";
import bannerImage from "../../../assets/images/banner.png";
import jafImage from "../../../assets/images/jaf.png";
import youtubeImg from "../../../assets/images/youtube.png";
import nftImage2 from "../../../assets/images/nft.png";
import year1 from "../../../assets/images/year-1.png";
import year2 from "../../../assets/images/year-2.png";
import year3 from "../../../assets/images/year-3.png";
import coinImage from "../../../assets/images/coin.png";
import choose1 from "../../../assets/images/choose-1.png";
import choose2 from "../../../assets/images/choose-2.png";
import choose3 from "../../../assets/images/choose-3.png";
import step1 from "../../../assets/images/step-1.png";
import step2 from "../../../assets/images/step-2.png";
import step3 from "../../../assets/images/step-3.png";
import Cards from '../../../Common/Components/Cards';
import Button from '../../../Common/Components/Button';
import YoutubeSection from '../../../Common/Components/YoutubeSection';
import { useNavigate } from 'react-router';
const AboutSection = () => {
    const navigate = useNavigate();

    const customText = "10 <br /> YEARS"


    const goHomePage = () => {
        navigate("/")
    }

    return (
        <>
            <section className="top-banner">
                <div className="container">
                    <div className="row padding-top-bottom">
                        <div className="col-lg-7">
                            <div className="banner-left">
                                <p className="plant-p1">
                                    Let’s plant it <br /> on the <b>blockchain!</b>
                                </p>
                                <p className="plant-p2">
                                    JAFCHAIN is the first real asset NFT connecting directly to real<br /> users.

                                </p>
                                <p className="plant-p2">
                                    24000 thousand (24k) Marijuana Trees that the value<br /> they
                                    provide, will go directly to our NFT owners.
                                </p>
                                <p className="plant-p2">
                                    You can check our main company and more here and welcome to
                                    our blockchain platform.
                                </p>

                                {/* <button className="botton-custom zoom-effets">
                                    LAUNCH APP
                                </button> */}
                                {/* <Button text="LAUNCH APP" goHomePage={goHomePage} /> */}
                                <button className="botton-custom zoom-effets" onClick={goHomePage}>
                                    LAUNCH APP
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-right">
                                <div className="banner-img">
                                    <img src={menImage} className="men-img img-fluid" alt="" />
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
                                        <li>follow us</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row step-row">
                        <div className="col-lg-12">
                            <div className="heading-step">
                                <p className="heading-step-p">
                                    💡 It’s three easy steps. And we have a video tutorial to
                                    explain it.
                                </p>
                            </div>
                        </div>

                        <Cards step1={step1} choose1={choose1} text1="CHOOSE YOUR" text2="NFT" />
                        <Cards step1={step2} choose1={choose2} text1="BUY WITH" text2="USDT" />
                        <Cards step1={step3} choose1={choose3} text1="RELAX FOR" text2="10 YEARS" className="custom-div-abs" />


                        <div className="col-lg-12">
                            <div className="start-now">
                                <button className="zoom-effets" onClick={goHomePage}>Start Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="row center-about">
                        <div className="col-lg-8">
                            <div className="about-sec">
                                <p className="about-sec-p1">About</p>
                                <p className="about-sec-p2">
                                    JAFCHAIN is a blockchain company made by JAFGROUP - A
                                    portuguese based company,  that was created by
                                    passionate group of people that love to innovate.
                                </p>
                                <p className="about-sec-p3">Our Mission</p>
                                <p className="about-sec-p2">
                                    We have seen too many investors from all generations
                                    struggling in the extreme rapid world that is investment and
                                    technology. We aim to provide a easy entrace to this world
                                    with respectable companies, assets and products.<br /> We built
                                    JAFCHAIN for those who are eager to finally take a step into
                                    what is new and using traditional and safe assets, that
                                    makes us take less risks and using blockchain to make us
                                    finally enter this world in a easy and 5 minute way.
                                </p>
                                <p className="about-sec-p2">
                                    And last but not least as blockchain lovers we deeply
                                    believe by doing this we will make the market more
                                    efficient, attrack new users and therby help with the
                                    adoption of this world changing technology.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="about-sec-right">
                                <img src={jafImage} className="jaf-img img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* <div className="row youtube-row">
                        <div className="col-lg-12">
                            <div className="you-tube-vider">
                                <img
                                    src={bannerImage}
                                    alt=""
                                    className="img-fluid banner-img-full"
                                />
                                <div className="abs-youtube">
                                    <img src={youtubeImg} className="you-img" alt="" />
                                    <p className="abs-youtube-p">JAFCHAIN TRAILER</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <YoutubeSection />
                    <div className="row center-about">
                        <div className="col-lg-8">
                            <div className="about-sec">
                                <p className="about-sec-p1">JAF PLANT NFTS</p>
                                <p className="about-sec-p2">
                                    A new way of having a real asset using NFTs to guarantee
                                    your ownership.
                                </p>
                                <p className="about-sec-p3">Goal</p>
                                <p className="about-sec-p2">
                                    Using 24k cannabis plants and tokenize it with NFTs
                                    providing users its value for 10years. We plan to distribute
                                    value every crop and will list all details in our blockchain
                                    app.{" "}
                                </p>
                                <p className="about-sec-p2">
                                    Our phase 1 consists of this collection, then, we will start
                                    phase 2, tokenizing all of our solar panels.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="about-sec-right nft-abs">
                                <img src={nftImage2} className="jaf-img img-fluid" alt="" />
                                <div className="choose-div">
                                    <p className="Choose-p1">
                                        Choose <br /> Your
                                    </p>
                                    <p className="Choose-p2">NFT</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row nft-year">
                        <div className="col-lg-4 col-md-4">
                            <div className="common-4k">
                                <img src={year1} alt="" />
                                <div className="common-4k-flex">
                                    <p className="common-4k-p1">24k</p>
                                    <p className="common-4k-p2">Total NFTS</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="common-4k">
                                <img src={year2} alt="" />
                                <div className="common-4k-flex">
                                    <p className="common-4k-p1">10years</p>
                                    <p className="common-4k-p2">Passive <br />Income</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="common-4k">
                                <img src={year3} alt="" />
                                <div className="common-4k-flex">
                                    <p className="common-4k-p1">NFT</p>
                                    <p className="common-4k-p2">Yours <br />Forever</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row coin-div">
                        <div className="col-lg-5">
                            <div className="about-sec-right">
                                <img src={coinImage} className="jaf-img img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about-sec">
                                <p className="about-sec-p1">JAFCOIN</p>
                                <p className="about-sec-p2">
                                    Our token using binance smart chain to provide ease of use
                                    and<br /> low transaction fees.
                                </p>
                                <p className="about-sec-p3">Goal</p>
                                <p className="about-sec-p2">
                                    JAFCOIN is to be used in all of tokenized products, such as<br />
                                    JAFPLANT NFTs and JAFSOLAR NFTs and more. We have a big
                                    roadmap<br /> up ahead and are growing with ideas and products to
                                    be used.
                                </p>
                                <p className="about-sec-p2">
                                    Our token will be available at exchanges to be traded for
                                    USDT <br />with our first liquidity coming from our NFT sales.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection
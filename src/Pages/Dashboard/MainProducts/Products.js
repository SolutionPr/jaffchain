import React, { useEffect } from 'react'
import choose1 from "../../../assets/images/choose-1.png";
import choose2 from "../../../assets/images/choose-2.png";
import choose3 from "../../../assets/images/choose-3.png";
import step1 from "../../../assets/images/step-1.png";
import step2 from "../../../assets/images/step-2.png";
import step3 from "../../../assets/images/step-3.png";
import "../../../Styles/Dashboard.css"
import Cards from '../../../Common/Components/Cards'
import YoutubeSection from '../../../Common/Components/YoutubeSection'
import DashboardHeader from '../DashboardHeader/DashboardHeader'
import PlantSection from '../PlantSection/PlantSection'
import InformationSection from '../Information/InformationSection'
import Transactions from '../../../Common/Components/Transactions/Transactions'

const Products = ({ activeIndex }) => {

    useEffect(() => {
        document.body.classList.remove('open-sidebar');
        setTimeout(() => {
            if (activeIndex) {
                document.body.classList.add('open-sidebar');
            }
        }, 250);
    }, [activeIndex]);

    return (
        <>
            <div className='all-das-background'>


                <DashboardHeader />
                <PlantSection />

                <section className='step-card-dasboard'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='content-spep-easy'>
                                    <p className='content-spep-easy-p'>Three easy steps to start with us 💡</p>
                                </div>
                            </div>
                        </div>
                        <div className="row step-row only-dasboard-card-space">
                            <Cards step1={step1} choose1={choose1} text1="CHOOSE YOUR" text2="NFT" />
                            <Cards step1={step2} choose1={choose2} text1="BUY WITH" text2="USDT" />
                            <Cards step1={step3} choose1={choose3} text1="RELAX FOR" text2="10 YEARS" className="custom-div-abs" />
                        </div>
                    </div>
                </section>


                <InformationSection />

                <section className='video-dasboard'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='content-spep-easy'>
                                    <p className='content-spep-easy-p'>Check our video 📺</p>
                                </div>
                            </div>
                        </div>
                        <div className="row step-row only-dasboard-video">
                            <YoutubeSection />
                        </div>
                    </div>
                </section>

                {/* <section className='product-page'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='width-product'>
                                    <ul className='product-ul-all'>
                                        <li><a href=''><img src={product1} /></a></li>
                                        <li><a href=''><img src={product2} /></a></li>
                                    </ul>
                                </div>
                                <div className='width-product'>
                                    <ul className='product-ul-all'>
                                        <li><a href=''><img src={product3} /></a></li>
                                    </ul>
                                </div>
                                <div className='width-product'>
                                    <ul className='product-ul-all'>
                                        <li><a href=''><img src={product4} /></a></li>
                                    </ul>
                                </div>
                                <div className='width-product'>
                                    <ul className='product-ul-all'>
                                        <li><a href=''><img src={product5} /></a></li>
                                        <li><a href=''><img src={product6} /></a></li>
                                        <li><a href=''><img src={product7} /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <Transactions />
            </div>
        </>)
}

export default Products
import React from 'react'
import step4 from "../../../assets/images/das-7.png";
import step5 from "../../../assets/images/das-8.png";
const InformationSection = () => {

    return (
        <>
            <section className='plate-top'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='content-spep-easy'>
                                <p className='content-spep-easy-p'>Information 📖</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='plate-top-common'>
                                <div className='Cong-flex'>
                                    <p className='Cong'>Congratulations!</p>
                                    <p className='Cong1'>0 PLANTS</p>
                                    <p className='Cong2'>You have adquired 0 JAFplants and are now earning for 10 years.</p>
                                </div>
                                <div className='Cong-flex'>
                                    <img src={step4} />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='plate-top-common background-only-90'>
                                <div className='Cong-flex'>
                                    <p className='Cong'>Check our</p>
                                    <p className='Cong1'>Tutorials</p>
                                    <p className='Cong2'>Having doubts? Check our tutorial section for more videos.</p>
                                </div>
                                <div className='Cong-flex this-m12'>
                                    <img src={step5} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InformationSection
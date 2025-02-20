import React from 'react'

const Cards = ({ step1, choose1, text1, text2, className }) => {
    return (
        <>
            <div className="col-lg-4 col-md-4">
                <div className="common-step">
                    <div className="white-squre">
                        <p className="step-p1">Step</p>
                        <p className="step-p2">
                            <img src={step1} className="step-img" alt="" />
                        </p>
                    </div>
                    <div className="right-img-content">
                        <img src={choose1} className="choose-img" alt="" />
                        <div className={`position-tp  ${className}`}>
                            <p className="pera-1">{text1}</p>
                            <p className="pera-2" >{text2}</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
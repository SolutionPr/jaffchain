import React from "react";
import youtubeImg from "../../assets/images/youtube.png";
import bannerImage from "../../assets/images/you-tube-new.png";


const YoutubeSection = () =>{
    return(
        <>
        <div className="row youtube-row">
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
                    </div>
        </>
    )
}

export default YoutubeSection
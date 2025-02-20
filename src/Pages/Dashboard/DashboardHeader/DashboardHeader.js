import React from 'react'
import logo_das from "../../../assets/images/logo.png"

const DashboardHeader = () => {
    return (
        <>

            <section className='top-header-das'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='flex-das'>
                                <p className='flex-das-p col-white'>Connecting real assets to real users</p>
                                <img className='logoright' src={logo_das} alt='logo_das' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DashboardHeader
import React, { useState, useEffect } from 'react'
import logo_das from "../../assets/images/logo.png"
import logo_das1 from "../../assets/images/jaf12.png"
import step7 from "../../assets/images/das-11.png"
import step6 from "../../assets/images/das-10.png";
import ModalComponent from '../../Common/Components/Modal/ModalComponent';
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactionsByAddress } from '../../Utilities/Redux/Slices/Transactions/GetTransactions';
import Transactions from '../../Common/Components/Transactions/Transactions';

const JaffTree = () => {
    const [showModal, setShowModal] = useState(false);

    const handleItemClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };


    // const { address } = useAccount();
    // const { disconnect } = useDisconnect();
    // const { data: ensName } = useEnsName({ address });
    // const dispatch = useDispatch();
    // console.log(address, "fsfsdf");
    // useEffect(() => {
    //     dispatch(fetchTransactionsByAddress(address && address));
    // }, [address])
    return (
        <>

            {/* <ModalComponent showModal={showModal} handleCloseModal={handleCloseModal} /> */}
            <div className='all-das-background'>
                <section className='top-header-das'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='flex-das'>
                                    <p className='flex-das-p col-white'>Connecting real assets to real users</p>
                                    <img className='logoright' src={logo_das} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='buy-now-card'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='buy-now-comon'>
                                    <ul>
                                        <li onClick={handleItemClick}><img src={logo_das1} className='logo_das1' alt='logo-img' /></li>
                                        <li onClick={handleItemClick}><img src={logo_das1} className='logo_das1' alt='logo-img' /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='step-card-dasboard Dashboard-information-only'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='content-spep-easy'>
                                    <p className='content-spep-easy-p'>Dashboard information 💡</p>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <div className='Dashboard-information-common'>
                                    <p className='J6505-p'>JAF PLANT <br /> Total Sales</p>
                                    <p className='J6505-p1'>0</p>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className='Dashboard-information-common'>
                                    <p className='J6505-p'>Next Reward <br /> phase</p>
                                    <p className='J6505-p2'>Once the NFT sale is over, we will show our timer for each reward distribution phase.</p>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className='Dashboard-information-common'>
                                    <p className='J6505-p'>Tier Level</p>
                                    <p className='J6505-p2'>Once you start having activity, your tier level will be shown here.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='jaf-plain'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='common-jaf-plain'>
                                    <div className='common-jaf-left'>
                                        <p className='jaf-plain-p1'>JAF PLANT <br /> Total Bought</p>
                                        <p className='jaf-plain-p2'>Your total NFTs from the JAF PLANT collection NFTs from JAFCHAIN.</p>
                                    </div>
                                    <div className='common-jaf-right'>
                                        <p className='jaf-plain-p3'>0  <br /> NFTS</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='common-jaf-plain'>
                                    <div className='common-jaf-left'>
                                        <p className='jaf-plain-p1'>JAF PLANT <br /> Total Rewards</p>
                                        <p className='jaf-plain-p2'>Your total NFTs from the JAF PLANT collection NFTs from JAFCHAIN.</p>
                                    </div>
                                    <div className='common-jaf-right'>
                                        <p className='jaf-plain-p3'>0  <br /> USDT</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Transactions />
            </div>
        </>
    )
}

export default JaffTree
import React, { useEffect, useState } from 'react'
import logo_das1 from "../../../assets/images/das-1.png"
import logo_das2 from "../../../assets/images/das-2.png"
import logo_das3 from "../../../assets/images/das-3.png"
import logo_das4 from "../../../assets/images/das-4.png"
import logo_das5 from "../../../assets/images/das-5.png"
import Button from '../../../Common/Components/Button'
import { useAccount, useDisconnect, useEnsName } from 'wagmi'
import { approveAbi, contractAddress, jafAbi, jafcontractAddress } from '../../../Common/Constant/common'
import { useReadContract } from 'wagmi'
import Web3 from 'web3';
import { useDispatch, useSelector } from 'react-redux'
import ModalComponent from '../../../Common/Components/Modal/ModalComponent';
import { fetchBalance } from '../../../Utilities/Redux/Slices/GetBalance/GetBalance'

const PlantSection = () => {
    const { address, chainId } = useAccount();
    const { disconnect } = useDisconnect();
    const { data: ensName } = useEnsName({ address });

    // const [balance, setBalance] = useState(0);
    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);
    const { Jafbalance } = useSelector(state => state?.balancedata);


    const handleItemClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        console.log(address, "addresseee");
        dispatch(fetchBalance(address))
    }, [address])

    const ContractAddress = contractAddress;
    const ABI = jafAbi;
    const [bnbBalance, setBNBBalance] = useState(null);
    const [testBNBBalance, setTestBNBBalance] = useState(null);

    // useEffect(() => {
    //     const fetchBalance = async () => {
    //         try {
    //             const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');

    //             const contract = new web3.eth.Contract(approveAbi, contractAddress);

    //             if (web3.utils.isAddress(address)) {
    //                 const balanceInWei = await contract.methods.balanceOf(address).call();
    //                 const balanceInEther = web3.utils.fromWei(balanceInWei, 'ether');
    //                 console.log(balanceInEther, 'balanceInEtherbalanceInEther')
    //                 // const formattedBalance = parseFloat(balanceInEther.replace('n', ''));
    //                 // setBalance(formattedBalance);

    //             } else {
    //                 console.error('Invalid address:', address);
    //             }
    //         } catch (error) {
    //             console.error('Error fetching balance:', error);
    //         }
    //     };

    //     fetchBalance();
    // }, [address, contractAddress, approveAbi]);





    return (
        <>

            <>
                {/* <ModalComponent showModal={showModal} handleCloseModal={handleCloseModal} /> */}
                <section className='flex-height'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='flex-height-left'>
                                    <ul className='flex-height-left-ul'>
                                        <li>
                                            <p className='jaf-p1'>JAF PLANT <br /> NFT sale!</p>
                                            <p className='jaf-p12'>Your favourite <br /> marijuana plant</p>
                                            <Button text="Start Now" />

                                        </li>
                                        <li>
                                            <img className='logoright-img' src={logo_das1} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='flex-height-right'>
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <div className='flex-height-right-main'>
                                                <ul className='right-fix-45'>
                                                    <li>
                                                        <img className='logoright-img2' src={logo_das2} />
                                                    </li>
                                                    <li>
                                                        <div className='right-00'>
                                                            <div className='card-36' onClick={handleItemClick}>
                                                                <img className='logoright-img3' src={logo_das3} />
                                                                <div className='right-lr' >
                                                                    <p className='right-lr-p'>YOUR JAF</p>
                                                                    {Jafbalance?.body && (
                                                                        <p className='right-lr-p1'>{Jafbalance?.body?.Balance} JAFS</p>
                                                                    )}

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className='much-p'>Here you can check how much JAFCoin you have in your wallet.</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='col-lg-12'>
                                            <div className='flex-height-right-main only-14'>
                                                <ul className='right-fix-45'>
                                                    <li>
                                                        <img className='logoright-img4' src={logo_das4} />
                                                    </li>
                                                    <li>
                                                        <div className='right-00'>
                                                            <div className='card-36'>
                                                                <img className='logoright-img5' src={logo_das5} />
                                                                <div className='right-lr'>
                                                                    <p className='right-lr-p'>REWARDS</p>
                                                                    <p className='right-lr-p1'>0 JAFS</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className='much-p'>Here you can check how many JAFCoins you will receive from your NFTS.</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        </>
    )
}

export default PlantSection;

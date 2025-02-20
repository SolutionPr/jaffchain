
import React, { useState, useEffect } from 'react';
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi';
import { useDispatch } from 'react-redux';
import { loginAsync } from '../../../Utilities/Redux/Slices/Auth/AuthSlice';
import { fetchTransactionsByAddress } from '../../../Utilities/Redux/Slices/Transactions/GetTransactions';
import { ConnectButton } from '@rainbow-me/rainbowkit';

import side11 from '../../../assets/images/right-icon-1.png';
import side12 from '../../../assets/images/right-icon-2.png';
import side13 from '../../../assets/images/s1.png';
import side14 from '../../../assets/images/s2.png';
import side15 from '../../../assets/images/s3.png';
import side16 from '../../../assets/images/s4.png';
import side125 from '../../../assets/images/33.png';
import mob from '../../../assets/images/mob.png';
import { Modal, Button } from 'react-bootstrap';
import swal from 'sweetalert';


const RightBar = () => {
    const { address, chainId } = useAccount(); // Get connected account and chainId
    const { disconnect } = useDisconnect();
    const { data: ensName } = useEnsName({ address });
    const { data: ensAvatar } = useEnsAvatar({ name: ensName });
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false);
    const [walletConnected, setWalletConnected] = useState(false)

    useEffect(() => {
        if (address) {
            // dispatch(loginAsync(address));
            // dispatch(fetchTransactionsByAddress(address));
            // setWalletConnected(true)
        }
    }, [address]);

    const openConnectModal = () => {
        setOpenModal(true);
    };

    // Check if the connected chain is Binance Smart Chain (Chain ID: 56)
    const isBinanceSmartChain = chainId === 56 || chainId === 97;



    useEffect(() => {
        if (address && !localStorage.getItem("showpopup")) {
            dispatch(loginAsync(address));
            dispatch(fetchTransactionsByAddress({ address }));
            swal("Wallet Connected!", `${address} has been connected`, "success")
            localStorage.setItem("showpopup", true);
        } else if (!address) {
            localStorage.removeItem("showpopup")
        }
    }, [address])

    return (
        <>
            <div className='right-side-bar'>
                <div className='under-right'>
                    <ul className='right-ul-1'>
                        <li>
                            <a href='#' onClick={openConnectModal}>
                                {address !== "" && address !== undefined ? <img className='img-LOGOUT' src={side12} alt='icon' /> : <img className='img-LOGOUT' src={side11} alt='icon' />}
                                <span>{address !== "" && address !== undefined ? "DISCONNECT" : "CONNECT"}</span>
                            </a>
                            <div className='disbtn'>
                                {/* Render ConnectButton only if connected to Binance Smart Chain */}
                                {openModal && (
                                    <ConnectButton
                                        chainStatus="none"
                                        accountStatus={{ smallScreen: false, largeScreen: false }}
                                        showBalance={{ smallScreen: false, largeScreen: false, }}
                                    />
                                )}


                            </div>
                        </li>
                    </ul>

                    <ul className='right-ul-2'>
                        <li>
                            <a target='_blank' href='https://www.instagram.com/jafchain.official'>
                                <img className='img-in' src={side13} alt='icon' />
                            </a>
                        </li>
                        <li>
                            <a target='_blank' href='https://t.me/+Z312UPwGOtRkMTg0'>
                                <img className='img-in' src={side14} alt='icon' />
                            </a>
                        </li>
                        <li>
                            <a target='_blank' href='https://www.youtube.com/channel/UCz9e1QFTuez5LvE7TOe0XMA'>
                                <img className='img-in' src={side15} alt='icon' />
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <img className='img-in' src={side16} alt='icon' />
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
            {/* {walletConnected && (
                swal("Wallet Connected!", `${address} has been connected`, "success")
            )} */}
        </>
    );
};

export default RightBar;

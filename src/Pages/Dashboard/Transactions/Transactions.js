import React, { useEffect } from 'react'
import step6 from "../../../assets/images/das-10.png";
import step7 from "../../../assets/images/das-11.png";
import { fetchTransactionsByAddress } from '../../../Utilities/Redux/Slices/Transactions/GetTransactions';
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi';
import { useDispatch, useSelector } from 'react-redux';
const Transactions = () => {
    // const { address } = useAccount();
    // const { disconnect } = useDisconnect();
    // const { data: ensName } = useEnsName({ address });
    // const dispatch = useDispatch();
    // console.log(address, "addressaddress");
    // useEffect(() => {
    //     dispatch(fetchTransactionsByAddress(address));
    // }, [])
    return (
        <>
            <section className='Transactions-top'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='Transactions'>
                                <div className='Transactions-content'>
                                    <p className='Transactions-p1'>Transactions</p>
                                    <p className='Transactions-p2'>These are the last transactions of wallet, directly from blockchain.</p>
                                </div>
                                <div className='Transactions-table'>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Ammount</th>
                                                <th>Description</th>
                                                <th>Date</th>
                                            </tr>
                                        </thead>
                                        {/* <tbody>
                                            <tr>
                                                <td>
                                                    <div className='flex-table-sec'>
                                                        <img src={step6} className='JAFTREE-img' alt='step6' />
                                                        <div className='flex-table-under'>
                                                            <p className='under-flex-p'>JAFTREE</p>
                                                            <p className='under-flex-p1'>NFT</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>1000 USDT</td>
                                                <td><div className='flex-table-sec-1'> <img src={step7} className='JAFTREE-img1' alt='step6' />Purchase</div></td>
                                                <td><a href='' className='table-a'>2020-09-25 00:00:00</a></td>
                                            </tr>
                                        </tbody> */}
                                    </table>
                                    <div className='transaction'>
                                        <p>
                                        No transactions
                                        </p>
                                    </div>
                                </div>
                                <div className='LoadMore-button-div'>
                                    <button className='LoadMoreBt'>Load More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Transactions
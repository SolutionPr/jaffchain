

import React, { useState, useEffect } from 'react';
import step6 from "../../../assets/images/das-10.png";
import step7 from "../../../assets/images/das-11.png";
import { fetchTransactionsByAddress } from '../../../Utilities/Redux/Slices/Transactions/GetTransactions';
import { useDispatch, useSelector } from 'react-redux';
import { useAccount, useDisconnect, useEnsName } from 'wagmi';

const Transactions = () => {
    const { address } = useAccount();
    const { disconnect } = useDisconnect();
    const { data: ensName } = useEnsName({ address });
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTransactionsByAddress({ address }));
    }, [address])

    const [displayedTransactions, setDisplayedTransactions] = useState(5);

    const tokendata = useSelector((state) => state?.transactions);

    useEffect(() => {
        // localStorage.setItem("address", address)

        dispatch(fetchTransactionsByAddress({ address }));
    }, [address]);

    const handleLoadMore = () => {
        setDisplayedTransactions(prevCount => prevCount + 10);
    };

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
                                                <th>Amount</th>
                                                <th>Description</th>
                                                <th>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tokendata?.transactions?.body && tokendata?.transactions?.body.slice(0, displayedTransactions).map((transaction, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <div className='flex-table-sec'>
                                                            <img src={step6} className='JAFTREE-img' alt='step6' />
                                                            <div className='flex-table-under'>
                                                                <p className='under-flex-p'>JAFTREE</p>
                                                                <p className='under-flex-p1'>NFT</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>{transaction?.amount} USDT</td>
                                                    <td>
                                                        <div className='flex-table-sec-1'>
                                                            <img src={step7} className='JAFTREE-img1' alt='step6' />
                                                            {transaction?.order_type && transaction.order_type.charAt(0).toUpperCase() + transaction.order_type.slice(1)}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href='' className='table-a'>{transaction?.crdate}</a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className='transaction top-h1-50'>
                                        {console.log(tokendata.transactions, "qwert")}
                                        {(!tokendata.transactions || tokendata.transactions.length === 0) && (
                                            <div className='transaction'>
                                                <p className='Transactions-p1 Notransactions'>No Transactions</p>
                                            </div>
                                        )}
                                    </div>


                                </div>
                                <div className='LoadMore-button-div'>
                                    {tokendata?.transactions && tokendata?.transactions?.body && tokendata?.transactions?.body?.length !== 0 && (
                                        <button className='LoadMoreBt' onClick={handleLoadMore}>Load More</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Transactions;

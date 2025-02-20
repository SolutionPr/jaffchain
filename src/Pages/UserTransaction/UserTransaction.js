import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import step7 from "../../assets/images/das-11.png";
import step6 from "../../assets/images/das-10.png";
import btnshadow from "../../assets/images/btnshadow.png";
import RightBar from '../Dashboard/RightBar/RightBar';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTransactionsByAddress } from '../../Utilities/Redux/Slices/Transactions/GetTransactions';
import { useAccount } from 'wagmi';

const UserTransaction = () => {
    const { address } = useAccount();
    const dispatch = useDispatch();
    const [type, setType] = useState('');
    const [days, setDays] = useState('');
    const [month, setMonth] = useState('');
    const [transactions, setTransactions] = useState([]);
    const [showLoadMore, setShowLoadMore] = useState(false);
    const [displayedTransactions, setDisplayedTransactions] = useState(5); // State to keep track of displayed transactions

    const tokendata = useSelector((state) => state?.transactions);


    // useEffect(() => {
    //     dispatch(fetchTransactionsByAddress({ type, days, month, address }));
    // }, [type, days, month]);

    const handleTypeChange = (event) => {
        const selectType = event.target.value;
        setType(selectType === "Type" ? "" : selectType);
    };

    const handleDaysChange = (event) => {
        const selectDays = event.target.value;
        setDays(selectDays === "Days" ? "" : selectDays);
    };

    const handleMonthChange = (event) => {
        // Format the month value properly
        const monthValue = event.target.value.toLowerCase().replace('march', 'mar');
        setMonth(monthValue === "month" ? "" : monthValue);
    };


    const handleLoadMore = () => {
        setDisplayedTransactions(prevCount => prevCount + 10);
    };

    const handleSearch = () => {
        console.log(type, days, month, "type, days, month");
        dispatch(fetchTransactionsByAddress({ type, days, month, address }));
    };


    useEffect(() => {
        if (type !== '' && days !== '' && month !== '') {
            handleSearch();
        }
    }, []);

    return (
        <>
            <div className='all-das-background'>
                <section className='Transactions-top'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='Transactions-content12'>
                                    <p className='Transactions-p113'>Transactions</p>
                                    <p className='Transactions-p231'>These are the last transactions of wallet, directly from blockchain.</p>
                                </div>
                                <div className='custom-tab'>
                                    <Tabs>
                                        <TabList>
                                            <Tab>JAFPLANT</Tab>
                                            <Tab>JAFSOLAR</Tab>
                                        </TabList>
                                        <TabPanel>
                                            <div className='Transactions'>
                                                <div className='trans-cus-flx'>
                                                    <div className='trans-cus-flx-left'>
                                                        <ul>
                                                            <li>
                                                                <select className='select-op' onChange={handleTypeChange}>
                                                                    <option>Type</option>
                                                                    <option>Buy</option>
                                                                    <option>Purchase</option>
                                                                </select>
                                                            </li>
                                                            <li>
                                                                <select className='select-op' onChange={handleDaysChange}>
                                                                    <option>Days</option>
                                                                    <option>Last 6 days</option>
                                                                    <option>Last 30 days</option>
                                                                    <option>Last 90 days</option>
                                                                </select>
                                                            </li>
                                                            <li>
                                                                <select className='select-op' onChange={handleMonthChange}>
                                                                    <option>Month</option>
                                                                    <option>jan 2024</option>
                                                                    <option>feb 2024</option>
                                                                    <option>march 2024</option>
                                                                </select>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className='trans-cus-flx-right'>
                                                        {/* <button onClick={handleSearch}>Search</button> */}
                                                        {/* <div className="col-lg-12 "> */}
                                                        <div className="start-now ">
                                                            <button className="zoom-effets" onClick={handleSearch}>SEARCH</button>
                                                        </div>
                                                        {/* <div>
                                                            <img className='delimg' src={btnshadow} />
                                                        </div> */}
                                                        {/* </div> */}
                                                    </div>


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
                                                    <div className='transaction'>
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
                                        </TabPanel>
                                        <TabPanel>
                                            <div className='Transactions'>
                                                <h1 className='coming'>Coming Soon</h1>
                                            </div>
                                        </TabPanel>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default UserTransaction;

import React from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import RightBar from '../Dashboard/RightBar/RightBar';
const Information = () => {

    return (
        <>
            <div className='all-das-background'>
                <section className='Transactions-top'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='Transactions-content12'>
                                    <p className='Transactions-p113'>General Info</p>
                                    <p className='Transactions-p231'>Resources from JAFCHAIN, platform updates, tutorials and other media kits. </p>

                                </div>
                                <div className='custom-tab'>
                                    <Tabs>
                                        <TabList>
                                            <Tab>News</Tab>
                                            <Tab>Tutorials</Tab>
                                            <Tab>Downloads</Tab>

                                        </TabList>
                                        {/* <TabPanel>
                                            <div className='Transactions'>
                                                <div className='trans-cus-flx'>
                                                    <div className='trans-cus-flx-left'>
                                                        <ul>
                                                            <li>
                                                                <select className='select-op'>
                                                                    <option>Type</option>
                                                                    <option>Type</option>
                                                                    <option>Type</option>
                                                                    <option>Type</option>
                                                                </select>
                                                            </li>
                                                            <li>
                                                                <select className='select-op'>
                                                                    <option>Last 30 days</option>
                                                                    <option>Last 30 days</option>
                                                                    <option>Last 30 days</option>
                                                                    <option>Last 30 days</option>
                                                                </select>
                                                            </li>
                                                            <li>
                                                                <select className='select-op'>
                                                                    <option>2004</option>
                                                                    <option>2004</option>
                                                                    <option>2004</option>
                                                                    <option>2004</option>
                                                                </select>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className='trans-cus-flx-right'>
                                                        <a href=""><img src={lock} /></a>
                                                    </div>
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
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div className='flex-table-sec'>
                                                                        <img src={step6} className='JAFTREE-img' />
                                                                        <div className='flex-table-under'>
                                                                            <p className='under-flex-p'>JAFTREE</p>
                                                                            <p className='under-flex-p1'>NFT</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>1000 USDT</td>
                                                                <td><div className='flex-table-sec-1'> <img src={step7} className='JAFTREE-img1' />Purchase</div></td>
                                                                <td><a href='' className='table-a'>2020-09-25 00:00:00</a></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className='LoadMore-button-div'>
                                                    <button className='LoadMoreBt'>Load More</button>
                                                </div>
                                            </div>
                                        </TabPanel> */}
                                        {/* <TabPanel>
                                            <div className='Transactions'>
                                                <h1 className='coming'>Coming Soon</h1>
                                            </div>
                                        </TabPanel> */}
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Information
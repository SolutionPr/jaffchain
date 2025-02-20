import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getAllNews } from '../../../Utilities/Redux/Slices/News/NewsSlice';

const Jafnews = () => {
    const [loadedNewsCount, setLoadedNewsCount] = useState(5);
    const AllNews = useSelector((state) => state?.news);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllNews(loadedNewsCount))
    }, [])

    const handleLoadMore = () => {
        // Increase the count of loaded news items
        setLoadedNewsCount(prevCount => prevCount + 5);
    };
    return (
        <>
            <div className='all-das-background'>
                <section className='Transactions-top'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='Transactions-content12'>
                                    <p className='Transactions-p113'>Jaf News</p>
                                    <p className='Transactions-p231'>Resources from JAFCHAIN, platform updates, tutorials and other media kits. </p>

                                </div>
                                <div className='custom-tab' style={{ marginTop: "0px" }}>
                                    <Tabs>
                                        {/* <TabList>
                                            <Tab>News</Tab>
                                            <Tab>Tutorials</Tab>
                                            <Tab>Downloads</Tab>

                                        </TabList> */}
                                        <TabPanel>
                                            <div className='Transactions'>
                                                <div className='trans-cus-flx'>
                                                    {/* <div className='trans-cus-flx-left'>
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
                                                    </div> */}
                                                    <div className='trans-cus-flx-right'>
                                                        {/* <a href=""><img src={lock} /></a> */}
                                                    </div>
                                                </div>
                                                <div className='Transactions-table'>
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Title</th>
                                                                <th>Description</th>
                                                                <th>Link</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {AllNews?.allNews?.body?.slice(0, loadedNewsCount).map((newsItem, index) => (
                                                                <tr key={index}>
                                                                    <td>
                                                                        <div className='flex-table-sec'>
                                                                            <div className='flex-table-under'>
                                                                                <p className='under-flex-p'>{newsItem?.title}</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>{newsItem.description}</td>
                                                                    <td>
                                                                        <a target='_blank' href={newsItem?.link} className='table-a'>{newsItem?.link}</a>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                                {loadedNewsCount < AllNews?.allNews?.body?.length && (
                                                    <div className='LoadMore-button-div'>
                                                        <button className='LoadMoreBt' onClick={handleLoadMore}>Load More</button>
                                                    </div>
                                                )}
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
    )
}


export default Jafnews;
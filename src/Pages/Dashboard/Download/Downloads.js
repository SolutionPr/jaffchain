import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { fetchDownloads } from '../../../Utilities/Redux/Slices/Download/DownloadSlice';
import Loader from '../../../Common/Components/Loader/Loader';
// import { fetchTutorials } from '../../../Utilities/Redux/Slices/Tutorial/DownloadSlicee';

const Downloads = () => {
    const dispatch = useDispatch();
    const { downloadData, loading } = useSelector((state) => state.downloaded)

    useEffect(() => {
        dispatch(fetchDownloads())
    }, [])
    return (
        <>
            {loading && <Loader />}
            <div className='all-das-background'>
                <section className='Transactions-top'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='Transactions-content12'>
                                    <p className='Transactions-p113'>Jaf Downloads</p>
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
                                                                <th>Name</th>
                                                                <th>Updates</th>
                                                                <th>Link</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {downloadData?.body?.map((downloadItem, index) => (
                                                                <tr key={index}>
                                                                    <td>
                                                                        {downloadItem?.fileName}
                                                                    </td>
                                                                    <td>{downloadItem?.crdate}</td>
                                                                    <td><a href={downloadItem?.fileURL} className='table-a' download>Downloads</a></td>
                                                                </tr>
                                                            ))}

                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className='LoadMore-button-div'>
                                                    <button className='LoadMoreBt'>Load More</button>
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
    )
}

export default Downloads
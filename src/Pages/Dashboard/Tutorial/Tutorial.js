import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { fetchTutorials } from '../../../Utilities/Redux/Slices/Tutorial/TotorialdSlice';
import Loader from '../../../Common/Components/Loader/Loader';

const Tutorial = () => {
    const dispatch = useDispatch();
    const tutorialdata = useSelector((state) => state.tutorial.tutorials);
    const { tutorials, loading } = useSelector((state) => state.tutorial);

    const [loadedtut, setLoadedtut] = useState(5)
    useEffect(() => {
        dispatch(fetchTutorials(loadedtut))
    }, [])

    const handleLoadMore = () => {
        // Increase the count of loaded news items
        setLoadedtut(prevCount => prevCount + 5);
    };
    return (
        <>
            {loading && <Loader />}
            <div className='all-das-background'>
                <section className='Transactions-top'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='Transactions-content12'>
                                    <p className='Transactions-p113'>Jaf Tutorial</p>
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

                                                    <div className='trans-cus-flx-right'>
                                                        {/* <a href=""><img src={lock} /></a> */}
                                                    </div>
                                                </div>
                                                <div className='Transactions-table'>
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Title</th>
                                                                <th>Name</th>
                                                                <th>Link</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {tutorialdata?.body?.slice(0, loadedtut).map((tutItem, index) => (
                                                                <tr key={index}>
                                                                    <td>
                                                                        {tutItem?.title}
                                                                    </td>
                                                                    <td>{tutItem?.name}</td>
                                                                    {/* <td><div className='flex-table-sec-1'> <img src={step7} className='JAFTREE-img1' />Purchase</div></td> */}
                                                                    <td>
                                                                        <a target='_blank' href={tutItem?.video_url} className='table-a'>{tutItem?.video_url}</a>
                                                                    </td>
                                                                </tr>
                                                            ))}

                                                        </tbody>
                                                    </table>
                                                </div>
                                                {loadedtut < tutorialdata?.body?.length && (
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

export default Tutorial
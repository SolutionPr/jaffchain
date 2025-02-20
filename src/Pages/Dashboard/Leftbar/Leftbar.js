import React, { useRef, useState } from "react";
import logo from "../../../assets/images/logo-das.png";
import side1 from "../../../assets/images/side-unactive-1.png";
import side2 from "../../../assets/images/side-active-1.png";
import side3 from "../../../assets/images/side-unactive-2.png";
import side4 from "../../../assets/images/side-active-2.png";
import side5 from "../../../assets/images/side-unactive-3.png";
import side6 from "../../../assets/images/side-active-3.png";
import side7 from "../../../assets/images/side-unactive-4.png";
import side8 from "../../../assets/images/side-active-4.png";
import side9 from "../../../assets/images/side-unactive-5.png";
import side10 from "../../../assets/images/side-active-5.png";
import product1 from "../../../assets/images/product-1.png";
import product2 from "../../../assets/images/product-2.png";
import product3 from "../../../assets/images/product-3.png";
import product4 from "../../../assets/images/product-4.png";
import product5 from "../../../assets/images/product-5.png";
import product6 from "../../../assets/images/product-6.png";
import product7 from "../../../assets/images/product-7.png";
import fix1 from "../../../assets/images/logo.png";
import fix2 from "../../../assets/images/tog.png";
import fix3 from "../../../assets/images/tog-1.png";
import side125 from '../../../assets/images/33.png';
import mob from '../../../assets/images/mob.png';


import side11 from '../../../assets/images/right-icon-1.png';
import side12 from '../../../assets/images/right-icon-2.png';
import side13 from '../../../assets/images/s1.png';
import side14 from '../../../assets/images/s2.png';
import side15 from '../../../assets/images/s3.png';
import side16 from '../../../assets/images/s4.png';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi';
import { useDispatch } from 'react-redux';
import { loginAsync } from '../../../Utilities/Redux/Slices/Auth/AuthSlice';




import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { fetchTransactionsByAddress } from '../../../Utilities/Redux/Slices/Transactions/GetTransactions';


const Leftbar = ({ children }) => {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName });

  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(localStorage.getItem('activeIndex') || "home"); // State to track active index
  const [activeMenuData, setActiveMenuData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [togg, setTogg] = useState(false);
  const navigate = useNavigate();
  const location = useLocation()
  const isMounted = useRef(false);

  useEffect(() => {
    if (address) {
      dispatch(loginAsync(address));
      dispatch(fetchTransactionsByAddress({ address }));

    }
  }, [address]);


  const handleItemClick = (clickedTo, e) => {
    e.preventDefault();
    if (activeIndex === clickedTo) {
      setActiveIndex(null);
      setToggle(false);
    } else {
      if (clickedTo === "home") {
        navigate("/");
        setActiveIndex("home")
        return;
      }

      setActiveIndex(clickedTo);
      if (clickedTo === "star") {
        setActiveMenuData([
          {
            title: "JAFTrees",
            description: "Plant it on the blockchain!",
            images: [product1],
            path: "/jafftree",
            clickedToItem: "star"
          },
          {
            title: "JAFSolar",
            description: "Coming soon!",
            images: [product2],
            path: "/jafftree",
            clickedToItem: "star"
          },
        ]);
      } else if (clickedTo === "text") {
        setActiveMenuData([
          {
            title: "TRANSACTIONS",
            description: "Check your reports.",
            images: [product3],
            path: "/transactions",
            clickedToItem: "text"
          },
        ]);
      } else if (clickedTo === "wallet") {
        setActiveMenuData([
          {
            title: "NFTS",
            description: "Your wallet identifies which nfts you have.",
            images: [product4],
            path: "/information",
            clickedToItem: "wallet"
          },
        ]);
      } else if (clickedTo === "setting") {
        setActiveMenuData([
          {
            title: "JAFNews",
            description: "JAFChain NEWS.",
            images: [product6],
            path: "/jafnews",
            clickedToItem: "setting"
          },
          {
            title: "TUTORIALS",
            description: "Learn how to do it.",
            images: [product5],
            // path: "https://www.youtube.com/channel/UCz9e1QFTuez5LvE7TOe0XMA",
            path: "/tutorial",

            clickedToItem: "setting"
          },
          {
            title: "DOWNLOADS",
            description: "Keep your info updated.",
            images: [product7],
            path: "/download",
            clickedToItem: "setting"
          },
        ]);
      }
      setToggle(true);
    }
  };


  // useEffect(() => {
  //   document.body.classList.remove("open-sidebar");
  //   localStorage.setItem('activeIndex', activeIndex);
  //   setTimeout(() => {
  //     if (activeIndex && activeIndex !== "home") {
  //       document.body.classList.add("open-sidebar");
  //     }
  //   }, 250);
  // }, [activeIndex]);

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem('activeIndex', activeIndex);
      document.body.classList.remove("open-sidebar");
      if (activeIndex && activeIndex !== "home") {
        document.body.classList.add("open-sidebar");
      }
    } else {
      isMounted.current = true;
    }
  }, [activeIndex]);

  useEffect(() => {
    const toggleBodyClass = () => {
      if (togg) {
        document.body.classList.add("openToggle");
      } else {
        document.body.classList.remove("openToggle");
        document.body.classList.remove("open-sidebar")
      }
    };
    toggleBodyClass();
  }, [togg]);



  const goHomePage = () => {
    navigate("/")
    setActiveIndex("")
  }

  // activeIndex gets reset to home ,
  // const handleNavigate = (path, clickedToItem) => {
  //   if (path) {
  //     navigate(path);
  //     setTogg(false);
  //     setActiveIndex(clickedToItem);
  //     document.body.classList.remove("openToggle");
  //     document.body.classList.remove("open-sidebar")
  //   }
  // }


  const handleNavigate = (item) => {
    if (item.path) {
      navigate(item.path);
      setTogg(false);
      setActiveIndex(item.clickedToItem);
      document.body.classList.remove("openToggle");
      document.body.classList.remove("open-sidebar")
    }
  }

  const openConnectModal = () => {
    setOpenModal(true);
  };

  return (
    <>
      <div className="dextop-none-div top-header-mobile-fix" >
        <div className="top-header-mobile-fix-left">
          <img className="mob-logo" src={mob} />
        </div>
        <div className="top-header-mobile-fix-right" onClick={openConnectModal}>
          <p>{address !== "" && address !== undefined ? "DISCONNECT " : "CONNECT "}</p>
          <img className="side125-logo" src={side125} />
          <div className="small-screen-connect">
            <ConnectButton
              chainStatus="none"
              accountStatus={{ smallScreen: false, largeScreen: false }}
              showBalance={{ smallScreen: false, largeScreen: false, }}
            />
          </div>
        </div>
      </div>

      <div className="left-bar">
        <div className="logo-img">


          <img src={logo} className="logo-das" onClick={goHomePage} style={{ cursor: "pointer" }} />
          <ul className="side-left-ul">
            <li>
              <a

                className={activeIndex === "home" ? "active" : ""}
                onClick={(e) => handleItemClick("home", e)}
              >
                <img className="img-unactive" src={side1} />
                <img className="img-active" src={side2} />
              </a>
            </li>
            <li>
              <a

                className={activeIndex === "star" ? "active" : ""}
                onClick={(e) => handleItemClick("star", e)}
              >
                <img className="img-unactive" src={side3} />
                <img className="img-active" src={side4} />
              </a>
            </li>
            <li>
              <a

                className={activeIndex === "text" ? "active" : ""}
                onClick={(e) => handleItemClick("text", e)}
              >
                <img className="img-unactive" src={side5} />
                <img className="img-active" src={side6} />
              </a>
            </li>
            <li>
              <a
                className={activeIndex === "wallet" ? "active" : ""}
                onClick={(e) => handleItemClick("wallet", e)}
              >
                <img className="img-unactive" src={side7} />
                <img className="img-active" src={side8} />
              </a>
            </li>
            <li>
              <a
                className={activeIndex === "setting" ? "active" : ""}
                onClick={(e) => handleItemClick("setting", e)}
              >
                <img className="img-unactive" src={side9} />
                <img className="img-active" src={side10} />
              </a>
            </li>
          </ul>

          <div className='under-right dextop-none-div'>
            <ul className='right-ul-1'>
              <li>
                {/* <a href='#' onClick={openConnectModal}> */}
                <a href='#' >
                  <img className='img-LOGOUT' src={side11} alt='icon' />
                  <span >CONNECT</span>
                </a>
                {/* {openModal && <ConnectButton chainStatus="none" accountStatus={{ smallScreen: false, largeScreen: false }} showBalance={{ smallScreen: false, largeScreen: false, }} />} */}

                {/* {openModal && <ConnectButton />} */}

              </li>
              <li>
                <a href='#'>
                  <img className='img-LOGOUT' src={side12} alt='icon' />
                  <span>LOGOUT</span>
                </a>
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
                <a
                  target='_blank'
                  href='https://www.youtube.com/channel/UCz9e1QFTuez5LvE7TOe0XMA'>
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
      </div>

      <div className="fix-side-open">
        <div className={`width-product ${toggle ? "show" : ""}`}>
          <ul className="product-ul-all">
            {activeMenuData?.map((item, index) => {
              return (
                <li key={index} onClick={() => handleNavigate(item)} style={{ cursor: "pointer" }}>
                  {item?.images?.map((src, srcIndx) => (
                    <img src={src} key={srcIndx} />
                  ))}
                  <div className="prod-space">
                    <p className="prod-space-p1">{item?.title}</p>
                    <p className="prod-space-p2">{item?.description}</p>

                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Leftbar;

import './layoutlog.css'

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Login from "../Login";
import Register from "../SignUp/Register";
import DataPage from '../Data/Data';
import BuyCoin from '../Data/BuyCoin/BuyCoin';
import CreateDeposit from '../Data/CreateDeposit/Create';
import DepositDetail from '../Data/DepositDetail/DepositDetail';
import Deposit from '../Data/Deposit/Deposit';

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';


export default function LayoutLog() {
    const navigate = useNavigate();
    const userlogined = useSelector(state => state.userlogined);
  
    useEffect(() => {
      if (!userlogined.username) {
        navigate("/login");
      }
    }, [userlogined, navigate]);
    return (
        <div className="layout-log">
            <div className="layout-header">
                <Header></Header>
            </div>
            <div className="layout-main">
                {/* <div className='row'> */}
                    {/* <div className='col-md-3'></div> */}
                    {/* <div className='col-w-100'> */}
                        <Routes>
                            <Route path="/" element={<Login />}></Route>
                            <Route path="/sign-up" element={<Register />}></Route>
                            <Route path="/data" element={<DataPage/>}></Route>
                            <Route path={`/data/:coinId`} element={<BuyCoin/>}></Route>
                            <Route path='/profile/deposit' element={<Deposit/>}></Route>
                            <Route path={`/profile/deposit/create`} element={<CreateDeposit/>}></Route>
                            <Route path={`/profile/deposit/detail` } element={<DepositDetail/>}></Route>
                        </Routes>
                    {/* </div> */}
                    {/* <div className='col-md-3'></div> */}
                {/* </div> */}
            </div>
            <div className="layout-footer">
                <Footer></Footer>
            </div>
        </div>
    )
}
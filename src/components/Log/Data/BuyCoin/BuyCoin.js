import './buycoin.css'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


export default function BuyCoin() {

    const detailcoin = useSelector(state => state.detailcoin);
    const detailimgcoin = useSelector(state => state.imgcoin);

    return (
        <div className='buy-coin'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h3>Buy Coin</h3>
                    </div>
                    <div className='col-w-100'></div>
                    <div className='col-lg-6 container-coin-1'>
                        <div className='container-coin'>
                            <img src={detailimgcoin.url} alt="logo-coin"></img>
                            <div className='info-coin'>
                                <span className='name-data-coin'>Coin Symbol: </span> <span className='data-coin-value-1'>{detailcoin.symbol}</span>
                            </div>
                            <hr className='hr-coin'></hr>
                            <div className='info-coin-2'>
                                <span className='name-data-coin'>Coin Full Name: </span> <span className='data-coin-value-2'>{detailcoin.name}</span>
                            </div>
                            <hr className='hr-coin'></hr>
                            <div className='info-coin-2'>
                                <span className='name-data-coin'>Coin Price: </span> <span className='data-coin-value-3'>{detailcoin.priceUsd}</span>
                            </div>
                            <hr className='hr-coin-1'></hr>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        You Dont have enough USDT
                        <Link to={'/login/profile/deposit/create'}><a className='btn-clickme' href='#a'> Click Here </a> </Link>
                        Click Here To Make Deposit
                    </div>
                </div>
            </div>
        </div>
    )
}
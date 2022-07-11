import './data.css';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getDetailDataCoin } from '../../../redux/action';
import { Link } from 'react-router-dom';


export default function DataPage() {

    const dbCoins = useSelector(state => state.datacoin);
    const imageCoins = useSelector(state => state.imagecoin);
    const dispatch = useDispatch();

    const formatNumber = (num, n) => {
        let base = 10 ** n;
        let result = Math.round(num * base) / base;
        return result;
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });
    
    const handleBuy = (e) =>{
        dispatch(getDetailDataCoin(e.target.id));
    }


    return (
        <div className='data-coin'>
            <div></div>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h3>MARKET TREND</h3>
                    </div>
                    <div className='col-w-100'></div>
                    <div className='col-w-100'>
                        <table className='table table-hover'>
                            <thead>
                                <tr>
                                    <th scope="col">Rank</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Market Cap</th>
                                    <th scope="col">VWAP(24Hr)</th>
                                    <th scope="col">Supply</th>
                                    <th scope="col">Volume(24Hr)</th>
                                    <th scope="col">Change(24Hr)</th>
                                    <th scope='col'>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {/* use redux */}
                                {dbCoins.map((dbCoin) => (
                                    imageCoins.map((imgCoin) => {
                                        if (dbCoin.id === imgCoin.id) {
                                            return (
                                                <tr key={dbCoin.id}>
                                                    <th scope="row">{dbCoin.rank}</th>
                                                    <td>
                                                        <div className='row'>
                                                            <div className='col-md-2'>
                                                                <img className='img-logo-coin' src={imgCoin.url} alt='img-bitcoin'></img>
                                                            </div>
                                                            <div className='col-md-10'>
                                                                {dbCoin.name}
                                                                <div className='col-w-100'></div>
                                                                {dbCoin.symbol}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>{formatter.format(dbCoin.priceUsd)}</td>
                                                    <td>{formatter.format(dbCoin.marketCapUsd)}</td>
                                                    <td>{formatter.format(dbCoin.vwap24Hr)}</td>
                                                    <td>{formatNumber(dbCoin.supply, 2)}</td>
                                                    <td>{formatter.format(dbCoin.volumeUsd24Hr)}</td>
                                                    <td>{formatNumber(dbCoin.changePercent24Hr, 2)}</td>
                                                    <td>
                                                    <Link id={dbCoin.id}  to={`/login/data/${dbCoin.id}`}><a id={dbCoin.id} className='btn-buy' href='#a' onClick={handleBuy} > buy</a></Link>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    })
                                ))}
                                {/* end redux */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
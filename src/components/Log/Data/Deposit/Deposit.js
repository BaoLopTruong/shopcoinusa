import './deposit.css'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

export default function Deposit(){

    const deposits = useSelector(state => state.deposits);

    return(
        <div className='deposit-page'>
            <div className='container'>
                <div className='row'>
                <div className='col-w-100 col-custom'>
                        <h3 className='h3-deposit-detail'>DEPOSIT DETAIL</h3>
                    </div>
                <div className='col-w-100'>
                <Link to={'/login/profile/deposit/create'}>
                <button className='btn-create-deposit'>Create Deposit</button>
                </Link>
                    
                </div>
                <div className='col-w-100'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Send</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {deposits.map(depo =>(
                                <tr key={depo.id}>
                                    <td>{depo.amountvnd}</td>
                                    <td>{depo.creatAtd}</td>
                                    <td><span className='sp-status' >Comfirmed</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    )
}
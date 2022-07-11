import { Link } from 'react-router-dom'
import './depositdetail.css'
import { useSelector, useDispatch } from 'react-redux'
import { getDeposits } from '../../../../redux/action';

export default function DepositDetail() {
    const depositdetail = useSelector(state => state.depositdetail);

    const dispatch = useDispatch();

    const handleSubmit = () =>{
        dispatch(getDeposits());
    }

    return (
        <div className='deposit-detail'>
            <div className='container'>
                <div className='row'>
                    <div className='col-w-100'>
                        <h3 className='h3-deposit-detail'>DEPOSIT DETAIL</h3>
                    </div>
                    <div className='col-w-100'></div>
                    <div className='col-w-100'>
                        <div className='info-coin'>
                            <span className='name-data-coin'>Code: </span> <span className='data-coin-value-2'>
                                {depositdetail.code}</span>
                        </div>
                        <hr className='hr-coin'></hr>
                    </div>
                    <div className='col-w-100'>
                        <div className='info-coin'>
                            <span className='name-data-coin'>Created At: </span> <span className='data-coin-value-2'>
                                {depositdetail.creatAtd}</span>
                        </div>
                        <hr className='hr-coin'></hr>
                    </div>
                    <div className='col-w-100'>
                        <div className='info-coin'>
                            <span className='name-data-coin'>Amount USDT: </span> <span className='data-coin-value-2'>
                                ${depositdetail.amountusd}</span>
                        </div>
                        <hr className='hr-coin'></hr>
                    </div>
                    <div className='col-w-100'>
                        <div className='info-coin'>
                            <span className='name-data-coin'>Amount VND: </span> <span className='data-coin-value-2'>
                                {depositdetail.amountvnd}</span>
                        </div>
                        <hr className='hr-coin'></hr>
                    </div>
                    <div className='col-w-100'>
                        <div className='info-coin'>
                            <span className='name-data-coin'>Method: </span> <span className='data-coin-value-2'>
                                {depositdetail.method}</span>
                        </div>
                        <hr className='hr-coin'></hr>
                    </div>
                    <div className='col-w-100 input-file'>
                        <div className='info-coin-1'>
                            <label className='custom-input-type-file' htmlFor='input-document'>Upload document...</label>
                            <input className='custom-file-input' id="input-document" type='file'></input>
                        </div>
                    </div>
                    <div className='col-w-100 '>
                        <div className='form-submit'>
                            <Link to={'/login/profile/deposit/'}> <button className='btn-submit' type='button' onClick={handleSubmit} > Submit</button> </Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
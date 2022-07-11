import './create.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { createDeposit } from '../../../../redux/action';
import { useDispatch } from 'react-redux';

export default function CreateDeposit() {

    const [deposit, setDeposit] = useState(0);
    const [method, setMethod] = useState("")
    const [amountVND, setAmountVND] = useState("0");
    const [newDeposit, setNewDeposit] = useState({ amountusd: 0, amountvnd: "", method: "ACB", code: "" , creatAtd: ""});

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setDeposit(e.target.value);
        if (method === "ACB") {
            setNewDeposit({
                code: randomCode(),
                amountusd: e.target.value,
                amountvnd: (formatter.format(Number(e.target.value) * 24000)).toString(),
                method: "ACB - TRAN VAN DIEU - 16744317",
                creatAtd: getTimeCreate()
            });
        }
        if (method === "") {
            setNewDeposit({
                code: randomCode(),
                amountusd: e.target.value,
                amountvnd: "0",
                method: "ACB - TRAN VAN DIEU - 16744317",
                creatAtd: getTimeCreate()
            });
        }
    }

    const handleChangeMethod = (e) => {
        setMethod(e.target.value);
        if (deposit > 0 && e.target.value === "ACB") {
            setNewDeposit({
                code: randomCode(),
                amountusd: deposit,
                amountvnd: (formatter.format(Number(deposit) * 24000)).toString(),
                method: "ACB - TRAN VAN DIEU - 16744317",
                creatAtd: getTimeCreate()
            });
        }
        else {
            setNewDeposit({
                code: randomCode(),
                amountusd: 0,
                amountvnd: "0",
                method: "ACB - TRAN VAN DIEU - 16744317",
                creatAtd: getTimeCreate()
            });
        }
    }

    const total = () => {
        let total = Number(deposit) * 24000;
        let depositMoney = formatter.format(total);
        setAmountVND(depositMoney);
        return depositMoney;
    }

    const formatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });

    const randomCode = () => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 10; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }

    const getTimeCreate = () => {
        let time = new Date();
        let year = time.getFullYear();
        let month = checkTime(time.getMonth() + 1);
        let date = checkTime(time.getDate());
        let hours = checkTime(time.getHours());
        let minutes = checkTime(time.getMinutes());
        let seconds = checkTime(time.getSeconds());
        let timeString = date + "-"+ month + "-" + year + ", " + hours + ":" + minutes + ":" + seconds;
        return timeString;
    }
    const checkTime = (time) => {
        if (time < 10) {
            time = "0" + (time);
        }
        return time;
    }

    const handleSubmit = () => {
        dispatch(createDeposit(newDeposit));
    }

    useEffect(() => {

        if (deposit > 0 && method !== "") {
            total();
        }
        if (deposit <= 0 || method === "") {
            setAmountVND(0);
        }

    })

    return (
        <div className='create-deposit'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h3>CREATE DEPOSIT</h3>
                    </div>
                    <div className='col-w-100'></div>
                    <form className='form-input'>
                        <div className='form-amount'>
                            <label className='form-label'>Amount (USDT)</label>
                            <input className='form-control' type='number' min='0' name='amountusd' value={deposit.amountusd}
                                onChange={handleChange} ></input>
                        </div>
                        <div className='form-payment'>
                            <label className='form-label'>Payment Method</label>
                            <select className='form-select' name='method' onChange={handleChangeMethod}>
                                <option value=''></option>
                                <option value='ACB'>ACB</option>
                            </select>
                        </div>
                        <div className='form-deposit'>
                            <label className='form-label'>Deposits (VND)</label>
                            <input className='form-control' type='text' name='amountvnd' readOnly value={amountVND}></input>
                        </div>
                        <div className='form-submit'>
                            <Link to={'/login/profile/deposit/detail'}>
                                <button className='btn-submit' type='button' onClick={handleSubmit} > Submit</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
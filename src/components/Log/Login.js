import './login.css'
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { CheckLogin } from '../../redux/action';

export default function Login() {

    const [passwordShown, setPasswordShown] = useState(false);
    const navigate = useNavigate();

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    //check login

    const dispatch = useDispatch();
    const [user, setUser] = useState({ username: "", password: "" });
    const userlogined = useSelector(state => state.userlogined);
    const setValueForUser = (key, value) => {
        const newVal = { ...user, [key]: value };
        setUser(newVal);
    };
    const login = () => {
        dispatch(CheckLogin(user));
    };
    useEffect(() => {
        if (userlogined.username) {
            navigate("/login/data");
        }
    }, [userlogined, navigate]);

    return (
        <div className='login-page'>
            <div className="login">
                <div className='form-title'>
                    <h4> LOG IN TO YOUR ACCOUNT</h4>
                </div>
                <form>
                    <div className='form-email'>
                        <div className='row'>
                            <div className='col-md-2'>
                            </div>
                            <div className='col-md-8'>
                                <label className='form-label'>Email:</label>
                            </div>
                            <div className='col-md-2'>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2'>
                            </div>
                            <div className='col-md-8'>
                                <input type='text' name="username" id="username" className='form-control'
                                    onChange={e => setValueForUser("username", e.target.value)}></input>
                            </div>
                        </div>
                        <div className='col-md-2'>
                        </div>
                    </div>
                    <div className='form-password'>
                        <div className='row'>
                            <div className='col-md-2'>
                            </div>
                            <div className='col-md-8'>
                                <label className='form-label'>Password:</label>
                            </div>
                            <div className='col-md-2'>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2'>
                            </div>
                            <div className='col-md-8'>
                                <input className='form-control input-password' type={passwordShown ? "text" : "password"}
                                    name="password" id="password"
                                    onChange={e => setValueForUser("password", e.target.value)}>
                                </input>
                            </div>
                            <div className='col-md-2'>
                                <button className="btn btn-outline-primary" type='button' onClick={togglePassword} onMouseDown={handleMouseDownPassword}>
                                    {passwordShown === false ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='form-btn-submit'>
                        <button type='button' className='btn btn-success' onClick={() => { login(); }}>Login</button>
                    </div>

                    <div className='form-forgot-password'>
                        <a href='#a'>Forgot your password ?</a>
                    </div>
                </form>
            </div>
            <div className='sign-up'>
                Do not have an account ? <Link  to={'/login/sign-up'}> <a href="#a">Register</a></Link>
                <div className='row'>
                    <div className='col-sm-4'></div>
                    <div className='col-sm-4'>
                        <div className='row'>
                            <div className='col-sm-4'>Privacy Notice</div>
                            <div className='col-sm-4'>Cookies Notice</div>
                            <div className='col-sm-4'>Cookies Settings</div>
                        </div>
                    </div>
                    <div className='col-sm-4'></div>
                </div>
            </div>
        </div>
    )
}
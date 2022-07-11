import './register.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createUser } from '../../../redux/action';

export default function Register() {
    const [passwordShown, setPasswordShown] = useState(false);
    const [newUser, setNewUser] = useState({});
    const dispatch = useDispatch();

    // Password toggle handler
    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        dispatch(createUser(newUser));
    }


    return (
        <div className="register-page">
            <div className='register'>
                <div className='form-title'>
                    <h4> REGISTER</h4>
                </div>
                <form>
                    <div className='form-username'>
                        <div className='row'>
                            <div className='col-md-2'>
                            </div>
                            <div className='col-md-8'>
                                <label className='form-label'>Username:</label>
                            </div>
                            <div className='col-md-2'>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2'>
                            </div>
                            <div className='col-md-8'>
                                {/* <input type='text' className='form-control' name='username' onChange={handleChange}></input> */}
                                <input type='text' className='form-control' name='username' onChange={handleChange}></input>
                            </div>
                        </div>
                        <div className='col-md-2'>
                        </div>
                    </div>
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
                                {/* <input type='email' className='form-control' name='email' onChange={handleChange}></input> */}
                                <input type='email' className='form-control' name='email' onChange={handleChange}></input>
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
                                {/* <input className='form-control input-password' type={passwordShown ? "text" : "password"}
                                    name='password' onChange={handleChange} > </input> */}
                                    <input className='form-control input-password' type={passwordShown ? "text" : "password"}
                                    name='password' onChange={handleChange} ></input>
                            </div>
                            <div className='col-md-2'>
                                <button className="btn btn-outline-primary" type='button' onClick={togglePassword} onMouseDown={handleMouseDownPassword}>
                                    {passwordShown === false ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='form-btn-submit'>
                        <Link to={'/login/data'}>
                            <button type='button' className='btn btn-success' onClick={handleSubmit}>Register</button>
                        </Link>
                    </div>
                    <div className='form-forgot-password'>
                        <p>By registering I confirm I have read and agree to Terms of Use.
                            We send occasional marketing messages which can be switched off in account settings.
                            We manage personal data as set out in our Privacy Notice.</p>
                    </div>
                </form>
            </div>
            <div className='have-account'>
                Already have an account?  <Link aria-current="page" to={'/login'}> <a href="#a">Login</a></Link>
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
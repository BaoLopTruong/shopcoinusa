import './navbar.css'

import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function NavbarPage() {

    const userlogined = useSelector(state => state.userlogined);
    const [isLogined, setIsLogined] = useState(false);

    useEffect(() => {
        if (userlogined.username) {
            setIsLogined(!isLogined)
        }
    }, []);

    const handleLogout = () => {
        window.location.href =('/')
    }
    return (

        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid">
                <Link to={'/'} className="navbar-brand" ><img src='http://shopcoinusa.com/wp-content/uploads/2021/12/logo-e1640592718566.png'
                    style={{ width: "200px", height: "70px" }} alt='Shop Coin USA'></img></Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse float-md-right" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item" >
                            <Link className="nav-link" aria-current='page' to={'/'}>
                                <button type='button' className='nav-title'>HOME</button>
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link to={'/deposit'} className="nav-link text-secondary">
                                <button className='nav-title'>DEPOSIT-WITHDRAW</button>
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link to={'/blog'} className="nav-link text-secondary">
                                <button type='button' className='nav-title'>BLOG</button>
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link to={'/about-us'} className="nav-link text-secondary">
                                <button type='button' className='nav-title'>ABOUT US</button>
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link to={'/contact-us'} className="nav-link text-secondary">
                                <button type='button' className='nav-title'>CONTACT US</button>
                            </Link>
                        </li>
                        <li style={{ marginLeft: "400px" }} className="nav-item">
                            {isLogined === false ?
                                <Link to={'/login'}>
                                    <button type='button' className='nav-button'>LOG IN</button>
                                </Link>
                                : <div>
                                    <span className='sp-username'>{userlogined.username}</span>
                                    <button className='btn-logout' onClick={handleLogout}>Logout</button>
                                </div>

                            }
                            {/* <span className='sp-username'>{userlogined.username}</span>
                            <Link to={'/login'}>
                                <button type='button' className='nav-button'>LOG IN</button>
                            </Link> */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
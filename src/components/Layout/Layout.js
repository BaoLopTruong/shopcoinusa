import NavbarPage from "./Navbar/Navbar";
import './layout.css'

export default function Layout({ children }) {

    return (
        <div className="layout">
            <NavbarPage></NavbarPage>
            <div className="main">
            {children}
            </div>
            <div className='license'>
            Copyright 2022 ©  <strong> Shop Coin USA </strong>
            </div>
        </div>
    )
}
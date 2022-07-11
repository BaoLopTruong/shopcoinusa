import './header.css'
import icon from '../../../../images/icon-log.png'
import { useNavigate } from 'react-router-dom'
export default function Header() {

    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/')
    }
    return (
        <div className="header">
            <img className='header-icon' src={icon} alt="icon" onClick={handleClick}></img>
        </div>
    )
}
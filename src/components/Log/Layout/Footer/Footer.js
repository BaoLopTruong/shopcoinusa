import './footer.css'

export default function Footer(){

    return(
        <div className="footer">
            <div className='row'>
                <div className='col-sm-3'>
                <h5> Products</h5>
                <ul>
                    <li>Blockchain Explorer</li>
                    <li>Crypto API</li>
                    <li>Crypto Indices</li>
                    <li>Interest</li>
                    <li>Jobs Board</li>
                    <li>Sitemap</li>
                </ul>
               </div>
                <div className='col-sm-3'>
                <h5>Company </h5>
                <ul>
                    <li>About us</li>
                    <li>Terms of use</li>
                    <li>Privacy Policy</li>
                    <li>Disclaimer</li>
                    <li>Methodology</li>
                    <li>CareersWe're hiring!</li>
                </ul>
                </div>

                <div className='col-sm-3'>
                <h5>Support</h5>
                <ul>
                    <li>Request Form</li>
                    <li>Contact Support</li>
                    <li>FAQ</li>
                    <li>Glossary</li>
                </ul>
                </div>
                <div className='col-sm-3'>
                <h5>Socials </h5>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Telegram</li>
                    <li>Instagram</li>
                    <li>Interactive Chat</li>
                </ul>
                </div>
                <hr></hr>
                <div className='copy-right'>
                    <span className='copy-name'>Copyright © 2022 <strong>Shopcoin.com</strong> </span> 
                </div>
            </div>
            
        </div>
    )
}
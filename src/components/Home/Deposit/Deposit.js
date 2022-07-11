import './deposit.css'
import hinh2 from '../../../images/2.jpg'
import hinh3 from '../../../images/3-512x1024.jpg'
import hinh4 from '../../../images/4.jpg'
import hinh5 from '../../../images/5.jpg'
import hinh7 from '../../../images/7-512x1024.jpg'
import hinh8 from '../../../images/8.jpg'
import hinh9 from '../../../images/9.jpg'
import hinh11 from '../../../images/11.jpg'
import hinh12 from '../../../images/12.jpg'
import hinh13 from '../../../images/13.jpg'
import hinh14 from '../../../images/14-512x1024.jpg'
import hinh15 from '../../../images/15.jpg'
import hinh16 from '../../../images/16.2.jpg'
import hinh163 from '../../../images/16.3-461x1024.jpg'
import hinh17 from '../../../images/17.jpg'
import hinh18 from '../../../images/18.jpg'


export default function Deposit() {

    return (
        <div className='deposit'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='banner-bg'>
                            <div className='banner-bg-img'></div>
                        </div>
                    </div>
                    <div className="w-100"></div>
                    <div style={{ padding: "0" }} className='col-md-4 hr-collumn'>
                        <hr></hr>
                    </div>
                    <div style={{ border: "1px solid black" }} className='col-md-4'>
                        <span className='title'>1. ĐĂNG KÝ TÀI KHOẢN:</span>
                    </div>
                    <div style={{ padding: "0" }} className='col-md-4'>
                        <hr></hr>
                    </div>
                    <div className="w-100"></div>
                    <div className='col'>
                        <p>Tại giao diện Wellcom chọn Sign Up và điền đầy đủ thông tin và bấm chọn Sign Up để đăng ký tài khoản mới.
                            Đăng ký xong nhập Mail và Password nhấn chọn Sign In..</p>
                    </div>
                    <div className="w-100"></div>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <img src={hinh2} alt='hinh2' className='img-register'></img>
                    </div>
                    <div className='col-md-4'></div>
                    <div className="w-100"></div>
                    <div style={{ padding: "0" }} className='col-md-4 hr-collumn'>
                        <hr></hr>
                    </div>
                    <div style={{ border: "1px solid black" }} className='col-md-4'>
                        <span className='title'>2. CÁCH NẠP TIỀN VÀO TÀI KHOẢN</span>
                    </div>
                    <div style={{ padding: "0" }} className='col-md-4'>
                        <hr></hr>
                    </div>
                    <div className="w-100"></div>
                    <div className='col'>
                        <p>Chọn Deposit--&gt; Create New--&gt; Nhập số tiền muốn nạp--&gt; Chọn Select a Bank--&gt; Nhấn chọn Submit</p>
                    </div>
                    <div className="w-100"></div>
                    <div className='col-md-4'>
                        <img src={hinh3} alt='hinh3' className='img-register'></img>
                    </div>
                    <div className='col-md-4'>
                        <img src={hinh4} alt='hinh4' className='img-register'></img>
                    </div>
                    <div className='col-md-4'>
                        <img src={hinh5} alt='hinh5' className='img-register'></img>
                    </div>
                    <div className="w-100"></div>
                    <div className='col'>
                        <p>Chọn "Pick an image from camera roll"--&gt; Chọn hình và kéo chỉnh sau đó chọn "Cắt"--&gt; Nhấn chọn Submit</p>
                    </div>
                    <div className="w-100"></div>
                    <div className='col-md-4'>
                        <img src={hinh7} alt='hinh7' className='img-register'></img>
                    </div>
                    <div className='col-md-4'>
                        <img src={hinh8} alt='hinh8' className='img-register'></img>
                    </div>
                    <div className='col-md-4'>
                        <img src={hinh9} alt='hinh9' className='img-register'></img>
                    </div>
                    <div className="w-100"></div>
                    <div className='col'>
                        <h4>HƯỚNG DẪN MUA COIN</h4>
                        <hr></hr>
                    </div>
                    <div className="w-100"></div>
                    <div className='col'>
                        <p>Ở giao diện “Home” chọn “Buy” --&gt; Nhập số lượng Coin muốn mua--&gt; Nhấn “Buy”, vào “My Coin” để xem Coin mình đang có.</p>
                    </div>
                    <div className="w-100"></div>
                    <div className='col-md-4'>
                        <img src={hinh11} alt='hinh11' className='img-register'></img>
                    </div>
                    <div className='col-md-4'>
                        <img src={hinh12} alt='hinh12' className='img-register'></img>
                    </div>
                    <div className='col-md-4'>
                        <img src={hinh13} alt='hinh13' className='img-register'></img>
                    </div>
                    <div className="w-100"></div>
                    <div className='col'>
                        <h4>HƯỚNG DẪN BÁN COIN</h4>
                        <hr></hr>
                    </div>
                    <div className="w-100"> </div>
                    <div className='col'>
                        <p>Vào “My coin” chọn “Sell” --&gt;Nhập số lượng muốn bán và nhấn chọn “Sell Coin”.</p>
                    </div>
                    <div className="w-100"></div>
                    <div className='col-md-6'>
                        <img src={hinh14} alt='hinh14' className='img-register-2'></img>
                    </div>
                    <div className='col-md-6'>
                        <img src={hinh15} alt='hinh15' className='img-register-2'></img>
                    </div>
                    <div className="w-100"></div>
                    <div className='col'>
                        <h4>HƯỚNG DẪN RÚT TIỀN</h4>
                        <hr></hr>
                    </div>
                    <div className="w-100"> </div>
                    <div className='col'>
                        <p>Vào “Profile” chọn “Upload Document”--&gt; Tải CCCD hoặc CMND lên nhấn chọn “Change your Document”
                            Vào “Withdraw” chọn “Click here”--&gt; Điền thông tin tài khoản và nhấn “Submit”.</p>
                    </div>
                    <div className="w-100"></div>
                    <div className='col-md-3'>
                        <img src={hinh163} alt='hinh16.3' className='img-register-3'></img>
                    </div>
                    <div className='col-md-3'>
                        <img src={hinh16} alt='hinh16' className='img-register-3'></img>
                    </div>
                    <div className='col-md-3'>
                        <img src={hinh17} alt='hinh17' className='img-register-3'></img>
                    </div>
                    <div className='col-md-3'>
                        <img src={hinh18} alt='hinh18' className='img-register-3'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
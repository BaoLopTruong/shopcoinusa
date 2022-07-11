// import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import {Routes, Route} from 'react-router-dom'
import HomePage from './components/Home/Home';
import Blog from './components/Home/Blog/Blog';
import AboutUs from './components/Home/AboutUs/AboutUs';
import Deposit from './components/Home/Deposit/Deposit';
import ContactUs from './components/Home/ContactUs/ContactUs';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/about-us' element={<AboutUs/>}></Route>
          <Route path='/deposit' element={<Deposit/>}></Route>
          <Route path='/contact-us' element={<ContactUs/>}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

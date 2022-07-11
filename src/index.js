import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutLog from './components/Log/Layout/LayoutLog';
import { Provider } from "react-redux";
import store from "./redux/store";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<App />}></Route>
        <Route path='/login/*' element={<LayoutLog />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

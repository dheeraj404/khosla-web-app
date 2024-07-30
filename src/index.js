import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProductDetails from './Components/ProductDetails';
import { BrowserRouter as Router, Route,  Routes} from 'react-router-dom';
import Stores from './Components/Stores';
import ProductCategoryPage from './Components/ProductCategoryPage';
import CareerForm from './Components/CareerForm';
import BrandProducts from './Components/BrandProducts';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/category/:category" element={<ProductCategoryPage />} />
      <Route path="/product/:productId" element={<ProductDetails/>} />
      <Route path="/store-locator" element={<Stores/>} />
      <Route path="/career" element={<CareerForm></CareerForm>}/>
      <Route path="/brands/:brandName" element={<BrandProducts></BrandProducts>}/>
    </Routes>
  </Router>,
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

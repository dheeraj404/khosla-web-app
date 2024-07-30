
import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
// import SlidingImageHeader from './Components/SlidingImageHeader';
import ImageSlider from './Components/ImageSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactForm from './Components/ContactForm';
import Top_Header from './Components/Top_Header';
import Imageslide from './Components/Imageslide'
import ProductCard from './Components/ProductCard';
import HomeProductBar from './Components/HomeProductBar';
import Popular_Brands from './Components/Popular_Brands';
import About_p from './Components/About_p';
import Homepage_Poster from './Components/Homepage_Poster';
import Home_page_option from './Components/Home_page_option';
import Home_page_prdoct1 from './Components/Home_page_prdoct1';
import Home_page_product2 from './Components/Home_page_product2';
import Checkout from './Components/Checkout';
import React from "react";
import { BrowserRouter as Router, Routes, Switch ,Route} from 'react-router-dom';
import { useRef } from "react";
//import NavBar from "./NavBar";
import PaymentReturnPolicies from './Components/PaymentReturnPolicies';
import Category from './Components/Category';
import Home_page_product3 from './Components/Home_page_product3';
import Product_list from './Components/Product_list';
import Header from './Components/Header';
import Login_Signup from './Components/Login_Signup';
import Cart from './Components/Cart'
import Stores from './Components/Stores';

import TermsAndConditions from'./Components/TermsAndConditions';
import CareerForm from './Components/CareerForm';
import PrivacyPolicy from './Components/PrivacyPolicy';
import ShippingOptions from './Components/ShippingOptions';
import BrandProducts from './Components/BrandProducts';
function App() {
  const companies=['Apple','Vivo','Nokia','OnePlus','bosch','Carrier','Daikin','haier','Hitachi','Lenovo','Lg','Sony'];
 
 const product1=[{id:1,title:'Bajaj TMH50 50L Tower Air Cooler with DuraMarine Pump (2-Yr Warranty by Bajaj)',image:'61Lz9abpZJL._SL1500_-300x300.jpg',price:'₹7,999.00',off:'27',Original_price:'₹10,990.00',category:'AIR COOLER'},{title:'Bajaj TMH50 50L Tower Air Cooler with DuraMarine Pump (2-Yr Warranty by Bajaj)',image:'61Lz9abpZJL._SL1500_-300x300.jpg',price:'₹7,999.00',off:'27',Original_price:'₹10,990.00',category:'AIR COOLER'},{title:'Bajaj TMH50 50L Tower Air Cooler with DuraMarine Pump (2-Yr Warranty by Bajaj)',image:'61Lz9abpZJL._SL1500_-300x300.jpg',price:'₹7,999.00',off:'27',Original_price:'₹10,990.00',category:'AIR COOLER'},{title:'Bajaj TMH50 50L Tower Air Cooler with DuraMarine Pump (2-Yr Warranty by Bajaj)',image:'61Lz9abpZJL._SL1500_-300x300.jpg',price:'₹7,999.00',off:'27',Original_price:'₹10,990.00',category:'AIR COOLER'}]
 const product2=[{title:'Godrej 1.5 Ton 3 Star, Anti-Leak, 5-In-1 Convertible Cooling, Inverter',image:'SIC-18DTC3-GWA-INDOOR-300x300.png',price:'₹35,590.00',off:'27',Original_price:'₹48,000.00',category:'AIR CONDITIONER'},{title:'Godrej 1.5 Ton 3 Star, Anti-Leak, 5-In-1 Convertible Cooling, Inverter',image:'SIC-18DTC3-GWA-INDOOR-300x300.png',price:'₹35,590.00',off:'27',Original_price:'₹48,000.00',category:'AIR CONDITIONER'},{title:'Godrej 1.5 Ton 3 Star, Anti-Leak, 5-In-1 Convertible Cooling, Inverter',image:'SIC-18DTC3-GWA-INDOOR-300x300.png',price:'₹35,590.00',off:'27',Original_price:'₹48,000.00',category:'AIR CONDITIONER'},{title:'Godrej 1.5 Ton 3 Star, Anti-Leak, 5-In-1 Convertible Cooling, Inverter',image:'SIC-18DTC3-GWA-INDOOR-300x300.png',price:'₹35,590.00',off:'27',Original_price:'₹48,000.00',category:'AIR CONDITIONER'}]
 const product3=[{title:'vivo V30 5G (8GB RAM, 128GB, Peacock Green)',image:'VIVO-MOBILE-V30-PEACOCK-GREEN-8GB128GB-300x300.png',price:'₹33,999.00',off:'13',Original_price:'₹38,999.00',category:'Audio'},{title:'vivo V30 5G (8GB RAM, 128GB, Peacock Green)',image:'VIVO-MOBILE-V30-PEACOCK-GREEN-8GB128GB-300x300.png',price:'₹33,999.00',off:'13',Original_price:'₹38,999.00',category:'audio'},{title:'vivo V30 5G (8GB RAM, 128GB, Peacock Green)',image:'VIVO-MOBILE-V30-PEACOCK-GREEN-8GB128GB-300x300.png',price:'₹33,999.00',off:'13',Original_price:'₹38,999.00',category:'audio'},{title:'vivo V30 5G (8GB RAM, 128GB, Peacock Green)',image:'VIVO-MOBILE-V30-PEACOCK-GREEN-8GB128GB-300x300.png',price:'₹33,999.00',off:'13',Original_price:'₹38,999.00',category:'audio'}]
 const product4=[{title:'Whirlpool 200 L Direct Cool Single Door 3 Star Refrigerator ',image:'215-IMPRO-PRM-3S-COOL-ILLUSIA-Z-300x300.png',price:'₹15,099.00',off:'20',Original_price:'₹18,850.00',category:'REFRIGERATOR'},{title:'Whirlpool 200 L Direct Cool Single Door 3 Star Refrigerator ',image:'215-IMPRO-PRM-3S-COOL-ILLUSIA-Z-300x300.png',price:'₹15,099.00',off:'20',Original_price:'₹18,850.00',category:'REFRIGERATOR'},{title:'Whirlpool 200 L Direct Cool Single Door 3 Star Refrigerator ',image:'215-IMPRO-PRM-3S-COOL-ILLUSIA-Z-300x300.png',price:'₹15,099.00',off:'20',Original_price:'₹18,850.00',category:'REFRIGERATOR'},{title:'Whirlpool 200 L Direct Cool Single Door 3 Star Refrigerator ',image:'215-IMPRO-PRM-3S-COOL-ILLUSIA-Z-300x300.png',price:'₹15,099.00',off:'20',Original_price:'₹18,850.00',category:'REFRIGERATOR'}]
 const product5=[{title:'Sony Bravia 80 cm (32 inches) HD Ready Smart LED Google TV  ',image:'71sD5XaN61L._SL1500_-1-300x300.jpg',price:'₹26,990.00',off:'23',Original_price:'₹34,900.00',category:'TV & HOME ENTERTAINMENT'},{title:'Sony Bravia 80 cm (32 inches) HD Ready Smart LED Google TV  ',image:'71sD5XaN61L._SL1500_-1-300x300.jpg',price:'₹26,990.00',off:'23',Original_price:'₹34,900.00',category:'TV & HOME ENTERTAINMENT'},{title:'Sony Bravia 80 cm (32 inches) HD Ready Smart LED Google TV  ',image:'71sD5XaN61L._SL1500_-1-300x300.jpg',price:'₹26,990.00',off:'23',Original_price:'₹34,900.00',category:'TV & HOME ENTERTAINMENT'},{title:'Sony Bravia 80 cm (32 inches) HD Ready Smart LED Google TV  ',image:'71sD5XaN61L._SL1500_-1-300x300.jpg',price:'₹26,990.00',off:'23',Original_price:'₹34,900.00',category:'TV & HOME ENTERTAINMENT'}]
 const poster1=[{src:'./WEB-BANNER-1600416-1-2048x532.png',title:'LG TV',width:'620'},{src:'./WEB-BANNER-1600416-2-2048x532.png',title:'TV',width:'630'}]
 const poster2=[{src:'./3rd-Banner-1065456-3.png',title:'c',width:'300'},{src:'./3rd-Banner-1065456-3.png',title:'c',width:'300'},{src:'./3rd-Banner-1065456-3.png',title:'c',width:'300'}]
 const poster3=[{src:'./BANNER-4-ALL-1380304-2048x451.png'},{src:'./buy-bosch-product-only-on-khosla-electronics.jpg'}]
 const categories = [
  'Mobile & Tab',
  'Digital Game & Accessories',
  'Computer & Laptop',
  'Cameras & Accessories',
  'TV Entertainment',
  'Audio',
  // Add more categories as needed
];

  return (
    <div className="App">
      {/* <BrandProducts></BrandProducts> */}
      {/* <PaymentReturnPolicies></PaymentReturnPolicies> */}
      {/* <ShippingOptions></ShippingOptions>
 <PrivacyPolicy></PrivacyPolicy> */}
   {/* <div className="container">
      <div className="row">
        <div className="col-3">
          <Category categories={categories} />
        </div>
        <div className="col-9">
          <h5>Welcome to the Electronics Store</h5>
          <p>Select a category to view products.</p>
        </div>
      </div>
    </div> */}
       {/* <Checkout></Checkout> */}
       <Top_Header/>
       <Header/> 
      {/* <NavBar></NavBar> */}
      {/* <Product_list></Product_list> */}
        {/* <Login_Signup></Login_Signup> */}
         <ImageSlider></ImageSlider>
         <Imageslide></Imageslide>
         <Home_page_option companies={companies}/>
         <Homepage_Poster images={poster1}/>
   <Homepage_Poster images={poster2}/>
   <Home_page_product3></Home_page_product3>
   <Homepage_Poster images={poster3}/>
   <HomeProductBar products={product1}/>
   <HomeProductBar products={product2}/>
   <Home_page_prdoct1></Home_page_prdoct1>
      
   <HomeProductBar products={product3}/>
   <HomeProductBar products={product4}/>
   <HomeProductBar products={product5}/>
    <Home_page_product2></Home_page_product2>
    
    
    <ContactForm></ContactForm>
    <Popular_Brands></Popular_Brands>
      <About_p></About_p>
      <Footer></Footer>
    </div>
  );
}

export default App;

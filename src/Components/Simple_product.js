import React from "react";
import './Simple_product.css'

const Simple_product = ({ product }) => {
    return (
        
           <div class="container Simple_product" style={{padding:'4px',boxSizing:'border-box',width:'auto'}}>
  <div class="row">
    <div class="col-lg-12  col-md-12   col-12">
      <a href=""> <img src={product.src} class="img-fluid shadow" alt="Responsive image" style={{padding:'0px',marginTop:'5px'}}/> </a>
    
    </div>
    
<div style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'10px',fontFamily:  "Montserrat"
  ,fontWeight:'600',fontSize:'.9rem'}}>{product.title}</div>
  </div>


        </div>
    
    );
};
    
export default Simple_product;
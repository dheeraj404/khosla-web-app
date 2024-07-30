import React from "react";
import Simple_product from "./Simple_product";

const Home_page_prdoct1 = () => {
    const Product=[{src:'tv-1024x1024.png',title:'Televisions'}]
    return (
<div class="container" style={{ borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(0.6px)",
        WebkitBackdropFilter: "blur(0.6px)", // Note: React automatically handles vendor prefixes, but this is still used for clarity and compatibility
        border: "1px solid rgba(255, 255, 255, 0.3)",padding:'40px'}}>
<div class="row" >
    <div class="col-sm-6 col-md-4" style={{ borderRadius: "16px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(0.6px)",
        WebkitBackdropFilter: "blur(0.6px)", // Note: React automatically handles vendor prefixes, but this is still used for clarity and compatibility
        border: "1px solid rgba(255, 255, 255, 0.3)",padding:'30px',marginLeft:'0px'}}>
      <p style={{background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, rgb(255, 0, 0) 30px, rgb(0,0,0) 70%, rgba(255, 255, 255, 0.804)) border-box',
    borderBottom: '2px solid transparent',
    // borderTop: '2px solid transparent',
    // borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottomRightRadius: '30px',
    padding:'5px',fontSize:'.9rem',fontWeight:'400',}}>Entertainment</p>
      <div class="row">
      <div class="col-md-6">
     <Simple_product product={{src:'tv-1024x1024.png',title:'Televisions'}}/>
      </div>
      <div class="col-md-6">
      <Simple_product product={{src:'home-theatre-1024x1024.png',title:'Home Theater'}}/>
        </div>
        
      </div>
      <div class="row">
      <div class="col-md-6">
     <Simple_product product={{src:'tv-1024x1024.png',title:'Televisions'}}/>
      </div>
      <div class="col-md-6">
      <Simple_product product={{src:'tv-1024x1024.png',title:'Televisions'}}/>
        </div>
        
      </div>
    </div>
    <div class="col-sm-6 col-md-4" style={{ borderRadius: "16px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(0.6px)",
        WebkitBackdropFilter: "blur(0.6px)", // Note: React automatically handles vendor prefixes, but this is still used for clarity and compatibility
        border: "1px solid rgba(255, 255, 255, 0.3)",padding:'20px',marginLeft:'0px'}}>
      <p style={{background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, rgb(255, 0, 0) 30px, rgb(0,0,0) 70%, rgba(255, 255, 255, 0.804)) border-box',
    borderBottom: '2px solid transparent',
    // borderTop: '2px solid transparent',
    // borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottomRightRadius: '30px',
    padding:'5px',fontSize:'.9rem',fontWeight:'400',}}>Appliances</p>
      <div class="row">
      <div class="col-md-6">
     <Simple_product product={{src:'tv-1024x1024.png',title:'Televisions'}}/>
      </div>
      <div class="col-md-6">
      <Simple_product product={{src:'tv-1024x1024.png',title:'Televisions'}}/>
        </div>
        
      </div>
      <div class="row">
      <div class="col-md-6">
     <Simple_product product={{src:'tv-1024x1024.png',title:'Televisions'}}/>
      </div>
      <div class="col-md-6">
      <Simple_product product={{src:'tv-1024x1024.png',title:'Televisions'}}/>
        </div>
        
      </div>
    </div>
    <div class="col-sm-6  col-md-4" style={{ borderRadius: "16px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(0.6px)",
        WebkitBackdropFilter: "blur(0.6px)", // Note: React automatically handles vendor prefixes, but this is still used for clarity and compatibility
        border: "1px solid rgba(255, 255, 255, 0.3)",padding:'20px',marginLeft:'0px'}}>
      <p style={{background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, rgb(255, 0, 0) 30px, rgb(0,0,0) 70%, rgba(255, 255, 255, 0.804)) border-box',
    borderBottom: '2px solid transparent',
    // borderTop: '2px solid transparent',
    // borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottomRightRadius: '30px',
    padding:'5px',fontSize:'.9rem',fontWeight:'400',}}>Digital Products</p>
      <div class="row">
      <div class="col-md-6">
     <Simple_product product={{src:'tv-1024x1024.png',title:'Televisions'}}/>
      </div>
      <div class="col-md-6">
      <Simple_product product={{src:'tv-1024x1024.png',title:'Televisions'}}/>
        </div>
        
      </div>
      <div class="row">
      <div class="col-md-6">
     <Simple_product product={{src:'tv-1024x1024.png',title:'Televisions'}}/>
      </div>
      <div class="col-md-6">
      <Simple_product product={{src:'tv-1024x1024.png',title:'Televisions'}}/>
        </div>
        
      </div>
    </div>
  </div>
</div>

    );

};
export default Home_page_prdoct1;
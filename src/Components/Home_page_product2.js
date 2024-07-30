import React from "react";
import Simple_product from "./Simple_product";

const Home_page_product2 = () => {
    const Product=[{src:'tv-1024x1024.png',title:'Televisions'}]
    return (
<div class="container" style={{ borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(0.6px)",
        WebkitBackdropFilter: "blur(0.6px)", // Note: React automatically handles vendor prefixes, but this is still used for clarity and compatibility
        border: "1px solid rgba(255, 255, 255, 0.3)",padding:'40px'}}>
<div class="row" >
    <div class="col-sm-6 col-md-6" style={{ height:"content",borderRadius: "16px",
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
    padding:'5px',fontSize:'.9rem',fontWeight:'400',}}>Kitchen Appliance</p>
      <div class="row">
      <div class="col-md-4">
     <Simple_product product={{src:'Mixer-Grinder-1.png',title:'MixerGrinder'}}/>
      </div>
      <div class="col-md-4">
      <Simple_product product={{src:'Chimney-1.png',title:'Chimney'}}/>
        </div>
        <div class="col-md-4">
      <Simple_product product={{src:'Induction-Cooker-1.png',title:'Induction Cooker'}}/>
        </div>
      </div>
      <div class="row">
      <div class="col-md-4">
     <Simple_product product={{src:'Water-Purifier-1.png',title:'WaterPurifier'}}/>
      </div>
      <div class="col-md-4">
      <Simple_product product={{src:'Air-Fryer-1.png',title:'Air Fryer'}}/>
        </div>
        <div class="col-md-4">
      <Simple_product product={{src:'Toaster-2.png',title:'Toaster'}}/>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-6" style={{ borderRadius: "16px",
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
    padding:'5px',fontSize:'.9rem',fontWeight:'400',}}>Lifestyle Products</p>
      <div class="row">
      <div class="col-md-6">
     <Simple_product product={{src:'Hair-Dryer-1.png',title:'Hair Dryer'}}/>
      </div>
      <div class="col-md-6">
      <Simple_product product={{src:'Hair-Straightener-1.png',title:'Hair Straightener'}}/>
        </div>
        
      </div>
      <div class="row">
      <div class="col-md-6">
     <Simple_product product={{src:'Shaver-1.png',title:'Shaver'}}/>
      </div>
      <div class="col-md-6">
      <Simple_product product={{src:'Trimmer-1.png',title:'Trimmer-1'}}/>
        </div>
        
      </div>
    </div>

  </div>
</div>

    );

};
export default Home_page_product2;
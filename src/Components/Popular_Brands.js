import React from "react";

const Popular_Brands=()=>{
    return(
        <div className="container-md" style={{marginTop:'20px', background: "rgba(255, 255, 255, 0.3)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(0.6px)",
        WebkitBackdropFilter: "blur(0.6px)", // Note: React automatically handles vendor prefixes, but this is still used for clarity and compatibility
        border: "1px solid rgba(255, 255, 255, 0.3)",padding:'20px'}}>
        <div className="container-md" style={{marginTop:'20px',marginBottom:'100px'}}>
             <p style={{background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, rgb(255, 0, 0) 30px, rgb(0,0,0) 70%, rgba(255, 255, 255, 0.804)) border-box',
    borderBottom: '2px solid transparent',
    // borderTop: '2px solid transparent',
    // borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottomRightRadius: '30px',
    padding:'5px',fontSize:'1.4rem',fontWeight:'600',}}>POPULAR BRANDS</p>
            </div>
           <div style={{display:'flex',flexWrap: 'wrap', justifyContent: 'space-evenly'}} className=" container-md Papular_brands">
            <div><img src="./bajaaj.png"/></div>
            <div><img src="./Blue star.png"/></div>
            <div><img src="./bosch.png"/></div>
            <div><img src="./Canon.png"/></div>
            <div><img src="./Carrier.png"/></div>
            <div><img src="./Daikin.png"/></div>
            <div ><img src="./Dell.png"/></div>
            <div><img src="./Eureka.png"/></div>
            <div><img src="./fire.png"/></div>
            <div><img src="./youder.png"/></div>
            <div ><img src="./haier.png"/></div>
            <div ><img src="./hitachi.png"/></div>
            <div><img src="./hp.png"/></div>
            <div ><img src="./ifb.png"/></div>
            <div ><img src="./kent.png"/></div>
            <div ><img src="./kutchina.png"/></div>
            <div><img src="./lenovo.png"/></div>
            <div ><img src="./lg.png"/></div>
            <div ><img src="./lloyd.png"/></div>
            <div><img src="./mi.png"/></div>
            <div ><img src="./nikon.png"/></div>
            <div ><img src="./oppo.png"/></div>
            <div ><img src="./panasonic.png"/></div>
            <div ><img src="./samsung.png"/></div>
            <div ><img src="./saregma.png"/></div>
            <div ><img src="./sony.png"/></div>
            <div ><img src="./usha.png"/></div>
            <div ><img src="./vivo.png"/></div>
            <div ><img src="./apple.png"/></div>
           
           </div>
        </div>
    );

};
export default Popular_Brands
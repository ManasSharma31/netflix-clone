import React, { useEffect } from 'react'
import { useState } from 'react';
import "./Nav.css";

function Nav() {
    const [show,setShow]=useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100) 
            {
                setShow(true);
            }
            else
            {
                setShow(false);
            }
        });
        return ()=>{
            window.removeEventListener("scroll");
        }
    },[])
    return (
        <div className={`nav ${show && "nav_black"}`}>
        <img className="nav_logo" src="https://i.ytimg.com/vi/GV3HUDMQ-F8/maxresdefault.jpg" alt="Netflix logo"/>
        <img className="nav_pic" src="https://ecommercenews.eu/wp-content/uploads/2013/06/most_common_payment_methods_in_europe.png" alt="Payment"/>
            
        </div>
    )
}

export default Nav

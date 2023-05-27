import React from 'react'
import Style from "./index.module.css"
const Footer = () => {
  return (
  <>
  <div className={Style.footer}>
    <div className={Style.theend}>
    <div className={Style.sol}>
        <h5>About Us</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
        <p>Copyright ©2023 All rights reserved | This template is made with  by Colorlib</p>
    </div>
    <div className={Style.orta}>
        <h5>Newsletter</h5>
        <p>Stay update with our latest</p>
        <form><input type='text'></input><button type='submit'><i class="fa-solid fa-arrow-right"></i></button></form>
    </div>
    <div className={Style.sag}>
        <h5>Follow Us</h5>
        <p>Let us be social</p>
        <div>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-solid fa-basketball"></i>
            <i class="fa-brands fa-behance"></i>

        </div>
    </div> 
    </div>

  </div>
  </>
  )
}

export default Footer

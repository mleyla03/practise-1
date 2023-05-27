import * as React from 'react';

import Style from "./index.module.css"
import { Link } from 'react-router-dom';

export default function Navbar() {


  return (
    <>
      <header>
        <div className={Style.top}>
          <div className={Style.left}>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-solid fa-basketball"></i>
            <i class="fa-brands fa-behance"></i>

          </div>
           < div className={Style.rights}>
          <ul>
            <li><Link className={Style.toplink} to="#">+880 012 3654 896</Link></li>
            <li><Link className={Style.toplink} to="#">Register / Login </Link></li>
          </ul>
        </div>
        </div>
       
        <div className={Style.bottom}>
          <div><img src="https://preview.colorlib.com/theme/security/img/logo.png.webp" alt=""/></div>
          <nav>
            <ul>
              <li><Link className={Style.links} to="">Home</Link></li>
              <li><Link className={Style.links} to="#">About</Link></li>
              <li><Link className={Style.links} to="#">Service</Link></li>
              <li><Link className={Style.links} to="#">Team</Link></li>
              <li><Link className={Style.links} to="#">Price</Link></li>
              <li><Link className={Style.links} to="/blog">Blog</Link></li>
              <li><Link className={Style.links} to="#">Contact</Link></li>
              <li><Link className={Style.links} to ="#">Pages</Link></li>
            </ul>
          </nav>
        </div>

      </header>
    </>
  );
}

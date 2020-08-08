import React from 'react';
import {Link} from "react-router-dom";

const NavBody = () => {
  return (
    <div>
    <section id="HeroBanner">
        <div class="hero-content">
            <p class="hero-fonts">For me it is not just about programming, but the act of
            providing wide and high-quality softwares contributing to the promotion of model forms of organizations.</p>
            <a href="#" class="hero-cta">Hire Me</a>
            <div class="nav-social">
              <div class="nav-single-social">
                <a href="http://facebook.com/Adexconly/"><span class="fa fa-facebook"></span></a>
              </div>
              <div class="nav-single-social">
                <a href="http://facebook.com/Adexconly/"><span class="fa fa-twitter"></span></a>
              </div>
              <div class="nav-single-social">
                <a href="http://wa.me/+2349063282270"><span class="fa fa-whatsapp"></span></a>
              </div>
            </div>
        </div>
    </section>
    </div>
  );
}

export default NavBody;

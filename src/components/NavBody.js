import React from 'react';
import {Link} from "react-router-dom";

const NavBody = () => {
  return (
    <div>
    <section id="HeroBanner">
        <div class="hero-content">
            <p class="hero-fonts">At metcoomedia, it is not just about recording, but the act of creating a great movie.</p>
            <a href="#" class="hero-cta">Hire Me</a>
            <div class="nav-social">
              <div class="nav-single-social">
                <span class="fa fa-facebook"></span>
              </div>
              <div class="nav-single-social">
                <span class="fa fa-instagram"></span>
              </div>
              <div class="nav-single-social">
                <span class="fa fa-youtube"></span>
              </div>
            </div>            
        </div>
    </section>
    </div>
  );
}

export default NavBody;

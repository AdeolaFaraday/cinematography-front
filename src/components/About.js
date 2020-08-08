import React from 'react';
import {Link} from "react-router-dom";

const About = () => {
  return (
<section class="site-section each-service">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 order-md-2">
          <div class="block-16">
            <figure>
              <img src="images/big_image_2.jpg" alt="Image placeholder" class="img-fluid border-image" />

            </figure>
          </div>
        </div>
        <div class="col-md-6 order-md-1">

          <div class="block-15">
            <div class="heading">
              <h2 class="header-fonts">About</h2>
            </div>
            <div class="text mb-5">
            <p class="special-text-color">Goal oriented web developer with strong commitment to collaboration and solution oriented promblem solving.
            Use various web design software to develop customer focused websites and designs.
            Passionate web developer with perchant of meeting deadlines.
            Self motivated developer with good level of working experience on projects.
            As a freelancer i build websites for an affordable price.<br />
            Trust me my services are exactly what you need for your web project.</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
  );
}

export default About;

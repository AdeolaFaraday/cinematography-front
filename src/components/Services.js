import React from 'react';
import {Link} from "react-router-dom";

const Services = () => {
  return (
<section>
  <div class="block-15">
    <div class="heading portfolio-block">
      <h3 class="header-fonts">Services</h3>
    </div>
  </div>
  <div class="row mt-md-5 pt-md-5 container-fluid con-cent">
    <div class="col-lg-4  each-service">
      <div class="abt-block mb-lg-0 mb-md-5">
        <div class="serv_abs serv_bottom">
          <span class="fa fa-adjust"></span>
        </div>
        <h3>DESIGN</h3>
        <p class="special-text-color">I have everything required to produce website that are design flexible with great user interface and user
        experience, making sites easier to navigate.</p>
      </div>
    </div>
    <div class="col-lg-4 my-lg-0 my-md-5 each-service">
      <div class="abt-block">
        <div class="serv_abs serv_bottom">
          <span class="fa fa-connectdevelop"></span>
        </div>
        <h3>DEVELOP</h3>
        <p class="special-text-color">Based on easy routing, awesome functionlities and quality user interface and experience, websites built by me are dynamic, interactive and easy to
          navigate.</p>
      </div>
    </div>
    <div class="col-lg-4 mt-lg-0 mt-md-5 each-service">
      <div class="abt-block">
        <div class="serv_abs serv_bottom">
          <span class="fa fa-server"></span>
        </div>
        <h3>DEPLOY</h3>
        <p class="special-text-color">The purpose of having a website is to make it available to users, and also considering cost, websites are
          deployed to reliable hosting service with affordable hosting price.</p>
      </div>
    </div>
  </div>
</section>
  );
}

export default Services;

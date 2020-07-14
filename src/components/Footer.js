import React from "react";


const Footer = () => (
<footer class="footer-area section-gap">
  <div class="container">
    <div class="row">
      <div class="col-lg-3  col-md-6 col-sm-6">
        <div class="single-footer-widget">
          <h4 class="text-white">Location</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.
          </p>
        </div>
      </div>
      <div class="col-lg-4  col-md-6 col-sm-6 mt-1">
        <div class="single-footer-widget">
          <h4 class="text-white">Phone</h4>
          <p class="number link-color">
            012-6532-568-9746 <br />
            012-6532-569-9748
          </p>
        </div>
      </div>
      <div class="col-lg-5  col-md-6 col-sm-6">
      <h3 class="text-white mt-1">Socials</h3>
        <div class="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
          <div class="footer-social d-flex align-items-center">
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-instagram"></i></a>
            <a href="#"><i class="fa fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom d-flex justify-content-between align-items-center flex-wrap mt-3">
      <p class="footer-text m-0">Design &copy;{new Date().getFullYear()} | Developed by faradayTech</p>
    </div>
  </div>
</footer>    
)

export default Footer;
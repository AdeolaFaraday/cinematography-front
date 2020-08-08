import React from "react";


const Footer = () => (
<footer class="footer-area section-gap"  style={{position: 'absolute', width: '100%', textAlign:'center'}}>
  <div class="container">
    <div class="ro">
      <div class="te" style={{position: 'relative', margin: '2rem 40%'}}>
        <div class="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
          <div class="footer-social d-flex align-items-center">
            <a href="http://facebook.com/Adexconly/"><i class="fa fa-facebook"></i></a>
            <a href="http://twitter.com/ApanisileAdeol2"><i class="fa fa-twitter"></i></a>
            <a href="http://wa.me/+2349063282270"><i class="fa fa-whatsapp"></i></a>
          </div>
        </div>
        <div class="footer-bottom d-flex justify-content-between align-items-center flex-wrap mt-3">
          <p class="footer-text m-0">tech_faraday &copy;{new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  </div>
</footer>
)

export default Footer;

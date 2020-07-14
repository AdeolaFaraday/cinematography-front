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
            <p class="special-text-color">Fatoyinbo, olaniyi owns mentcoomedi, a division of AGFOT NIGERIA registered
            with cooperate affairs commission since 2005 and has been in Moving Making, Musical Video, TV Montage
            and Consultancy services. He is an actor, producer, editor(VFX) supervisor and post production
            supervisor. He is a member of the Assiociation of Nigeria Theather Practitioners (ANTP), which allows him to study
            pre and production stages in filming, during numerous locations.</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
  );
}

export default About;

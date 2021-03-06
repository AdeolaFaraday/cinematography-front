import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {getPortfolios} from '../auth';
import ShowImage from './ShowImage';

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([])


    const loadPortfolios = () => {
        getPortfolios().then(data => {
            setPortfolio(data)
        })
    }

    useEffect(() => {
        loadPortfolios()
    }, [])




 return (
<section class="site-section">
  <div class="block-15">
    <div class="heading portfolio-block">
      <h3 class="header-fonts">Take a look at my completed projects.</h3>
    </div>
  </div>
  <div class="container">
    <div class="row align-items-center">
    {portfolio.map((p, i) => (
      <div class="col-lg-4 col-md-6 order-md-2 each-service">
      <a href={`https://${p.link}`}>
      <div class="block-16">
        <figure>
          <ShowImage portfolio={p} url="portfolio" />
        </figure>
      </div>
      </a>
    </div>
    ))}
    </div>
  </div>
</section>
  );
}

export default Portfolio;

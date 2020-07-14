import React from 'react';
import {Link} from "react-router-dom";
import NavBody from './NavBody';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';


const Home = () => {
  return (
    <div>
    {NavBody()}
    {About()}
    {Services()}
    {Portfolio()}
    {Contact()}
    </div>
  );
}

export default Home;

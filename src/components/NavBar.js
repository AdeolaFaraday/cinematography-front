import React from 'react';
import {Link, withRouter} from "react-router-dom";
import {signout, isAuthenticated} from '../auth';

const NavBar = ({history}) => {
  return (
    <section id="MainContainer">

    <header id="Header">
        <nav class="main-navigation">
            <div class="container clearfix">
                <div class="site-logo-wrap">
                    <a class="logo"  href="/"><h1 class="nav-fonts">tech_faraday</h1></a>
                </div>
                <a href="javascript:void(0)" class="menu-trigger hidden-lg-up"><span>&nbsp;</span></a>
                <div class="main-menu hidden-md-down">
                    <ul class="menu-list">
                        <li><a class="nav-link nav-change" href="javascript:void(0)" data-target="#Services">About</a></li>
                        <li><a class="nav-link nav-change" href="javascript:void(0)" data-target="#About">Services</a></li>
                        {!isAuthenticated() &&  (<li><Link class="nav-link nav-change" to="/signin" href="javascript:void(0)" data-target="#Signin">Signin</Link></li>)}
                        {isAuthenticated() &&  (<li><Link class="nav-link nav-change" to="/dashboard" href="javascript:void(0)" data-target="#Signin">Dashboard</Link></li>)}
                        {isAuthenticated() && (
                        <li class="nav-link nav-change"  onClick={() => signout(() => {history.push('/')})} style={{cursor: 'pointer'}}>Signout</li>
                         )}
                        <li><a class="nav-link nav-change" href="javascript:void(0)" data-target="#Portfolio">Portfolio</a></li>
                        <li><a class="nav-link nav-change" href="javascript:void(0)" data-target="#ContactUs">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div class="mobile-menu hidden-lg-up">
                <ul class="mobile-menu-list">
                    <li><a class="nav-link link-color" href="javascript:void(0)" data-target="#Services">About</a></li>
                    {isAuthenticated() && (<li><Link class="nav-link link-color" to="/dashboard" href="javascript:void(0)" data-target="#Signin">Dashboard</Link></li>)}
                    {!isAuthenticated() && (<li><Link class="nav-link link-color" to="/signin" href="javascript:void(0)" data-target="#Signin">Signin</Link></li>)}
                    {isAuthenticated() && (
                        <li class="nav-link link-color"  onClick={() => signout(() => {history.push('/')})} style={{cursor: 'pointer'}}>Signout</li>
                     )}
                    <li><a class="nav-link link-color" href="javascript:void(0)" data-target="#About">Services</a></li>
                    <li><a class="nav-link link-color" href="javascript:void(0)" data-target="#Portfolio">Portfolio</a></li>
                    <li><a class="nav-link link-color" href="javascript:void(0)" data-target="#ContactUs">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
  </section>
  );
}

export default withRouter(NavBar);

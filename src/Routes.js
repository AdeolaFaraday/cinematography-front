import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Signin from './components/Signin';
import Signup from './components/SIgnup';
import Dashboard from './auth/UserDashboard';
import AddPortfolio from './PrivateRoute/AddPortfolio';
import ManagePortfolios from './PrivateRoute/ManagePortfolios';
import ManageMessages from './PrivateRoute/ManageMessages';

const Routes = () => {
    return (
        <BrowserRouter>
         <NavBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <PrivateRoute path="/dashboard" exact component={Dashboard} />
                <PrivateRoute path="/create/portfolio" exact component={AddPortfolio} />
                <PrivateRoute path="/manage/portfolios" exact component={ManagePortfolios} />
                <PrivateRoute path="/manage/messages" exact component={ManageMessages} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};

export default Routes;

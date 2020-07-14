import React from 'react';
import {isAuthenticated} from './index';
import {Link} from 'react-router-dom';

const Dashboard = () => {

    const {user: {_id, name, email, role}} = isAuthenticated()
    const token = isAuthenticated().token

    const adminLinks = () => {
     return(  <div className="card">
            <h4 className="card-header">Admin Links</h4>
            <ul className="list-group">
                <li className="list-group-item"><Link className="nav-link" to="/create/portfolio">Create Portfolio</Link></li>
                <li className="list-group-item"><Link className="nav-link" to="/manage/portfolios">Manage Database</Link></li>
                <li className="list-group-item"><Link className="nav-link" to="/manage/messages">Read Messages</Link></li>
            </ul>
        </div>
        )
    }

    const adminInfo = () => {
        return (
            <div className="card mb-3">
            <h3 className="card-header">User Information</h3>
            <ul className="list-group">
                <li className="list-group-item">{name}</li>
                <li className="list-group-item">{email}</li>
                <li className="list-group-item">Admin</li>
            </ul>
        </div>
        )
    }

    return (
        <div className="container-fluid mt-5" style={{paddingTop:"50px"}}>
        <div className="row mt-5">
            <div className="col-lg-3 col-sm-12 mb-2">
                {adminLinks()}
            </div>

            <div className="col-lg-9 col-sm-12">
                {adminInfo()}
            </div>
        </div>
        </div>
    )
}

export default Dashboard;

import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getPortfolio, deletePortfolio } from "./apiAdmin";

const ManagePortfolios = () => {
    const [portfolios, setPortfolios] = useState([]);

    const { user, token } = isAuthenticated();

    const loadProducts = () => {
        getPortfolio().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setPortfolios(data);
            }
        });
    };

    const destroy = portfolioId => {
        deletePortfolio(portfolioId, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadProducts();
            }
        });
    };

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <div>
        <div style={{
            height: '100px',
            backgroundColor: "#000"
        }}>

        </div>
            <div className="row container-fluid">
                <div className="col-12">
                    <h2 className="text-center">
                        Total {portfolios.length} Portfolios
                    </h2>
                    <hr />
                    <ul className="list-group">
                        {portfolios.map((p, i) => (
                            <li
                                key={i}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                <strong>{p.description}</strong>
                                <span
                                    onClick={() => destroy(p._id)}
                                    className="badge badge-danger badge-pill"
                                >
                                    Delete
                                </span>
                            </li>
                        ))}
                    </ul>
                    <br />
                </div>
            </div>
            </div>
    );
};

export default ManagePortfolios;

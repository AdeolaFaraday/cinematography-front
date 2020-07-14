import React from "react";
import { API } from "../config";

const ShowImage = ({ portfolio, url }) => (
    <div>
        <img
            class="img-fluid"
            src={`${API}/${url}/photo/${portfolio._id}`}
            alt={portfolio.description}
        />
    </div>
);

export default ShowImage;

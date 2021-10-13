import React from 'react';
import { Link } from 'react-router-dom';


const Service = ({service}) => {
    
    const{name, id, price, image, description} =service;

    return (
        <div className="col-lg-4 col-md-6 colo-12">
            <div className="my-4 mx-2 rounded shadow bg-body pb-4">
                <img className="img-fluid rounded pb-3" src={image} alt="" />
                <h2>{name}</h2>
                <p>Price: {price}</p>
                <p className="p-3">{description.slice(0,100)}</p>
                <Link to={`/booking/${id}`}><button className="btn btn-info">Book {name.toLowerCase()}</button></Link>
            </div>
        </div>
    );
};

export default Service;
import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/error-banner/banner-error.jpg'
const NotFound = () => {
    return (
        <div  className="w-100 row ">
            <div  className=" col-lg-12 d-flex, align-items-center" style={{backgroundImage: "url(" + notFound + ")", backgroundPosition: 'cover',height:'650px', backgroundRepeat:'no-repeat'}}>
                <div  className="mt-5 pt-5">
                    <Link to="/"><button>Go Back</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
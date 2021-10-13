import React from 'react';

const Expert = ({expert}) => {
    const {img, name, expertize} = expert;
    return (
        <div className="col-lg-3 col-md-4 col-6">
            <div className="border rounded bg-info my-4 mx-3 shadow pb-3 bg-light">
                <img className="img-fluid mb-3" src={img} alt="" />
                <h3>{name}</h3>
                <h5>{expertize}</h5>
            </div>
        </div>
    );
};

export default Expert;
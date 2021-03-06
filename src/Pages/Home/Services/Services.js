import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('service.json')
        .then(res => res.json())
        .then(data => setServices(data))
    })
    return (
        <div className="my-5" id="services">
            <h2 className='text-info'>Our Services</h2>
            <div className='row mx-3'>
                {
                    services.map(service => <Service
                    key = {service.id}
                    service = {service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://frightful-labyrinth-57921.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className="container py-5">
            <div className="text-center pb-4">
                <h1>POPULAR PACKAGES</h1>
                <p>The practice involves swishing oil around in your mouth to remove bacteria, which can turn into plaque and cause your teeth to look yellow.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
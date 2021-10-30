import React from 'react';
import { NavLink } from 'react-router-dom';
import './service.css';

const Service = (props) => {
    const { id, name, img, description } = props.service;
    return (
        <div>
            <div className="col">
                <div className="card p-2">
                    <img src={img} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <NavLink to={`/home/${id}`} className="btn btn-color py-2 px-5">More Details</NavLink>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import './ManageAllPackage.css';
const ManageAllPackage = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, []);
    let id = 1;
    return (
        <div>
            <Header></Header>
            <div className="container">
                <h1 className="text-center mb-4"> All packages List:</h1>
                <table className="table table-hover text-center">
                    <thead>
                        <tr>
                            <th scope="col">Serial</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            packages.map(pac => <tr>
                                <th scope="row">{id++}</th>
                                <td><img className="" src={pac.img} alt="" /></td>
                                <td>{pac.name}</td>
                                <td>{pac.description}</td>
                                <td>{pac.price} BDT</td>
                                <td>{pac.duration}</td>
                                <td><button className="btn btn-success mb-2">Update</button><br /><button className="btn btn-danger">Delete</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>

            </div>
            <Footer></Footer>
        </div >
    );
};

export default ManageAllPackage;
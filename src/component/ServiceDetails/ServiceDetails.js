import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const ServiceDetails = () => {

    const { serviceId } = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://frightful-labyrinth-57921.herokuapp.com/packages')
            .then(res => res.json())
            .then(data =>
                setServices(data));
    }, []);
    const details = services.find(service => service._id === serviceId);
    // console.log(details)........................................



    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        // use AXIOS for post into data base
        axios.post('https://frightful-labyrinth-57921.herokuapp.com/placeOrder', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Order successfully complete');
                    reset();
                }
            })
    }
    const { user } = UseAuth();
    return (
        <div>
            <Header></Header>
            <div className="container py-5">
                <div className="row">
                    <div className="pb-5">
                        <h1>We are here to help when you need us</h1>
                        <p>By helping with daily activities, our caregivers enable clients to maintain their normal daily routines. Hourly home care allows clients to use our caregivers on an hourly or as-needed basis. Surrounded by their possessions, pets, and a familiar environment, our clients receive the support they need to enjoy their regular activities and continue living well at home.</p>
                    </div>
                    <div className="col-md-6 border-end">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={details?.img} className="img-fluid h-100" alt="" />
                            </div>
                            <div className="col-md-6">
                                <div className="py-3">
                                    <h1>{details?.name}</h1>
                                    <p>Package Id No. {serviceId}</p>
                                </div>
                                <p>Packages Offering price: ${details?.price}</p><br />
                                <h6>Details:</h6>
                                <p>{details?.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h1 className="text-center mb-5 text-warning">Fill up the Form to Place Oder</h1>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center">
                                <input className="w-50 mb-3"  {...register("name")} type="text" value={user.displayName} required />
                                <input className="w-50 mb-3" {...register("email")} type="email" value={user.email} required />
                                <input className="w-50 mb-3"  {...register("packageId")} type="text" value={serviceId} />
                                <textarea className="w-50 mb-3"  {...register("address")} type="text" placeholder="Address" required />
                                <input className="w-50 mb-3"  {...register("phone")} type="number" placeholder="Phone Number" required />
                                <input className="btn btn-warning w-50 mb-3" type="submit" value="Place Order" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;
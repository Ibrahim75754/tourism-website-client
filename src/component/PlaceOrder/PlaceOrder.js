import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import UseAuth from '../../hooks/UseAuth';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const PlaceOrder = () => {
    const { id } = useParams();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        // use AXIOS for post into data base
        axios.post('http://localhost:5000/placeOrder', data)
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
                <h1 className="text-center mb-5 text-warning">Fill up the Form to Place Oder</h1>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center">
                        <input className="w-50 mb-3"  {...register("name")} type="text" value={user.displayName} required />
                        <input className="w-50 mb-3" {...register("email")} type="email" value={user.email} required />
                        <input className="w-50 mb-3"  {...register("packageId")} type="text" value={id} />
                        <textarea className="w-50 mb-3"  {...register("address")} type="text" placeholder="Address" required />
                        <input className="w-50 mb-3"  {...register("phone")} type="number" placeholder="Phone Number" required />
                        <input className="btn btn-warning w-50 mb-3" type="submit" value="Place Order" />
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PlaceOrder;
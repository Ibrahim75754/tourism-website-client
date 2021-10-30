import React from 'react';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import Banner from './Banner';
import Blog from './Blog';
import ContactUs from './ContactUs';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Blog></Blog>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;
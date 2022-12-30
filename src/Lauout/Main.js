import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div>
            <Header className='fixed'></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
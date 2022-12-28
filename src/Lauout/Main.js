import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div>
            <Header className='fixed'></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
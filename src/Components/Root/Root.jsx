import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <div className='shadow-2xl'>
                <Navbar></Navbar>
            </div>
            <div>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;
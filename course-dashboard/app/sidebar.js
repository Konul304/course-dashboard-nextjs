'use client';
import React from 'react';
import Image from 'next/image'
import {
    Logo,
    girlImg,
    arrow
} from "../public/images/icons.jsx"
import './css/sidebar.css'
import Menu from './components/menu';

const Sidebar = () => {
    return (
        <>
            <div className='sidebar'>
                <div className='logo'>{Logo}</div>
                <Menu />
                <div className='girlImg'>{girlImg}</div>
                <div className='popup'>
                    <p className='message'>Upgrade your plan</p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='goto'>Go to <b>PRO</b></p>
                        <div className='arrowBox'>
                            <div className='arrow'>{arrow}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;

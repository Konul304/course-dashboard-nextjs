'use client';
import React from 'react';
import Image from 'next/image'
import Logo from "../public/images/logo.svg"
import girlImg from "../public/images/girlImg.svg"
import './css/sidebar.css'
import Menu from './menu';
import arrow from "../public/images/arrow.svg"

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Image className='logo'
                src={Logo}
                alt="Picture of the author"
                width="121px"
                height="37px"
            />
            <Menu />
            <Image className='girlImg'
                src={girlImg}
                alt="Picture of the author"
            />
            <div className='popup'>
                <p className='message'>Upgrade your plan</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='goto'>Go to <b>PRO</b></p>
                    <div className='arrowBox'>
                    <Image className='arrow'
                        src={arrow}
                        alt="Picture of the author"
                        width="12px"
                        height="10px"
                    />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;

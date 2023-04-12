import React from 'react';
import Image from 'next/image'
import Logo from "../public/images/logo.svg"
import girlImg from "../public/images/girlImg.svg"
import './css/sidebar.css'
import Menu from './menu';

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
                <div className='d-flex justify-content-between'>
                    <p className='goto'>Go to <b>PRO</b></p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;

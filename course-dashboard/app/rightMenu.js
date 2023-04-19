import React from 'react';
import "./css/rightMenu.css"
import Image from 'next/image';
import {
    notif,
    dropdown,
} from "../public/images/icons.jsx"
import prof from '../public/images/prof.png'
import Statistics from './components/statistics';
import Activity from './components/activity';

const RightMenu = () => {
    return (
        <>
            <div className='container_main'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='notif'>{notif}</div>
                    <div className='profileDiv d-flex align-items-center'>
                    <Image className='prof'
                            src={prof}
                            alt="Picture of the author"
                            width="14px"
                            height="8px"
                        />
                        <div className='d-flex flex-column textDiv'>
                            <span className='name'>Bruno Fernandes</span>
                            <span className='plan'>Basic Plan</span>
                        </div>
                        <div className='drop'>{dropdown}</div>
                    </div>
                </div>
                <Statistics />
                <Activity />
            </div>
        </>

    );
}

export default RightMenu;

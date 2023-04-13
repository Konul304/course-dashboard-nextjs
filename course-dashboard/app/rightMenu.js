import React from 'react';
import "./css/rightMenu.css"
import Image from 'next/image';
import notif from '../public/images/notification.svg'
import Statistics from './components/statistics';
import Activity from './components/activity';


const RightMenu = () => {
    return (
        <>
            <div className='container_main'>
                <div className='d-flex'>
                    <Image className=''
                        src={notif}
                        alt="Picture of the author"
                        width="25px"
                        height="26px"
                    />
                </div>
                <Statistics />
                <Activity />
            </div>
        </>

    );
}

export default RightMenu;

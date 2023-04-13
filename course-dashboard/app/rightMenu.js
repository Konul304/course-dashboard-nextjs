import React from 'react';
import "./css/rightMenu.css"
import Image from 'next/image';
import notif from '../public/images/notification.svg'
import profile from '../public/images/profile.svg'
import dropdown from '../public/images/dropdown.svg'
import Statistics from './components/statistics';
import Activity from './components/activity';


const RightMenu = () => {
    return (
        <>
            <div className='container_main'>
                <div className='d-flex justify-content-between align-items-center'>
                    <Image className=''
                        src={notif}
                        alt="Picture of the author"
                        width="25px"
                        height="26px"
                    />
                    <div className='profileDiv d-flex align-items-center'>
                        <Image className=''
                            src={profile}
                            alt="Picture of the author"
                            width="40px"
                            height="40px"
                        />
                        <div className='d-flex flex-column textDiv'>
                            <span className='name'>Bruno Fernandes</span>
                            <span className='plan'>Basic Plan</span>
                        </div>
                        <Image className='drop'
                            src={dropdown}
                            alt="Picture of the author"
                            width="14px"
                            height="8px"
                        />
                    </div>
                </div>
                <Statistics />
                <Activity />
            </div>
        </>

    );
}

export default RightMenu;

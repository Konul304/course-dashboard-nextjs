import React from 'react';
import "./css/rightMenu.css"
import Image from 'next/image';
import notif from '../public/images/notification.svg'


const RightMenu = () => {
    return (
        <div className='container_main d-flex'>
             <Image className=''
                src={notif}
                alt="Picture of the author"
                width="25px"
                height="26px"
            />
        </div>
    );
}

export default RightMenu;

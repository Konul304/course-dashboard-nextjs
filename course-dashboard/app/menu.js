'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCommentDots, faFolder, faGear, faHouse, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import Link from 'next/link';
config.autoAddCss = false
import { useRouter } from 'next/navigation';


const Menu = () => {
    const router = useRouter();
    return (
        <div className='menu'>
            <Link href='/overview' className='d-flex align-items-baseline'>
                <FontAwesomeIcon icon={faHouse} className='icon' />
                <p>Overview</p>
                {router.pathname === '/overview' && <FontAwesomeIcon icon={faCircle} className='dot ms-4' size='xs' />}
            </Link>
            <Link href='/overview' className='d-flex align-items-baseline'>
                <FontAwesomeIcon icon={faLayerGroup} className='icon' />
                <p>Course</p>
            </Link>
            <Link href='/overview' className='d-flex align-items-baseline'>
                <FontAwesomeIcon icon={faFolder} className='icon' />
                <p>Resources</p>
            </Link>
            <Link href='/overview' className='d-flex align-items-baseline'>
                <FontAwesomeIcon icon={faCommentDots} className='icon' />
                <p>Message</p>
            </Link>
            <Link href='/overview' className='d-flex align-items-baseline mb-0'>
                <FontAwesomeIcon icon={faGear} className='icon' />
                <p>Setting</p>
            </Link>

        </div>
    );
}

export default Menu;

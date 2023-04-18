'use client';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCommentDots, faFolder, faGear, faHouse, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import Link from 'next/link';
config.autoAddCss = false

const Menu = () => {

    const [activeLink, setActiveLink] = useState({ href1: '', clicked: false });


    const handleLinkClick = (href) => {
        setActiveLink({ href1: href, clicked: true });
    }


    return (
        <>
            <div className='menu'>
                <Link href='/overview' onClick={() => handleLinkClick('/overview')}
                    className={`d-flex align-items-baseline ${activeLink.href1 === '/overview' && activeLink.clicked ? 'blue' : ''}`}>
                    <FontAwesomeIcon icon={faHouse} className='icon' />
                    <p>Overview</p>
                    {activeLink.href1 === '/overview' && activeLink.clicked && <FontAwesomeIcon icon={faCircle} className='dot ms-4' size='xs' />}
                </Link>
                <Link href='/course' onClick={() => handleLinkClick('/course')}
                    className={`d-flex align-items-baseline ${activeLink.href1 === '/course' && activeLink.clicked ? 'blue' : ''}`}>
                    <FontAwesomeIcon icon={faLayerGroup} className='icon' />
                    <p>Course</p>
                    {activeLink.href1 === '/course' && activeLink.clicked && <FontAwesomeIcon icon={faCircle} className='dot ms-4' size='xs' />}
                </Link>
                <Link href='/resources' onClick={() => handleLinkClick('/resources')}
                    className={`d-flex align-items-baseline ${activeLink.href1 === '/resources' && activeLink.clicked ? 'blue' : ''}`}>
                    <FontAwesomeIcon icon={faFolder} className='icon' />
                    <p>Resources</p>
                    {activeLink.href1 === '/resources' && activeLink.clicked && <FontAwesomeIcon icon={faCircle} className='dot ms-4' size='xs' />}
                </Link>
                <Link href='/message' onClick={() => handleLinkClick('/message')}
                    className={`d-flex align-items-baseline ${activeLink.href1 === '/message' && activeLink.clicked ? 'blue' : ''}`} >
                    <FontAwesomeIcon icon={faCommentDots} className='icon' />
                    <p>Message</p>
                    {activeLink.href1 === '/message' && activeLink.clicked && <FontAwesomeIcon icon={faCircle} className='dot ms-4' size='xs' />}
                </Link>
                <Link href='/setting' onClick={() => handleLinkClick('/setting')}
                    className={`d-flex align-items-baseline ${activeLink.href1 === '/setting' && activeLink.clicked ? 'blue' : ''}`} >
                    <FontAwesomeIcon icon={faGear} className='icon' />
                    <p>Setting</p>
                    {activeLink.href1 === '/setting' && activeLink.clicked && <FontAwesomeIcon icon={faCircle} className='dot ms-4' size='xs' />}
                </Link>
            </div>
        </>
    );
}


export default Menu;

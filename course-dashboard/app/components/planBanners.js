'use client';
import "../css/banners.css"
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import iconBook from "../../public/images/iconBook.svg"
import iconPen from "../../public/images/iconPen.svg"
import iconHeadphone from "../../public/images/iconHeadphone.svg"
import iconVolume from "../../public/images/iconVolume.svg"
import dotsMenu from "../../public/images/dotsMenu.svg"

function Event({ icon, title, time, bgClassName }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    function handleClickOutside() {
        setIsMenuOpen(false);
    }

    document.body.addEventListener('click', handleClickOutside);

    function handleMenuClick() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className='banner'>
            <div className='d-flex align-items-center'>
                <div className={`${bgClassName} d-flex justify-content-center align-items-center me-3`}>
                    <Image className='img' src={icon} alt='book icon' />
                </div>
                <div>
                    <span className='text1'>{title}</span><br />
                    <span className='text2'>{time}</span>
                </div>
                <Image className='dots' onClick={handleMenuClick} src={dotsMenu} alt='menu' />
            </div>
            {isMenuOpen && (
                <div className='dropMenu' ref={menuRef}>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

const PlanBanners = () => {
    return (
        <>
            <div className='d-flex mt-3'>
                <div className='col1'>
                    <Event
                        bgClassName={'bgBlue'}
                        icon={iconBook}
                        title='Reading - Beginner Topic 1'
                        time='8:00 AM - 10:00 AM'
                    />
                    <Event
                        bgClassName={'bgGreen'}
                        icon={iconHeadphone}
                        title='Listening - Intermediate Topic 1'
                        time='03:00 PM - 04:00 PM'
                    />
                    <Event
                        bgClassName={'bgYellow'}
                        icon={iconVolume}
                        title='Speaking - Beginner Topic 1'
                        time='8:00 AM - 12:00 PM'
                    />
                    <Event
                        bgClassName={'bgOrange'}
                        icon={iconPen}
                        title='Grammar - Intermediate Topic 2'
                        time='8:00 AM - 12:00 PM'
                    />

                </div>
                <div className='col2'>
                    <Event
                        bgClassName={'bgOrange'}
                        icon={iconPen}
                        title='Reading - Beginner Topic 1'
                        time='8:00 AM - 12:00 PM'
                    />
                    <Event
                        bgClassName={'bgYellow'}
                        icon={iconVolume}
                        title='Speaking - Advanced Topic 1'
                        time='07:00 PM - 08:00 PM'
                    />
                    <Event
                        bgClassName={'bgGreen'}
                        icon={iconHeadphone}
                        title='Listening - Beginner Topic 1'
                        time='8:00 AM - 12:00 PM'
                    />
                    <Event
                        bgClassName={'bgBlue'}
                        icon={iconBook}
                        title='Reading - Advanced Topic 1'
                        time='8:00 AM - 12:00 PM'
                    />
                </div>
            </div>
        </>
    );
}

export default PlanBanners;

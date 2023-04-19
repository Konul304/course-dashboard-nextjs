'use client';
import "../css/banners.css"
import React, { useState, useRef } from 'react';
import {
    dotsMenu,
    iconBook,
    iconHeadphone,
    iconPen,
    iconVolume,
} from "../../public/images/icons.jsx"

function Event({ icon, title, time, bgClassName }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    function handleClickOutside() {
        setIsMenuOpen(false);
    }

    document.body.addEventListener('click', handleClickOutside);

    return (
        <div className='banner'>

            <div className='d-flex align-items-center'>
                <div className={`${bgClassName} d-flex justify-content-center align-items-center me-3`}>
                    <div className="img">{icon}</div>
                </div>
                <div>
                    <span className='text1'>{title}</span><br />
                    <span className='text2'>{time}</span>
                </div>
                <div className="dots" onClick={() => setIsMenuOpen(!isMenuOpen)}>{dotsMenu}</div>
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

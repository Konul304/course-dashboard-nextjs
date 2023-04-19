import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCommentDots, faFolder, faGear, faHouse, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';
config.autoAddCss = false;

const Menu = () => {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (href) => {
        setActiveLink(href);
    };

    const menuItems = [
        { href: '/overview', icon: faHouse, text: 'Overview' },
        { href: '/course', icon: faLayerGroup, text: 'Course' },
        { href: '/resources', icon: faFolder, text: 'Resources' },
        { href: '/message', icon: faCommentDots, text: 'Message' },
        { href: '/setting', icon: faGear, text: 'Setting' },
    ];

    return (
        <div className="menu">
            {menuItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => handleLinkClick(item.href)}
                    className={`d-flex align-items-baseline ${activeLink === item.href ? 'blue' : ''
                        }`}
                >
                    <FontAwesomeIcon icon={item.icon} className="icon" />
                    <p>{item.text}</p>
                    {activeLink === item.href && (
                        <FontAwesomeIcon
                            icon={faCircle}
                            className="dot ms-4"
                            size="xs"
                        />
                    )}
                </Link>
            ))}
        </div>
    );
};

export default Menu;

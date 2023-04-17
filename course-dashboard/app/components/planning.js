import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import calendar from "../../public/images/calendar.svg"
import "../css/overview.css"
import PlanBanners from './planBanners';

const Planning = () => {
    return (
        <>
            <div className='d-flex justify-content-between align-items-baseline mt-5'>
                <div className='heading d-flex align-items-baseline justify-content-between'>
                    <p className='me-4'>Planning</p>
                    <Link href={'/overview'}>View All</Link>
                </div>
                <div className=' calendar d-flex'>
                    <Image className='calendarImg'
                        src={calendar}
                        alt="calendar"
                    />
                    <p className='ms-3'>20 March 2020</p>
                </div>
            </div>
            <PlanBanners />
        </>
    );
}

export default Planning;

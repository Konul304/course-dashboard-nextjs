import React from 'react';
import "../css/overview.css"
import Link from 'next/link';
import {search} from "../../public/images/icons.jsx"
import MyCourses from '../components/myCourses';
import Planning from '../components/planning';

const Overview = () => {

    return (
        <>
            <div className='overview_container'>
                <p>Hello <b>BRUNO</b>, welcome back!</p>
                <div className='d-flex justify-content-between align-items-baseline'>
                    <div className='heading d-flex align-items-baseline justify-content-between'>
                        <p className='me-4'>My Courses</p>
                        <Link href={'/overview'}>View All</Link>
                    </div>
                    <div className='d-flex'>
                      {search}
                        <input className='ms-3' type="text" placeholder='Search...' />
                    </div>
                </div>
                <MyCourses/>
                <Planning/>
            </div>
        </>
    );
}

export default Overview;

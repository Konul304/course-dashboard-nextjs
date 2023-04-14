import React from 'react';
import "../css/overview.css"
import Link from 'next/link';
import Image from 'next/image';
import search from "../../public/images/search.svg"
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
                        <Image 
                        src={search}
                        alt="search"
                        />
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

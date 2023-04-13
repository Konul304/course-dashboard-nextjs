import React from 'react';
import '../css/statistics.css'
import Image from 'next/image';
import line from "../../public/images/line.svg"

const Statistics = () => {
    return (
        <>
            <div className='statistics_container'>
                <p>Statistics</p>
                <div className='d-flex'>
                    <div className='flexbox flexbox1 top'>
                        <span>Courses <br />Completed</span>
                        <div className='d-flex justify-content-between align-items-baseline mt-2'>
                            <Image className=''
                                src={line}
                                alt="Picture of the author"
                                width="25px"
                                height={26}
                            />
                            <p className='data'>02</p>
                        </div>
                    </div>
                    <div className='flexbox flexbox2 top'>
                        <span>Total Points <br />Gained</span>
                        <div className='d-flex justify-content-between align-items-baseline mt-2'>
                            <Image className=''
                                src={line}
                                alt="Picture of the author"
                                width="25px"
                                height={26}
                            />
                            <p className='data'>250</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='flexbox'>
                        <span>Courses <br />In Progress</span>
                        <div className='d-flex justify-content-between align-items-baseline mt-2'>
                            <Image className=''
                                src={line}
                                alt="Picture of the author"
                                width="25px"
                                height={26}
                            />
                            <p className='data'>03</p>
                        </div>
                    </div>
                    <div className='flexbox flexbox2'>
                        <span>Tasks <br />Finisheda</span>
                        <div className='d-flex justify-content-between align-items-baseline mt-2'>
                            <Image className=''
                                src={line}
                                alt="Picture of the author"
                                width="25px"
                                height={26}
                            />
                            <p className='data'>05</p>
                        </div>
                    </div>
            </div>
        </div >
        </>
    );
}

export default Statistics;

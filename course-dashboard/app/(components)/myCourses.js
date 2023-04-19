'use client';
import "../(css)/myCourses.css"
import React from 'react';
import {
    top1,
    top2,
    top3,
    top4,
    bottom1,
    bottom2,
    bottom3,
    bottom4,
    paris,
    portugese,
    italian,
    german
} from "@/public/images/icons"
import Progress from 'react-circle-progress-bar'

const MyCourses = () => {
    const defaultProgressStyle = {
        ballStrokeWidth: 4,
        strokeWidth: 15,
        reduction: 0,
        gradient: [{ stop: 0.0, color: '#FFFFFF' }, { stop: 1, color: '#FFFFFF' }],
    };

    return (
        <>
            <div className='mt-3'>
                <div className='d-flex '>
                    <div className='flex flex1'>
                        <div> {top1}</div>
                        <div className="bottom1"> {bottom1}</div>
                        <p>French</p>
                        <span>35 lessons</span>
                        <div className="paris">{paris}</div>
                        <div className='progress'>
                            <Progress
                                progress={75}
                                startDegree={0}
                                background={'#208bee'}
                                // styles={ {transform: 'rotate(270deg)'} }
                                {...defaultProgressStyle}
                            />
                        </div>
                    </div>
                    <div className='flex flex2'>
                        <div className="top2">{top2}</div>
                        <div className="bottom2">{bottom2}</div>
                        <p>Portugese</p>
                        <span>30 lessons</span>
                        <div className="portugese">{portugese}</div>
                        <div className='progress'>
                            <Progress
                                progress={50}
                                background={'#FF7E07'}
                                {...defaultProgressStyle}
                            />
                        </div>
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='flex flex3'>
                        <div className="top3">{top3}</div>
                        <div className="bottom3">{bottom3}</div>
                        <p>Italian</p>
                        <span>20 lessons</span>
                        <div className="italian">{italian}</div>
                        <div className='progress'>
                            <Progress
                                progress={25}
                                background={'#6eb33d'}
                                {...defaultProgressStyle}
                            />
                        </div>
                    </div>
                    <div className='flex flex4'>
                        <div className="top4">{top4}</div>
                        <div className="bottom4">{bottom4}</div>
                        <p>German</p>
                        <span>40 lessons</span>
                        <div className="german">{german}</div>
                        <div className='progress'>
                            <Progress
                                progress={75}
                                background={'#FFC000'}
                                {...defaultProgressStyle}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyCourses;

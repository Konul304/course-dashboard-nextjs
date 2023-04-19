'use client';
import React from 'react';
import "../css/activity.css"
import { useState } from 'react';
import ChartComponent from './chart';

const Activity = () => {
    const data1 = [
        { week: 'W1', count: 40 },
        { week: 'W2', count: 20 },
        { week: "W3", count: 30 },
        { week: "W4", count: 50 },
    ];

    const data2 = [
        { week: 'M1', count: 40 },
        { week: 'M2', count: 20 },
        { week: "M3", count: 30 },
        { week: "M4", count: 50 },
        { week: "M5", count: 30 },
        { week: "M6", count: 50 },
        { week: "M7", count: 40 },
        { week: "M8", count: 40 },
        { week: "M9", count: 50 },
        { week: "M10", count: 30 },
        { week: "M11", count: 20 },
        { week: "M12", count: 50 },
    ];

    const data3 = [
        { week: 'D1', count: 40 },
        { week: 'D2', count: 20 },
        { week: "D3", count: 30 },
        { week: "D4", count: 50 },
        { week: "D5", count: 30 },
        { week: "D6", count: 50 },
        { week: "D7", count: 40 },
    ];

    const [activeTab, setActiveTab] = useState('day');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className='activity_container'>
                <div className='heading d-flex justify-content-between align-items-baseline'>
                    <p>Activity</p>
                    <div className='tabs d-flex'>
                        <p className={activeTab === 'day' ? 'active me-3' : 'me-3'} onClick={() => handleTabClick('day')}>Day</p>
                        <p className={activeTab === 'week' ? 'active me-3' : 'me-3'} onClick={() => handleTabClick('week')}>Week</p>
                        <p className={activeTab === 'month' ? 'active' : ''} onClick={() => handleTabClick('month')}>Month</p>
                    </div>
                </div>
                {activeTab === 'month' && <ChartComponent data={data2} />}
                {activeTab === 'week' && <ChartComponent data={data1} />}
                {activeTab === 'day' && <ChartComponent data={data3} />}
            </div>
        </>
    );
}

export default Activity;

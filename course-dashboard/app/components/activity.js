'use client';
import React from 'react';
import "../css/activity.css"
import { useState } from 'react';
import ChartComponent from './chart';

const Activity = () => {
    const data1 = [
        { week: 'Mon', count: 40 },
        { week: 'Tues', count: 20 },
        { week: "Wed", count: 30 },
        { week: "Thurs", count: 50 },
        { week: "Fri", count: 30 },
        { week: "Sat", count: 50 },
        { week: "Sun", count: 40 },
    ];

    const data2 = [
        { week: 'Jan', count: 40 },
        { week: 'Feb', count: 20 },
        { week: "Mar", count: 30 },
        { week: "Apr", count: 50 },
        { week: "May", count: 30 },
        { week: "June", count: 50 },
        { week: "July", count: 40 },
        { week: "Aug", count: 40 },
        { week: "Sep", count: 50 },
        { week: "Okt", count: 30 },
        { week: "Nov", count: 20 },
        { week: "Dec", count: 50 },
    ];

    const [activeTab, setActiveTab] = useState('week');
    const [yearData, setYearData] = useState(data2);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        if (tab === 'month') {
            setYearData(data2);
        }
        else if (tab === 'week') {
            setYearData(data1);
        }
        else{
            setYearData([]);
        }
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
                {activeTab === 'month' && <ChartComponent data={yearData} />}
                {activeTab === 'week' && <ChartComponent data={data1} />}
            </div>
        </>
    );
}

export default Activity;

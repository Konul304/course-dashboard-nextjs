import React from 'react';
import "../css/activity.css"

const Activity = () => {
    return (
        <>
            <div className='activity_container'>
                <div className='heading d-flex justify-content-between align-items-baseline'>
                    <p>Activity</p>
                    <div className='tabs d-flex'>
                        <p className='me-3'>Day</p>
                        <p className='me-3'>Week</p>
                        <p>Month</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Activity;

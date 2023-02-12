import React from 'react';

import Query from './QueryComponent'

export default function Table(){
    return(
        <div className='table'>
            <div className="table-head">
                <h3>Select</h3>
                <h3>Request</h3>
                <h3>Priority</h3>
                <h3>Department</h3>
                <h3>Sender</h3>
                <h3>Date</h3>
                <h3>Issue</h3>
            </div>
            <div className="table-body">
                <Query/>
            </div>
        </div>
    )
}


import React from 'react';
import {Link} from 'react-router-dom'

import Query from './QueryComponent'

export default function Table(){

    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    const dummyRequests = {
        1:{
            query_name:"Scholarship1",
            dept:"DIRC",
            sender_name:"Mr.Peace",
            date:`${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`,
            issue:"Unsolved"

        },
        2:{
            query_name:"Scholarship2",
            dept:"DIRC",
            sender_name:"Mr.Peace",
            date:`${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`,
            issue:"Unsolved"

        },
        3:{
            query_name:"Scholarship3",
            dept:"DIRC",
            sender_name:"Mr.Peace",
            date:`${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`,
            issue:"Unsolved"

        },
        4:{
            query_name:"Scholarship4",
            dept:"DIRC",
            sender_name:"Mr.Peace",
            date:`${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`,
            issue:"Unsolved"

        },
        5:{
            query_name:"Scholarship5",
            dept:"DIRC",
            sender_name:"Mr.Peace",
            date:`${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`,
            issue:"Unsolved"

        },
        6:{
            query_name:"Scholarship6",
            dept:"DIRC",
            sender_name:"Mr.Peace",
            date:`${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`,
            issue:"Unsolved"

        },
        8:{
            query_name:"Scholarship7",
            dept:"DIRC",
            sender_name:"Mr.Peace",
            date:`${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`,
            issue:"Unsolved"

        },
        9:{
            query_name:"Scholarship8",
            dept:"DIRC",
            sender_name:"Mr.Peace",
            date:`${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`,
            issue:"Unsolved"

        },
        10:{
            query_name:"Scholarship9",
            dept:"DIRC",
            sender_name:"Mr.Peace",
            date:`${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`,
            issue:"Unsolved"

        },
        11:{
            query_name:"Scholarship10",
            dept:"DIRC",
            sender_name:"Mr.Peace",
            date:`${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`,
            issue:"Unsolved"

        },

    }
    let requests = Object.keys(dummyRequests).map((keys) => (<Query query_name={dummyRequests[keys].query_name} dept={dummyRequests[keys].dept} sender_name={dummyRequests[keys].sender_name} date={dummyRequests[keys].date} issue={dummyRequests[keys].issue}/>))
    // for (let x = 1; x == Object.keys(dummyRequests).length; x++){
    //     let query =  <Query query_name={dummyRequests[x].query_name} dept={dummyRequests[x].dept} sender_name={dummyRequests[x].sender_name} date={dummyRequests[x].date} issue={dummyRequests[x].issue}/>
    //     requests.push(query)
    // }

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
                {requests}
            </div>
        </div>
    )
}


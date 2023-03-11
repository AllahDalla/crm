import React from 'react';
import {Link} from 'react-router-dom'

import Query from './QueryComponent'

export default function Table(){

    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    const [tableInfo, setTableInfo] = React.useState({})

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
    React.useEffect(() => {
        async function getTaskboard(){
            const url = 'http://localhost:7000/populate'
            await fetch(url)
                .then(async response => {
                    if(!response.ok){
                        //do nothing but alert the user
                        alert("Taskboard could not be updated!")
                    }else{
                        let file = await response.text()
                        let tabledata = file.split('\n')
                        // console.log(tabledata)
                        // console.log(JSON.parse(tabledata[0]).subject)
                        let updatedtabledata = {}
                        for(let index = 0; index < tabledata.length; index++){
                            if(tabledata[index] !== ''){
                                let data = {
                                    query_name:JSON.parse(tabledata[index]).subject,
                                    dept:"Something for now",
                                    sender_name:"Need to get that",
                                    date:`${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`,
                                    issue:"Unsolved"
                                }
                                updatedtabledata[index] = data
                            }
                        }
                        console.log(updatedtabledata)
                        setTableInfo(updatedtabledata)
                    }
                })

                .catch(async err => {
                    console.log(err)
                })
        }

        getTaskboard()
    }, [])
    let requests = Object.keys(tableInfo).map((keys) => (<Query key={tableInfo[keys]} query_name={tableInfo[keys].query_name} dept={tableInfo[keys].dept} sender_name={tableInfo[keys].sender_name} date={tableInfo[keys].date} issue={tableInfo[keys].issue}/>))
    

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


import React from 'react'
import '../css/admin.css'
import { useNavigate } from 'react-router-dom';

import NavBar from './navbar'
import GmailIcon from '../images/gmail-icon.png'


export default function Admin(){
    const [data, setData] = React.useState([]);
    // const [currentUrl, setCurrentUrl] = React.useState(window.location.href);
    // const currentUrl = window.location.href

    // const handleInputChange = (index, event) => {
    //     const { name, value } = event.target;
    //     const newData = [...data];
    //     newData[index][name] = value;
    //     setData(newData);
    // }

    const dummy_data = [
        {
            key:1,
            platform:"Gmail",
            headers:{name:"Subject", value:"Security alert"},
            body:"No message!"
        },
        {
            key:2,
            platform:"Gmail",
            headers:{name:"Subject", value:"\\\"NBA Players you didn't realize were related?\\\""},
            body:"No message!"
        },
        {
            key:3,
            platform:"Gmail",
            headers:{name:"Subject", value:"\\\"NBA Players you didn't realize were related?\\\""},
            body:"I'm not scared of lions, tigers and bears, but I'm scared of....loving you. Wooohooo, yuh done know a regular tingdakdagdiakbdkhabdkbkabdkabkdbkabdhkbahdkhakhdbkjb aduuaiuhdoaud duabdabdi diabd iadbai di addoahodhaodnoad andandja d dada dadouandlq dwoahdoadbod dobekjd ek adoaedje haifn fdsdkls fshdf skfabfak fid adjedhwnfa  nadadbaidbiadibad auddbkbad"
        }
    ]

    function handleAddingIcomingRequest(event){
        const {name} = event.target
        let updateTaskboardList = []
        data.forEach((object) => {
            // console.log(typeof(object.key) ,typeof(name))
            if(object.key.toString() === name){
            
                async function UpdateTaskboard(updateObject){
                    const url = 'http://localhost:7000/update-taskboard'
                    const requestObject = {
                        method:"POST",
                        headers:{'Content-Type': 'application/json'},
                        body:JSON.stringify(updateObject)
                    }
                    await fetch(url, requestObject)
                        .then(async response => {
                            if(!response.ok){
                                // do nothing
                                alert("An error occured trying to update taskboard!")
                            }else{
                                alert("Taskboard updated successfully!")
                            }
                        })

                        .catch(async error => {
                            console.log(error)
                        })
                }

                UpdateTaskboard(object)
                const updatedItems = data.filter((item) => item.key.toString() !== name);
                setData(updatedItems)
            }
        })
    }

    async function getEmailMessages(){
        const Obj = {
            method:"POST",
            headers:{'Content-Type': 'text/html'},
            body:"Requesting platform requests"
        }

        await fetch("http://localhost:7000/platform-call", Obj)
            .then(async response => {
                if(!response.ok){
                    //do nothing but alert user
                    const alertUserString = `Sign in to Google first by going to /google`
                    alert(alertUserString)
                }else{

                    let res = await response.text()
                    let objects = res.trim().split('\n')
                    for(let index = 0; index < objects.length; index++){
                        let data = {
                            key:JSON.parse(objects[index]).key,
                            platform:JSON.parse(objects[index]).platform,
                            subject:JSON.parse(objects[index]).headers.value,
                            message:JSON.parse(objects[index]).body
                        }
    
                        setData((prev) => (
                            [...prev, data]
                            ))
                    }
                   
                }
                   

            })

            .catch(async error => {
                console.log(await error)
            })
    }
    React.useEffect(()=>{
        getEmailMessages()
    },[])
    return(
        <>
            <NavBar />
            {/* <button className='incoming-btn' onClick={handleIncomingClick}>Incoming</button> */}
            <div className='incoming-table-container'>
                <table className='incoming-table'>
                    <thead>
                        <tr>
                            <th className="table-cell">Platform</th>
                            <th className="table-cell">Subject</th>
                            <th className="table-cell">Snippet</th>
                            <th className="table-cell">Add</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element) => (
                            <tr key={element.key}>
                                <td className="table-cell">
                                    <div className='platform-container'>
                                        <img id='platform-icon' src={GmailIcon} alt="Gmail icon, a red and white envelope"/>{element.platform}
                                    </div>
                                </td>
                                <td className="table-cell">
                                    {element.subject}
                                </td>
                                <td className="table-cell">
                                    {element.message}
                                </td>
                                <td className="table-cell" style={{paddingBottom:"20px"}}>
                                    <button  name={element.key} onClick={handleAddingIcomingRequest}>Add</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
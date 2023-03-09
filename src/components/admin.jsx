import React from 'react'
import '../css/admin.css'

import NavBar from './navbar'


export default function Admin(){
    const [data, setData] = React.useState([]);

    const handleAddRow = () => {
        setData([...data, {
        platform: '',
        subject: '',
        snippet: ''
        }]);
    }

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newData = [...data];
        newData[index][name] = value;
        setData(newData);
    }

    async function handleIncomingClick(){
        console.log("Clicked!")
        const Obj = {
            method:"POST",
            headers:{'Content-Type': 'text/html'},
            body:"Requesting platform requests"
        }

        await fetch("/platform-call", Obj)
            .then(async response => {
                let res = await response.text()
                console.log(res)
            })

            .catch(async error => {
                console.log(await error)
            })
    }
    return(
        <>
            <NavBar />
            <button onClick={handleIncomingClick}>Incoming</button>
            <div className='incoming-table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Platform</th>
                            <th>Subject</th>
                            <th>Snippet</th>
                            <th>Add</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                            <td>
                                <input type="text" name="platform" value={row.platform} onChange={e => handleInputChange(index, e)} />
                            </td>
                            <td>
                                <input type="text" name="subject" value={row.subject} onChange={e => handleInputChange(index, e)} />
                            </td>
                            <td>
                                <input type="text" name="snippet" value={row.snippet} onChange={e => handleInputChange(index, e)} />
                            </td>
                            <td>
                                <button onClick={handleAddRow}>Add</button>
                            </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
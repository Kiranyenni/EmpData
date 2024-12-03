
import React from 'react'

function EmpdataList () {

    const empdata = [

        {
            "id": 1,
            "firstname": "sai kiran",
            "lastname": "yenni",
            "email": "saikiran98yenni@gmail.com"
        },
        {
            "id": 2,
            "firstname": "manikanta",
            "lastname": "g",
            "email": "manimunna2002@gmail.com"
        },
        {
            "id": 3,
            "firstname": "sai kumar",
            "lastname": "s",
            "email": "saikumar@gmail.com"
        }

    ]

    return (
        <div className='table-container'>
            <h1>List Of Emp Data</h1>

            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>firstname</th>
                        <th>lastname</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empdata.map(emp =>
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.firstname}</td>
                                <td>{emp.lastname}</td>
                                <td>{emp.email}</td>
                            </tr>
                        )
                       
                    }
                </tbody>

            </table>
        </div>
        

    )
}

export default  EmpdataList
import React, { Records } from 'react'

export default function ListWithBootstrap() {

    const users =[
        {id: 1, name: 'Anil', email: 'axz@gmail.com', contact: 1111},
        {id: 2, name: 'Raja', email: 'abc@gmail.com', contact: 1111},
        {id: 3, name: 'Rana', email: 'ahuikiu@gmail.com', contact: 1111}
    ]

  return (
    <div>
        <h1>List with Bootstrap Table</h1>
        
        <table>
            <thead>
                    <tr style={{fontWeight: "bold", background: "red", color: "white"}}>
                        <td style={{padding: "10px 20px"}}>Name</td>
                        <td style={{padding: "10px 20px"}}>Email</td>
                        <td style={{padding: "10px 20px"}}>Contact</td>
                    </tr>
            </thead>
            {
                <tfoot>
                    users.map((, i)=>
                    <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                    </tr>)
                </tfoot>
            }
        </table>
    </div>
  )
}

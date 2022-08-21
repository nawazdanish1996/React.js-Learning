import React from 'react';
import Table from 'react-bootstrap/Table';


function NestedList() {

    const users = [
        {name: "Nawaz Danish", email: "nawazdanish1996@gmail.com",
        address: [
            {Hn: "10", city: "Noida", country: "India" },
            {Hn: "10", city: "Keral", country: "India" },
            {Hn: "10", city: "Benglore", country: "India" }
        ]},
        
        {name: "Raja", email: "raja@gmail.com", 
        address:[
            {Hn: "10", city: "Noida", country: "India" },
            {Hn: "10", city: "Keral", country: "India" },
            {Hn: "10", city: "Benglore", country: "India" }
        ]},
        
        {name: "Rana", email: "rana@gmail.com",
        address: [
            {Hn: "10", city: "Noida", country: "India" },
            {Hn: "10", city: "Keral", country: "India" },
            {Hn: "10", city: "Benglore", country: "India" }
        ]}
    ]

  return (
    <div>
      <>
        <h1>Nested list with Nested Array</h1>

        <Table variant="dark" striped>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
            </thead>
            {
                users.map((item) =>
                    <tbody>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>
                                {
                                    item.address.map((data)=>
                                        <table variant="red" striped>
                                            <thead striped>
                                                <tr>
                                                    <th>{data.Hn}</th>
                                                    <th>{data.city}</th>
                                                    <th>{data.country}</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    )
                                }
                            </td>
                        </tr>
                    </tbody>
                )
            }
        </Table>
      </>
    </div>
  )
}

export default NestedList;

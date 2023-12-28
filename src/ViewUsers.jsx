
import React, { useEffect, useState } from "react";
export const Users= (props) => {

    const [users,setUser]=useState([])
const getData= async()=>{
    await fetch("http://localhost:4000/st_data").then((result)=>{
        result.json().then((resp)=>{
          console.warn(resp)
          setUser(resp.data)
        })
      })
}

useEffect(()=>{
    // if(users.length == 0){
    // }
    getData()
    console.log(13245);
    
},[])
    return (
      <div className="App">
       { getData}
        <h1>Get API Call </h1>
        <button onClick={getData}> getData</button>
        <table border="1">
         <tbody>
         <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Password</td>
            <td>Delete</td>
          </tr>
          {
            users.map((item,i)=>
              <tr key={i}>
            <td>{item.name}</td>
            <td>{item.email}</td>
              <td>{item.password}</td>
              <td><button>Delete</button></td>
            </tr>
            )
          }
         </tbody>
        </table>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
      </div>
    );
}
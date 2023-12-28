import React, { useState } from "react";
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(email);

        let data={name,email,password}
        console.log(data);


        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json'
            }
          });
          const result = await response.json();
          console.log(result);
          props.onFormSwitch('login')


// console.warn(data);
//   fetch("http://localhost:4000/register", {
//     method: "POST",
//     mode: 'cors', 
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body:JSON.stringify(data)
//   }).then((resp)=>{
//     // console.warn("resp",resp);;
//     resp.json().then((result)=>{
//       console.warn("result",result)
//     })
//   })

    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name  </label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <br />
            <br />
            <label htmlFor="email">email  </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <br />
            <br />
            <label htmlFor="password">password  </label>
            <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <br />
            <br />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}
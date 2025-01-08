import React, { useState } from 'react'


function Form() {

   const[name, setname] = useState("");
   const[email, setemail] = useState("");
   const[pass, setpass] = useState("");
   
   const Submitinfo = (event) =>{
      setname(event.target.value)
   }

   const Submitemail = (e) =>{
    setemail(e.target.value)
   }

   const Submitpass  = (e) =>{
    setpass(e.target.value)
   }

   const SubmitAllInfo = (e) =>{
    console.log(name,email,pass)
    e.preventDefault()

   }

  return (
    <div>
        <h1>Registration Form</h1>
        <form action='' onSubmit={SubmitAllInfo}>
            <div>
                <label htmlFor="">Name:</label>
                <input type="text" name='name' id='name' placeholder='Enter Your Name' required onChange={Submitinfo} value={name}/>
            </div>
            <div>
                <label htmlFor="">email:</label>
                <input type="text" name='email' id='email' placeholder='Enter Your email' required onChange={Submitemail} value={email}/>
            </div>
            <div>
                <label htmlFor="">password:</label>
                <input type="pass" name='passs' id='pass' placeholder='Enter Your password' required value={pass} onChange={Submitpass}/>
            </div>

            <button type='submit'>SUBMIT</button>

        </form>
    </div>
  )
}

export default Form
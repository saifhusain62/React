import React, { useState } from 'react'

function Usestate() {
     const [text , settext] = useState("");

      const change = (e) =>{
         
        settext(e.target.value);
        
      }

  return (
    <div>

        <input type="text" placeholder='type here' onChange={change} />

        <p>Text Here:{text}</p>

    </div>
  )
}

export default Usestate
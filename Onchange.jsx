import React from 'react'

function Onchange() {
     const handleonChange = (event) =>{
        console.log(event.target.value)
     }

  return (
    <div>
        <input type="text" placeholder='Text here' onChange={handleonChange}/>

    </div>
  )
}

export default Onchange;
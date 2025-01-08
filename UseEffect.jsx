import React, {useEffect, useState} from 'react'

function UseEffect() {
    const [count, setCount] = useState(0);
    const [calculation, setcalculation] = useState(0);
    
    useEffect(()=>{
        document.title = `Chat ${count}`
        setcalculation(()=>count * 1)
       
    },[count])
  return (
    <div>
      <p>Saif Sent You {count} Massege</p>
      <p>calculation:{calculation}</p>
      <button onClick={()=>setCount((cal)=>cal+1)} style={{color:'blue', fontSize:'18px'}}>
        Count Me
      </button>
      
    </div>
  )
}

export default UseEffect
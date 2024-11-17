import React from 'react'
import "./Style.css"
import Saifstyle from "./op.module.css"

function Style() {
  return ( 
    <div>
        <h1 className='saif'>My Name is Saif Husain</h1>
        <h1 className={Saifstyle.Error}>My name is md saif Husain</h1>
    </div>
  )
}

export default Style
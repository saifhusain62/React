import React from 'react'
import styles from "./Map.module.css"




function Map() {
     let Saimum = ["Dal","Holud","Lobon","piaj"];
 
    const handlebyclick = (item)=>{
          console.log(`${item} Bought`)
    }





    return (
        <>
    <div className='container align-items-center'>
        <h1 className={styles.heading}>Healthy Food</h1>
        <ul className={styles.list_group}>
            {Saimum.map((item)=>(
                <li>{item}
                <button className={`${styles.button} btn btn-info`}
            
            onClick={()=>handlebyclick(item)}
            
            >BUTTON</button>
                
                </li>
            ))}
            
        </ul>
    </div>
    </>
  )
}

export default Map
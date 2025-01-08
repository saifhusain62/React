import React from 'react'

function Mychild(props) {
    props.onMathod(("Hello My parent"))
  return (
    <div>
        <p>This is child Compoenent</p>
        <p>{props.Title}</p>
    </div>
  )
}

export default Mychild
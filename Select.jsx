import React, { Component } from 'react'

export default class Select extends Component {
    Formchange = (event)=>{
        console.log(event.target.value)
    }
  render() {
    return (
      <div>
        <select name="category" onChange={this.Formchange} >
            <option value="program">program</option>
            <option value="Funny">Funny</option>
        </select>
      </div>
    )
  }
}

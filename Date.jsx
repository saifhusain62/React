import React, { Component } from 'react'

export default class Date extends Component {
    Formchange = (event)=>{
        console.log(event.target.value)
    }
  render() {
    return (
      <div>
        <input type="date" name='create' onChange={this.Formchange} />
        <textarea name="op"  onChange={this.Formchange}></textarea>
        

        <div>
          <input type="radio" value="Male" name='gender' onChange={this.Formchange} />
          <label htmlFor="gender">Male</label>
          <input type="radio" value="FeMale" name='gender'  onChange={this.Formchange}/>
          <label htmlFor="gender">Female</label>
        </div>
      </div>
    )
  }
}

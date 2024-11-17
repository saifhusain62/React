import React, { Component } from 'react'

export default class FullForm extends Component {
    state = {
        Channel:"",
        category:"",
        date:"",
        area:"",
        gender:"",

        checkbox:false




    }
    Formchange = (event)=>{
       this.setState({
        [event.target.name]: event.target.value
       })
    }
  render() {
    const {Channel,category,date,area,} = this.state

    return (
      <div>
        <input type="text" name='Channel' placeholder='Write Text' onChange={this.Formchange} value={Channel}/>

        <div>
            <select name="category"  onChange={this.Formchange} value={category}>
                <option value="Program">Program</option>
                <option value="Funny">Funny</option>
            </select>
        </div>
        <div>
            <input type="date" name='date' onChange={this.Formchange} value={date}/>
        </div>
        <div>
            <textarea name="area" placeholder='Text here' onChange={this.Formchange} value={area}></textarea>
        </div>
        <div>
            <input type="radio" name='gender' value="Male" onChange={this.Formchange} />
            <label htmlFor="Male">Male</label>
            <input type="radio" name='gender' value="Female" onChange={this.Formchange} />
            <label htmlFor="FeMale">FeMale</label>
        </div>
        <div>
            <input type="checkbox" name='checkbox'/>
        </div>
        <button onClick={()=>console.log(this.state)}>Sumbit</button>
      </div>
    )
  }
}

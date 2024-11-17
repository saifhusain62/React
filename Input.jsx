import React, { Component } from 'react'

export default class Input extends Component {
    FormChange = (event)=>{
        console.log(event.target.value)
    }
  render() {
    return (
      <div>
        <input type="text" name='ChannelName' placeholder='Channel Name' onChange={this.FormChange} />
      </div>
    )
  }
}

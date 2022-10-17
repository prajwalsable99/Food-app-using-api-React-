import React, { Component } from 'react'
import load from '../loadingimg.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center ' style={{height:"3rem"}}>
        <img src={load} alt="loading"></img>
      </div>
    )
  }
}

export default Spinner

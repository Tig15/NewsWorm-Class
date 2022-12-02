import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="container text-center">
        <img className='my-4' src={loading} alt='loading'/>
      </div>
    )
  }
}

export default Spinner
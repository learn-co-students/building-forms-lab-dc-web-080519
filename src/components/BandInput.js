// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  onChange = (e) => {
    this.setState({ name: e.target.value })
  }

  submitForm = e => {
    e.preventDefault()
    this.props.addBand(this.state.name)
    this.setState({ name: '' })
  }

  render() {
    return (
      <form
        onSubmit={e=>this.submitForm(e)}
      >
        <label>Band Name</label>
        <input
          type='text'
          value={this.state.name}
          onChange={this.onChange}
        />
      <input type='submit'/>
      </form>
    )
  }
}

export default BandInput

import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  listBands = () => {
    console.log(this.props.bands);
    return this.props.bands.map(band => {
      return <li>{band}</li>;
    })
  }

  render() {
    return (
      <div>
        <BandInput
          addBand={this.props.addBand}
        />
      <ul>
        {this.listBands()}
      </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (bandName) => dispatch({ type: 'ADD_BAND', payload: bandName })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

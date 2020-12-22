import React from 'react'
import ReactDOM from 'react-dom'
import "semantic-ui-css/semantic.min.css"

import DisplaySeason from './DisplaySeason'
import DisplayError from './DisplayError'
import Spinner from './Spinner'

class App extends React.Component {

  state = {
    latitude: null,
    errorMsg: ''
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({latitude: position.coords.latitude}),
      err => this.setState({errorMsg: err.message})
    )
    console.log(this.state)
  }

  renderContent() {
    if (!this.state.latitude && this.state.errorMsg !== '') 
      return (<DisplayError error={this.state.errorMsg}/>)
    
    if (this.state.latitude && this.state.errorMsg === '') 
      return (<DisplaySeason latitude={this.state.latitude}/>)

    return (<Spinner message='Waiting for data...'/>)
  }

  render(){
    return(
      <div className='ui'>      
        <div className='ui bottom attached segment very padded inverted'>
          <h1 className='ui yellow huge centered header'>
           Seasons App
          </h1>
        </div>     
        {this.renderContent()}  
      </div>
    )
  }
}

ReactDOM.render(
  <App />, document.querySelector('#root')
)

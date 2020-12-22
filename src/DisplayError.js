import React from 'react'

function DisplayError(props) {
  return (
    <div className='large segment ui container'>
      <h3 className='ui center aligned large sub header'>
        Error: {props.error}
      </h3>
    </div>
  )
}

export default DisplayError

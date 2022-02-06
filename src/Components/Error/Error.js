import React from 'react'
import './Error.css'

const Error = ({ error, navigateHome }) => {
  return (
    <div className="error-container">
      <h2 className="error">{error.message}... Refresh page and try again.</h2>
      <button className="errorHome" onClick={navigateHome}>Home</button>
    </div>
  )
}

export default Error
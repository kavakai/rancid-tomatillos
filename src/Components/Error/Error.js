import React from 'react'
import './Error.css'

const Error = ({ error, navigateHome }) => {
  return (
    <div className="error-container">
      <h2 className="error">Something went wrong... Refresh page and try again.</h2>
      <br />
      <details className="error">{error.message}</details>
      <button className="errorHome" onClick={navigateHome}>Home</button>
    </div>
  )
}

export default Error
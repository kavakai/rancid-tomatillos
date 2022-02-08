import React from 'react'
import './Error.css'

const Error = ({ error, navigateHome }) => {
  let message = ''
  switch (error.code) {
    case error.code >= 400 && error.code < 500:
      message = "Where is that file?... Sorry. Refresh page and try again"
      break;
    case error.code >= 500: 
      message = "Oops, our server is napping... Refresh page and try again"
    }
  return (
    <div className="error-container">
      <h2 className="error">{message}</h2>
      <br />
      <details className="error">{error.message}</details>
      <button className="errorHome" onClick={navigateHome}>Home</button>
    </div>
  )
}

export default Error
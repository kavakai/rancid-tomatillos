import React from 'react'
import './Error.css'

const Error = ({ error }) => {
  let message = ''
  if (error < 500) {
    message = "Where is that file?... Sorry. Refresh page and try again"
  } else {
    message = "Oops, our server is napping... Refresh page and try again"
  }
  return (
    <div className="error-container">
      <h2 className="error">{error} Error, {message}</h2>
    </div>
  )
}

export default Error
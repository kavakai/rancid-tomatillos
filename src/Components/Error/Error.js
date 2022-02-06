import React from 'react'
import './Error.css'

const Error = (error) => {
  return <h2 className="error">{error.message}</h2>;
}

export default Error
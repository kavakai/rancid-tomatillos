import React from 'react'
import './Error.css'

const Error = ({ error, clearFiltered }) => {
  let message
  let searchErr
  if (error < 500) {
    message = "Where is that file?... Sorry. Refresh page and try again"
  } else if (error >= 500) {
    message = "Oops, our server is napping... Refresh page and try again"
  } else {
    searchErr = error
  }
  
  return (

    <div className="error-container">
      {message
        ? <h2 className="error">{searchErr} Error, {message}</h2>
        : <>
            <h2 className="error">{searchErr}</h2>
            <button onClick={() => {clearFiltered()}}>Go Back</button>
          </>
      }
    </div>
  )
}

export default Error
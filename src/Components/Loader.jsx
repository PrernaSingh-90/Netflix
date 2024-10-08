import React from 'react'
import spinner from '../spinner.gif'

function Loader() {
  return (
    <div>
      <div className="img">
        <img src={spinner} />
      </div>
    </div>
  )
}

export default Loader

import React from 'react'

function Description({ title, desc }) {
  return (
    <div className='card--about-container'>
      <p className='card--about-title'>{ title }</p>
      <p className='card--about-description'>{ desc }</p>
    </div>
  )
}

export default Description
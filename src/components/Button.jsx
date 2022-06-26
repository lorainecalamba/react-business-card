import React from 'react';

function Button({ icon, text, bgColor }) {
  return (
    <button type='button' className='btn' style={{ backgroundColor: bgColor }}>{ icon } { text }</button>
  )
}

export default Button
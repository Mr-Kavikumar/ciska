import React from 'react'

function Headings(props) {
  return (
    <div>
      <p  className='text-4xl font-semibold text-purple-700'>
        {props.title1}
        <span className='text-4xl font-semibold text-black'>
        {props.title2}
      </span>
      </p>
      
    </div>
  )
}

export default Headings

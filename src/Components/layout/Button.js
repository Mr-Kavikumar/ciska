import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='bg-purple-700 py-2 px-5 rounded-full mt-4 outline-none hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
        {props.title}
      </button>
    </div>
  )
}

export default Button

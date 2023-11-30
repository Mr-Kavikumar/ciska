import React from 'react'

function MembersCard(props) {
  return (
    <div>
    <div className='flex flex-col items-center justify-between bg-purple-400 border-2 
    border-yellow-300 md:border-none md:w-full p-5 cursor-pointer rounded-lg '>
      <div className='w-3/5'>
        <img src={props.img}>
        </img>
      </div>
      <div>
        <h3>
         {props.name}
        </h3>
        <p>
            {props.job}
        </p>
        <p>
            {props.institution}
        </p>
        <p>
            {props.event}
        </p>
        <p>
            {props.contact}
        </p>
        <p>
            {props.batch}
        </p>
      </div>
    </div>
    </div>
  )
}

export default MembersCard

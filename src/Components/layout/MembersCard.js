import React from 'react'


function MembersCard(props) {
    return (
        <div>
            <div className='flex flex-col items-center justify-between bg-white border-2 
    border-black w-full md:w-full p-5 cursor-pointer rounded-lg '>
                <div className='w-4/5'>
                    <img className='h-40 w-full'src={props.img}>
                    </img>
                </div>
                <div className='flex flex-row my-5 justify-content space-x-5'>
                <div>
                <h3 className='font-semibold text-lg '>
                        Name
                    </h3>
                    <p>
                    Job
                    </p>
                    <p>
                        Institution
                    </p>
                    <p>
                        Event
                    </p>
                    <p>
                        Contact
                    </p>
                    <p>
                        Batch
                    </p>
                </div>
                <div  >
                    :<br/>:<br/>:
                    <br/>: <br/>: <br/>:              </div>
                <div>
                <h3 className='font-semibold text-lg'>
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
        </div>
    )
}

export default MembersCard

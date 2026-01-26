import React from 'react'

const Prop2 = (props) => {

  // console.log(props.user)
  return (
    <div className='mt-48 bg-amber-700'>
      <h1>this is prop2 me user {props.user}</h1>
      
      {/* <button className='bg-stone-400 p-4 text-amber-100 text-lg'>
        {props.text}
      </button> */}

      
      {props.buttons.map((text,idx)=>(
        <button key={idx} className='bg-stone-700 p-4 text-amber-100 text-lg m-8 border'>
          {text}
        <div style={{marginTop: '192px', backgroundColor: '#b45309'}}>
          <h1>fsdlfj</h1>
        </div>
        </button>
      ))}
    </div>
  )
}

export default Prop2

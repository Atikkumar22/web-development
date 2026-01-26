import React from 'react'

// const age = 25 //funtion ke bahar likhe to sakte h var per it is not a good practice here

const Prop1 = (props) => {
const age =25
const arr = ['Atik', 'shivam', 'Suraj', 'Sumit']
  return (
    <div className='m-25 bg-amber-200'>

       <h1> {age} </h1> {/*kuch bhi js related likhne ke liye hum use tags ke under curlybrackets me likhenge otherwise wo var ka data print ni hoga bs var name likh ke ayega */}
       
       <h1>{arr} :- shows all the elements</h1>
       
       <h1>{arr.length} :- shows the length of the array</h1>
       
       <h1>{arr[0]} :- shows the element at the index</h1>
       
       <h1> {arr.map(function(){
        return <h1>'yoyoyo'</h1>
       })} :- map func runs the loop, number of the time the elements are and replace the return value with the elements of the array  in this instance</h1>

       <h1> {arr.map(function(elem){
        return <h1>{elem} is most successful man</h1>
       })}</h1>

       {/* PROP DRILLING */}

       <h1>prop1 me user: {props.user}</h1>

    </div>
  )
}

export default Prop1;

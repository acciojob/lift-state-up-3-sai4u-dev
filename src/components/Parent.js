import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {
    const [selectedOption, setselectedOption] = useState("")
  return (
    <div className=' parent h-[70vh] w-[80vw] bg-green-400 text-black p-3'>
        <h1 className='text-3xl m-3'>Parent Component</h1>
        <Child1 setselectedOption={setselectedOption}/>
        <Child2 setselectedOption={setselectedOption}/>

        <p>Selected Option: {selectedOption}</p>
    </div>
  )
}

export default Parent
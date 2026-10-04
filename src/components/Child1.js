import React from 'react'

function Child1({setselectedOption}) {
  return (
    <div className='h-[20vh] w-[60vw] bg-[#C85B1B] text-black p-2'>
        <h2 className='text-3xl m-3'>Child Component 1</h2>
        <button 
        className='p-2 bg-white border-2 border-black cursor-pointer hover:bg-gray-200'
        onClick={()=>setselectedOption("Option 1")}
        >Option 1</button>
    </div>
  )
}

export default Child1
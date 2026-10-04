import React from 'react'

function Child2({setselectedOption}) {
    
  return (
    <div className='h-[20vh] w-[60vw] bg-yellow-400 text-black p-2'>
        <h2 className='text-3xl m-3'>Child Component 2</h2>
        <button 
        className='p-2 bg-white border-2 border-black cursor-pointer hover:bg-gray-200'
        onClick={()=>setselectedOption("Option 2")}
        >Option 2</button>
    </div>
  )
}

export default Child2
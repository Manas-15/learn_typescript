import React from 'react'

const InputField = () => {
  return (
    <div className='mt-5'>
     <form>
        <input type='text' placeholder='Enter task' />
        <button className='btn btn-success'>Submit</button>
     </form>
    </div>
  )
}

export default InputField

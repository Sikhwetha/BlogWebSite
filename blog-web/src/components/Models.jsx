import React from 'react'

const Models = ({isOpen, onclose}) => {
  return (
    <div className={`fixed top-20 left-0 w-full flex items-center justify-center ${isOpen? "":"hidden"}`}>
        <div className=''>
            <div className='bg-green-500 text-center p-5 h-96 lg:w-[500px] rounded shadow-md'>
              <h2 className='text-xl font-semibold mb-4 mt-6 uppercase'>Please Log In Here</h2>
             <form className='px-4'>
               {/* email */}
               <div className='mb-5
              '>
                <input type='email'  name='email' id='email' placeholder='enter your email' className='w-full rounded-md border bg-white py-3 px-5 text-base font-medium outline-none focus:border-green-900'/>
              </div>
              {/* password */}
              <div className='mb-5'>
                <input type='password'  name='password' id='password' placeholder='enter your password' className='w-full rounded-md border bg-white py-3 px-5 text-base font-medium outline-none focus:border-green-900'/>
              </div>
              <div>
                <button className='hover:shadow-md rounded-md bg-black text-white hover:bg-orange-600 py-3 px-6 text-base font-semibold outline-none'>Log in</button>
              </div>
             </form>
             {/* model close */}
             <button onClick={onclose} className='bg-white hover:bg-orange-500 py-2 px-8 font-semibold  rounded inline-flex items-center mt-8'>close</button>
            </div>
        </div>
    </div>
  )
}

export default Models
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='flex h-screen justify-center items-center gap-5 bg-gradient-to-t from-slate-200 to-slate-100'>
        
      <div className="box h-[550px] w-[600px] border mt-5 flex justify-center items-center flex-col rounded-md shadow-md p-3">
        <div className=' text-center w-[100%]'>
        <h2 className='text-3xl font-bold capitalize text-slate-700 mb-6'>sign up</h2>
        </div>
        <form className='flex flex-col gap-3 w-[70%]'>
           <label htmlFor="name">Enter Name</label>
            <input type="text" name='name' className='h-9 w-full rounded-md outline-none  '/>
            <label htmlFor="name">Enter Email</label>
            <input type="email" name='email' className='h-9 w-full rounded-md outline-none'/>
            <label htmlFor="name">Enter Password</label>
            <input type="password" name='password' className='h-9 w-full rounded-md outline-none'/>
            <button className='bg-slate-500 w-[100%] mt-3 mx-auto rounded-lg text-white font-bold py-2 flex items-center justify-center uppercase'>Sign Up</button>
            <button className='bg-red-500 w-[100%] mx-auto rounded-lg text-white font-bold py-2 flex items-center justify-center uppercase'>continue with google</button>
            <h2 className='mt-2 capitalize'>Already have an account ?<Link to='/sign-in'><span className='capitalize text-blue-600'>sign in</span></Link> </h2>
        </form>
      </div>
    </div>
  )
}

export default Signup

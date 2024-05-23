import React from 'react'
import { Link } from 'react-router-dom'

export default function Employeepage() {
  return (
    <div className='md:p-5 p-3 md:mt-5 text-sm'>
      <h1 className='md:text-xl font-bold'>Dashboard</h1>
      <p className='md:my-2 my-1 text-sm md:text-l text-gray-800'>Welcome to the Employee Attendance Tracker Employee Dashboard !</p>
      <div className='md:flex md:flex-row flex flex-col gap-5'>
        <Link to={'/MarkAttendance'}>
          <div className='bg-gray-600 w-fit mt-2 md:mt-10 text-white p-5 cursor-pointer hover:-translate-y-2'>
            <div className='flex gap-4 items-center'>
              <i class="fa-solid fa-address-card md:text-xl text-[70%]"></i>
              <p className='text-gray-300 font-semibold md:text-[100%] text-[70%]'>Mark Attendance</p>
            </div>
            <div className='text-center md:gap-10 gap-5 mt-3'>
              <i class="fa-solid fa-user md:text-[600%] text-[300%]"></i>
            </div>
          </div>
        </Link>
        <Link to={'/SubmitWork'}>
          <div className='bg-gray-600 w-fit md:mt-10 px-8 md:px-12 text-white p-5 hover:-translate-y-2.5'>
            <div className='flex gap-4 items-center'>
              <i class="fa-solid fa-square-check md:text-[100%] text-[70%]"></i>
              <p className='text-gray-300 font-semibold text-[70%] md:text-[100%]'>Submit Work</p>
            </div>
            <div className='text-center md:gap-10 gap-5 mt-3'>
              <i class="fa-solid fa-briefcase text-[300%] md:text-[600%]"></i>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

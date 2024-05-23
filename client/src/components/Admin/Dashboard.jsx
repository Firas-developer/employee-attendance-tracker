import React, { useState } from 'react'
import axios from 'axios'
export default function Dashboard() {
    var [employeeCount, setEmployeeCount] = useState()
    useState(() => {
        axios.get("http://localhost:5000/employeeList").then((data) => {
            setEmployeeCount(data.data.length);
        })
    }, [])
    return (
        <div className='md:p-5 p-3 md:mt-5'>
            <h1 className='md:text-xl font-bold'>Dashboard</h1>
            <p className='md:my-2 my-1 text-sm md:text-l text-gray-800'>Welcome to the Employee Attendance Tracker Admin Dashboard !</p>
            <div className='md:flex md:flex-row md:justify-around flex flex-col gap-2 items-center'>
                <div className='bg-gray-600 w-fit md:h-48 mt-2 md:mt-10 text-white p-5'>
                    <div className='flex gap-4 items-center'>
                        <i class="fa-solid fa-address-card md:text-xl text-[70%]"></i>
                        <p className='text-gray-300 font-semibold text-[70%] md:text-[100%]'>Total Employees</p>
                    </div>
                    <div className='flex items-center md:gap-10 gap-5 mt-3'>
                        <i class="fa-solid fa-user md:text-[600%] text-[300%]"></i>
                        <p className='text-3xl text-bold'>{employeeCount}</p>
                    </div>
                </div>
                <div className='bg-gray-600 w-fit md:h-48 md:mt-10 text-white p-5'>
                    <div className='flex gap-4 items-center'>
                        <i class="fa-solid fa-square-check md:text-xl text-[70%]"></i>
                        <p className='text-gray-300 font-semibold text-[70%] md:text-[100%]'>On Time Today</p>
                    </div>
                    <div className='flex items-center md:gap-10 gap-5 mt-3'>
                        <i class="fa-solid fa-circle-notch text-[300%] md:text-[600%]"></i>
                        <p>count</p>
                    </div>
                </div>
                <div className='bg-gray-600 w-fit md:h-48 md:mt-10 text-white p-5'>
                    <div className='flex gap-4 items-center'>
                        <i class="fa-solid fa-circle-exclamation md:text-xl text-[70%]"></i>
                        <p className='text-gray-300 font-semibold text-[70%] md:text-[100%]'>Late Today</p>
                    </div>
                    <div className='flex items-center md:gap-10 gap-5 mt-3'>
                        <i class="fa-solid fa-circle-notch text-[300%] md:text-[600%]"></i>
                        <p>count</p>
                    </div>
                </div>
                <div className='bg-gray-600 w-fit md:h-48 md:mt-10 text-white p-5'>
                    <div className='flex gap-4 items-center'>
                        <i class="fa-solid fa-bell md:text-xl text-[70%]"></i>
                        <p className='text-gray-300 font-semibold text-[70%] md:text-[100%]'>Attendance <br /> Percentage</p>
                    </div>
                    <div className='flex items-center md:gap-10 gap-5 mt-3'>
                        <i class="fa-solid fa-circle-notch text-[300%] md:text-[600%]"></i>
                        <p>count</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

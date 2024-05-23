import React, { useState } from 'react'
import axios from 'axios'
export default function WorkForm() {
    var [success,setSucess] = useState(false)
    function handleSubmit(e) {
        e.preventDefault()
        const report = e.target.report.value
        axios.post("http://localhost:5000/sendmail", { report: report })
        setSucess(!success)
        
    }
    return (
        <div>
            <h1 className='m-5 font-bold text-sm md:text-xl'>WORK FORM</h1>
            <p className='m-5 text-sm'>Management <span className='text-sm'> <i class="fa-solid fa-greater-than "></i> </span> Work <span className='text-sm'><i class="fa-solid fa-greater-than"></i> </span> Work Form </p>
            <section class="bg-white text-sm">
                <div class="md:py-8 px-4 mx-auto max-w-screen-md">
                    <h2 class="mb-2 text-xl md:text-4xl tracking-tight font-extrabold text-center text-gray-900">Work Form</h2>
                    <p class="mb-8 font-light text-center text-gray-500 sm:text-xl">Submit Your Daily Work Reports</p>
                    <form action="#" class="space-y-5" onSubmit={(e) => handleSubmit(e)}>
                        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900">Employee Name</label>
                        <input name='name' type="text" id="name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Employee Name" required />
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Work Report</label>
                        <textarea name='report' id="message" rows="6" class="block p-2.5 pb-16 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Submit your format like this: 

Employee id: <enter your id>
Positon: <enter your position>
Date: <enter date>
Work Assigned: <enter your work>
start date : <enter start date>
end date : <enter end date>
total hours : <enter no of hours you worked>"></textarea>

                        <button type="submit" class="bg-gray-700 text-white p-1 rounded px-2">Submit Report</button>
                    </form>
                </div>
            </section>
            {/* Success Section to delete */}
            <div style={success ? { display: "block" } : { display: "none" }} className='absolute bg-white shadow-xl text-center flex flex-col gap-5 text-gray-800 p-5 text-sm shadow-gray-400 top-[20%] md:top-[40%] left-[33%] md:left-[45%] w-fit md:w-[20%]'>
                <i class="fa-solid fa-circle-check text-4xl md:text-5xl md:mb-5"></i>
                <p className='font-bold md:text-2xl'>Successfully Work Report send !</p>
                <button onClick={()=>{setSucess(!success); location.reload()}} className='mt-5 bg-green-600 p-1 px-2 text-white'>Continue</button>
            </div>
        </div>
    )
}

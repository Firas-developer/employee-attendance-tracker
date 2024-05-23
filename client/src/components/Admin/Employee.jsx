import '../../../src/index.css'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import logo from "../../assets/logo.png"
import auth from '../../firebase.jsx'
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import axios from 'axios'
import '../../index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Employee() {
    var [empList, setEmpList] = useState([])
    useEffect(() => {
        axios.get("https://employee-attendance-tracker-server.vercel.app/employeeList").then((data) => {
            setEmpList(data.data)
        })
    }, [])
    var navigate = useNavigate()
    var [createEmployee, setEmployee] = useState(false)
    var [editEmployee, setEditEmployee] = useState(false)
    var [showAlert,setShowAlert] = useState(false)

    //function to show Alert
    function Alert(eid){
        setShowAlert(!showAlert)
        axios.post("https://employee-attendance-tracker-server.vercel.app/deleteEmployee",{eid:eid})
    }

    //Function to create employee
    const handleEmployee = () => {
        setEmployee(!createEmployee)
    }

    //Fuction to edit employee
    const EditEmployee = () => {
        setEditEmployee(!editEmployee)
    }

    // Employee details storing function
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        const eid = e.target.id.value
        const position = e.target.position.value
        createUserWithEmailAndPassword(auth, email, password).then(() => {
            e.target.password.value = "";
            e.target.email.value = "";
            e.target.name.value = "";
            e.target.position.value = "";
            e.target.id.value = "";
            toast.success('Employee Created Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            axios.post("https://employee-attendance-tracker-server.vercel.app/addEmployee", { name: name, eid: eid, position: position, email: email })
            setEmpList([...empList, { name: name, eid: eid, position: position, email: email }])

        }).catch(err => {
            alert(err.code)
        })
    }

    //Function to delete employee
    function deleteEmployee() {
        location.reload()
        setShowAlert(!showAlert)
    }

    return (
        <div className='flex'>
            <div className='bg-gray-800 text-gray-300 w-[30%] text-sm md:text-l md:w-[20%] h-[100vh] md:p-5 p-3'>
                <p className='font-bold mb-12 mt-5  text-center text-white'>Employee Attendance Tracker</p>
                <h1 className='md:text-[80%] text-[70%] font-serif font-semibold'>MAIN</h1>
                <Link to={'/adminDashboard'}>
                    <div className='flex md:mx-2 cursor-pointer md:mt-3 gap-2 items-center p-1 hover:bg-gray-700 hover:p-1'>
                        <i class="fa-solid fa-house text-[80%] md:text-[100%]"></i>
                        <p className='font-sans text-[80%] md:text-[100%]'>Dashboard</p>
                    </div>
                </Link>
                <div className='flex md:mx-2 cursor-pointer md:mt-3 md:gap-3 gap-2 items-center p-1 active'>
                    <i class="fa-solid fa-user text-[80%] md:text-[100%]"></i>
                    <p className='font-sans text-[80%] md:text-[100%]'>Employees</p>
                </div>
                <hr className='text-white md:mt-5 my-2' />
                <h1 className='md:text-[80%] text-[70%] font-serif font-semibold'>MANAGEMENT</h1>
                <Link to={'/AttendanceReport'}>
                    <div className='flex md:mx-2 cursor-pointer mt-3 gap-3 items-center p-1 hover:bg-gray-700 hover:p-1'>
                        <i class="fa-regular fa-calendar text-[80%] md:text-[100%]"></i>
                        <p className='font-sans text-[80%] md:text-[100%]'>Attendance Report</p>
                    </div>
                </Link>
                <hr className='text-white md:mt-5 my-2' />
                <h1 className='md:text-[80%] text-[70%] font-serif font-semibold'>WORK</h1>
                <Link to={'/WorkReport'}>
                    <div className='flex md:mx-2 cursor-pointer mt-3 gap-3 items-center p-1 hover:bg-gray-700 hover:p-1'>
                        <i class="fa-solid fa-briefcase text-[80%] md:text-[100%]"></i>
                        <p className='font-sans text-[80%] md:text-[100%]'>Work Report</p>
                    </div>
                </Link>
                <button onClick={() => { signOut(auth); navigate('/adminlogin') }} className='flex items-center gap-2 cursor-pointer justify-center absolute bottom-5 left-7 w-fit hover:bg-gray-700 hover:p-1 hover:px-2 p-1 font-bold px-2'>
                    <i class="fa-solid fa-arrow-right-from-bracket text-[80%] md:text-[100%]"></i>
                    <h1 className='text-[80%] md:text-[100%]'>Log Out</h1>
                </button>
            </div>
            <div className='md:w-[80%] w-[70%] h-fit'>
                <div className='shadow-xl p-3 shadow-gray-200 items-center flex justify-between '>
                    <img src={logo} alt="" className='md:w-10 w-7 rounded-full' />
                    <p className='font-semibold text-[80%] md:text-[100%]'>Administrator</p>
                </div>
                <div className='p-5 mt-5'>
                    <div className='md:flex md:justify-between'>
                        <div>
                            <h1 className='md:text-xl text-sm font-bold'>Employee</h1>
                            <p className='text-sm my-2'>Main <span className='font-bold text-sm'><i class="fa-solid fa-greater-than "></i></span> Employee <span className='font-bold text-sm'><i class="fa-solid fa-greater-than "></i></span> Employee List</p>
                        </div>
                        <button className='text-sm bg-green-700 h-fit p-1 md:p-2 text-white px-2 font-semibold' onClick={handleEmployee}> + Add New Employee</button>
                    </div>
                </div>
                <div className='md:p-5 shadow-xl shadow-black-500'>
                    <table>
                        <tr>
                            <th>Employee ID</th>
                            <th>Empoyee Name</th>
                            <th>Position</th>
                            <th>Attendance</th>
                            <th>Action</th>
                        </tr>
                        {
                            empList.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{item.eid}</td>
                                        <td>{item.name}</td>
                                        <td>{item.position}</td>
                                        <td>100 %</td>
                                        <td>
                                            <button onClick={EditEmployee}><i class="fa-solid fa-pen-to-square mr-1 md:mr-3"></i></button>
                                            <button onClick={()=>Alert(item.eid)}><i class="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
            </div>

            {/* Alert Section to delete */}
            <div style={showAlert ? { display: "block" } : { display: "none" }} className='absolute bg-white shadow-xl text-center flex flex-col gap-5 text-gray-800 p-5 text-sm shadow-gray-400 top-[5%] md:top-[10%] left-[35%] md:left-[45%] w-fit md:w-[20%]'>
                <i class="fa-solid fa-circle-exclamation text-4xl md:text-5xl md:mb-5"></i>
                <p>Are you sure want to to Delete?</p>
                <div className='flex gap-3 items-center justify-center mt-5'>
                    <button onClick={deleteEmployee} className='p-1 bg-green-600 text-white px-2'>Yes, Delete</button>
                    <button onClick={Alert} className='p-1 bg-red-600 text-white px-2'>No</button>
                </div>
            </div>

            {/* Employee Create section */}
            <div style={createEmployee ? { display: "block" } : { display: "none" }}>
                <div className='absolute bg-white shadow-xl shadow-gray-400 top-[20%] left-[35%] md:left-[45%] w-fit md:w-[25%]'>
                    <div className='flex justify-between pt-4 px-4 font-bold'>
                        <p>Add New Employee</p>
                        <i class="fa-solid fa-xmark cursor-pointer" onClick={handleEmployee}></i>
                    </div>
                    <hr className='font-bold text-black mt-3' />
                    <form action="" onSubmit={(e) => handleSubmit(e)} className='p-8 flex flex-col gap-3'>
                        <p className='text-sm'>Name (without any space)</p>
                        <input name='name' type="text" placeholder='Employee Name' className='p-1 text-sm outline-none border border-gray-400 w-full ml-1' />
                        <p className='text-sm'>Employee Position</p>
                        <input name='position' type="text" placeholder='Employee Position' className='p-1 text-sm outline-none border border-gray-400 w-full ml-1' />
                        <p className='text-sm'>Employee ID</p>
                        <input name='id' type="number" placeholder='Employee ID' className='p-1 text-sm outline-none border border-gray-400 w-full ml-1' />
                        <p className='text-sm'>Email Address</p>
                        <input name='email' type="email" placeholder='Enter Email' className='p-1 text-sm outline-none border border-gray-400 w-full ml-1' />
                        <p className='text-sm'>Employee Password</p>
                        <input name='password' type="password" placeholder='Password' className='p-1 text-sm outline-none border border-gray-400 w-full ml-1' />
                        <div className='flex gap-2 mt-5'>
                            <button className='bg-green-800 text-white p-1 text-sm'>Submit</button>
                            <div className='bg-red-600 text-white p-1 text-sm cursor-pointer' onClick={handleEmployee}>Cancel</div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Employee Edit Detail section */}
            <div style={editEmployee ? { display: "block" } : { display: "none" }}>
                <div className='absolute bg-white shadow-xl shadow-gray-400 top-[20%] left-[35%] md:left-[45%] w-fit md:w-[25%]'>
                    <div className='flex justify-between pt-4 px-4 font-bold'>
                        <p>Edit Employee</p>
                        <i class="fa-solid fa-xmark cursor-pointer" onClick={EditEmployee}></i>
                    </div>
                    <hr className='font-bold text-black mt-3' />
                    <form action="" onSubmit={(e) => handleSubmit(e)} className='p-8 flex flex-col gap-3'>
                        <p className='text-sm'>Name (without any space)</p>
                        <input name='name' type="text" placeholder='Employee Name' className='p-1 text-sm outline-none border border-gray-400 w-full ml-1' />
                        <p className='text-sm'>Employee Position</p>
                        <input name='position' type="text" placeholder='Employee Position' className='p-1 text-sm outline-none border border-gray-400 w-full ml-1' />
                        <p className='text-sm'>Employee ID</p>
                        <input name='id' type="number" placeholder='Employee ID' className='p-1 text-sm outline-none border border-gray-400 w-full ml-1' />
                        <p className='text-sm'>Email Address</p>
                        <input name='email' type="email" placeholder='Enter Email' className='p-1 text-sm outline-none border border-gray-400 w-full ml-1' />
                        <p className='text-sm'>Employee Password</p>
                        <input name='password' type="password" placeholder='Password' className='p-1 text-sm outline-none border border-gray-400 w-full ml-1' />
                        <div className='flex gap-2 mt-5'>
                            <button className='bg-green-800 text-white p-1 text-sm'>Submit</button>
                            <div className='bg-red-600 text-white p-1 text-sm cursor-pointer' onClick={EditEmployee}>Cancel</div>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

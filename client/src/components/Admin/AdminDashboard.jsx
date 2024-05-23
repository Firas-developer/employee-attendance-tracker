import Dashboard from './Dashboard'
import '../../../src/index.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../assets/logo.png"
import { signOut } from 'firebase/auth'
import auth from '../../firebase'
export default function AdminDashboard() {
    var navigate = useNavigate()
    return (
        <div className='flex'>
            <div className='bg-gray-800 text-gray-300 w-[30%] text-sm md:text-l md:w-[20%] h-[100vh] md:p-5 p-3'>
                <p className='font-bold mb-12 mt-5  text-center text-white'>Employee Attendance Tracker</p>
                <h1 className='md:text-[80%] text-[70%] font-serif font-semibold'>MAIN</h1>
                <div className='flex md:mx-2 cursor-pointer md:mt-3 md:gap-3 gap-2 items-center active p-1'>
                    <i class="fa-solid fa-house text-[80%] md:text-[100%]"></i>
                    <p className='font-sans text-[80%] md:text-[100%]'>Dashboard</p>
                </div>
                <Link to={'/adminEmployee'}>
                    <div className='flex md:mx-2 cursor-pointer md:mt-3 md:gap-3 gap-2 items-center p-1 hover:bg-gray-700 hover:p-1'>
                        <i class="fa-solid fa-user text-[80%] md:text-[100%]"></i>
                        <p className='font-sans text-[80%] md:text-[100%]'>Employees</p>
                    </div>
                </Link>
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
                <button onClick={() => { signOut(auth);navigate('/adminlogin')}} className='flex items-center gap-2 cursor-pointer justify-center absolute bottom-5 left-7 w-fit hover:bg-gray-700 hover:p-1 hover:px-2 p-1 font-bold px-2'>
                    <i class="fa-solid fa-arrow-right-from-bracket text-[80%] md:text-[100%]"></i>
                    <h1 className='text-[80%] md:text-[100%]'>Log Out</h1>
                </button>
            </div>
            <div className='md:w-[80%] w-[70%] h-fit'>
                <div className='shadow-xl p-3 shadow-gray-200 items-center flex justify-between '>
                    <img src={logo} alt="" className='md:w-10 w-7 rounded-full' />
                    <p className='font-semibold text-[80%] md:text-[100%]'>Administrator</p>
                </div>
                <Dashboard />
            </div>

        </div>
    )
}

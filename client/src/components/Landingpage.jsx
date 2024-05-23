import { Link } from 'react-router-dom'
const Landingpage = () => {
    return (
        <div className='flex flex-col md:flex-row gap-4 justify-center items-center h-screen'>
            <Link to={'/adminlogin'}>
                <div className='bg-black h-32 px-7 flex flex-col justify-center items-center text-white cursor-pointer p-4 text-center '>
                    <h1 className='font-bold md:text-xl'>Admin</h1>
                    <p className='text-sm'>Only admin can login the page</p>
                </div>
            </Link>
            <Link to={'/employeelogin'}>
                <div className='bg-black h-32 flex flex-col justify-center text-white cursor-pointer p-4 text-center'>
                    <h1 className='font-bold md:text-xl'>Employee</h1>
                    <p className='text-sm'>Only Employee can login the page</p>
                </div>
            </Link>
        </div>
    )
}

export default Landingpage
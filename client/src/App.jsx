import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AdminAuthentication from './components/Authentication/AdminAuthentication'
import Landingpage from './components/Landingpage'
import Adminpage from './components/Admin/Adminpage'
import EmployeeAuthentication from './components/Authentication/EmployeeAuthentication'
import Employee from './components/Admin/Employee'
import AdminDashboard from './components/Admin/AdminDashboard'
import AttendanceReport from './components/Admin/AttendanceReport'
import WorkReport from './components/Admin/WorkReport'
import EmployeeDashboard from './components/Employees/EmployeeDashboard'
import MarkAttendance from './components/Employees/MarkAttendance'
import SubmitWork from './components/Employees/SubmitWork'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/adminlogin' element={<AdminAuthentication/>}></Route>
          <Route path='/employeelogin' element={<EmployeeAuthentication/>}></Route>
          <Route path='/' element={<Landingpage/>}></Route>
          <Route path='/employeeDashboard' element={<EmployeeDashboard/>}></Route>
          <Route path='/MarkAttendance' element={<MarkAttendance/>}></Route>
          <Route path='/SubmitWork' element={<SubmitWork/>}></Route>
          <Route path='/adminpage' element={<Adminpage/>}></Route>
          <Route path='/adminEmployee' element={<Employee/>}></Route>
          <Route path='/adminDashboard' element={<AdminDashboard/>}></Route>
          <Route path='/AttendanceReport' element={<AttendanceReport/>}></Route>
          <Route path='/WorkReport' element={<WorkReport/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
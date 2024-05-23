import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from "react";
import auth from "../../firebase";
import { useNavigate } from "react-router-dom";
const EmployeeLogin = ({ }) => {
  useEffect(() => {
    auth.onAuthStateChanged(function (email){
      if(email){
        navigate('/employeeDashboard')
      }
      else{
        navigate('/employeelogin')
      }
    })
  }, [])

  const navigate = useNavigate();
  var [admin, setAdmin] = useState(false)
  var [error,setError] = useState(false)
  const [logindata, setlogindata] = useState({
    email: "",
    password: "",
  });
  const handlelogin = (e) => {
    setlogindata((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const { email, password } = logindata;
  const gotolandingpage = (e) => {
    e.preventDefault();
    if (!email || !password) alert("Email and Password cannot be Empty");
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        if (user.user.uid == 'wWuSOUjAaYWhecFSnixv71vwruB2') {
          setAdmin(!admin)
          setError(!error)
        } else {
          navigate("/employeeDashboard")
        }
      })
      .catch(() => {
        setError(!error)
      });
  };
  return (
    <>
      <div className="p-8 text-sm md:max-w-md md:w-full m-5 bg-black text-white shadow-xl shadow-black rounded-xl">
        <h2 className="font-semibold tracking-wider text-center my-4 text-3xl">
          Employee Login
        </h2>
        <form onSubmit={gotolandingpage} className="space-y-4">
          <div>
            <label className="text-left block">Email</label>
            <input
              type="email"
              value={logindata.email}
              onChange={handlelogin}
              name="email"
              placeholder="Username"
              className=" w-full py-3 px-4 rounded-md text-black focus:outline-none focus:bg-opacity-50"
            ></input>
          </div>
          <div>
            <label className="text-left block">Password</label>
            <input
              type="password"
              value={logindata.password}
              onChange={handlelogin}
              name="password"
              placeholder="Password"
              className=" w-full py-3 px-4 rounded-md text-black focus:outline-none focus:bg-opacity-50"
            ></input>
          </div>
          {
            error ?
              <div>
                <p className="text-[red] font-bold text-start">Email or Password is incorrect</p>
              </div> : ""
          }
          {
            admin ?
              <div>
                <p className="text-[red] font-bold text-start">You are not an Admin !!</p>
              </div>:""
          }
          <div>
            <button
              type="submit"
              className="w-full mt-2 bg-white rounded-md text-black p-1 py-2 font-semibold transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EmployeeLogin;

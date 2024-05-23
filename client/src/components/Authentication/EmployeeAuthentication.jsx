import React, { useState } from "react";
import "./Authenticate.css";
import EmployeeLogin from "./EmployeeLogin";
import { Link } from "react-router-dom";
const EmployeeAuthentication = () => {
  const [rotate, setrotate] = useState(false)


  const handlesignup = () => {
    setrotate(!rotate)
  };
  return (
    <div>
      <Link to={'/'}>
        <button className="md:m-10 m-5 bg-black p-2 px-4 text-white"><i class="fa-solid fa-angle-left"></i></button>
      </Link>
      <section className="flex justify-center items-center h-[70vh]">
        <div className="">
          <div className="">
            <div className="">
              <EmployeeLogin handlesignup={handlesignup} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmployeeAuthentication;

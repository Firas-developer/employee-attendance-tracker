import React, { useState } from "react";
import "./Authenticate.css";
import AdminLogin from "./AdminLogin";
import { Link } from "react-router-dom";
const AdminAuthentication = () => {
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
          <div>
            <div>
              <AdminLogin handlesignup={handlesignup} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminAuthentication;

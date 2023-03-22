import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Header = () => {
  const {user, logout} = useContext(AuthContext);

  //logout
  const signOurUser = () => {
    logout().then(() => {
      toast.success("logged out")
    }
    ).catch((err) => {
      console.error(err)
    }
    )
  }
  


  const menuItem = (
    <>
      <Link to="/">Home</Link>
    </>
  );
  const login = (
    <>
      <Link to="/login">Login</Link>
    </>
  );

  return (
    <div className="navbar bg-base-100 h-20 mb-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <img src="assets/logo.svg" alt="" className="h-24 w-24" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl font-bold">
          <li>{menuItem}</li>
          <li>
            {
              !user?.email ? login : <a href="#">{user.email}</a>
            }
          </li>
          <li>
            {
              user?.email && <button onClick={signOurUser}>Log Out</button>
            }
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href="#" className="btn btn btn-outline btn-error">
          Appointment
        </a>
      </div>
    </div>
  );
};

export default Header;

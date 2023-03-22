import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Register = () => {
  const [user, setUser] = useState([]);
  const { registerUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    registerUser(email, password)
    .then(result => {
      const user = result.user;
      setUser(user)
      console.log(user)
      form.reset();
    })
    .catch(err => console.error(err))


  };

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-16">
        <div className="text-center">
          <img src="assets/images/login/login.svg" alt="" className="w-100" />
        </div>
        <div className="card w-full shadow-2xl bg-base-100 p-20">
          <h1 className="text-5xl font-bold text-center my-10">Register</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn bg-orange-600"
                value="Sing Up"
              />
            </div>
          </form>
          <div className="text-lg text-center">
            Or
            <Link
              to="/login"
              className="hover:text-blue-800 hover:underline mx-2"
            >
              Sign In
            </Link>
            with
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

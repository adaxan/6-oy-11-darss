import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import eye from "../images/eye.jpg";
import backEye from "../images/backEye.jpg";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [show, setShow] = useState(false);

  function validate() {
    if (username.length <= 2) {
      alert("Ism juda qisqa");
      return false;
    }
    if (email.length <= 5) {
      alert("Email juda qisqa");
      return false;
    }
    if (password.length <= 3) {
      alert("Password juda qisqa");
      return false;
    }
    if (rePassword !== password) {
      alert("Passwordlar bir xil emas");
      return false;
    }
    return true;
  }

  function handleSave(event) {
    event.preventDefault();
    const isvalid = validate();
    if (!isvalid) {
      return;
    }
    const user = {
      username,
      email,
      password,
    };
    setLoader(true);
    axios
      .post(`https://auth-rg69.onrender.com/api/auth/signup`, user, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((response) => {
        if (response.status == 200) {
          navigate("/login");
        }
      })
      .catch((error) => {
        if (error.response && error.response.status == 400) {
          alert(error.response.data.message || error.message);
        }
      })
      .finally(() => {
        setLoader(false);
      });
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 border border-gray-200">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-4">Register</h2>
        <form className="space-y-4">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring focus:ring-blue-500 focus:outline-none"
            type="text"
            placeholder="Username"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring focus:ring-blue-500 focus:outline-none"
            type="email"
            placeholder="Email"
          />
          <div className="relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring focus:ring-blue-500 focus:outline-none"
              type={show ? "text" : "password"}
              placeholder="Password"
            />
            <img
              onClick={() => setShow(!show)}
              src={show ? eye : backEye}
              className="absolute top-2 right-3 w-6 h-6 cursor-pointer"
              alt="toggle visibility"
            />
          </div>
          <div className="relative">
            <input
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring focus:ring-blue-500 focus:outline-none"
              type={show ? "text" : "password"}
              placeholder="Confirm Password"
            />
          </div>
          <button
            disabled={loader}
            onClick={handleSave}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          >
            {loader ? "Loading..." : "Register"}
          </button>
        </form>
        <div className="text-center mt-4">
          <span className="text-gray-600">Akktingiz bormi? </span>
          <Link
            to="/login"
            className="text-blue-500 hover:underline font-medium"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
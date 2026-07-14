import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Apple, CloudCog, CheckCheck } from "lucide-react";

function Login({ userinfo, setUserinfo }) {
  const [form, setForm] = useState({})
  const navigate = useNavigate()

  const handelInput = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const loginuser = (e) => {
    e.preventDefault()

    const checkUser = userinfo.find((ele) => ele.username === form.username)

    if (!checkUser) {
      alert('User not found')
      return
    }

    if (checkUser.password !== form.password) {
      alert('Invalid password')
      return
    }

    const user_data = {
      id: checkUser.id,
      name: checkUser.username,
    }
    localStorage.setItem('user_data', JSON.stringify(user_data))
    localStorage.setItem("isLoggedIn", "true")
    navigate("/")
  }
  return (
    <div className="min-h-screen bg-[#121212] text-white px-6 flex flex-col">

      {/* Header */}

      <div className="mt-8">
        <button className="text-3xl">
          <ArrowLeft size={24} />
        </button>

        <h1 className="text-4xl font-bold mt-10">
          Login
        </h1>
      </div>

      {/* Form */}

      <form className="mt-12 flex flex-col gap-5" onSubmit={loginuser}>

        <div>
          <label className="text-sm text-gray-300">
            Username
          </label>

          <input
            type="text"
            placeholder="Enter your username"
            name="username"
            value={form.username}
            onChange={handelInput}
            className="w-full mt-2 bg-transparent border border-gray-600 rounded-md px-4 py-3 outline-none focus:border-[#8875FF]"
          />
        </div>

        <div>
          <label className="text-sm text-gray-300">
            Password
          </label>

          <input
            type="password"
            placeholder="********"
            name="password"
            value={form.password}
            onChange={handelInput}
            className="w-full mt-2 bg-transparent border border-gray-600 rounded-md px-4 py-3 outline-none focus:border-[#8875FF]"
          />
        </div>

        <button
          type="submit"
          className="bg-[#8875FF] rounded-md py-3 mt-3 font-medium hover:bg-[#7A67F4]"
        >
          Login
        </button>

      </form>

      {/* Divider */}

      <div className="flex items-center gap-3 mt-8">

        <div className="flex-1 h bg-gray-700"></div>

        <p className="text-gray-400">
          or
        </p>

        <div className="flex-1 h bg-gray-700"></div>

      </div>

      {/* Social */}

      <div className="mt-8 flex flex-col gap-4">

        <button
          className="border border-[#8875FF] rounded-md py-3 flex items-center justify-center gap-3"
        >
          {/* <Chrome size={18} /> */}

          Login with Google
        </button>

        <button
          className="border border-[#8875FF] rounded-md py-3 flex items-center justify-center gap-3"
        >
          <Apple size={18} />

          Login with Apple
        </button>

      </div>

      {/* Bottom */}

      <div className="mt-auto mb-8 text-center">

        <span className="text-gray-400">
          Don't have an account?
        </span>

        <Link
          to="/register"
          className="text-white font-medium ml-2"
        >
          Register
        </Link>

      </div>

    </div>
  );
}

export default Login;





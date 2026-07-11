import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Apple } from "lucide-react";

function Register({ userinfo, setUserinfo }) {
  const second = useRef("")
  const [form, setForm] = useState({})
  const navigate = useNavigate()

  function handelInput(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function createUser(e) {
    e.preventDefault()

    if (!form.username || !form.password) {
      alert('Please enter a username and password')
      return
    }

    if (second.current.value !== form.password) {
      alert('Passwords do not match')
      return
    }

    const newUser = { id: Date.now(), ...form }
    setUserinfo(prev => [newUser, ...prev])
    navigate("/login")
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white px-6 flex flex-col">

      {/* Header */}

      <div className="mt-8">
        <button className="text-3xl">
          <ArrowLeft size={24} />
        </button>

        <h1 className="text-4xl font-bold mt-10">
          Register
        </h1>
      </div>

      {/* Form */}

      <form className="mt-12 flex flex-col gap-5" onSubmit={createUser}>

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
            className="w-full mt-2 px-4 py-3 bg-transparent border border-gray-600 rounded-md outline-none focus:border-[#8875FF]"
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
            className="w-full mt-2 px-4 py-3 bg-transparent border border-gray-600 rounded-md outline-none focus:border-[#8875FF]"
          />
        </div>

        <div>
          <label className="text-sm text-gray-300">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="********"
            name="confirmPassword"
            ref={second}
            className="w-full mt-2 px-4 py-3 bg-transparent border border-gray-600 rounded-md outline-none focus:border-[#8875FF]"
          />
        </div>

        <button
          type="submit"
          className="mt-2 py-3 rounded-md bg-[#8875FF] hover:bg-[#7664ef] transition"
        >
          Register
        </button>

      </form>

      {/* Divider */}

      <div className="flex items-center gap-3 my-8">

        <div className="flex-1 h-px bg-gray-700"></div>

        <span className="text-gray-400">
          or
        </span>

        <div className="flex-1 h-px bg-gray-700"></div>

      </div>

      {/* Social Login */}

      <div className="flex flex-col gap-4">

        <button className="border border-[#8875FF] rounded-md py-3 flex items-center justify-center gap-3">
          {/* <Chrome size={18} /> */}
          Register with Google
        </button>

        <button className="border border-[#8875FF] rounded-md py-3 flex items-center justify-center gap-3">
          <Apple size={18} />
          Register with Apple
        </button>

      </div>

      {/* Footer */}

      <div className="mt-auto mb-8 text-center">

        <span className="text-gray-400">
          Already have an account?
        </span>

        <Link
          to="/login"
          className="ml-2 text-white font-medium"
        >
          Login
        </Link>

      </div>

    </div>
  );
}

export default Register;
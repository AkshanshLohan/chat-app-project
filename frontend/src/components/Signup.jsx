import React, { useState } from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  const [user,setUser]=useState({
    fullName:"",
    userName:"",
    password:"",
    confirmPassword:"",
    gender:"",

  })
  const onSubmitHandler=(e)=>{
    e.preventDefault();
    console.log(user);
  }
  return (
    <div className="min-w-[400px] mx-auto mt-10">
  <div className="w-full p-8 rounded-2xl shadow-lg bg-white/30 backdrop-blur-md border border-gray-200">
    <h1 className="text-4xl font-bold text-center text-slate-800 mb-6">Create Account</h1>
    <form onSubmit={onSubmitHandler}>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            value={user.fullName}
            onChange={(e) => setUser({ ...user, fullName: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/70"
            type="text"
            placeholder="FULL NAME"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input
            value={user.userName}
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/70"
            type="text"
            placeholder="USER NAME"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/70"
            type="password"
            placeholder="PASSWORD"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
          <input
            value={user.confirmPassword}
            onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/70"
            type="password"
            placeholder="CONFIRM PASSWORD"
          />
        </div>
        <div className="mt-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
          <div className="flex space-x-6">
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" className="radio checked:bg-indigo-500" defaultChecked />
              <span className="text-gray-700">Male</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" className="radio checked:bg-indigo-500" />
              <span className="text-gray-700">Female</span>
            </label>
          </div>
        </div>
        <div className="text-center text-sm text-gray-600 mt-4">
          Already have an account? <Link to="/login" className="text-indigo-600 hover:underline">Login</Link>
        </div>
        <button type="submit" className="w-full py-2 mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-300">
          Sign Up
        </button>
      </div>
    </form>
  </div>
</div>

  );
};
export default Signup;

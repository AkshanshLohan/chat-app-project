import React ,{useState} from "react";
import { Link } from "react-router-dom";
const Login = () => {
    const [user,setUser]=useState({
        userName:"",
        password:"",
      });
      const onSubmitHandler=(e)=>{
        e.preventDefault();
        console.log(user);
        setUser({
          userName:"",
          password:"",
        });
      }
  return (
    <div className="min-w-[400px] mx-auto mt-10">
  <div className="w-full p-8 rounded-2xl shadow-lg bg-white/30 backdrop-blur-md border border-gray-200">
    <h1 className="text-4xl font-bold text-center text-slate-800 mb-6">Login</h1>
    <form onSubmit={onSubmitHandler}>
      <div className="space-y-4">
      
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
        
       
        <div className="text-center text-sm text-gray-600 mt-4">
          don't have an account? <Link to="/register" className="text-indigo-600 hover:underline">Sign Up </Link>
        </div>
        <button type="submit" className="w-full py-2 mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-300">
          Login
        </button>
      </div>
    </form>
  </div>
</div>

  );
};
export default Login;

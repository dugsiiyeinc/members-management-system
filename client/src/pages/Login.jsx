import { Fragment, useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {

  return (
    <Fragment>
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white h-fit p-5 rounded-md border shadow-md">
                <h1 className=" text-center text-xl mb-2">Login</h1>
                <form>
                <label>Email:</label> <br/>
                <input className=" border border-gray-500 rounded-xl p-2 w-80 block mb-4 mt-1 focus:outline-green-500" type="email" placeholder="isesharafdin@gmail.com" />
                <label>Password:</label> <br/>
                <input className=" border border-gray-500 rounded-xl p-2 w-80 block mb-4 mt-1 focus:outline-green-500" type="email" placeholder="Enter your password" />
                <input className=" border border-gray-500 rounded-xl p-2 w-80 block mb-4 mt-1 bg-green-500 hover:bg-green-600 cursor-pointer" type="submit" value="Login" />
                </form>
                <p>Don't have an account? <Link className="cursor-pointer" to="/register" >Sign up</Link></p>
                <br/>
            </div>
        </div>
    </Fragment>
  )
}

export default Login
import { Fragment, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const Signup = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/register', {name, email, password})
        .then(response => console.log(response ))
        .catch(error => console.log(error))
    }

  return (
    <Fragment>
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white h-fit p-5 rounded-md border shadow-md">
                <h1 className=" text-center text-xl mb-2">Signup</h1>
                <form onSubmit={handleSubmit}>
                <label>Full Name:</label> <br/>
                <input className=" border border-gray-500 rounded-xl p-2 w-80 block mb-4 mt-1 focus:outline-green-500" type="text" placeholder="Mr Sharafdin" onChange={(e) => setName(e.target.value)}/>
                <label>Email:</label> <br/>
                <input className=" border border-gray-500 rounded-xl p-2 w-80 block mb-4 mt-1 focus:outline-green-500" type="email" placeholder="isesharafdin@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
                <label>Password:</label> <br/>
                <input className=" border border-gray-500 rounded-xl p-2 w-80 block mb-4 mt-1 focus:outline-green-500" type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
                <input className=" border border-gray-500 rounded-xl p-2 w-80 block mb-4 mt-1 bg-green-500 hover:bg-green-600 cursor-pointer" type="submit" value="Register" />
                </form>
                <p>Already have an account? <Link className=" cursor-pointer " to="/login">Sign in</Link></p>
                <br/>
            </div>
        </div>
    </Fragment>
  )
}

export default Signup
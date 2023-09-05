import axios from "axios"
import { Fragment, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/login', { email, password })
      .then(response => {
        console.log(response)
        if (response.data === 'success') {
          navigate('/home')
        }
      })
      .catch(error => console.log(error))
  }

  return (
    <Fragment>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white h-fit p-5 rounded-md border shadow-md">
          <h1 className=" text-center text-xl mb-2">Login</h1>
          <form onSubmit={handleSubmit}>
            <label>Email:</label> <br />
            <input className=" border border-gray-500 rounded-xl p-2 w-80 block mb-4 mt-1 focus:outline-green-500" type="email" placeholder="isesharafdin@gmail.com" onChange={(e) => setEmail(e.target.value)} />
            <label>Password:</label> <br />
            <input className=" border border-gray-500 rounded-xl p-2 w-80 block mb-4 mt-1 focus:outline-green-500" type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
            <input className=" border border-gray-500 rounded-xl p-2 w-80 block mb-4 mt-1 bg-green-500 hover:bg-green-600 cursor-pointer" type="submit" value="Login" />
          </form>
          <p>Don't have an account? <Link className="cursor-pointer" to="/register" >Sign up</Link></p>
          <br />
        </div>
      </div>
    </Fragment>
  )
}

export default Login
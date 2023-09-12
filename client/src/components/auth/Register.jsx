import { Link } from "react-router-dom"

const Register = () => {
  return (
	<div className="w-full flex flex-col justify-center items-center  p-2 mt-24">
		<form className="w-[90%]  boredr-1 border-[#9F9F9F] rounded shadow p-3 md:w-[40%] lg:w-[32%] xl:w-[25%]  text-lg flex flex-col justify-start items-center space-y-3 gap-2">
			<h1 className="text-2xl tracking-widest">Register</h1>
			<div className="w-full space-y-2 p-2">
				<label className="text-xl tracking-wide">Full Name </label>
				<input type="text" className="w-full p-2 rounded boredr-1 border-[#9F9F9F] shadow" required/>
			</div>
			<div className="w-full space-y-2 p-2">
				<label className="text-xl tracking-wide">Username </label>
				<input type="text" className="w-full p-2 rounded boredr-1 border-[#9F9F9F] shadow" required  />
			</div>
			<div className="w-full space-y-2 p-2">
				<label className="text-xl tracking-wide">Email Address </label>
				<input type="email" className="w-full p-2 rounded boredr-1 border-[#9F9F9F] shadow" required  />
			</div>
			<div className="w-full space-y-2 p-2">
				<label className="text-xl tracking-wide">Password</label>
				<input type="password" className="w-full p-3 rounded boredr-1 border-[#9F9F9F] shadow" required  />
			</div>
			<div className="w-full space-y-2 p-2">
			<button className="w-full  p-2 rounded text-white boredr-1 border-gray-500  shadow bg-green-500 hover:bg-green-600">Register</button>
			<p className="mt-4">Already have an account ? <Link className="text-green-500" to='/Login'>Sign in</Link></p>
			</div>
		</form>
	</div>
  )
}

export default Register
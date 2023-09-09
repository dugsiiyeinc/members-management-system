import { Link } from "react-router-dom"

const Login = () => {
  return (
	<div className="w-full flex flex-col justify-center items-center  p-2 mt-24">
	<form className="w-[90%] h-[70vh] border-2 border-[#9F9F9F] rounded shadow p-3 md:w-[40%] lg:w-[32%] xl:w-[25%]  text-lg flex flex-col justify-start items-center space-y-3 gap-2">
		<h1 className="text-2xl tracking-widest">Log in</h1>
		<div className="w-full space-y-2 p-2">
			<label className="text-xl tracking-wide">Email Address </label>
			<input type="email" className="w-full p-2 rounded border-2 border-[#9F9F9F] shadow" required  />
		</div>
		<div className="w-full space-y-2 p-2">
			<label className="text-xl tracking-wide">Password</label>
			<input type="password" className="w-full p-2 rounded border-2 border-[#9F9F9F] shadow" required  />
		</div>
		<div className="w-full space-y-2 p-2">
		<button className="w-full  p-2 rounded text-white border-2 border-black shadow bg-green-500 hover:bg-green-600">Log in</button>
		<p className="mt-4">don`t have an account ? <Link to='/Register'>Sign up</Link></p>
		</div>
	</form>
</div>
  )
}

export default Login
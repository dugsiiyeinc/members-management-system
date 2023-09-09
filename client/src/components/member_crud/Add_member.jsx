const Add_member = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-24">
      <div className="w-[90%] p-4 border-2 border-[#9F9F9F] rounded shadow md:w-[50%]">
        <h1 className="text-2xl ml-5 tracking-widest">Add Member</h1>
        <form className="w-full p-3 text-lg grid grid-cols-1 md:grid-cols-2 justify-start items-start gap-5">
          <div className="w-full space-y-2 p-2">
            <label className="text-xl tracking-wide">Full Name : </label>
            <input
              type="text"
              className="w-full p-2 rounded border-2 border-[#9F9F9F] shadow"
              required
            />
          </div>
          <div className="w-full space-y-2 p-2">
            <label className="text-xl tracking-wide">Email Address : </label>
            <input
              type="email"
              className="w-full p-2 rounded border-2 border-[#9F9F9F] shadow"
              required
            />
          </div>
          <div className="w-full space-y-2 p-2">
            <label className="text-xl tracking-wide">Age : </label>
            <input
              type="number"
              className="w-full p-2 rounded border-2 border-[#9F9F9F] shadow"
              required
            />
          </div>
          <div className="w-full space-y-2 p-2">
            <label className="text-xl tracking-wide">Role : </label>
            <input
              type="text"
              className="w-full p-2 rounded border-2 border-[#9F9F9F] shadow"
              required
            />
          </div>
          <div className="w-full space-y-2 p-2">
            <button
              type="submit"
              className="w-full  p-2 rounded border-2 border-black shadow bg-green-500 hover:bg-green-600"
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add_member;

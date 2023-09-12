import { Link } from "react-router-dom";

const List_members = () => {
  return (
    <div className="mt-20 w-full md:w-[70%] mx-auto p-2">
      <Link
        className="px-10 py-2  text-xl font-bold tracking-widest rounded-md shadow border-4 text-white bg-green-500 hover:bg-green-600"
        to="/Add_member"
      >
        Add
      </Link>
      <div className="w-full mt-5 overflow-auto border-[1px] rounded-lg shadow border-[#9F9F9F] p-2 md:p-5 ">
        <table className="w-full space-y-5">
          <thead className=" text-start bg-white border-b-2 border-[#9F9F9F] ">
            <tr>
              <th className="text-start p-3 tracking-tighter  text-xl">Name</th>
              <th className="text-start p-3 tracking-tighter  text-xl">
                Email
              </th>
              <th className="text-start p-3 tracking-tighter  text-xl">Age</th>
              <th className="text-start p-3 tracking-tighter  text-xl">Roll</th>
              <th className="text-start p-3 tracking-tighter  text-xl">
                Action
              </th>
            </tr>
          </thead>
          <tbody className=" whitespace-nowrap">
            <tr className="font-medium">
              <td className="text-start p-3 tracking-tighter text-xl">
                Mr Sharafdin
              </td>
              <td className="text-start p-3 tracking-tighter text-xl">
                isesharafdin@gmail.com
              </td>
              <td className="text-start p-3 tracking-tighter text-xl">34</td>
              <td className="text-start p-3 tracking-tighter text-xl">
                Software Engineer
              </td>
              <td className="flex flex-row justify-start items-center gap-3">
                <Link
                  to="/Update_member/1"
                  className="px-5 py-2 shadow mt-2 rounded-md border-2 border-gray-500 text-white bg-green-500 hover:bg-green-600"
                >
                  Update
                </Link>
                <button className="px-5 py-2 shadow mt-2 border-2 border-gray-500  rounded-md text-white bg-red-500 hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List_members;

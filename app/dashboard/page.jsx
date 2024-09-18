"use client"
import { useRouter } from "next/navigation";


export default function AccountDashboard() {
  const send=useRouter();

  const handleAction = (a) => {
    switch(a){
        case "create":
        send.push("/front");
        break;
        case "get":
        send.push("/front/readuser");
        break;
        case "update":
            send.push("/front/updateuser")
            break;
        case "delete":
            send.push("/front/delete")
            break;
    }

  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Account Dashboard
        </h1>

        <div className="space-y-6">
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
            onClick={() => handleAction("create")}
          >
            Create Account
          </button>

          <button
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-300"
            onClick={() => handleAction("get")}
          >
            Get Account
          </button>

          <button
            className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 transition duration-300"
            onClick={() => handleAction("update")}
          >
            Update Account
          </button>

          <button
            className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition duration-300"
            onClick={() => handleAction("delete")}
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}

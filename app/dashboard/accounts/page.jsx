export default function StreamingAccountsPage() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold mb-8">Streaming Accounts</h1>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <button className="bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transition duration-300">
            Netflix Accounts
          </button>
  
          <button className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300">
            Prime Video Accounts
          </button>
  
          <button className="bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 transition duration-300">
            Disney Accounts
          </button>
  
          <button className="bg-yellow-600 text-white py-3 px-6 rounded-md hover:bg-yellow-700 transition duration-300">
            HBO Accounts
          </button>
  
          <button className="bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition duration-300">
            International Netflix Accounts
          </button>
  
          <button className="bg-gray-600 text-white py-3 px-6 rounded-md hover:bg-gray-700 transition duration-300">
            IP-TV Accounts
          </button>
        </div>
      </div>
    );
  }
  

  
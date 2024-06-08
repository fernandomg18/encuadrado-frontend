
const Login = () => {
    return (
        <div className="flex flex-row justify-center items-center h-screen">
            <div className="w-1/2">
                <h1 className="ml-16 font-bold text-5xl text-gray-600">
                    🔶 encuadrado
                </h1>
            </div>
            <div className="w-1/2 flex flex-col items-center">
                <div className="w-3/6 bg-gradient-to-br from-orange-500 to-orange-500 p-10 rounded-xl shadow-2xl text-white">
                    <h4 className="text-xl mb-1">User</h4>
                    <input className="text-gray-700 rounded-md p-1 mb-5 w-full" type="text" placeholder="Username" />
                    <h4 className="text-xl mb-1">Password</h4>
                    <input className="text-gray-700 rounded-md p-1 w-full" type="password" placeholder="Password" />
                    
                    <button className="bg-white text-gray-700 hover:bg-gray-200 hover:text-gray-700 active:bg-gray-600 active:text-white p-2 rounded-md mt-7 flex justify-center w-full text-xl">
                        Login
                    </button>   
                </div>
            </div>
        </div>
    );
    }

export default Login;
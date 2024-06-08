import { Button } from "@/components/ui/button";
import { useState } from "react";

const userData = {
    username: "admin",
    password: "admin"
}

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (username === userData.username && password === userData.password) {
            console.log("Login successful");
        } else {
            console.log("Login failed");
        }
    }


    return (
        <div className="-mt-10 flex flex-col justify-center items-center h-screen">
                <h1 className="mb-10 font-bold text-5xl text-gray-600">
                    🔶 encuadrado
                </h1>
                <div className="w-1/4 bg-gradient-to-br from-orange-500 to-orange-500 p-10 rounded-xl shadow-2xl text-white">
                    <h4 className="text-xl mb-1">User</h4>
                    <input 
                      className="text-gray-700 rounded-md p-1 mb-5 w-full" 
                      type="text" 
                      placeholder="Username" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <h4 className="text-xl mb-1">Password</h4>
                    <input 
                      className="text-gray-700 rounded-md p-1 w-full" 
                      type="password" 
                      placeholder="Password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    
                    <Button 
                      className="w-full mt-5"
                      variant="secondary" 
                      onClick={handleLogin}
                    >
                        Login
                    </Button>
                </div>
                
        </div>
    );
    }

export default Login;
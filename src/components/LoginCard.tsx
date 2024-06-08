import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

import { useNavigate } from 'react-router-dom';

const userData = {
  username: "admin",
  password: "admin"
}

const LoginCard = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === userData.username && password === userData.password) {
      console.log("Login successful");
      navigate('/home');
    } else {
      console.log("Login failed");
    }
  }

  return (
    <Card className="w-1/4 p-7 bg-gradient-to-br from-orange-500 to-orange-500 shadow-xl">
      <CardContent>
        <h4 className="text-lg mb-1 text-white">User</h4>
        <Input
          type="text"
          placeholder="Username"
          className="mb-5"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <h4 className="text-lg mb-1 text-white">Password</h4>
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full active:bg-gray-700 active:text-gray-200 -mb-3" 
          variant={"secondary"}
          onClick={handleLogin}
        >
          Login
        </Button>
      </CardFooter>
    </Card>
  );
}

export default LoginCard;
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { login } from "@/store/user/userSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const userData = {
  user: "admin",
  password: "admin",
  email: "admin@gmail.com",
  token: "asdasdasd",
}

const LoginCard = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username === userData.user && password === userData.password) {
      const userDataStore = {
        user: userData.user,
        email: userData.email,
        token: userData.token,
        isLoggedIn: true,
      };
      dispatch(login(userDataStore));
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
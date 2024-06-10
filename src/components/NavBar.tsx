import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { logout } from "@/store/user/userSlice";
import { RootState } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  }

  return (
    <div className="w-1/6 h-screen bg-orange-600 flex flex-col items-center">
      <h1 className="mb-5 font-bold text-xl text-white mt-5">
        encuadrado
      </h1> 
      <Separator className="w-11/12"/>
      <p className="text-white text-lg my-2">{user.user}</p>
      <Separator className="w-11/12"/>

      <Button className="text-white mt-5 text-lg" variant="link">Appointments</Button>
      <Button 
        className="text-white bottom-0 mb-10 absolute bg-gray-700 hover:bg-gray-800"
        onClick={handleLogout}
      >
          Log Out
      </Button>
    </div>
  )
}

export default NavBar;
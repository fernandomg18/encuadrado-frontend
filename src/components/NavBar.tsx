import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";


const NavBar = () => {
  return (
    <div className="w-1/6 h-screen bg-orange-600 flex flex-col items-center">
      <h1 className="mb-5 font-bold text-xl text-gray-600 bg-white p-2 mt-5 rounded-lg">
        🔶 encuadrado
      </h1> 
      <p></p>
      <Separator className="w-11/12"/>

      <Button className="text-white mt-5 text-lg" variant="link">Scheduling</Button>
      <Button className="text-white bottom-0 mb-10 absolute bg-gray-700 hover:bg-gray-800">Log Out</Button>
    </div>
  )
}

export default NavBar;
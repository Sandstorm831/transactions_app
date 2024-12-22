import { NavLink } from "react-router";
import { Button } from "../ui/button";

export function RootSigninButton({ title, link }: { title: string, link: string }) {
  return (
    <div className="h-full w-full flex justify-center">
      <Button variant="ghost" className="w-full h-full font-bold py-2 px-5 hover:bg-transparent hover:text-gray-300">
        <NavLink to={link} >
        {title}
        </NavLink>
      </Button>
    </div>
  );
}


export function RootSignupButton({title, link} : {title: string, link: string}){
    return (
        <div className="h-full w-full flex justify-center">
          <Button  variant="outline" className="w-full h-full font-bold py-2 px-5 bg-transparent hover:bg-transparent hover:text-gray-300 hover:border-gray-300">
            <NavLink to={link} >
                {title}
            </NavLink>
          </Button>
        </div>
      );
}
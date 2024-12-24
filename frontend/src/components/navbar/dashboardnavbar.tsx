import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "../ui/button";
import { deleteCookies } from "@/pages/dashboard";
import { useNavigate } from "react-router";


export default function NavbarDashboard({
  leftBlock,
  rightBlock,
  User,
}: {
  leftBlock: string;
  rightBlock: string;
  User: string;
}) {
  const navigate = useNavigate();
  const rightletter: string = (User[0]).toUpperCase();
  return (
    <div className="w-full flex justify-between py-3 shadow-lg px-5 rounded-lg">
      <div className="text-xl flex flex-col justify-center">{leftBlock}</div>
      <div className="flex justify-center w-max">
        <div className="text-xl mx-4 flex flex-col justify-center">
          {rightBlock}
        </div>
          <Popover>
            <PopoverTrigger><div className="rounded-full bg-gray-300 text-3xl px-4 pt-1 pb-2">{rightletter}</div></PopoverTrigger>
            <PopoverContent>
              <Button onClick={()=>{
                deleteCookies('JWT');
                navigate('/')
                }} className="w-full">Log out</Button>
            </PopoverContent>
          </Popover>
      </div>
    </div>
  );
}

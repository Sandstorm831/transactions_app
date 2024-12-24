import axios from "axios";
import { Button } from "../ui/button";
import { getCookies } from "@/pages/dashboard";
import { useState } from "react";
import { useNavigate } from "react-router";

export function SendMoneyButton({ title, cash, id, secondDisable }: { title: string, cash: number, id: number, secondDisable: boolean}) {
    const [prompt, setPrompt] = useState(title);
    const [disable, setDisable] = useState(false);
    const navigate = useNavigate();
    async function handleMoneyTransfer(){
        try {
            setDisable(true);
            const response = await axios.post('http://localhost:3000/api/v1/account/transfer', {
                to: id,
                amount: Number(cash)
            }, {
                headers:{
                    Authorization: getCookies('JWT'),
                    'Content-Type': 'application/json',
                }
            })
            setPrompt(`${response.data.msg}, redirecting to dashboard ...`);
            setTimeout(() => navigate("/dashboard"), 3000);
        } catch(err){
            console.log(err);
            setPrompt(`Some Error occured, redirecting to dashboard ...`);
            setTimeout(() => navigate("/dashboard"), 3000);
        }
    }

  return (
    <div className="h-full w-full flex justify-center">
      <Button onClick={() => handleMoneyTransfer()} disabled={disable || secondDisable } variant="default" className="w-full h-full font-bold py-2 px-5">
        {prompt}
      </Button>
    </div>
  );
}

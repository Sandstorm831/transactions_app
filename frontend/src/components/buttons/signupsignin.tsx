import { MailOpen } from "lucide-react";
import { Button } from "../ui/button";

export function SignUpInButton({ title, setClicker, setDisabled, disabled }: { title: string, setClicker: React.Dispatch<React.SetStateAction<boolean>>, setDisabled: React.Dispatch<React.SetStateAction<boolean>>, disabled: boolean }) {
  function handleClick(){
    setClicker((x) => !x);
    setDisabled((x) => !x);
  }
  return (
    <div className="mt-5 w-full flex justify-center">
      <Button disabled={disabled} onClick={()=> handleClick()} variant="default" className="w-full font-bold py-2">
        <MailOpen /> {title}
      </Button>
    </div>
  );
}

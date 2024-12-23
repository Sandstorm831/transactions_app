import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Eye, EyeClosed } from "lucide-react";

export function NormalInput({
  label,
  placeholder,
  type,
  id,
  value,
  setValue,
}: {
  label: string;
  placeholder: string;
  type: string;
  id: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) {

  return (
    <div className="flex mt-5">
      <div className="flex flex-col w-full">
        <Label className="font-bold mb-1" htmlFor={id}>
          {label}
        </Label>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type={type}
          id={id}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export function PasswordInput({
  label,
  id,
  isVisible,
  setIsVisible,
  password,
  setPassword,
}: {
  label: string;
  id: string;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="flex mt-5">
      <div className="flex flex-col w-full relative">
        <Label className="font-bold mb-1" htmlFor={id}>
          {label}
        </Label>
        <Input value={password} onChange={(e) => setPassword(e.target.value)} type={isVisible ? "text" : "password"} id={id} placeholder="" />
        {isVisible ? (
          <Eye
            className="absolute right-2 z-10 bottom-1 cursor-pointer"
            onClick={() => setIsVisible((x) => !x)}
          />
        ) : (
          <EyeClosed
            className="absolute right-2 z-10 bottom-1 cursor-pointer"
            onClick={() => setIsVisible((x) => !x)}
          />
        )}
      </div>
    </div>
  );
}


export function NumberInput({
  label,
  placeholder,
  type,
  id,
  value,
  setValue,
  setDisabled,
}: {
  label: string;
  placeholder: string;
  type: string;
  id: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>; 
}) {

  function handleNumberChange(e: React.ChangeEvent<HTMLInputElement>){
    if(isNaN(Number(e.target.value))){
      setDisabled(true);
      setValue(value);
      return;
    }
    setDisabled(false);
    setValue(Number(e.target.value))
  }
  return (
    <div className="flex mt-5">
      <div className="flex flex-col w-full">
        <Label className="font-bold mb-1" htmlFor={id}>
          {label}
        </Label>
        <Input
          value={value}
          onChange={(e) => handleNumberChange(e)}
          type={type}
          id={id}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
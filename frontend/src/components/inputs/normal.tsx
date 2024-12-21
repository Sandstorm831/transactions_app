import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Eye, EyeClosed } from "lucide-react";

export function NormalInput({
  label,
  placeholder,
  type,
  id,
}: {
  label: string;
  placeholder: string;
  type: string;
  id: string;
}) {
  return (
    <div className="flex mt-5">
      <div className="flex flex-col w-full">
        <Label className="font-bold mb-1" htmlFor={id}>
          {label}
        </Label>
        <Input type={type} id={id} placeholder={placeholder} />
      </div>
    </div>
  );
}

export function PasswordInput({
  label,
  id,
  isVisible,
  setIsVisible,
}: {
  label: string;
  id: string;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex mt-5">
      <div className="flex flex-col w-full relative">
        <Label className="font-bold mb-1" htmlFor={id}>
          {label}
        </Label>
        <Input type={isVisible ? "text" : "password"} id={id} placeholder="" />
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

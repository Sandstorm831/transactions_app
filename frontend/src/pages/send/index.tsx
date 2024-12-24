import { SendMoneyButton } from "@/components/buttons/sendButton";
import { SignUpInHeading } from "@/components/headings";
import { NumberInput } from "@/components/inputs/normal";
import { UserCircleName } from "@/components/username/username";
import { useState } from "react";
import { Navigate, useSearchParams } from "react-router";

export default function Send() {
  const [cash, setCash] = useState(0);
  const [searchParams, ] = useSearchParams();
  const [disabled, setDisabled] = useState(false);
  const toId:number|undefined = searchParams.get("id") ? Number(searchParams.get("id")) : undefined
  const toName: string|null = searchParams.get('name')
  if(toId === undefined || toName === null){
    return <Navigate to="/dashboard" replace={true} />;
  }
  return (
    <div className="w-screen h-screen bg-gray-300">
      <div className="w-full h-full flex justify-center">
        <div className="h-full flex flex-col justify-center max-xl:w-full max-xl:px-8 xl:w-3/12">
          <div className="w-full bg-white h-max flex flex-col p-8 rounded-lg shadow-sm">
            <SignUpInHeading title="Send Money" />
            <div className="mt-8">
              <UserCircleName user={toName} />
            </div>
            <NumberInput
              label="Amount (in Rs)"
              placeholder="Enter Amount"
              type="number"
              id="name"
              value={cash}
              setValue={setCash}
              setDisabled={setDisabled}
            />
            <div className="w-full mt-4">
              <SendMoneyButton title="Initiate transfer" cash={cash} id={toId} secondDisable={disabled} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { CardButton } from "@/components/buttons/cardButton";
import { SignUpInHeading } from "@/components/headings";
import { NormalInput } from "@/components/inputs/normal";
import { UserCircleName } from "@/components/username/username";

export default function Send() {
  return (
    <div className="w-screen h-screen bg-gray-300">
      <div className="w-full h-full flex justify-center">
        <div className="h-full flex flex-col justify-center max-xl:w-full max-xl:px-8 xl:w-3/12">
          <div className="w-full bg-white h-max flex flex-col p-8 rounded-lg shadow-sm">
            <SignUpInHeading title="Send Money" />
            <div className="mt-8">
              <UserCircleName user="User" />
            </div>
            <NormalInput
              label="Amount (in Rs)"
              placeholder="Enter Amount"
              type="number"
              id="name"
            />
            <div className="w-full mt-4">
              <CardButton title="Initiate transfer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

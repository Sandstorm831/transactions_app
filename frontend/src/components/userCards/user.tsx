import { CardButton } from "../buttons/cardButton";
import { UserCircleName } from "../username/username";

export function UserCard() {
  return (
    <div className="w-full flex justify-between px-1 rounded-lg hover:bg-gray-200 duration-200 py-1">
        <UserCircleName user="User" />
      <div className="flex flex-col justify-center">
        <CardButton title="Send Money" />
      </div>
    </div>
  );
}

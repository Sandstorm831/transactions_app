import { CardButton } from "../buttons/cardButton";

export function UserCard() {
  return (
    <div className="w-full flex justify-between px-1 rounded-lg hover:bg-gray-200 duration-200 py-1">
      <div className="flex justify-center w-max">
        <div className="rounded-full bg-gray-300 text-3xl px-4 py-2">U</div>
        <div className="text-xl mx-4 flex flex-col justify-center">User</div>
      </div>
      <div className="flex flex-col justify-center">
        <CardButton title="Send Money" />
      </div>
    </div>
  );
}

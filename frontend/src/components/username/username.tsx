export function UserCircleName({ user }: { user: string }) {
  const u: string = user[0];
  return (
    <div className="flex justify-center w-max">
      <div className="rounded-full bg-gray-300 text-3xl px-4 py-2">{u}</div>
      <div className="text-xl mx-4 flex flex-col justify-center">{user}</div>
    </div>
  );
}
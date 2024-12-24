export function UserCircleName({ user }: { user: string }) {
  const u: string = user[0].toUpperCase();
  console.log(u);

  return (
    <div className="flex justify-center w-max">
      <div className="rounded-full bg-gray-300 text-3xl px-4 pt-1 pb-2 flex flex-col justify-center"><div>{u}</div></div>
      <div className="text-xl mx-4 flex flex-col justify-center">{user}</div>
    </div>
  );
}

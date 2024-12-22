export default function NavbarDashboard({
  leftBlock,
  rightBlock,
  User,
}: {
  leftBlock: string;
  rightBlock: string;
  User: string;
}) {
  const rightletter: string = User[0];
  return (
    <div className="w-full flex justify-between py-3 shadow-lg px-5 rounded-lg">
      <div className="text-xl flex flex-col justify-center">{leftBlock}</div>
      <div className="flex justify-center w-max">
        <div className="text-xl mx-4 flex flex-col justify-center">
          {rightBlock}
        </div>
        <div className="rounded-full bg-gray-300 text-3xl px-4 py-2">
          {rightletter}
        </div>
      </div>
    </div>
  );
}

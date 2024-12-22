import { NormalInput } from "@/components/inputs/normal";
import NavbarDashboard from "@/components/navbar/dashboardnavbar";
import { UserCard } from "@/components/userCards/user";

export default function Dashboard() {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full flex flex-col px-1 ">
        <NavbarDashboard leftBlock="Transactions App" rightBlock="Hello" User="User" />
        <div className="w-full px-8 pt-12 flex flex-col">
          <div className="flex">
            <div className="text-xl font-bold">{`Your Balance `}</div>
            <div className="text-xl font-bold ml-5">{`Rs ${10000}`}</div>
          </div>
        </div>
        <div className="w-full mt-5 flex flex-col px-8 text-2xl">
          <NormalInput
            label="Users"
            type="text"
            placeholder="Search users..."
            id="userSearch"
          />
        </div>
        <div className="w-full mt-1 flex flex-col px-8 my-5 h-full overflow-scroll">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </div>
    </div>
  );
}

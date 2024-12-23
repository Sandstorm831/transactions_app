import { useAppSelector } from "@/app/hooks";
import { NormalInput } from "@/components/inputs/normal";
import NavbarDashboard from "@/components/navbar/dashboardnavbar";
import { UserCard } from "@/components/userCards/user";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const logState = useAppSelector(state => state.logger);
  const [filter, setFilter] = useState("");
  let debouncer: NodeJS.Timeout;
  useEffect(() => {
    if(debouncer) return clearTimeout(debouncer);
    debouncer = setTimeout(() => {

    }, 200)
  }, [filter])

  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full flex flex-col px-1 ">
        <NavbarDashboard leftBlock="Transactions App" rightBlock="Hello" User={logState.Name} />
        <div className="w-full px-8 pt-12 flex flex-col">
          <div className="flex">
            <div className="text-xl font-bold">{`Your Balance `}</div>
            <div className="text-xl font-bold ml-5">{`Rs ${logState.balance}`}</div>
          </div>
        </div>
        <div className="w-full mt-5 flex flex-col px-8 text-2xl">
          <NormalInput
            label="Users"
            type="text"
            placeholder="Search users..."
            id="userSearch"
            value={filter}
            setValue={setFilter}
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

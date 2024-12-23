import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { NormalInput } from "@/components/inputs/normal";
import NavbarDashboard from "@/components/navbar/dashboardnavbar";
import { UserCard } from "@/components/userCards/user";
import { flipper } from "@/features/loggedin/loggedInSlice";
import axios from "axios";
import { useEffect, useState } from "react";

export function getCookies(name: string){
  const cookie = document.cookie.split("; ").find((row) => row.startsWith( `${name}=`));
  return cookie ? cookie.split("=")[1] : null;
}

interface userItem{
  name: string;
  email: string;
  password: string;
}

type userItemArray = Array<userItem>


export default function Dashboard() {
  const logState = useAppSelector(state => state.logger);
  const [filter, setFilter] = useState("");
  const [users, setUsers] = useState<userItemArray>([]);
  const dispatch = useAppDispatch();

  async function fetchUsers(){
    try{
      const response = await axios.get('http://localhost:3000/api/v1/user/bulk', {
        params: {
          filter
        },
        headers:{
          Authorization: getCookies("JWT"),
          'Content-Type': 'application/json',
        }
      })
      setUsers(response.data.users);
      // setUsers(response.data)
    } catch(err){
      console.log(err);
    }
  }


  async function fillUser(){
    try{
      const response = await axios.get('http://localhost:3000/api/v1/user/userinfo', {
        headers:{
          Authorization: getCookies("JWT"),
          'Content-Type': 'application/json',
        }
      })
      dispatch(flipper({name: response.data.userName, balance: response.data.userBalance, login: true}))
    } catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    fillUser();
    const debouncer = setTimeout(async () => {
      fetchUsers();
    }, 200)

    return () => clearTimeout(debouncer);
  }, [filter])

  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full flex flex-col px-1 ">
        <NavbarDashboard leftBlock="Transactions App" rightBlock="Hello" User={logState.Name === "" ? "User" : logState.Name} />
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
          {users && users.length ? users.map((obj) => <UserCard name={obj.name} />) : null}
        </div>
      </div>
    </div>
  );
}

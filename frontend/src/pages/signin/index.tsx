import { useEffect, useState } from "react";
import { SignUpInHeading } from "../../components/headings/index";
import { SignUpInSubHeading } from "@/components/subheadings/index";
import { NormalInput, PasswordInput } from "@/components/inputs/normal";
import { SignUpInButton } from "@/components/buttons/signupsignin";
import { SignUpInBottom } from "@/components/subheadings/bottom";
import axios from "axios";
import { useNavigate } from "react-router";
import { getCookies } from "../dashboard";

export default function Signin() {
  const [isvisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [clicker, setClicker] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  async function onSignin() {
    setDisabled((x) => !x);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signin",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setDisabled((x) => !x);
      document.cookie = `JWT=${response.data.token}; path=/; SameSite=strict`;
      navigate("/dashboard");
    } catch (err) {
      setDisabled((x) => !x);
      console.log(err);
    }
  }

    useEffect(() =>{
        const JWT = getCookies("JWT");
        if(JWT !== null){
            navigate('/dashboard');
        }
    }, [])

  useEffect(() => {
    if (email !== "" && password !== "") {
      onSignin();
    }
  }, [clicker]);

  return (
    <div className="w-screen h-screen bg-gray-300">
      <div className="w-full h-full flex justify-center">
        <div className="h-full flex flex-col justify-center max-lg:w-full max-xl:px-8 lg:w-4/12">
          <div className="w-full bg-white h-max flex flex-col p-5 rounded-lg shadow-sm">
            <SignUpInHeading title="Sign in" />
            <SignUpInSubHeading title="Enter your credentials to access your account" />
            <NormalInput
              label="Email"
              type="email"
              placeholder="premchand@gmail.com"
              id="email"
              value={email}
              setValue={setEmail}
            />
            <PasswordInput
              label="Password"
              id="password"
              isVisible={isvisible}
              setIsVisible={setIsVisible}
              password={password}
              setPassword={setPassword}
            />
            <SignUpInButton
              title="Sign in with Email"
              setClicker={setClicker}
              disabled={disabled}
              setDisabled={setDisabled}
            />
            <SignUpInBottom
              title="Don't have an account? "
              underlined="Sign up"
              link="/signup"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

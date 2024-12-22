import { useEffect, useState } from "react"
import {SignUpInHeading} from "../../components/headings/index"
import { SignUpInSubHeading } from "@/components/subheadings/index";
import { NormalInput, PasswordInput } from "@/components/inputs/normal";
import { SignUpInButton } from "@/components/buttons/signupsignin";
import { SignUpInBottom } from "@/components/subheadings/bottom";
import axios from "axios";
import Cookies from "universal-cookie";

export default function Signup(){
    const [isvisible, setIsVisible] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [clicker, setClicker] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const cookies = new Cookies(null, {path: '/'});

    useEffect(() => {
        async function onSignup(){
            try{
                const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                    name,
                    email,
                    password,
                },{
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                setDisabled((x)=>!x);
                cookies.set('JWT', `Bearer ${response.data.jwt}`);
                console.log(response.data.jwt);
            } catch(err){
                setDisabled((x)=>!x);
                console.log(err);
            }
            return;
        }
        onSignup();
    }, [clicker])

    return <div className="w-screen h-screen bg-gray-300">
        <div className="w-full h-full flex justify-center">
            <div className="h-full flex flex-col justify-center max-lg:w-full max-xl:px-8 lg:w-4/12">
                <div className="w-full bg-white h-max flex flex-col p-5 rounded-lg shadow-sm">
                    <SignUpInHeading title="Sign up" />
                    <SignUpInSubHeading title="Enter your information to create an account" />
                    <NormalInput label="Name" placeholder="Prem Chand" type="text" id="name" value={name} setValue={setName} />
                    <NormalInput label="Email" type="email" placeholder="premchand@gmail.com" id="email" value={email} setValue={setEmail} />
                    <PasswordInput label="Password" id="password" isVisible={isvisible} setIsVisible={setIsVisible} password={password} setPassword={setPassword} />
                    <SignUpInButton title="Sign up with Email" setClicker={setClicker} setDisabled={setDisabled} disabled={disabled} />
                    <SignUpInBottom title="Already have an account? " underlined="Sign in" link="/signin"/>
                </div>
            </div>
        </div>
    </div>
}
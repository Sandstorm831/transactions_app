import { useState } from "react"
import {SignUpInHeading} from "../../components/headings/index"
import { SignUpInSubHeading } from "@/components/subheadings/index";
import { NormalInut, PasswordInput } from "@/components/inputs/normal";
import { SignUpInButton } from "@/components/buttons/signupsignin";
import { SignUpInBottom } from "@/components/subheadings/bottom";

export default function Signin(){
    const [isvisible, setIsVisible] = useState(false);

    return <div className="w-screen h-screen bg-gray-300">
        <div className="w-full h-full flex justify-center">
            <div className="h-full flex flex-col justify-center max-lg:w-full max-xl:mx-8 lg:w-4/12">
                <div className="w-full bg-white h-max flex flex-col p-5 rounded-lg shadow-sm">
                    <SignUpInHeading title="Sign in" />
                    <SignUpInSubHeading title="Enter your credentials to access your account" />
                    <NormalInut label="Email" type="email" placeholder="premchand@gmail.com" id="email" />
                    <PasswordInput label="Password" id="password" isVisible={isvisible} setIsVisible={setIsVisible} />
                    <SignUpInButton title="Sign in with Email" />
                    <SignUpInBottom title="Don't have an account? " underlined="Sign up" />
                </div>
            </div>
        </div>
    </div>
}
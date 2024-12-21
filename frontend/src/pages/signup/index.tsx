import { useState } from "react"
import {SignUpInHeading} from "../../components/headings/index"
import { SignUpInSubHeading } from "@/components/subheadings/index";
import { NormalInut, PasswordInput } from "@/components/inputs/normal";
import { SignUpInButton } from "@/components/buttons/signupsignin";
import { SignUpInBottom } from "@/components/subheadings/bottom";

export default function(){
    const [isvisible, setIsVisible] = useState(false);

    return <div className="w-screen h-screen bg-gray-300">
        <div className="w-full h-full flex justify-center">
            <div className="h-full flex flex-col justify-center max-lg:w-full max-xl:mx-8 lg:w-4/12">
                <div className="w-full bg-white h-max flex flex-col p-5 rounded-lg shadow-sm">
                    <SignUpInHeading title="Sign up" />
                    <SignUpInSubHeading title="Enter your information to create an account" />
                    <NormalInut label="Name" placeholder="Prem Chand" type="text" id="name" />
                    <NormalInut label="Email" type="email" placeholder="premchand@gmail.com" id="email" />
                    <PasswordInput label="Password" id="password" isVisible={isvisible} setIsVisible={setIsVisible} />
                    <SignUpInButton title="Sign up with Email" />
                    <SignUpInBottom title="Already have an account? " underlined="Sign in" />
                </div>
            </div>
        </div>
    </div>
}
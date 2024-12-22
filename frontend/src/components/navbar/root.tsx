import { RootSigninButton, RootSignupButton } from "../buttons/rootsignin";

export default function NavbarRoot({ leftBlock }: { leftBlock: string }) {
  return (
    <div className="w-full flex justify-between py-3 shadow-xl px-5 rounded-lg">
      <div className="text-xl flex flex-col justify-center">{leftBlock}</div>
      <div className="flex justify-center w-max">
        <div className="text-xl mx-4 flex justify-center">
            <div className="px-2">
                <RootSigninButton title="Sign in" link="/signin"/>
            </div>
            <div className="px-2">
                <RootSignupButton title="Sign up" link="/signup"/>
            </div>
        </div>
      </div>
    </div>
  );
}

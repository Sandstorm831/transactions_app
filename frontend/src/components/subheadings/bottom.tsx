import { NavLink } from "react-router";

export function SignUpInBottom({
  title,
  underlined,
  link,
}: {
  title: string;
  underlined: string;
  link: string;
}) {
  return (
    <div className="text-md flex justify-center mt-2">
      <span>
        {title}
        <span className="underline cursor-pointer">
          <NavLink to={link}> {underlined} </NavLink>
        </span>
      </span>
    </div>
  );
}

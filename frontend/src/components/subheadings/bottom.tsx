export function SignUpInBottom({
  title,
  underlined,
}: {
  title: string;
  underlined: string;
}) {
  return (
    <div className="text-md flex justify-center mt-2">
      <span>
        {title}
        <span className="underline cursor-pointer">{underlined}</span>
      </span>
    </div>
  );
}

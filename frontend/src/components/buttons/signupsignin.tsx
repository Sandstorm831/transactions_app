import { MailOpen } from "lucide-react";
import { Button } from "../ui/button";

export function SignUpInButton({ title }: { title: string }) {
  return (
    <div className="mt-5 w-full flex justify-center">
      <Button variant="default" className="w-full font-bold py-2">
        <MailOpen /> {title}
      </Button>
    </div>
  );
}

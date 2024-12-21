import { Button } from "../ui/button";

export function CardButton({ title }: { title: string }) {
  return (
    <div className="h-full w-full flex justify-center">
      <Button variant="default" className="w-full h-full font-bold py-2 px-5">
        {title}
      </Button>
    </div>
  );
}

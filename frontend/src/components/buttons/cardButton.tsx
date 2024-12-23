import { useNavigate } from "react-router";
import { Button } from "../ui/button";

export function CardButton({ title, name, id }: { title: string, name: string, id: number }) {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full flex justify-center">
      <Button onClick={() => navigate(`/send?id=${id}&name=${name}`)} variant="default" className="w-full h-full font-bold py-2 px-5">
        {title}
      </Button>
    </div>
  );
}

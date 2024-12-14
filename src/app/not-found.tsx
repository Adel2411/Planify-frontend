import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col justify-center items-center">
        <h2 className={`font-bold text-5xl`}>
          <span className="text-primary">404</span> ERROR
        </h2>
        <p className={`font-medium`}>Requested resource not found</p>
      </div>
      <Button asChild variant={"link"}>
        <Link href="/" className={`font-semibold text-lg`}>
          Return Home
        </Link>
      </Button>
    </div>
  );
}

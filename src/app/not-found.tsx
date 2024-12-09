import Link from "next/link";
import {
  centuryGothic,
  centuryGothicBold,
  centuryGothicBoldItalic,
} from "@/app/layout";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col justify-center items-center">
        <h2 className={`${centuryGothicBold.className} text-5xl`}>404 ERROR</h2>
        <p className={`${centuryGothic.className}`}>
          Requested resource not found
        </p>
      </div>
      <Button asChild variant={"link"}>
        <Link
          href="/"
          className={`${centuryGothicBoldItalic.className} text-lg`}
        >
          Return Home
        </Link>
      </Button>
    </div>
  );
}

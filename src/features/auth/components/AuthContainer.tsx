import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AuthContainerProps } from "../types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const AuthContainer = ({ children, Title }: AuthContainerProps) => {
  return (
    <Card className="px-4">
      <CardHeader>
        <Button variant={"secondary"} asChild>
          <Link
            href={"/"}
            className="w-fit opacity-60 hover:opacity-80 flex items-center justify-center gap-0"
          >
            <ChevronLeft />
            Home
          </Link>
        </Button>
        <CardTitle className="flex justify-center text-3xl font-bold">
          {Title}
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        {Title === "Login" ? (
          <p>
            Don't have an account?
            <Button variant={"link"} asChild>
              <Link href="/register">Register</Link>
            </Button>
          </p>
        ) : (
          <p>
            Already have an account?
            <Button variant={"link"} asChild>
              <Link href="/login">Login</Link>
            </Button>
          </p>
        )}
      </CardFooter>
    </Card>
  );
};

export default AuthContainer;

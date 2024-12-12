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

const AuthContainer = ({ children, Title }: AuthContainerProps) => {
  return (
    <Card className="sm:px-8">
      <CardHeader className="flex justify-center items-center">
        <CardTitle className="text-3xl font-bold">{Title}</CardTitle>
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

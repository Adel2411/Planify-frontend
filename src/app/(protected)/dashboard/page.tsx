"use client";

import { Button } from "@/components/ui/button";
import { logOut } from "@/features/auth/utils";
import { toast } from "@/hooks/use-toast";
import { redirect } from "next/navigation";

function Dashboard() {
  const handleLogOut = async () => {
    const response = await logOut();
    if (response) {
      toast({
        variant: "destructive",
        title: "Logged out",
        description: response.message,
      });
      redirect("/");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-8">
      <h1 className="font-semibold text-2xl">Dashboard</h1>
      <Button onClick={handleLogOut} variant="destructive">
        Log out
      </Button>
    </div>
  );
}

export default Dashboard;

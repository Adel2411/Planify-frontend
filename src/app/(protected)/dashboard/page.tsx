"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { redirect } from "next/navigation";

function Dashboard() {
  const handleLogOut = () => {
    console.log("Log out");
    toast({
      variant: "destructive",
      title: "Logged out",
      description: "User has successfully logged out",
    });
    redirect("/");
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

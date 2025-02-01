"use client";

import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen pt-16 bg-background">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      {children}
    </div>
  );
}

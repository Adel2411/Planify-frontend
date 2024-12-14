"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BusinessCardGrid } from "./BusinessCardGrid";
import { Sidebar } from "./Sidebar";
import { SearchBar } from "./SearchBar";

export function MainDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex h-screen bg-background">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden pt-16">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
          <div className="container mx-auto px-6 py-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-semibold text-foreground">
                Dashboard
              </h1>
              <Link href="/add-business">
                <Button>Add Business</Button>
              </Link>
            </div>
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <BusinessCardGrid searchQuery={searchQuery} />
          </div>
        </main>
      </div>
    </div>
  );
}

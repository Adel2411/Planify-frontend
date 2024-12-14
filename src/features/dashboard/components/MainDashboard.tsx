"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getBusinesses } from "../utils";
import { Business } from "../types";
import { Sidebar } from "./Sidebar";
import { SearchBar } from "./SearchBar";
import { BusinessCardGrid } from "./BusinessCardGrid";

export function MainDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [businesses, setBusinesses] = useState<Business[]>([
    {
      id: 1,
      name: "Tech Startup",
      industry: "Technology",
      targetAudience: "Small Businesses",
      goals: "Increase market share by 20%",
      createdAt: "2023-01-15T00:00:00Z",
    },
    {
      id: 2,
      name: "E-commerce Store",
      industry: "Retail",
      targetAudience: "Young Adults",
      goals: "Expand to 3 new cities",
      createdAt: "2023-02-20T00:00:00Z",
    },
    {
      id: 3,
      name: "Local Restaurant",
      industry: "Food & Beverage",
      targetAudience: "Families",
      goals: "Increase online orders by 30%",
      createdAt: "2023-03-10T00:00:00Z",
    },
  ]);

  useEffect(() => {
    async function fetchBusinesses() {
      try {
        const fetchedBusinesses = await getBusinesses();
        setBusinesses(fetchedBusinesses);
      } catch (error) {
        console.error("Failed to fetch businesses:", error);
      }
    }
    fetchBusinesses();
  }, []);

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
            <BusinessCardGrid
              searchQuery={searchQuery}
              businesses={businesses}
              setBusinesses={setBusinesses}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

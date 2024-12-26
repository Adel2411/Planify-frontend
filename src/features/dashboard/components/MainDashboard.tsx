"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getBusinesses } from "../utils";
import { Business } from "../types";
import { SearchBar } from "./SearchBar";
import { BusinessCardGrid } from "./BusinessCardGrid";

export function MainDashboard() {
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
    {
      id: 4,
      name: "Fitness Gym",
      industry: "Health & Wellness",
      targetAudience: "Fitness Enthusiasts",
      goals: "Launch new fitness program",
      createdAt: "2023-04-05T00:00:00Z",
    },
    {
      id: 5,
      name: "Digital Marketing Agency",
      industry: "Marketing",
      targetAudience: "Startups",
      goals: "Grow social media following by 50%",
      createdAt: "2023-05-12T00:00:00Z",
    },
    {
      id: 6,
      name: "Web Development Company",
      industry: "Technology",
      targetAudience: "Small Businesses",
      goals: "Launch new website for client",
      createdAt: "2023-06-25T00:00:00Z",
    },
    {
      id: 7,
      name: "Mobile App Startup",
      industry: "Technology",
      targetAudience: "Young Adults",
      goals: "Reach 1 million downloads",
      createdAt: "2023-07-30T00:00:00Z",
    },
    {
      id: 8,
      name: "Fashion Boutique",
      industry: "Retail",
      targetAudience: "Young Adults",
      goals: "Launch new clothing line",
      createdAt: "2023-08-18T00:00:00Z",
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
    <div className="flex-1 flex flex-col overflow-hidden">
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-semibold text-foreground">
              Dashboard
            </h1>
            <Button
              variant="secondary"
              size="sm"
              asChild
              className="hover:bg-primary/10 hover:text-primary"
            >
              <Link href="/dashboard/add-business">Add Business</Link>
            </Button>
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
  );
}

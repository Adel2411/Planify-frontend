"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Business } from "../types";
import { SearchBar } from "./SearchBar";
import { BusinessCardGrid } from "./BusinessCardGrid";
import { getBusinesses } from "../lib/api";
import { useQuery } from "@tanstack/react-query";
import { initialBusinesses } from "../constants";

export function MainDashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: businesses = initialBusinesses,
    error,
    isLoading,
  } = useQuery<Business[]>({
    queryKey: ["businesses"],
    queryFn: getBusinesses,
  });

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-semibold text-foreground">
              Businesses
            </h1>
            <Button
              variant="secondary"
              size="sm"
              asChild
              className="hover:bg-primary/10 hover:text-primary"
            >
              <Link href="/add-business">Add Business</Link>
            </Button>
          </div>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          {isLoading ? (
            <div className="flex justify-center">
              <h1 className="text-2xl text-bold">Loading...</h1>
            </div>
          ) : (
            <BusinessCardGrid
              searchQuery={searchQuery}
              businesses={error ? initialBusinesses : businesses}
              setBusinesses={() => {}}
            />
          )}
        </div>
      </main>
    </div>
  );
}

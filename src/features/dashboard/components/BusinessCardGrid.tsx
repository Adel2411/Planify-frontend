import { BusinessCard } from "./BusinessCard";

// Mock data for business cards
const businesses = [
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
];

interface BusinessCardGridProps {
  searchQuery: string;
}

export function BusinessCardGrid({ searchQuery }: BusinessCardGridProps) {
  const filteredBusinesses = businesses.filter(
    (business) =>
      business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.industry.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredBusinesses.map((business) => (
        <BusinessCard
          key={business.id}
          business={business}
          onDelete={() => console.log(`Delete business ${business.id}`)}
        />
      ))}
    </div>
  );
}

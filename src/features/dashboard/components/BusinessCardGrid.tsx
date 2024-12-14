import { Business } from "../types";
import { deleteBusiness } from "../utils";
import { BusinessCard } from "./BusinessCard";

// Mock data for business cards

interface BusinessCardGridProps {
  searchQuery: string;
  businesses: Business[];
  setBusinesses: React.Dispatch<React.SetStateAction<Business[]>>;
}

export function BusinessCardGrid({
  searchQuery,
  businesses,
  setBusinesses,
}: BusinessCardGridProps) {
  const filteredBusinesses = businesses.filter(
    (business) =>
      business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.industry.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleDelete = async (id: number) => {
    try {
      await deleteBusiness(id);
      setBusinesses((prevBusinesses) =>
        prevBusinesses.filter((business) => business.id !== id),
      );
    } catch (error) {
      console.error("Failed to delete business:", error);
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredBusinesses.map((business) => (
        <BusinessCard
          key={business.id}
          business={business}
          onDelete={() => handleDelete(business.id)}
        />
      ))}
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import { Business } from "../types";

interface BusinessCardProps {
  business: Business;
  onDelete: () => void;
}

export function BusinessCard({ business, onDelete }: BusinessCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-primary">
          <Button variant="link" className="p-0 text-md" asChild>
            <Link href={`/businesses/${business.id}`}>{business.name}</Link>
          </Button>
        </CardTitle>
        <Button variant="ghost" size="sm" onClick={onDelete}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">
          Industry: {business.industry}
        </p>
        <p className="text-sm text-muted-foreground mb-2">
          Target Audience: {business.targetAudience}
        </p>
        <p className="text-sm text-muted-foreground mb-2">
          Goals: {business.goals}
        </p>
        <p className="text-xs text-muted-foreground">
          Created: {new Date(business.createdAt).toLocaleDateString()}
        </p>
      </CardContent>
    </Card>
  );
}

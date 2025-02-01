import { NewBusiness, Business } from "../types";

const API_URL = "/api/businesses"; // Replace with your actual API URL

export async function getBusinesses(): Promise<Business[]> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch businesses");
  }
  return response.json();
}

export async function addBusiness(business: NewBusiness): Promise<Business> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(business),
  });
  if (!response.ok) {
    throw new Error("Failed to add business");
  }
  return response.json();
}

export async function deleteBusiness(id: number): Promise<void> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete business");
  }
}

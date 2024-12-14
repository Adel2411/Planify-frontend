export interface Business {
  id: number;
  name: string;
  industry: string;
  targetAudience: string;
  goals: string;
  budget?: string;
  timeline?: string;
  createdAt: string;
}

export interface NewBusiness {
  name: string;
  industry: string;
  targetAudience: string;
  goals: string;
  budget: string;
  timeline: string;
}

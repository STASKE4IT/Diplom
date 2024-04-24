export interface Job {
    id: number;
    name: string;
    company: {
      name: string;
    };
    locations: {
      name: string;
    }[];
  }
export interface Company {
  name: string;
  logo: string;
  website: string;
}

export interface WorkExperienceItem {
  company: {
    name: string;
    logo: string;
    website: string;
  };
  jobTitle: string;
  startDate: string;
  endDate: string | null;
  links?: {
    title: string;
    url: string;
  }[];
}
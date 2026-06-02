export type BranchSummary = {
  name: string;
  location: string;
  pastor: string;
  members: number;
  focus: string;
  featured: boolean;
  slug: string;
  region: "bulawayo" | "other";
};

export const bulawayoBranches: BranchSummary[] = [
  {
    name: "Mbundane Branch",
    location: "Foundation College, Mbundane, Bulawayo",
    pastor: "Pastor Mukorowerwa",
    members: 180,
    focus: "Strong focus on youth discipleship",
    featured: true,
    slug: "mbundane",
    region: "bulawayo",
  },
  {
    name: "City Centre Branch",
    location: "Corner of Leopold Takawira Avenue and Fife Street, Bulawayo CBD (Drill Hall)",
    pastor: "Pastor Chiwire & Amai",
    members: 210,
    focus: "Urban ministry and marketplace evangelism",
    featured: true,
    slug: "city-center",
    region: "bulawayo",
  },
  {
    name: "Cowdray Park A",
    location: "Cowdray Park, Bulawayo",
    pastor: "Pastor Mavuto & Amai",
    members: 145,
    focus: "Emphasis on family restoration",
    featured: false,
    slug: "cowdry-park-a",
    region: "bulawayo",
  },
  {
    name: "Cowdray Park B",
    location: "Cowdray Park, Bulawayo",
    pastor: "Pastor Chivheya & Amai",
    members: 135,
    focus: "Specializing in deliverance ministry",
    featured: false,
    slug: "cowdry-park-b",
    region: "bulawayo",
  },
  {
    name: "Pumula Branch",
    location: "Pumula, Bulawayo",
    pastor: "Pastor Mugwagwa & Amai",
    members: 125,
    focus: "Strong community outreach programs",
    featured: false,
    slug: "phumula",
    region: "bulawayo",
  },
];

export const otherBranches: BranchSummary[] = [
  {
    name: "Kingsdale Branch",
    location: "Airport Kingsdale, Bulawayo",
    pastor: "Pastor Ndere & Amai",
    members: 95,
    focus: "Reaching travelers and workers near transport hubs",
    featured: false,
    slug: "kingsdale",
    region: "other",
  },
  {
    name: "Gweru Branch",
    location: "Elder Saj's House, 342 Linda Park, Gweru",
    pastor: "Pastor Jakc",
    members: 110,
    focus: "Overseeing Midlands province ministry",
    featured: true,
    slug: "gweru",
    region: "other",
  },
  {
    name: "Venice Branch",
    location: "Venice, Kadoma",
    pastor: "Pastor Hwendere & Amai",
    members: 85,
    focus: "Serving the local community through faithful ministry",
    featured: false,
    slug: "kadoma",
    region: "other",
  },
  {
    name: "Harare Branch",
    location: "Best Complex, Mbare, Harare",
    pastor: "Pastor Glsa",
    members: 155,
    focus: "Leading with national influence from the capital",
    featured: true,
    slug: "harare",
    region: "other",
  },
];

export const allBranches: BranchSummary[] = [...bulawayoBranches, ...otherBranches];

export const totalMembers = allBranches.reduce((acc, branch) => acc + branch.members, 0);

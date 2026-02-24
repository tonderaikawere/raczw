import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MapPin, Users, Calendar, Clock, Phone, Mail, Star, Heart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

// Branch data with father's picture
const branchesData: Record<string, any> = {
  "mbundane": {
    name: "Mbundane Branch",
    location: "Foundation College, Mbundane, Bulawayo",
    pastor: "Pastor Mukorowerwa",
    members: 180,
    focus: "Strong focus on youth discipleship",
    image: "/images/apostle-chigome.png",
    pastorImage: "/images/apostle-in-action.png",
    gallery: [
      "/images/church-building.jpg",
      "/images/youth-ministry.jpg",
      "/images/womens-ministry.png",
      "/images/hero-worship.png",
      "/images/community-outreach.jpg"
    ],
    services: [
      { day: "Sunday", time: "11:00 AM - 3:00 PM", type: "Main Service" },
      { day: "Wednesday", time: "5:00 PM - 6:00 PM", type: "Bible Study" },
      { day: "Friday", time: "5:00 PM - 6:00 PM", type: "Prayer Meeting" },
      { day: "Saturday", time: "10:00 AM - 12:00 PM", type: "Youth Fellowship" },
    ],
    contact: {
      phone: "+263 77 123 4567",
      email: "mbundane@racchurch.org",
      address: "Foundation College, Mbundane, Bulawayo",
      coordinates: "-20.1500, 28.5830"
    },
    description: "Our Mbundane Branch is a vibrant community dedicated to raising the next generation of believers through focused youth discipleship programs and family-centered ministry.",
    history: "Established in 2019 as our second branch, Mbundane has grown from 25 members to a thriving family of 180 believers, becoming a beacon of hope in the community.",
    achievements: [
      "Established youth leadership program",
      "Launched community feeding initiative",
      "Built strong family ministry",
      "Started weekly discipleship classes"
    ],
    upcomingEvents: [
      { title: "Youth Leadership Summit", date: "2025-02-15", time: "9:00 AM" },
      { title: "Family Conference", date: "2025-02-22", time: "10:00 AM" },
      { title: "Community Outreach", date: "2025-03-01", time: "2:00 PM" }
    ]
  },
  "city-center": {
    name: "City Center Branch",
    location: "Drill Hall Police Station, Bulawayo",
    pastor: "Pastor Maks",
    members: 210,
    focus: "Urban ministry and marketplace evangelism",
    image: "/images/apostle-chigome.png",
    pastorImage: "/images/appostle-preaching.png",
    gallery: [
      "/images/church-building.jpg",
      "/images/mens-ministry.jpg",
      "/images/hero-worship.png",
      "/images/community-outreach.jpg",
      "/images/womens-ministry.png"
    ],
    services: [
      { day: "Sunday", time: "11:00 AM - 3:00 PM", type: "Main Service" },
      { day: "Wednesday", time: "5:00 PM - 6:00 PM", type: "Bible Study" },
      { day: "Friday", time: "5:00 PM - 6:00 PM", type: "Prayer Meeting" },
      { day: "Tuesday", time: "6:00 PM - 7:30 PM", type: "Marketplace Ministry" },
    ],
    contact: {
      phone: "+263 77 234 5678",
      email: "citycenter@racchurch.org",
      address: "Drill Hall Police Station, Bulawayo",
      coordinates: "-20.1500, 28.5830"
    },
    description: "Located in the heart of Bulawayo, our City Center Branch is strategically positioned for urban ministry and marketplace evangelism, reaching professionals and city dwellers.",
    history: "Founded in 2018 as our flagship branch, City Center has become the spiritual hub for urban ministry, reaching the business community and city residents with the gospel.",
    achievements: [
      "Established marketplace ministry",
      "Launched business leaders fellowship",
      "Started urban outreach programs",
      "Built strong prayer network"
    ],
    upcomingEvents: [
      { title: "Business Leaders Summit", date: "2025-02-10", time: "6:00 PM" },
      { title: "Urban Outreach Day", date: "2025-02-17", time: "10:00 AM" },
      { title: "City Prayer Marathon", date: "2025-02-24", time: "6:00 AM" }
    ]
  },
  "cowdry-park-a": {
    name: "Cowdry Park A Branch",
    location: "Elder Chiweshi's House, 127 Cowdry Park",
    pastor: "Pastor Vkas",
    members: 145,
    focus: "Emphasis on family restoration",
    image: "/images/apostle-chigome.png",
    pastorImage: "/images/apostle-in-action.png",
    gallery: [
      "/images/church-building.jpg",
      "/images/womens-ministry.png",
      "/images/childrens-ministry.jpg",
      "/images/hero-worship.png",
      "/images/community-outreach.jpg"
    ],
    services: [
      { day: "Sunday", time: "11:00 AM - 3:00 PM", type: "Main Service" },
      { day: "Wednesday", time: "5:00 PM - 6:00 PM", type: "Bible Study" },
      { day: "Friday", time: "5:00 PM - 6:00 PM", type: "Prayer Meeting" },
      { day: "Saturday", time: "2:00 PM - 4:00 PM", type: "Family Fellowship" },
    ],
    contact: {
      phone: "+263 77 345 6789",
      email: "cowdrya@racchurch.org",
      address: "127 Cowdry Park, Bulawayo",
      coordinates: "-20.1500, 28.5830"
    },
    description: "Our Cowdry Park A Branch is a family-focused community dedicated to restoring families through biblical principles and strong fellowship.",
    history: "Established in 2020 to serve the growing Cowdry Park community, this branch has become known for its strong family ministry and community outreach programs.",
    achievements: [
      "Launched family restoration program",
      "Started marriage counseling services",
      "Built strong children's ministry",
      "Established community support groups"
    ],
    upcomingEvents: [
      { title: "Family Restoration Seminar", date: "2025-02-12", time: "2:00 PM" },
      { title: "Marriage Enrichment", date: "2025-02-19", time: "10:00 AM" },
      { title: "Community Family Day", date: "2025-02-26", time: "11:00 AM" }
    ]
  },
  "cowdry-park-b": {
    name: "Cowdry Park B Branch",
    location: "Elder Kheoa's House, 324 Cowdry Park",
    pastor: "Pastor Khaks",
    members: 135,
    focus: "Specializing in deliverance ministry",
    image: "/images/apostle-chigome.png",
    pastorImage: "/images/people-repenting.png",
    gallery: [
      "/images/church-building.jpg",
      "/images/hero-worship.png",
      "/images/prayer.png",
      "/images/people-repenting.png",
      "/images/community-outreach.jpg"
    ],
    services: [
      { day: "Sunday", time: "11:00 AM - 3:00 PM", type: "Main Service" },
      { day: "Wednesday", time: "5:00 PM - 6:00 PM", type: "Bible Study" },
      { day: "Friday", time: "5:00 PM - 6:00 PM", type: "Deliverance Service" },
      { day: "Monday", time: "6:00 PM - 8:00 PM", type: "Deliverance School" },
    ],
    contact: {
      phone: "+263 77 456 7890",
      email: "cowdryb@racchurch.org",
      address: "324 Cowdry Park, Bulawayo",
      coordinates: "-20.1500, 28.5830"
    },
    description: "Cowdry Park B Branch is known for its powerful deliverance ministry and spiritual warfare, bringing freedom to many through prayer.",
    history: "Founded in 2021 with a special focus on deliverance ministry, this branch has become a place of freedom and restoration for many seeking spiritual breakthrough.",
    achievements: [
      "Established deliverance school",
      "Launched freedom ministry",
      "Started spiritual warfare training",
      "Built strong prayer team"
    ],
    upcomingEvents: [
      { title: "Deliverance Conference", date: "2025-02-08", time: "9:00 AM" },
      { title: "Spiritual Warfare Training", date: "2025-02-15", time: "6:00 PM" },
      { title: "Freedom Night", date: "2025-02-22", time: "7:00 PM" }
    ]
  },
  "phumula": {
    name: "Phumula Branch",
    location: "Elder Gahd's House, 127 Phumula South",
    pastor: "Pastor Makgd",
    members: 125,
    focus: "Strong community outreach programs",
    image: "/images/apostle-chigome.png",
    pastorImage: "/images/community-outreach.jpg",
    gallery: [
      "/images/church-building.jpg",
      "/images/community-outreach.jpg",
      "/images/in-kitchen.png",
      "/images/hero-worship.png",
      "/images/youth-ministry.jpg"
    ],
    services: [
      { day: "Sunday", time: "11:00 AM - 3:00 PM", type: "Main Service" },
      { day: "Wednesday", time: "5:00 PM - 6:00 PM", type: "Bible Study" },
      { day: "Friday", time: "5:00 PM - 6:00 PM", type: "Prayer Meeting" },
      { day: "Saturday", time: "10:00 AM - 12:00 PM", type: "Community Outreach" },
    ],
    contact: {
      phone: "+263 77 567 8901",
      email: "phumula@racchurch.org",
      address: "127 Phumula South, Bulawayo",
      coordinates: "-20.1500, 28.5830"
    },
    description: "Our Phumula Branch is actively involved in community outreach, serving the local community through various programs and initiatives.",
    history: "Established in 2021 to serve the Phumula community, this branch has become a beacon of hope through its extensive outreach and feeding programs.",
    achievements: [
      "Launched feeding program",
      "Started community school support",
      "Built strong youth programs",
      "Established health outreach"
    ],
    upcomingEvents: [
      { title: "Community Health Day", date: "2025-02-13", time: "10:00 AM" },
      { title: "Feeding Program", date: "2025-02-20", time: "11:00 AM" },
      { title: "School Supplies Drive", date: "2025-02-27", time: "2:00 PM" }
    ]
  },
  "kingsdale": {
    name: "Kingsdale Branch",
    location: "Airport Kingsdale",
    pastor: "Pastor Zho",
    members: 95,
    focus: "Reaching travelers and workers near transport hubs",
    image: "/images/apostle-chigome.png",
    pastorImage: "/images/church-in-worship.png",
    gallery: [
      "/images/church-building.jpg",
      "/images/church-full.png",
      "/images/hero-worship.png",
      "/images/mens-ministry.jpg",
      "/images/community-outreach.jpg"
    ],
    services: [
      { day: "Sunday", time: "11:00 AM - 3:00 PM", type: "Main Service" },
      { day: "Wednesday", time: "5:00 PM - 6:00 PM", type: "Bible Study" },
      { day: "Friday", time: "5:00 PM - 6:00 PM", type: "Prayer Meeting" },
      { day: "Tuesday", time: "6:00 AM - 7:00 AM", type: "Early Morning Prayer" },
    ],
    contact: {
      phone: "+263 77 678 9012",
      email: "kingsdale@racchurch.org",
      address: "Airport Kingsdale, Bulawayo",
      coordinates: "-20.1500, 28.5830"
    },
    description: "Strategically located near transport hubs, our Kingsdale Branch reaches travelers and workers with the message of hope.",
    history: "Founded in 2022 to serve the transport community, this branch has become a spiritual oasis for travelers and workers in the Kingsdale area.",
    achievements: [
      "Established transport ministry",
      "Started early morning prayer",
      "Built strong men's fellowship",
      "Launched traveler outreach"
    ],
    upcomingEvents: [
      { title: "Transport Workers Fellowship", date: "2025-02-11", time: "6:00 PM" },
      { title: "Early Morning Prayer Marathon", date: "2025-02-18", time: "5:00 AM" },
      { title: "Traveler Outreach Day", date: "2025-02-25", time: "10:00 AM" }
    ]
  },
  "gweru": {
    name: "Gweru Branch",
    location: "Elder Saj's House, 342 Linda Park, Gweru",
    pastor: "Pastor Jakc",
    members: 110,
    focus: "Overseeing Midlands province ministry",
    image: "/images/apostle-chigome.png",
    pastorImage: "/images/worship-with-apostle's-team.png",
    gallery: [
      "/images/church-building.jpg",
      "/images/community-outreach.jpg",
      "/images/hero-worship.png",
      "/images/youth-ministry.jpg",
      "/images/womens-ministry.png"
    ],
    services: [
      { day: "Sunday", time: "11:00 AM - 3:00 PM", type: "Main Service" },
      { day: "Wednesday", time: "5:00 PM - 6:00 PM", type: "Bible Study" },
      { day: "Friday", time: "5:00 PM - 6:00 PM", type: "Prayer Meeting" },
      { day: "Saturday", time: "2:00 PM - 4:00 PM", type: "Midlands Outreach" },
    ],
    contact: {
      phone: "+263 77 789 0123",
      email: "gweru@racchurch.org",
      address: "342 Linda Park, Gweru",
      coordinates: "-19.4500, 29.8167"
    },
    description: "Our Gweru Branch serves as the spiritual hub for the Midlands province, overseeing ministry and outreach in the region.",
    history: "Established in 2020 as our first branch outside Bulawayo, Gweru has become the regional center for Midlands province ministry and outreach.",
    achievements: [
      "Established regional leadership",
      "Launched Midlands outreach",
      "Started provincial training",
      "Built strong inter-branch network"
    ],
    upcomingEvents: [
      { title: "Midlands Leaders Summit", date: "2025-02-14", time: "9:00 AM" },
      { title: "Provincial Outreach Day", date: "2025-02-21", time: "10:00 AM" },
      { title: "Regional Training", date: "2025-02-28", time: "2:00 PM" }
    ]
  },
  "kadoma": {
    name: "Kadoma Branch",
    location: "Chemgute Primary School, Kadoma",
    pastor: "Pastor Gka",
    members: 85,
    focus: "Focus on mining community ministry",
    image: "/images/apostle-chigome.png",
    pastorImage: "/images/church-building.jpg",
    gallery: [
      "/images/church-building.jpg",
      "/images/church-building.jpg",
      "/images/hero-worship.png",
      "/images/mens-ministry.jpg",
      "/images/community-outreach.jpg"
    ],
    services: [
      { day: "Sunday", time: "11:00 AM - 3:00 PM", type: "Main Service" },
      { day: "Wednesday", time: "5:00 PM - 6:00 PM", type: "Bible Study" },
      { day: "Friday", time: "5:00 PM - 6:00 PM", type: "Prayer Meeting" },
      { day: "Monday", time: "6:00 PM - 7:30 PM", type: "Miners Fellowship" },
    ],
    contact: {
      phone: "+263 77 890 1234",
      email: "kadoma@racchurch.org",
      address: "Chemgute Primary School, Kadoma",
      coordinates: "-18.9333, 30.1167"
    },
    description: "Serving the mining community of Kadoma, our branch provides spiritual support and guidance to miners and their families.",
    history: "Founded in 2022 to serve the mining community, Kadoma Branch has become a spiritual home for miners and their families in the area.",
    achievements: [
      "Established miners fellowship",
      "Started mining community outreach",
      "Built strong family support",
      "Launched safety prayer program"
    ],
    upcomingEvents: [
      { title: "Miners Safety Prayer", date: "2025-02-16", time: "6:00 PM" },
      { title: "Mining Community Day", date: "2025-02-23", time: "11:00 AM" },
      { title: "Family Support Workshop", date: "2025-03-02", time: "2:00 PM" }
    ]
  },
  "harare": {
    name: "Harare Branch",
    location: "Best Complex, Mbare, Harare",
    pastor: "Pastor Glsa",
    members: 155,
    focus: "Leading with national influence from the capital",
    image: "/images/apostle-chigome.png",
    pastorImage: "/images/praizing.png",
    gallery: [
      "/images/church-building.jpg",
      "/images/church-full.png",
      "/images/hero-worship.png",
      "/images/appostle-preaching.png",
      "/images/community-outreach.jpg"
    ],
    services: [
      { day: "Sunday", time: "11:00 AM - 3:00 PM", type: "Main Service" },
      { day: "Wednesday", time: "5:00 PM - 6:00 PM", type: "Bible Study" },
      { day: "Friday", time: "5:00 PM - 6:00 PM", type: "Prayer Meeting" },
      { day: "Saturday", time: "10:00 AM - 12:00 PM", type: "Leadership Training" },
    ],
    contact: {
      phone: "+263 77 901 2345",
      email: "harare@racchurch.org",
      address: "Best Complex, Mbare, Harare",
      coordinates: "-17.8292, 31.0522"
    },
    description: "Located in the capital city, our Harare Branch provides spiritual leadership and influence with national impact from the heart of Zimbabwe.",
    history: "Established in 2023 as our capital city branch, Harare has become a center for national influence and leadership development.",
    achievements: [
      "Established national leadership training",
      "Launched capital city outreach",
      "Started government ministry",
      "Built strong inter-denominational network"
    ],
    upcomingEvents: [
      { title: "National Leadership Summit", date: "2025-02-17", time: "9:00 AM" },
      { title: "Capital City Outreach", date: "2025-02-24", time: "10:00 AM" },
      { title: "Government Leaders Prayer", date: "2025-03-03", time: "6:00 PM" }
    ]
  },
};

// Generate metadata for each branch
export async function generateMetadata({ params }: { params: Promise<{ branch: string }> }): Promise<Metadata> {
  const { branch } = await params;
  const branchData = branchesData[branch];
  
  if (!branchData) {
    return {
      title: "Branch Not Found | Redemption Apostolic Church",
      description: "The requested branch could not be found.",
      alternates: {
        canonical: `/branches/${branch}`,
      },
    };
  }

  const title = `${branchData.name} | Redemption Apostolic Church`;
  const description = `Visit ${branchData.name} in ${branchData.location}. Led by ${branchData.pastor}. ${branchData.description}`;
  const canonical = `/branches/${branch}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      images: [{ url: branchData.image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [branchData.image],
    },
  };
}

export default async function BranchPage({ params }: { params: Promise<{ branch: string }> }) {
  const { branch } = await params;
  const branchData = branchesData[branch];

  if (!branchData) {
    return (
      <>
        <Header />
        <main className="pt-14 sm:pt-16 md:pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Branch Not Found</h1>
            <p className="text-muted-foreground mb-6">The branch you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/branches">View All Branches</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-14 sm:pt-16 md:pt-20">
        {/* Hero Section with Father's Picture */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={branchData.image}
              alt={`${branchData.name} - Apostle R. Chigome`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          </div>
          
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {branchData.name}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-6">
                Led by {branchData.pastor}
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-white/80">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{branchData.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{branchData.members} Members</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pastor Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-background">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Pastor</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Get to know the spiritual leader who guides our {branchData.name} family
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <h3 className="text-2xl font-bold mb-4">{branchData.pastor}</h3>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {branchData.pastor} is dedicated to serving the {branchData.name} community with passion and commitment. With years of ministry experience, they bring wisdom, compassion, and spiritual guidance to our growing family.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Leadership Style</p>
                        <p className="text-sm text-muted-foreground">Shepherd-hearted, visionary, and approachable</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Ministry Focus</p>
                        <p className="text-sm text-muted-foreground">{branchData.focus}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Heart className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Years of Service</p>
                        <p className="text-sm text-muted-foreground">Dedicated to serving the community</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  <img
                    src={branchData.pastorImage}
                    alt={`${branchData.pastor}`}
                    className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-xl"
                  />
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                    <Button className="bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Pastor
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Gallery</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Glimpse into the life and activities at {branchData.name}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {branchData.gallery.map((image: string, index: number) => (
                <div key={index} className="relative group overflow-hidden rounded-xl">
                  <img
                    src={image}
                    alt={`${branchData.name} - Gallery image ${index + 1}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white">
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Branch Information */}
        <section className="py-16 sm:py-20 lg:py-24 bg-background">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* About Section */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">About Our Branch</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {branchData.description}
                  </p>
                  <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                    <h3 className="font-bold text-lg mb-2 text-primary">Our History</h3>
                    <p className="text-muted-foreground">{branchData.history}</p>
                  </div>
                </div>

                {/* Focus Area */}
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary" />
                    Our Focus
                  </h3>
                  <p className="text-muted-foreground">{branchData.focus}</p>
                </div>

                {/* Achievements */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Our Achievements</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {branchData.achievements.map((achievement: string, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </div>
                        <p className="text-sm text-muted-foreground">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Times */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Service Times</h3>
                  <div className="space-y-3">
                    {branchData.services.map((service: any, index: number) => (
                      <div key={index} className="bg-card rounded-xl p-4 border border-border">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div className="flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-primary" />
                            <span className="font-medium">{service.day}</span>
                            <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded">
                              {service.type}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{service.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Events */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>
                  <div className="space-y-3">
                    {branchData.upcomingEvents.map((event: any, index: number) => (
                      <div key={index} className="bg-card rounded-xl p-4 border border-border hover:border-primary/30 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                            <h4 className="font-semibold text-primary">{event.title}</h4>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              <span>{event.date}</span>
                              <Clock className="w-4 h-4" />
                              <span>{event.time}</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Register
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Contact Information */}
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Address</p>
                        <p className="text-sm text-muted-foreground">{branchData.contact.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Phone</p>
                        <a href={`tel:${branchData.contact.phone}`} className="text-sm text-primary hover:underline">
                          {branchData.contact.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <a href={`mailto:${branchData.contact.email}`} className="text-sm text-primary hover:underline">
                          {branchData.contact.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-3">
                  <Button className="w-full gap-2" asChild>
                    <Link href="/contact">
                      <Mail className="w-4 h-4" />
                      Get in Touch
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full gap-2" asChild>
                    <Link href="/donate">
                      <Heart className="w-4 h-4" />
                      Support This Branch
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full gap-2" asChild>
                    <Link href={`/branches/${branch}`}>
                      <Users className="w-4 h-4" />
                      Visit Branch
                    </Link>
                  </Button>
                </div>

                {/* Social Media */}
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                  <div className="flex gap-3 justify-center">
                    <Button variant="outline" size="sm" className="w-10 h-10 rounded-full">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-5.373-12-12-12 5.373-12 12 5.373 12 12 12zm0-1.441c-5.314 0-9.628 4.314-9.628 9.628 0 5.314 4.314 9.628 9.628 0 5.314-4.314 9.628-9.628 0-5.314-4.314-9.628-9.628z"/>
                        <path d="M12 16c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/>
                      </svg>
                    </Button>
                    <Button variant="outline" size="sm" className="w-10 h-10 rounded-full">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-6.34 6.34l.68.36a8.948 8.948 0 01-1.27-1.27 8.948 8.948 0 01-1.27 1.27l-.68-.36A10.9 10.9 0 0123 3zM12 9v6m0 0a8 8 0 01-8 8H8a8 8 0 018 0z"/>
                      </svg>
                    </Button>
                    <Button variant="outline" size="sm" className="w-10 h-10 rounded-full">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3a5 5 0 005 5h3a5 5 0 005-5V7a5 5 0 00-5-5h-3a5 5 0 00-5 5v-3a5 5 0 005-5h3a5 5 0 005 5v3a5 5 0 00-5 5h-3z"/>
                        <path d="M14 4v16m-4-4h8"/>
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Visit Us This Sunday</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Experience the warmth and fellowship of our {branchData.name} family. We'd love to welcome you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/contact">
                  Plan Your Visit
                  <MapPin className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/branches">
                  View Other Branches
                  <Users className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Believe | Redemption Apostolic Church",
  description: "Learn about our core beliefs, doctrines, and theological foundations as an Apostolic church rooted in biblical truth.",
  alternates: {
    canonical: "/beliefs",
  },
  openGraph: {
    title: "What We Believe | Redemption Apostolic Church",
    description: "Learn about our core beliefs, doctrines, and theological foundations as an Apostolic church rooted in biblical truth.",
    url: "/beliefs",
  },
};

export default function BeliefsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Page Hero */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-[oklch(0.35_0.2_260)] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/hero-worship.png')] bg-cover bg-center opacity-10" />
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center text-primary-foreground">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">What We Believe</h1>
              <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                Our foundational beliefs are rooted in Scripture and guided by the Holy Spirit, forming the basis of our faith and practice.
              </p>
            </div>
          </div>
        </section>

        {/* Core Beliefs Section */}
        <section className="py-24 bg-background">
          <div className="w-full max-w-screen-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Core Doctrines</h2>
              
              <div className="space-y-12">
                {/* The Bible */}
                <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                  <h3 className="text-2xl font-bold text-primary mb-4">The Holy Scriptures</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We believe the Bible, consisting of 66 books of the Old and New Testaments, is the inspired, infallible, and authoritative Word of God. It is the supreme and final authority for faith and practice.
                  </p>
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <p className="text-sm font-medium text-primary">2 Timothy 3:16-17</p>
                    <p className="text-sm italic text-muted-foreground mt-1">
                      "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness..."
                    </p>
                  </div>
                </div>

                {/* God */}
                <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                  <h3 className="text-2xl font-bold text-primary mb-4">One True God</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We believe in one eternal God, Creator of all things, infinitely perfect and eternally existing in three persons: Father, Son, and Holy Spirit. This mystery of the Trinity is the foundation of our understanding of God's nature.
                  </p>
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <p className="text-sm font-medium text-primary">Deuteronomy 6:4</p>
                    <p className="text-sm italic text-muted-foreground mt-1">
                      "Hear, O Israel: The LORD our God, the LORD is one."
                    </p>
                  </div>
                </div>

                {/* Jesus Christ */}
                <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                  <h3 className="text-2xl font-bold text-primary mb-4">Jesus Christ</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We believe in Jesus Christ, God's only Son, our Lord and Savior. He was conceived by the Holy Spirit, born of the Virgin Mary, lived a sinless life, performed miracles, died on the cross for our sins, rose from the dead, and ascended to heaven.
                  </p>
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <p className="text-sm font-medium text-primary">John 3:16</p>
                    <p className="text-sm italic text-muted-foreground mt-1">
                      "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."
                    </p>
                  </div>
                </div>

                {/* Salvation */}
                <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                  <h3 className="text-2xl font-bold text-primary mb-4">Salvation by Grace</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We believe salvation is God's free gift to all who accept Jesus Christ as Lord and Savior. It is received by grace through faith, not by works, resulting in forgiveness of sins, reconciliation with God, and the promise of eternal life.
                  </p>
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <p className="text-sm font-medium text-primary">Ephesians 2:8-9</p>
                    <p className="text-sm italic text-muted-foreground mt-1">
                      "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God..."
                    </p>
                  </div>
                </div>

                {/* Holy Spirit */}
                <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                  <h3 className="text-2xl font-bold text-primary mb-4">The Holy Spirit</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We believe in the Holy Spirit, the third person of the Trinity, who convicts the world of sin, regenerates believers, indwells, seals, and empowers them for godly living and service. We believe in the gifts of the Spirit for the edification of the Church.
                  </p>
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <p className="text-sm font-medium text-primary">Acts 2:38-39</p>
                    <p className="text-sm italic text-muted-foreground mt-1">
                      "Peter replied, 'Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit.'"
                    </p>
                  </div>
                </div>

                {/* The Church */}
                <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                  <h3 className="text-2xl font-bold text-primary mb-4">The Church</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We believe the Church is the universal Body of Christ, composed of all born-again believers, and the local expression of this Body through organized, worshipping communities. The Church exists to worship God, make disciples, and serve humanity.
                  </p>
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <p className="text-sm font-medium text-primary">Matthew 28:19-20</p>
                    <p className="text-sm italic text-muted-foreground mt-1">
                      "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit..."
                    </p>
                  </div>
                </div>

                {/* Baptism */}
                <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                  <h3 className="text-2xl font-bold text-primary mb-4">Water Baptism</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We believe in water baptism by immersion as an ordinance of the Church, symbolizing the believer's identification with Christ's death, burial, and resurrection. It is a public declaration of faith and commitment to follow Christ.
                  </p>
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <p className="text-sm font-medium text-primary">Romans 6:4</p>
                    <p className="text-sm italic text-muted-foreground mt-1">
                      "We were therefore buried with him through baptism into death in order that, just as Christ was raised from the dead through the glory of the Father, we too may live a new life."
                    </p>
                  </div>
                </div>

                {/* Second Coming */}
                <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                  <h3 className="text-2xl font-bold text-primary mb-4">Second Coming of Christ</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We believe in the personal, visible, and imminent return of Jesus Christ to judge the living and the dead, establish His eternal kingdom, and fulfill God's redemptive plan for humanity.
                  </p>
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <p className="text-sm font-medium text-primary">1 Thessalonians 4:16-17</p>
                    <p className="text-sm italic text-muted-foreground mt-1">
                      "For the Lord himself will come down from heaven, with a loud command, with the voice of the archangel and with the trumpet call of God..."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-24 bg-muted/30">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Royal Blue Ribbon Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our core values guide everything we do as a church family
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl p-8 text-center border border-border">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-rose-600">❤️</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Love</h3>
                <p className="text-muted-foreground">
                  Unconditional love for God and one another, reflecting Christ's love in all relationships and actions.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 text-center border border-border">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">🕊️</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Peace</h3>
                <p className="text-muted-foreground">
                  Pursuing peace with God, within ourselves, and in our relationships with others and the community.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 text-center border border-border">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple-600">🤝</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Unity</h3>
                <p className="text-muted-foreground">
                  Walking together in unity of purpose and spirit, supporting one another as members of God's family.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

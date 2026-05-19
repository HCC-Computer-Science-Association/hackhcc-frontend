import { Mail } from "lucide-react";
import Image from "next/image";

interface Sponsor {
  name: string;
  logo: string;
  url: string;
}

interface Tier {
  name: string;
  slots: number;
  color: string;
  sponsors: Sponsor[];
}

export function Sponsors() {
  const sponsorTiers: Tier[] = [
    { name: "NEXUS", slots: 2, color: "#fcee0a", sponsors: [
      {
        name: "ITServe",
        logo: "/sponsors/itserve.png",
        url: "https://www.itserve.org/",
      },
        {
          name: "HCC",
          logo: "/sponsors/hcc.png",
          url: "https://www.hccs.edu/community--partners/entrepreneurial-initiatives/center-for-entrepreneurship---southwest/",
        },
      ] },
    { name: "GRID", slots: 3, color: "#00f0ff", sponsors: [
      {
        name: "Google",
        logo: "/sponsors/google.png",
        url: "https://google.com",
      },
    ] },
    { name: "CIRCUIT", slots: 4, color: "#00ff9f", sponsors: [
        {
          name: "DataVox",
          logo: "/sponsors/datavox.png",
          url: "https://www.datavox.net/",
        },
        {
          name: "Tanches",
          logo: "/sponsors/tanches.png",
          url: "https://tanches.com/",
        },
        {
          name: "NordVPN",
          logo: "/sponsors/nordvpn.png",
          url: "https://nordvpn.com/",
        },
      ] },
    { name: "SHARD", slots: 4, color: "#8888aa", sponsors: [
      {
        name: "PureButtons",
        logo: "/sponsors/purebutton.png",
        url: "https://www.purebuttons.com/",
      },
      {
        name: "GitBook",
        logo: "/sponsors/gitbook.png",
        url: "https://www.gitbook.com/",
      },
    ] },
  ];

  return (
    <>
      <section
        id="sponsors"
        className="py-20 px-4 bg-cp-yellow bg-[#fcee0a] bg-[url('../img/razor-099e4b40.svg')] bg-[length:auto_45px] bg-[right_top] bg-repeat-x py-[120px] px-[50px] -translate-y-[2px]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h2>
                <span className="text-dark-navy">OUR SPONSORS</span>
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-yellow to-cyber-magenta mx-auto mb-4"></div>
            <p className="text-dark-navy/70">Powered by the best in tech</p>
          </div>

          {/* Sponsor tiers */}
          <div className="space-y-12 mb-16 bg-dark-navy p-8 md:p-18">
            {sponsorTiers.map((tier) => (
              <div key={tier.name}>
                <div className="flex items-center gap-4 mb-6 ">
                  <div
                    className="font-mono font-bold tracking-widest"
                    style={{ color: tier.color }}
                  >
                    {tier.name == "NEXUS" && <h2>{tier.name}</h2>}
                    {tier.name == "GRID" && <h3>{tier.name}</h3>}
                    {tier.name == "CIRCUIT" && <h4>{tier.name}</h4>}
                    {tier.name == "SHARD" && <h5>{tier.name}</h5>}
                  </div>
                  <div
                    className="flex-1 h-px"
                    style={{ backgroundColor: `${tier.color}30` }}
                  />
                </div>

                <div
                  className={`grid gap-4 ${
                    tier.slots === 2
                      ? "grid-cols-2"
                      : tier.slots === 3
                        ? "grid-cols-3"
                        : "grid-cols-2 md:grid-cols-4"
                  }`}
                >
                  {Array.from({ length: tier.slots }).map((_, index) => {
                    const sponsor = tier.sponsors[index];
                    return (
                      <div
                        key={index}
                        className="relative aspect-[2/1] border border-[#2a2a3a] flex items-center justify-center hover:border-opacity-50 transition-all group overflow-hidden"
                        style={{ borderColor: `${tier.color}30` }}
                      >
                        {sponsor ? (
                          <a
                            href={sponsor.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full h-full flex items-center justify-center p-2 group/sponsor"
                          >
                            <div className="relative w-full h-full">
                              <Image
                                src={sponsor.logo}
                                alt={sponsor.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                          </a>
                        ) : (
                          <span className="font-mono text-[#8888aa]/50 text-sm">
                            TBA
                          </span>
                        )}

                        {/* Corner accent */}
                        <div
                          className="absolute top-0 right-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{
                            background: `linear-gradient(135deg, ${tier.color}30 50%, transparent 50%)`,
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          {/* Sponsor CTA */}
          <div className="relative max-w-2xl mx-auto">
            <div className="relative bg-dark-navy/80 border border-[#fcee0a]/30 p-8 md:p-12 text-center">
              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[#fcee0a]" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[#fcee0a]" />

              <h3 className="text-2xl font-bold text-white mb-4">
                INTERESTED IN SPONSORING?
              </h3>
              <p className="text-[#8888aa] mb-8 max-w-lg mx-auto">
                Partner with us to reach 150+ talented developers, designers,
                and innovators. Showcase your brand, recruit talent, and support
                the Houston tech community.
              </p>

              <a
                href="mailto:sponsor@hackhcc.org"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#fcee0a] text-[#0a0a0f] font-bold uppercase tracking-wider hover:bg-[#00f0ff] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Contact Us</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[initial] bg-[url('../img/separator-yellow-f58e9aba.svg')] rotate-180 h-8 bg-no-repeat  w-full z-1"></div>
    </>
  );
}

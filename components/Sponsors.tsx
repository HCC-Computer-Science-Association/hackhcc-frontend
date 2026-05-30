import { Mail } from "lucide-react";
import Image from "next/image";

interface Sponsor {
  name: string;
  logo?: string;
  url: string;
  textOnly?: boolean;
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
        url: "https://google.com",
        textOnly: true,
      },
    ] },
    { name: "CIRCUIT", slots: 4, color: "#00ff9f", sponsors: [
        {
          name: "DataVox",
          logo: "/sponsors/DataVox_logoReversed-3-300x87.png",
          url: "https://www.datavox.net/",
        },
        {
          name: "Tanches",
          logo: "/sponsors/tanches.png",
          url: "https://tanches.com/",
        },
        {
          name: "AT&T",
          logo: "/sponsors/att.png",
          url: "https://www.att.com/",
        },
      ] },
    { name: "SHARD", slots: 8, color: "#8888aa", sponsors: [
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
      {
        name: "NordVPN",
        logo: "/sponsors/NordVPN_Logo_RGB_Primary_Blue_White (1).svg",
        url: "https://nordvpn.com/",
      },
      {
        name: "NordPass",
        logo: "/sponsors/NordPass-white-horizontal (2).png",
        url: "https://nordpass.com/",
      },
      {
        name: "NordProtect",
        logo: "/sponsors/nord_protect_white_letters.png",
        url: "https://nordprotect.com/",
      },
      {
        name: "Incogni",
        logo: "/sponsors/Incogni_logo_white_better_quality.png",
        url: "https://incogni.com/",
      },
      {
        name: "Saily",
        logo: "/sponsors/saily-logo-white (3).png",
        url: "https://saily.com/",
      },
      {
        name: "Nexos",
        logo: "/sponsors/nexos-ai-logo-MAIN-white-horizontal.png",
        url: "#",
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

                <div className="flex flex-wrap justify-center gap-4">
                  {tier.sponsors.map((sponsor, index) => (
                    <div
                      key={index}
                      className={`relative aspect-[2/1] border flex items-center justify-center hover:border-opacity-50 transition-all group overflow-hidden flex-shrink-0 ${
                        tier.slots <= 2
                          ? "w-[calc(50%-8px)]"
                          : tier.slots === 3
                            ? "w-[calc(33.333%-11px)]"
                            : "w-[calc(50%-8px)] md:w-[calc(25%-12px)]"
                      }`}
                      style={{ borderColor: `${tier.color}30` }}
                    >
                      {sponsor.textOnly ? (
                        <a
                          href={sponsor.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full h-full flex items-center justify-center p-4"
                        >
                          <span
                            className="font-bold text-2xl tracking-wide transition-opacity hover:opacity-70"
                            style={{ color: tier.color }}
                          >
                            {sponsor.name}
                          </span>
                        </a>
                      ) : (
                        <a
                          href={sponsor.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full h-full flex items-center justify-center p-2 group/sponsor"
                        >
                          <div className="relative w-full h-full">
                            <Image
                              src={sponsor.logo!}
                              alt={sponsor.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </a>
                      )}

                      {/* Corner accent */}
                      <div
                        className="absolute top-0 right-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{
                          background: `linear-gradient(135deg, ${tier.color}30 50%, transparent 50%)`,
                        }}
                      />
                    </div>
                  ))}
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

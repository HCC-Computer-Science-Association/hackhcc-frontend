import { Sparkles } from "lucide-react";

export function Sponsors() {
  // Mock sponsor data
  const sponsorTiers = [
    {
      tier: "NEXUS",
      color: "yellow",
      sponsors: [
        { name: "TBA", logo: "" },
        { name: "TBA", logo: "" },
      ],
    },
    {
      tier: "GRID",
      color: "cyan",
      sponsors: [
        { name: "TBA", logo: "" },
        { name: "TBA", logo: "" },
      ],
    },
    {
      tier: "CIRCUIT",
      color: "red",
      sponsors: [
        { name: "TBA", logo: "" },
        { name: "TBA", logo: "" },
      ],
    },
    {
      tier: "SHARD",
      color: "platinum",
      sponsors: [
        { name: "TBA", logo: "" },
        { name: "TBA", logo: "" },
      ],
    },
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

          <div className="space-y-12 bg-dark-navy p-8 md:p-18">
            {sponsorTiers.map((tier, tierIndex) => {
              const borderClass =
                tier.color === "platinum"
                  ? "neon-border-platinum"
                  : tier.color === "yellow"
                  ? "neon-border-yellow"
                  : tier.color === "silver"
                  ? "neon-border-silver"
                  : tier.color === "cyan"
                  ? "neon-border-cyan"
                  : "neon-border-magenta";

              const textClass =
                tier.color === "platinum"
                  ? "neon-text-platinum"
                  : tier.color === "yellow"
                  ? "neon-text-yellow"
                  : tier.color === "silver"
                  ? "neon-text-silver"
                  : tier.color === "cyan"
                  ? "neon-text-cyan"
                  : "neon-text-magenta";

              return (
                <div key={tierIndex}>
                  <h3 className={`text-center mb-6 text-white`}>{tier.tier}</h3>
                  <div
                    className={`grid ${
                      tier.sponsors.length === 2
                        ? "md:grid-cols-2"
                        : tier.sponsors.length === 3
                        ? "md:grid-cols-3"
                        : "md:grid-cols-2 md:grid-cols-4"
                    } gap-6`}
                  >
                    {tier.sponsors.map((sponsor, sponsorIndex) => (
                      <div
                        key={sponsorIndex}
                        className={`${borderClass} bg-dark-navy/80 backdrop-blur-sm p-8 flex flex-col items-center justify-center hover:transform hover:scale-105 transition-all duration-300 aspect-square`}
                      >
                        <div className="text-5xl mb-3">{sponsor.logo}</div>
                        <p className="text-white text-center">{sponsor.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Become a Sponsor CTA */}
          <div className="mt-16 text-center">
            <div className="neon-border-magenta bg-dark-navy/80 backdrop-blur-sm p-12 inline-block">
              <h3 className="mb-4 text-white">INTERESTED IN SPONSORING?</h3>
              <p className="text-white/70 mb-6 max-w-2xl">
                Partner with us to reach 300+ talented developers, designers,
                and innovators. Showcase your brand, recruit talent, and support
                the Houston tech community.
              </p>
              <a
                href="mailto:officialhackhcc@gmail.com?subject=Sponsorship%20Packages%20Inquiry"
                className="inline-flex cursor-pointer px-8 py-4 bg-neon-yellow text-dark-navy hover:bg-neon-yellow/90 transition-all duration-300 shadow-[0_0_20px_rgba(255,215,0,0.5)]"
              >
                <span className="font-bold">CONTACT US</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[initial] bg-[url('../img/separator-yellow-f58e9aba.svg')] rotate-180 h-8 bg-no-repeat  w-full z-1">
      </div>
    </>
  );
}

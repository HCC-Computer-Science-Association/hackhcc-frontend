export function Prizes() {

  const tracks = [
    {
      id: "beginner",
      name: "Beginner Track",
      description:
        "Crafted for first time hackathon participants or even people who don't even know how to code. This track comes with a guide on building your own project.",
      link: "https://hackhcc.gitbook.io/hackhcc-docs",
      accent: "#00e5ff",
      hoverBorder: "hover:border-[#00e5ff]/50",
      accentClass: "text-[#00e5ff]",
      barClass: "bg-[#00e5ff]",
    },
    {
      id: "general",
      name: "General Track",
      description:
        "The General track is jacked in for you to flatline your limiters and unleash your full creative chrome. Ghost the protocols hardwired by the corpos and run wild in the neon dark.",
      link: "https://hackhcc.gitbook.io/hackhcc-docs",
      accent: "#e91e8c",
      hoverBorder: "hover:border-[#e91e8c]/50",
      accentClass: "text-[#e91e8c]",
      barClass: "bg-[#e91e8c]",
    },
  ];

  const generalPrizes = [
    { place: "1st Place", amount: "$200", detail: "Amazon Gift Card × each member (4)", accent: "#ffd700" },
    { place: "2nd Place", amount: "$150", detail: "Amazon Gift Card × each member (4)", accent: "#c0c0c0" },
    { place: "3rd Place", amount: "$100", detail: "Amazon Gift Card × each member (4)", accent: "#cd7f32" },
  ];

  const beginnerPrizes = [
    { place: "1st Place", amount: "$100", detail: "Amazon Gift Card + NordVPN Bundle × each member (4)", accent: "#ffd700" },
    { place: "2nd Place", amount: "$50", detail: "Amazon Gift Card + Saily/Incogni Bundle × each member (4)", accent: "#c0c0c0" },
    { place: "3rd Place", amount: "$50", detail: "Amazon Gift Card + Saily/Incogni Bundle × each member (4)", accent: "#cd7f32" },
  ];

  const challenges = [
    { name: "Best Use of AI", prize: "NexosAI", accent: "#00e5ff" },
    { name: "Best Solo Hack", prize: "Raspberry Pi 5 Kit", accent: "#e91e8c" },
  ];

  const raffle = [
    { name: "Beats by Dre", accent: "#ffd700" },
    { name: "Raspberry Pi 5 Kit", accent: "#e91e8c" },
  ];

  const typingChallenge = { name: "Typing Challenge", prize: "Hackerbox", accent: "#00e5ff" };

  return (
    <section id="prizes" className="py-20 px-4 relative overflow-hidden bg-dark-navy">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(233, 30, 140, 0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(233, 30, 140, 0.5) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4">
            <span className="text-white">PRIZES & AWARDS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-yellow to-cyber-magenta mx-auto" />
        </div>

        {/* Tracks */}
        <div className="mb-16">
          <h3 className="text-center text-xl font-bold text-[#e8e8e8] mb-8">TRACKS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tracks.map((track, index) => (
              <div
                key={track.id}
                className={`group relative bg-[#12121a] border border-[#2a2a3a] p-8 hover:scale-[1.02] transition-all duration-300 ${track.hoverBorder}`}
              >
                <div className="absolute top-2 left-2 font-mono text-xs text-[#8888aa]">0{index + 1}</div>
                <h4 className={`font-bold mb-4 ${track.accentClass}`}>{track.name}</h4>
                <p className="text-white/70 text-sm leading-relaxed mb-6">{track.description}</p>
                <a
                  href={track.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xs font-mono uppercase tracking-wider ${track.accentClass} opacity-80 hover:opacity-100 transition-opacity`}
                >
                  For more info check our hacker pack →
                </a>
                <div className={`absolute bottom-0 left-0 h-[2px] w-0 ${track.barClass} group-hover:w-full transition-all duration-500`} />
              </div>
            ))}
          </div>
        </div>

        {/* General Track Prizes */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-[#ffd700]/30" />
            <h3 className="text-xl font-bold text-[#ffd700] whitespace-nowrap">GENERAL TRACK</h3>
            <div className="flex-1 h-px bg-[#ffd700]/30" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {generalPrizes.map((prize, index) => (
              <div
                key={index}
                className="group relative bg-[#12121a] border border-[#2a2a3a] p-6 transition-all duration-300"
              >
                <div className="absolute top-2 left-2 font-mono text-xs text-[#8888aa]">0{index + 1}</div>
                <div className="pt-2">
                  <div className="text-sm font-mono text-[#8888aa] mb-1 uppercase tracking-wider">{prize.place}</div>
                  <div className="text-3xl font-bold font-mono mb-2" style={{ color: prize.accent }}>{prize.amount}</div>
                  <div className="text-white/60 text-xs leading-relaxed">{prize.detail}</div>
                </div>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500" style={{ background: prize.accent }} />
              </div>
            ))}
          </div>
        </div>

        {/* Beginner Track Prizes */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-[#00e5ff]/30" />
            <h3 className="text-xl font-bold text-[#00e5ff] whitespace-nowrap">BEGINNER TRACK</h3>
            <div className="flex-1 h-px bg-[#00e5ff]/30" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {beginnerPrizes.map((prize, index) => (
              <div
                key={index}
                className="group relative bg-[#12121a] border border-[#2a2a3a] p-6 transition-all duration-300"
              >
                <div className="absolute top-2 left-2 font-mono text-xs text-[#8888aa]">0{index + 1}</div>
                <div className="pt-2">
                  <div className="text-sm font-mono text-[#8888aa] mb-1 uppercase tracking-wider">{prize.place}</div>
                  <div className="text-3xl font-bold font-mono mb-2" style={{ color: prize.accent }}>{prize.amount}</div>
                  <div className="text-white/60 text-xs leading-relaxed">{prize.detail}</div>
                </div>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500" style={{ background: prize.accent }} />
              </div>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="mb-12">
          <h3 className="text-center text-xl font-bold text-[#e8e8e8] mb-8">CHALLENGES</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {challenges.map((challenge, index) => (
              <div
                key={challenge.name}
                className="group relative bg-[#12121a] border border-[#2a2a3a] p-6 text-center transition-all duration-300"
                style={{ ['--hover-border' as string]: challenge.accent }}
              >
                <div className="absolute top-2 left-2 font-mono text-xs text-[#8888aa]">0{index + 1}</div>
                <h5 className="font-bold text-base mb-2" style={{ color: challenge.accent }}>{challenge.name}</h5>
                <p className="text-white/70 text-sm font-mono">{challenge.prize}</p>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500" style={{ background: challenge.accent }} />
              </div>
            ))}
          </div>
        </div>

        {/* Raffle + Typing Challenge */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Raffle */}
          <div>
            <h3 className="text-center text-xl font-bold text-[#e8e8e8] mb-6">RAFFLE</h3>
            <div className="flex flex-col gap-3">
              {raffle.map((item, index) => (
                <div
                  key={item.name}
                  className="group relative bg-[#12121a] border border-[#2a2a3a] px-6 py-4 flex items-center gap-4 transition-all duration-300"
                >
                  <div className="font-mono text-xs text-[#8888aa]">0{index + 1}</div>
                  <span className="text-[#e8e8e8] font-semibold text-sm">{item.name}</span>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500" style={{ background: item.accent }} />
                </div>
              ))}
            </div>
          </div>

          {/* Typing Challenge */}
          <div>
            <h3 className="text-center text-xl font-bold text-[#e8e8e8] mb-6">TYPING CHALLENGE</h3>
            <div
              className="group relative bg-[#12121a] border border-[#2a2a3a] p-6 text-center transition-all duration-300 hover:border-[#00e5ff]/50"
            >
              <h5 className="font-bold text-base text-[#00e5ff] mb-2">{typingChallenge.name}</h5>
              <p className="text-white/70 text-sm font-mono">{typingChallenge.prize}</p>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#00e5ff] group-hover:w-full transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
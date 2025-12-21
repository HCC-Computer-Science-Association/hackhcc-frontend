import { Trophy, Award, Medal, Sparkles } from 'lucide-react';

export function Prizes() {
  const prizes = [
    {
      place: '1ST PLACE',
      icon: Trophy,
      amount: '$20,000',
      perks: ['Cash Prize', 'Mentorship Program', 'Featured on Platform'],
      color: 'yellow',
      size: 'large'
    },
    {
      place: '2ND PLACE',
      icon: Award,
      amount: '$12,000',
      perks: ['Cash Prize', '3 Month Access', 'Sponsor Meetings'],
      color: 'cyan',
      size: 'medium'
    },
    {
      place: '3RD PLACE',
      icon: Medal,
      amount: '$8,000',
      perks: ['Cash Prize', 'Premium Swag Pack', 'LinkedIn Feature'],
      color: 'magenta',
      size: 'small'
    }
  ];

  const tracks = [
    { name: 'AI Track', prize: '$5,000' },
    { name: 'MLH Track', prize: '$5,000' },
    { name: 'Social Impact', prize: '$3,000' },
    { name: 'Best Design', prize: '$2,000' }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-dark-navy">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5"
           style={{
             backgroundImage: `linear-gradient(rgba(233, 30, 140, 0.5) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(233, 30, 140, 0.5) 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }}>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            <span className="neon-text-magenta">PRIZES & AWARDS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-yellow to-cyber-magenta mx-auto mb-4"></div>
          <p className="text-xl text-white/80">$50,000+ in total prizes</p>
        </div>

        {/* Main Prizes */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {prizes.map((prize, index) => {
            const Icon = prize.icon;
            const borderClass = 
              prize.color === 'yellow' ? 'neon-border-yellow' :
              prize.color === 'cyan' ? 'neon-border-cyan' :
              'neon-border-magenta';
            
            const iconColor = 
              prize.color === 'yellow' ? 'text-neon-yellow' :
              prize.color === 'cyan' ? 'text-cyber-cyan' :
              'text-cyber-magenta';

            const textGlow = 
              prize.color === 'yellow' ? 'neon-text-yellow' :
              prize.color === 'cyan' ? 'neon-text-cyan' :
              'neon-text-magenta';

            const dotColor = 
              prize.color === 'yellow' ? 'bg-neon-yellow' :
              prize.color === 'cyan' ? 'bg-cyber-cyan' :
              'bg-cyber-magenta';

            return (
              <div
                key={index}
                className={`${borderClass} bg-dark-bg/80 backdrop-blur-sm p-8 text-center hover:transform hover:scale-105 transition-all duration-300 ${
                  prize.size === 'large' ? 'md:col-span-3 md:row-start-1' : ''
                }
                ${
                  prize.size === 'medium' ? 'md:col-span-2' : ''
                }`}
              >
                <Icon className={`w-16 h-16 mx-auto mb-4 ${iconColor}`} />
                <h3 className="mb-2 text-white">{prize.place}</h3>
                <div className={`text-5xl mb-6 ${textGlow}`}>
                  {prize.amount}
                </div>
                <div className="space-y-2">
                  {prize.perks.map((perk, perkIndex) => (
                    <div key={perkIndex} className="flex items-center justify-center gap-2">
                      <div className={`w-2 h-2 ${dotColor} rounded-full`}></div>
                      <span className="text-white/70">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Track Prizes */}
        <div className="neon-border-cyan bg-dark-bg/80 backdrop-blur-sm p-8">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Sparkles className="w-8 h-8 text-cyber-cyan" />
            <h3 className="neon-text-cyan">SPECIAL TRACK PRIZES</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tracks.map((track, index) => (
              <div
                key={index}
                className="bg-dark-navy/60 p-6 border border-white/20 hover:border-cyber-cyan transition-colors duration-300"
              >
                <h4 className="text-white mb-2">{track.name}</h4>
                <p className="text-2xl neon-text-yellow">{track.prize}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

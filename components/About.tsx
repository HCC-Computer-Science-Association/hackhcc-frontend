import { Code2, Users, Trophy, Cpu } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Code2,
      title: 'BUILD',
      description: 'Create cutting-edge projects with the latest tech stack',
      color: 'cyan'
    },
    {
      icon: Users,
      title: 'CONNECT',
      description: 'Network with 300+ developers, designers, and innovators',
      color: 'magenta'
    },
    {
      icon: Trophy,
      title: 'COMPETE',
      description: '$50K in prizes across multiple challenge tracks',
      color: 'yellow'
    },
    {
      icon: Cpu,
      title: 'LEARN',
      description: 'Workshops, mentorship, and tech talks from industry leaders',
      color: 'cyan'
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-dark-navy">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-cyan/5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyber-magenta/5 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            <span className="neon-text-yellow">ABOUT THE EVENT</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-magenta mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClass = feature.color === 'cyan' 
              ? 'neon-border-cyan' 
              : feature.color === 'magenta' 
              ? 'neon-border-magenta' 
              : 'neon-border-yellow';
            
            return (
              <div
                key={index}
                className={`${colorClass} bg-dark-bg/80 backdrop-blur-sm p-6 hover:transform hover:scale-105 transition-all duration-300 group`}
              >
                <Icon className={`w-12 h-12 mb-4 ${
                  feature.color === 'cyan' 
                    ? 'text-cyber-cyan' 
                    : feature.color === 'magenta'
                    ? 'text-cyber-magenta'
                    : 'text-neon-yellow'
                } group-hover:animate-pulse`} />
                <h4 className="mb-2 text-white">{feature.title}</h4>
                <p className="text-white/70 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="neon-border-magenta overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1753998941587-5befe71f4572?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwY29kaW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjYyNzYxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Coding atmosphere"
                className="w-full h-auto opacity-80"
              />
            </div>
          </div>

          <div>
            <h3 className="mb-4 neon-text-magenta">WHY HACKHCC: CODERUNNERS?</h3>
            <p className="text-white/70 mb-4">
              In the heart of Houston's tech district, we're bringing together the brightest minds to hack the future. Whether you're a seasoned developer or just starting your coding journey, HACKHCC: CODERUNNERS is your gateway to the next level.
            </p>
            <p className="text-white/70 mb-6">
              Push the boundaries of what's possible. Our venue provides the perfect environment for innovation and collaboration.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyber-cyan rounded-full animate-pulse"></div>
                <span className="text-white/70">All skill levels welcome</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyber-magenta rounded-full animate-pulse"></div>
                <span className="text-white/70">Free food & swag</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-yellow rounded-full animate-pulse"></div>
                <span className="text-white/70">24/7 mentorship</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

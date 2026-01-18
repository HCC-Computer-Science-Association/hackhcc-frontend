import { Terminal, Zap } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-navy">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        {/* <img
          src="https://images.unsplash.com/photo-1688377051459-aebb99b42bff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBuZW9uJTIwY2l0eXxlbnwxfHx8fDE3NjYyMTQ2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Cyberpunk background"
          className="w-full h-full object-cover opacity-20"
        /> */}
          <Image
            src="/img/Banner-Cityscape.png"
            alt="Cyberpunk background"
            fill

            className="object-cover opacity-100"
            priority
          />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-navy via-deep-purple/50 to-dark-navy"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center scanline">
       

        {/* Logo Image */}
        <div className="flex justify-center glitch">
          <Image
            src="/hackhcc-coderunners-logo.png"
            alt="HackHCC: Coderunners Logo"
            width={1400}
            height={600}
            className="w-full max-w-3xl h-auto logo-glow"
            priority
          />
        </div>

         <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 neon-border-cyan bg-dark-bg/80 rounded-full backdrop-blur-sm">
          {/* <Terminal className="w-4 h-4 text-cyber-cyan" /> */}
          <span className="text-cyber-cyan">
            Houston, Texas // April 11-12, 2026
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pb-8">
          <a
            href="https://registration.socio.events/e/hackhcc"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex cursor-pointer px-8 py-4 
            bg-neon-yellow text-dark-navy hover:bg-neon-yellow/90 transition-all duration-300 overflow-hidden shadow-[0_0_20px_rgba(255,215,0,0.5)] hover:shadow-[0_0_30px_rgba(255,215,0,0.8)] "
          >
            <span className="relative z-10 font-bold">GET TICKET</span>
          </a>

        </div>

        {/* Floating Icons */}
        {/* <div className="absolute -z-10 top-20 left-10 opacity-30">
          <Zap className="w-12 h-12 text-cyber-cyan animate-pulse" />
        </div>
        <div className="absolute -z-10 bottom-20 right-10 opacity-30">
          <Terminal className="w-16 h-16 text-cyber-magenta animate-pulse" />
        </div> */}
      </div>
    </div>
  );
}

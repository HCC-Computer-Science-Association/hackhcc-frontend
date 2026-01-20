import { Terminal, Zap, ChevronDown } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-navy ">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        {/*
          This background image is NOT AI Art.
          It was made by a real human named Lara Iskandar.
        */}
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
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
       

        {/* Logo Image */}
        <div className="flex justify-center">
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
          <span className="text-cyber-cyan font-['interceptor']">
            Houston, Texas // May 22-23, 2026
          </span>
        </div>



        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <a
            href="https://registration.socio.events/e/hackhcc"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-4 bg-[#fcee0a]  text-[#0a0a0f] font-bold text-lg uppercase tracking-wider hover:bg-[#12121a] hover:text-[#fcee0a] transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Register Now
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
            <div className="absolute inset-0 border-2 border-[#fcee0a]  translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-xs text-[#8888aa]">SCROLL</span>
        <ChevronDown className="w-5 h-5 text-[#00f0ff]" />
      </div>
    </div>
  );
}

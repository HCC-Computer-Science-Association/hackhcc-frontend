import { ChevronDown, Trophy, Film, Images, Instagram, Linkedin } from "lucide-react";
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

         <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 neon-border-yellow bg-dark-bg/80 rounded-full backdrop-blur-sm">
          {/* <Terminal className="w-4 h-4 text-cyber-cyan" /> */}
          <span className="text-cp-yellow font-['interceptor']">
            That&apos;s a wrap on Coderunners! Thanks to everyone who hacked with us.
          </span>
        </div>

        {/* Post-event message */}
        <div className="mt-4 flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://hackhcc-code-runners.devpost.com/project-gallery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 neon-border-yellow bg-dark-bg/80 rounded-md backdrop-blur-sm font-['interceptor'] text-cp-yellow hover:bg-cp-yellow/10 transition-colors"
            >
              <Trophy className="w-4 h-4" />
              Winning Projects
            </a>
            <a
              href="https://www.linkedin.com/posts/hackhcc-hcc-hackathon-ugcPost-7466608062141739008-Rnfw/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 neon-border-yellow bg-dark-bg/80 rounded-md backdrop-blur-sm font-['interceptor'] text-cp-yellow hover:bg-cp-yellow/10 transition-colors"
            >
              <Film className="w-4 h-4" />
              Highlight Reel
            </a>
            <a
              href="https://drive.google.com/drive/folders/1K_dbcXkMlcmTO7yeTvQYee6Uvif7WqKV?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 neon-border-yellow bg-dark-bg/80 rounded-md backdrop-blur-sm font-['interceptor'] text-cp-yellow hover:bg-cp-yellow/10 transition-colors"
            >
              <Images className="w-4 h-4" />
              Photo Album
            </a>
          </div>

          <div className="flex flex-col items-center gap-3 mt-2">
            <p className="font-['interceptor'] font-bold text-white text-sm md:text-base max-w-xl">
              Join us again next year.
              <br />
              In the meantime, follow our socials to stay updated.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/hackhcc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HackHCC on Instagram"
                className="p-3 neon-border-yellow bg-dark-bg/80 rounded-full backdrop-blur-sm text-cp-yellow hover:bg-cp-yellow/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/compscia/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CompSciA on LinkedIn"
                className="p-3 neon-border-yellow bg-dark-bg/80 rounded-full backdrop-blur-sm text-cp-yellow hover:bg-cp-yellow/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
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

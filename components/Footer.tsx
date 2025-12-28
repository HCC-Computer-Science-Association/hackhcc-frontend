import { Github, Twitter, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/20 relative overflow-hidden bg-dark-navy">
      {/* Background Effects */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyber-cyan/3 blur-3xl rounded-full"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-magenta/3 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="mb-4">
              <span className="neon-text-yellow">HackHCC</span>
              <span className="text-white">: </span>
              <span className="neon-text-magenta">Coderunners</span>
            </h3>
            <p className="text-white/70 text-sm mb-4">
              Houston's premier hackathon experience. Building the future, one line of code at a time.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <MapPin className="w-4 h-4 text-cyber-cyan" />
              <span>HCC, Houston, TX</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              {[{label: 'About', link: '#'},{label: 'Schedule', link: '#'},{label: 'Prizes', link: '#'},{label: 'Sponsors', link: '#'},{label: 'FAQ', link: '#'},{label: 'Code of Conduct', link: 'https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md'},].map((e) => (
                <li key={e.label}>
                  <a
                    href={`${e.link.toLowerCase()}`}
                    
                    target={`${e.label === "Code of Conduct" ? "_blank" : "_self"}`}
                    className="text-white/70 hover:text-cyber-cyan transition-colors duration-300 text-sm"
                  >
                    {e.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white mb-4">CONNECT</h4>
            <div className="flex gap-4 mb-4">
              {[
                { icon: Github, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 border border-white/30 hover:border-cyber-cyan flex items-center justify-center hover:bg-cyber-cyan/10 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5 text-white/70 hover:text-cyber-cyan" />
                  </a>
                );
              })}
            </div>
            <a
              href="mailto:officialhackhcc@gmail.com"
              className="flex items-center gap-2 text-sm text-white/70 hover:text-cyber-cyan transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              <span>officialhackhcc@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/70">
            © 2025 HACKHCC: CODERUNNERS. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-white/70 hover:text-cyber-cyan transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-white/70 hover:text-cyber-cyan transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

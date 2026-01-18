import { MapPin, Car, Building } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="py-20 px-4 bg-dark-navy ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2>
              <span className="text-white">LOCATION</span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-magenta mx-auto mb-4"></div>
          <p className="text-white/70">Join us</p>
        </div>

        <div className="relative grid md:grid-cols-2 gap-8 items-center">
          {/* Google Maps Embed */}
          <div className="  bg-dark-bg/80 backdrop-blur-sm ">
            <div className="aspect-square md:aspect-[4/3] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6928.869785536478!2d-95.57758182283477!3d29.73612447508034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640dd3435e123a1%3A0x39d8462fcf096824!2sWest%20Houston%20Institute!5e0!3m2!1sen!2sus!4v1766937199668!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Event Location Map"
              ></iframe>
            </div>

            {/* Corner accents */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-[#00f0ff]" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-[#00f0ff]" />

          </div>

          
          {/* Location details */}
          <div className="space-y-6">
            {/* Venue card */}
            <div className="relative  border border-[#2a2a3a] p-6 hover:border-[#00f0ff]/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-[#00f0ff] flex items-center justify-center flex-shrink-0">
                  <Building className="w-6 h-6 text-[#00f0ff]" />
                </div>
                <div>
                  <h5 className="font-bold text-lg text-[#00f0ff] mb-2">
                    VENUE
                  </h5>
                  <div className="space-y-1 text-[#8888aa]">
                    <p className="font-semibold  text-[#e8e8e8]">
                      HCC - Alief Hayes Campus
                    </p>
                    <p>2811 Hayes Rd</p>
                    <p>Houston, TX 77082</p>
                    <p className="text-[#fcee0a] mt-2">
                      Building: West Houston Institute
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-1/3 bg-gradient-to-r from-[#00f0ff] to-transparent" />
            </div>

            {/* Getting there card */}
            <div className="relative  border border-[#2a2a3a] p-6 hover:border-[#fcee0a]/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-[#fcee0a] flex items-center justify-center flex-shrink-0">
                  <Car className="w-6 h-6 text-[#fcee0a]" />
                </div>
                <div>
                  <h5 className="font-bold text-lg text-[#fcee0a] mb-2">
                    GETTING THERE
                  </h5>
                  <div className="space-y-2 text-[#8888aa]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00ff9f]" />
                      <span>Free parking available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00ff9f]" />
                      <span>Accessible entrance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-1/3 bg-gradient-to-r from-[#fcee0a] to-transparent" />
            </div>

            {/* CTA */}
            <a
              href="https://maps.app.goo.gl/5cqidx7ZeTntsGUQ7"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-2 w-full px-6 py-4 border border-[#00f0ff] text-[#00f0ff] font-bold uppercase tracking-wider hover:bg-[#00f0ff]/10 transition-all"
            >
              <MapPin className="w-5 h-5" />
              <span>Open in Maps</span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

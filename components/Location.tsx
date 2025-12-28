import { MapPin } from 'lucide-react';

export function Location() {
  return (
    <section className="py-20 px-4 bg-dark-navy">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-10 h-10 text-cyber-yellow" />
            <h2>
              <span className="neon-text-yellow">LOCATION</span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-magenta mx-auto mb-4"></div>
          <p className="text-white/70">
            Join us
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Location Details */}
          <div className="space-y-6">
            <div className="neon-border-cyan bg-dark-bg/80 backdrop-blur-sm p-8">
              <h3 className="neon-text-cyan mb-4">VENUE</h3>
              <div className="space-y-4 text-white/80">
                <div>
                  <p className="text-white/60 mb-1">Address:</p>
                  <p>HCC - Alief Hayes Campus</p>
                  <p>2811 Hayes Rd</p>
                  <p>Houston, TX 77082</p>
                </div>
                <div>
                  <p className="text-white/60 mb-1">Building:</p>
                  <p>West Houston Institute</p>
                </div>
              </div>
            </div>

            <div className="neon-border-magenta bg-dark-bg/80 backdrop-blur-sm p-8">
              <h3 className="neon-text-magenta mb-4">GETTING THERE</h3>
              <div className="space-y-3 text-white/80">
                <div className="flex items-start gap-3">
                  <span className="text-cyber-cyan"></span>
                  <div>
                    <p className="text-white mb-1">Parking</p>
                    <p className="text-white/60">Free parking available</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="neon-border-yellow bg-dark-bg/80 backdrop-blur-sm p-4">
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
          </div>
        </div>
      </div>
    </section>
  );
}

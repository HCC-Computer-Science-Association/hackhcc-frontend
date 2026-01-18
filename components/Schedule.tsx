import { Calendar, Clock } from "lucide-react";

export function Schedule() {
  const scheduleData = [
    {
      day: "DAY 01",
      date: "May 22, 2026",
      events: [
        {
          time: "10:00",
          title: "Check-in & Registration",
          description: "Get your badge and swag",
        },
        {
          time: "11:00",
          title: "Opening Ceremony",
          description: "Kickoff and sponsor introductions",
        },
        {
          time: "12:00",
          title: "Lunch & Team Formation",
          description: "Eat and find your crew or fly solo",
        },
        {
          time: "13:00",
          title: "Hacking Begins",
          description: "Let the coding commence!",
        },
      ],
    },
    {
      day: "DAY 02",
      date: "May 23, 2026",
      events: [
        { time: "09:00", title: "Breakfast", description: "Morning fuel" },
        {
          time: "11:00",
          title: "Final Push",
          description: "Last hours to finish",
        },
        {
          time: "12:00",
          title: "Lunch Break and Submittion",
          description: "Recharge, network, and send.",
        },
        {
          time: "14:00",
          title: "Presentation time",
          description: "Present your project",
        },
        {
          time: "17:00",
          title: "Winners",
          description: "Announcement",
        },
      ],
    },
  ];

  return (
    <>
      <section
        id="schedule"
        className="py-20 px-4 bg-cp-yellow bg-[url('../img/razor-099e4b40.svg')] bg-[length:auto_45px] bg-[right_top] bg-repeat-x py-[120px] px-[50px] -translate-y-[2px]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">
              <span className="text-dark-navy">EVENT SCHEDULE</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-magenta mx-auto mb-4"></div>
            <p className="text-xl text-dark-navy/80">TBA</p>
          </div>
{/* TBA placeholder */}
        <div className="relative max-w-2xl mx-auto">
          <div className="relative bg-[#12121a] border border-[#2a2a3a] p-12 text-center">
            {/* Corner accents */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[#00f0ff]" />
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[#00f0ff]" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-[#fcee0a]" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[#fcee0a]" />
            
            <div className="w-16 h-16 border border-[#00f0ff]/50 flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-[#00f0ff]" />
            </div>
            
            <div className="font-mono text-6xl font-bold text-[#00f0ff] mb-4 tracking-widest text-glow-cyan">
              TBA
            </div>
            <p className="text-[#8888aa] font-mono">
              Full schedule coming soon...
            </p>
            
            {/* Loading bar animation */}
            <div className="mt-8 h-1 bg-[#1a1a24] overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#00f0ff] to-[#fcee0a]"
                style={{
                  width: '40%',
                  animation: 'pulse 2s ease-in-out infinite',
                }}
              />
            </div>
            <p className="font-mono text-xs text-[#8888aa] mt-2">LOADING_SCHEDULE...</p>
          </div>
        </div>
          {/* <div className="grid lg:grid-cols-2 gap-8">
          {scheduleData.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className="neon-border-magenta bg-dark-navy/80 backdrop-blur-sm p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-cyber-magenta" />
                <div>
                  <h3 className="neon-text-yellow">{day.day}</h3>
                  <p className="text-sm text-white/70">{day.date}</p>
                </div>
              </div>

              <div className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="border-l-2 border-cyber-cyan pl-4 py-2 hover:border-cyber-magenta transition-colors duration-300"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-4 h-4 text-cyber-cyan" />
                      <span className="text-sm text-cyber-cyan">
                        {event.time}
                      </span>
                    </div>
                    <h4 className="text-white mb-1">{event.title}</h4>
                    <p className="text-sm text-white/70">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div> */}
        </div>
      </section>
      <div className="bg-cp-yellow bg-[url('../img/razor-099e4b40.svg')] bg-[length:auto_45px] bg-[right_bottom] rotate-180 bg-repeat-x  px-[50px] py-5 -translate-y-[2px]"></div>
    </>
  );
}

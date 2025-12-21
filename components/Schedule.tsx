import { Calendar, Clock } from 'lucide-react';

export function Schedule() {
  const scheduleData = [
    {
      day: 'DAY 01',
      date: 'March 15, 2025',
      events: [
        { time: '16:00', title: 'Check-in & Registration', description: 'Get your badge and swag' },
        { time: '18:00', title: 'Opening Ceremony', description: 'Kickoff and sponsor introductions' },
        { time: '19:00', title: 'Team Formation', description: 'Find your crew or fly solo' },
        { time: '20:00', title: 'Hacking Begins', description: 'Let the coding commence!' },
        { time: '22:00', title: 'Midnight Snacks', description: 'Fuel up for the long night' }
      ]
    },
    {
      day: 'DAY 02',
      date: 'March 16, 2025',
      events: [
        { time: '09:00', title: 'Breakfast', description: 'Morning fuel' },
        { time: '11:00', title: 'Tech Workshops', description: 'AI, Web3, and Cloud workshops' },
        { time: '13:00', title: 'Lunch Break', description: 'Recharge and network' },
        { time: '15:00', title: 'Mentor Sessions', description: 'Get expert guidance' },
        { time: '20:00', title: 'Dinner & Gaming', description: 'Take a break, play some games' }
      ]
    },
    {
      day: 'DAY 03',
      date: 'March 17, 2025',
      events: [
        { time: '08:00', title: 'Final Push', description: 'Last hours to finish' },
        { time: '10:00', title: 'Hacking Ends', description: 'Submit your projects' },
        { time: '11:00', title: 'Project Demos', description: 'Show off your work' },
        { time: '14:00', title: 'Judging', description: 'Experts evaluate projects' },
        { time: '16:00', title: 'Closing Ceremony', description: 'Winners announced!' }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            <span className="neon-text-cyan">EVENT SCHEDULE</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-magenta mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {scheduleData.map((day, dayIndex) => (
            <div key={dayIndex} className="neon-border-magenta bg-dark-navy/80 backdrop-blur-sm p-6">
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
                      <span className="text-sm text-cyber-cyan">{event.time}</span>
                    </div>
                    <h4 className="text-white mb-1">{event.title}</h4>
                    <p className="text-sm text-white/70">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

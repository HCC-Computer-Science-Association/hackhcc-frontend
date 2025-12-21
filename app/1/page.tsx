import { Hero } from '../../components/Hero';
import { About } from '../../components/About';
import { Schedule } from '../../components/Schedule';
import { Prizes } from '../../components/Prizes';
import { Sponsors } from '../../components/Sponsors';
import { Team } from '../../components/Team';
import { FAQ } from '../../components/FAQ';
import { Footer } from '../../components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Schedule />
      <Prizes />
      <Sponsors />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
}
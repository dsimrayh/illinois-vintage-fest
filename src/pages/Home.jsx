import Hero from '../components/home/Hero';
import Marquee from '../components/home/Marquee';
import NextEvent from '../components/home/NextEvent';
import PastEvents from '../components/home/PastEvents';
import Phone from '../components/home/Phone';

export default function Home() {
  return (
    <main id="main">
      <Hero></Hero>
      <Marquee></Marquee>
      <NextEvent></NextEvent>
      <PastEvents></PastEvents>
      <Phone></Phone>
    </main>
  );
}

import Hero from '../Hero';
import Marquee from '../Marquee';
import NextEvent from '../NextEvent';
import PastEvents from '../PastEvents';
import Contact from '../Contact';

export default function Home() {
  return (
    <main id="main">
      <Hero></Hero>
      <Marquee></Marquee>
      <NextEvent></NextEvent>
      <PastEvents></PastEvents>
      <Contact></Contact>
    </main>
  );
}

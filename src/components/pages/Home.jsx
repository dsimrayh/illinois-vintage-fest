import Hero from '../Hero';
import Marquee from '../Marquee';
import NextEvent from '../NextEvent';
import PastEvents from '../PastEvents';

export default function Home() {
  return (
    <main id="main">
      <Hero></Hero>
      <Marquee></Marquee>
      <NextEvent></NextEvent>
      <PastEvents></PastEvents>
    </main>
  );
}

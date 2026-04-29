import Footer from './_components/Footer/footer';
import Hero from './_components/heroSection/hero'
import Service from './_components/serviceSection/service';
import Showcase from './_components/showcaseSection/showcase';
import Slider from './_components/sliderSection/slider';

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <Showcase />
      <Slider />
      <Footer />
    </>
  );
}
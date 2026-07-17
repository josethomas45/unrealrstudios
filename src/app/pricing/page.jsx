import Pricing from '../_components/pricingSection/pricing';
import Footer from '../_components/Footer/footer';

export const metadata = {
  title: 'Pricing - Unrealr Studios',
  description: 'How much does a professional video cost? We explain how much video REALLY costs, and how to get the most out of your project.',
};

export default function PricingPage() {
  return (
    <>
      <Pricing />
      <Footer />
    </>
  );
}

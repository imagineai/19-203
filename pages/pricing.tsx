// ./pages/pricing.tsx
import Pricing from '../components/Pricing'

const plans = [
  {
    name: 'Basic',
    price: 10,
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    name: 'Premium',
    price: 20,
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
  },
  {
    name: 'Ultimate',
    price: 30,
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
      'Feature 4',
      'Feature 5',
    ],
  },
]

export default function PricingPage() {
  return <Pricing plans={plans} />
}
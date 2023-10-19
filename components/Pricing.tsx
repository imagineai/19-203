// ./components/Pricing.tsx
import React from 'react'

type Plan = {
  name: string
  price: number
  features: string[]
}

type PricingProps = {
  plans: Plan[]
}

const Pricing: React.FC<PricingProps> = ({ plans }) => {
  const [isAnnual, setIsAnnual] = React.useState(false)

  return (
    <div className="flex flex-col items-center">
      <button
        className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => setIsAnnual(!isAnnual)}
      >
        {isAnnual ? 'Annual' : 'Monthly'}
      </button>
      <div className="grid grid-cols-3 gap-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 border border-gray-200 rounded"
          >
            <h2 className="text-2xl mb-2">{plan.name}</h2>
            <p className="text-xl mb-4">
              ${isAnnual ? plan.price * 12 : plan.price} /{' '}
              {isAnnual ? 'year' : 'month'}
            </p>
            <ul className="mb-4">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="p-2 bg-blue-500 text-white rounded">
              Sign Up
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing
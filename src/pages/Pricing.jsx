import { Link } from "react-router-dom";

function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "/month",
      features: [
        "25 messages/day",
        "Standard speed",
        "Basic memory",
        "Web access"
      ]
    },
    {
      name: "Pro",
      price: "₹99",
      period: "/month",
      popular: true,
      features: [
        "500 messages/day",
        "Faster responses",
        "Better memory",
        "Save chat history",
        "Priority support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold">Simple Pricing</h1>
          <p className="mt-4 text-slate-400 text-lg">
            Choose the plan that fits your needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl border p-8 transition duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "border-violet-500 bg-slate-900 shadow-2xl"
                  : "border-slate-800 bg-slate-900"
              }`}
            >
              {plan.popular && (
                <div className="inline-block px-4 py-1 rounded-full bg-violet-600 text-sm font-medium mb-5">
                  Most Popular
                </div>
              )}

              <h2 className="text-3xl font-bold">{plan.name}</h2>

              <div className="mt-6 flex items-end gap-1">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-slate-400 mb-1">{plan.period}</span>
              </div>

              <ul className="mt-8 space-y-4 text-slate-300">
                {plan.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>

              <Link
                to="/sign-up"
                className={`block text-center mt-10 px-6 py-3 rounded-2xl font-semibold ${
                  plan.popular
                    ? "bg-violet-600 hover:bg-violet-500"
                    : "bg-white text-black hover:bg-slate-200"
                }`}
              >
                {plan.name === "Free" ? "Start Free" : "Upgrade to Pro"}
              </Link>
            </div>
          ))}

        </div>

        {/* Bottom Text */}
        <p className="text-center text-slate-500 mt-14">
          Cancel anytime. No hidden charges.
        </p>

      </div>
    </div>
  );
}

export default Pricing;
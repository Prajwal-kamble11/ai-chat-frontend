import { Link } from "react-router-dom";

function FAQ() {
  const faqs = [
    {
      question: "What is AMI?",
      answer:
        "AMI is your personal AI assistant designed to help with writing, learning, productivity, and everyday tasks."
    },
    {
      question: "Is there a free plan?",
      answer:
        "Yes. AMI offers a free plan with limited daily messages so you can explore the platform."
    },
    {
      question: "What do I get in Pro?",
      answer:
        "Pro gives higher daily limits, faster responses, better memory, saved chat history, and priority support."
    },
    {
      question: "Is my data private?",
      answer:
        "We prioritize privacy and security. Your account and conversations are handled with secure systems."
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes. Paid subscriptions can be canceled anytime according to billing terms."
    },
    {
      question: "Who is AMI for?",
      answer:
        "Students, professionals, creators, developers, and anyone who wants a smart assistant."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-16">
          <p className="text-violet-400 font-medium">FAQ</p>
          <h1 className="text-5xl font-bold mt-3">
            Frequently Asked Questions
          </h1>
          <p className="mt-5 text-slate-400 text-lg">
            Everything you need to know about AMI.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-6">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-violet-500 transition"
            >
              <h2 className="text-xl font-semibold">
                {item.question}
              </h2>

              <p className="mt-3 text-slate-400 leading-7">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-4xl font-bold">
            Still have questions?
          </h2>

          <p className="mt-4 text-slate-400">
            Join AMI today and explore the platform yourself.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/sign-up"
              className="px-8 py-4 rounded-2xl bg-violet-600 hover:bg-violet-500 font-semibold"
            >
              Get Started Free
            </Link>

            <Link
              to="/pricing"
              className="px-8 py-4 rounded-2xl border border-slate-700 hover:bg-slate-800"
            >
              View Pricing
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default FAQ;
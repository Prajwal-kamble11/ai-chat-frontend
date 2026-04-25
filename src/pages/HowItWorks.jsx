import { Link } from "react-router-dom";
import { UserPlus, MessageSquare, Sparkles, Rocket } from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus size={30} />,
      title: "Create Your Account",
      desc: "Sign up securely in seconds using our smooth authentication system."
    },
    {
      icon: <MessageSquare size={30} />,
      title: "Ask Anything",
      desc: "Type your questions, ideas, tasks, or requests in natural language."
    },
    {
      icon: <Sparkles size={30} />,
      title: "Get Smart AI Responses",
      desc: "AMI gives fast, intelligent, and helpful responses instantly."
    },
    {
      icon: <Rocket size={30} />,
      title: "Boost Productivity",
      desc: "Use AMI daily for writing, learning, planning, coding, and more."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-16">
          <p className="text-violet-400 font-medium">How It Works</p>

          <h1 className="text-5xl font-bold mt-3">
            Start Using AMI in Minutes
          </h1>

          <p className="mt-5 text-slate-400 text-lg max-w-3xl mx-auto">
            Simple, fast, and powerful. AMI is designed to help you
            instantly without any complexity.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-violet-500 transition"
            >
              <div className="text-violet-400 mb-5">
                {step.icon}
              </div>

              <p className="text-sm text-slate-500 mb-2">
                Step {index + 1}
              </p>

              <h2 className="text-2xl font-semibold">
                {step.title}
              </h2>

              <p className="mt-4 text-slate-400">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

        {/* Extra Section */}
        <div className="mt-20 grid lg:grid-cols-2 gap-10 items-center">

          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800">
            <h2 className="text-3xl font-bold">
              Why Users Love AMI
            </h2>

            <ul className="mt-6 space-y-4 text-slate-300">
              <li>✓ Fast responses</li>
              <li>✓ Human-like answers</li>
              <li>✓ Works anytime</li>
              <li>✓ Great for study & work</li>
              <li>✓ Easy to use</li>
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold">
              Ready to get started?
            </h2>

            <p className="mt-4 text-slate-400">
              Join AMI now and experience your personal AI assistant.
            </p>

            <Link
              to="/sign-up"
              className="inline-block mt-8 px-8 py-4 rounded-2xl bg-violet-600 hover:bg-violet-500 font-semibold"
            >
              Try AMI Free
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}

export default HowItWorks;
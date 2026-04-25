import { Link } from "react-router-dom";
import {
  MessageCircle,
  Brain,
  Globe,
  Shield,
  History,
  Zap
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: <MessageCircle size={28} />,
      title: "Smart Conversations",
      desc: "Natural and human-like chats with intelligent responses."
    },
    {
      icon: <Brain size={28} />,
      title: "Memory System",
      desc: "AMI remembers context for smoother conversations."
    },
    {
      icon: <Globe size={28} />,
      title: "Web Access",
      desc: "Get updated answers and online information instantly."
    },
    {
      icon: <Shield size={28} />,
      title: "Private & Secure",
      desc: "Your chats stay protected with secure architecture."
    },
    {
      icon: <History size={28} />,
      title: "Chat History",
      desc: "Access your previous chats anytime."
    },
    {
      icon: <Zap size={28} />,
      title: "Fast Performance",
      desc: "Lightning-fast responses with optimized AI backend."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold">Powerful Features</h1>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need from a modern AI assistant.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-violet-500 transition"
            >
              <div className="text-violet-400 mb-5">
                {item.icon}
              </div>

              <h2 className="text-2xl font-semibold">
                {item.title}
              </h2>

              <p className="mt-3 text-slate-400">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-4xl font-bold">
            Ready to experience AMI?
          </h2>

          <p className="mt-4 text-slate-400">
            Join now and boost your productivity.
          </p>

          <Link
            to="/sign-up"
            className="inline-block mt-8 px-8 py-4 rounded-2xl bg-violet-600 hover:bg-violet-500 font-semibold"
          >
            Get Started Free
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Features;
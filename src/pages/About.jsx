import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Rocket, Users } from "lucide-react";

function About() {
  const values = [
    {
      icon: <Sparkles size={28} />,
      title: "Smart Simplicity",
      desc: "Powerful AI made easy for everyday people."
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Trust & Privacy",
      desc: "Your conversations are handled securely and responsibly."
    },
    {
      icon: <Rocket size={28} />,
      title: "Continuous Innovation",
      desc: "AMI evolves constantly with better intelligence and tools."
    },
    {
      icon: <Users size={28} />,
      title: "Built for Everyone",
      desc: "Students, creators, teams, and professionals can all benefit."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-16">
          <p className="text-violet-400 font-medium">About AMI</p>
          <h1 className="text-5xl font-bold mt-3">AI That Feels Human</h1>
          <p className="mt-5 text-slate-400 text-lg max-w-3xl mx-auto">
            AMI was created to make advanced AI simple, useful, and accessible.
            We believe everyone deserves an intelligent assistant that helps
            them think faster, work smarter, and create more.
          </p>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="mt-4 text-slate-400 leading-8">
              To build a personal AI companion that is fast, reliable, secure,
              and genuinely helpful in everyday life.
            </p>

            <h2 className="text-3xl font-bold mt-10">Our Vision</h2>
            <p className="mt-4 text-slate-400 leading-8">
              A future where everyone has access to an intelligent assistant
              that boosts learning, productivity, and creativity.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-linear-to-br from-violet-600/20 to-slate-900 border border-violet-500/30">
            <h2 className="text-4xl font-bold">Why AMI?</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>✓ Smart and natural conversations</li>
              <li>✓ Fast responses</li>
              <li>✓ Secure user experience</li>
              <li>✓ Built for modern workflows</li>
              <li>✓ Designed with simplicity first</li>
            </ul>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            What We Stand For
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-violet-500 transition"
              >
                <div className="text-violet-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-4xl font-bold">Join the Future with AMI</h2>
          <p className="mt-4 text-slate-400">
            Start using your personal AI assistant today.
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

export default About;
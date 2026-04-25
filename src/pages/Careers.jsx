import { Link } from "react-router-dom";
import { Briefcase, Rocket, Users, Bell } from "lucide-react";

function Careers() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-16">
          <p className="text-violet-400 font-medium">Careers</p>

          <h1 className="text-5xl font-bold mt-3">
            Build the Future with AMI
          </h1>

          <p className="mt-5 text-slate-400 text-lg max-w-3xl mx-auto">
            We’re building intelligent tools that help people think faster,
            work smarter, and create more.
          </p>
        </div>

        {/* Main Card */}
        <div className="p-10 rounded-3xl bg-slate-900 border border-slate-800 text-center">

          <div className="w-20 h-20 mx-auto rounded-2xl bg-violet-600/20 flex items-center justify-center mb-6">
            <Briefcase className="text-violet-400" size={36} />
          </div>

          <h2 className="text-4xl font-bold">
            No Open Positions Right Now
          </h2>

          <p className="mt-5 text-slate-400 text-lg max-w-2xl mx-auto">
            We are not actively hiring at the moment, but we are growing fast.
            New opportunities may open soon across engineering, design,
            operations, and growth.
          </p>

          <p className="mt-4 text-slate-500">
            Please check back again for future openings.
          </p>

          <Link
            to="/"
            className="inline-block mt-8 px-8 py-4 rounded-2xl bg-violet-600 hover:bg-violet-500 font-semibold"
          >
            Back to Home
          </Link>
        </div>

        {/* Why Join Later */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800">
            <Rocket className="text-violet-400 mb-4" size={28} />
            <h3 className="text-2xl font-semibold">Fast Growth</h3>
            <p className="mt-3 text-slate-400">
              Join a product focused on innovation and scale.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800">
            <Users className="text-violet-400 mb-4" size={28} />
            <h3 className="text-2xl font-semibold">Great Team</h3>
            <p className="mt-3 text-slate-400">
              Work with ambitious people solving meaningful problems.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800">
            <Bell className="text-violet-400 mb-4" size={28} />
            <h3 className="text-2xl font-semibold">Stay Updated</h3>
            <p className="mt-3 text-slate-400">
              Career opportunities will be announced in future updates.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Careers;
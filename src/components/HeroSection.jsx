import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/img-logo.png";

function HeroSection() {
  const { isAuthenticated } = useAuth();

  return (
    <section className="max-w-7xl mx-auto px-6 pt-10 pb-16 grid lg:grid-cols-2 gap-10 items-center">

      <div>
        <div className="inline-flex px-4 py-2 rounded-full bg-slate-900 text-sm text-slate-300 mb-6">
          Your Personal AI Assistant
        </div>

        <h1 className="text-6xl font-bold leading-tight text-white">
          Meet <span className="text-violet-500">AMI</span>,
          <br />
          Your Personal
          <br />
          AI Assistant
        </h1>

        <p className="mt-6 text-slate-400 text-xl max-w-xl">
          Ask anything, get intelligent answers, automate tasks,
          and boost your productivity — all in one place.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap">

          {!isAuthenticated ? (
            <>
              <Link
                to="/sign-up"
                className="px-7 py-4 rounded-2xl bg-violet-600 hover:bg-violet-500 transition-all text-white font-medium"
              >
                Try AMI For Free
              </Link>

              <Link
                to="/sign-in"
                className="px-7 py-4 rounded-2xl border border-slate-700 text-white font-medium hover:bg-slate-900 transition-all"
              >
                Sign In
              </Link>
            </>
          ) : (
            <Link
              to="/dashboard"
              className="px-7 py-4 rounded-2xl bg-violet-600 hover:bg-violet-500 transition-all text-white font-medium"
            >
              Go to Dashboard
            </Link>
          )}

        </div>

        <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-400">
          <span>⚡ Powered by Advanced AI</span>
          <span>🛡 Secure & Private</span>
          <span>⏰ Available 24/7</span>
        </div>
      </div>

      <div className="rounded-3xl border border-violet-700/40 bg-slate-950 shadow-2xl p-6 min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-violet-600 blur-2xl opacity-20 animate-pulse"></div>
            <img src={logo} alt="AMI" className="w-20 h-20 relative z-10" />
          </div>
          <h2 className="text-4xl font-bold text-white">Welcome!</h2>
          <p className="text-slate-400 mt-3">
            How can I help you today?
          </p>

          <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-4 text-left text-slate-500">
            Ask me anything...
          </div>
        </div>
      </div>

    </section>
  );
}

export default HeroSection;

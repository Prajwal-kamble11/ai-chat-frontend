import { useState } from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Menu, X } from "lucide-react";
import logo from "../assets/ami-logo.png";

function Navbar({ user }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-slate-800">

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="AMI Logo" className="w-10 h-10" />
          <span className="text-2xl tracking-[0.35em] text-white">
            AMI
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-sm text-slate-300">
          <Link to="/features">Features</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/about">About</Link>
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-3">

          <SignedOut>
            <Link
              to="/sign-in"
              className="px-5 py-2 rounded-xl border border-slate-700"
            >
              Sign In
            </Link>

            <Link
              to="/sign-up"
              className="px-5 py-2 rounded-xl bg-white text-black font-medium"
            >
              Get Started
            </Link>
          </SignedOut>

          <SignedIn>

            <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-violet-600/15 border border-violet-500/30">

              <div className="w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold uppercase">
                {(user?.firstName?.[0] ||
                  user?.username?.[0] ||
                  "U")}
              </div>

              <span className="text-violet-300 font-semibold text-sm">
                Hello {user?.firstName || user?.username || "User"}
              </span>

            </div>

            <Link
              to="/dashboard"
              className="px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500"
            >
              Dashboard
            </Link>

          </SignedIn>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="md:hidden text-white"
        >
          {openMenu ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div className="md:hidden border-t border-slate-800 px-6 pb-6 pt-4 bg-black text-white space-y-4">

          <Link to="/features" onClick={() => setOpenMenu(false)} className="block">
            Features
          </Link>

          <Link to="/how-it-works" onClick={() => setOpenMenu(false)} className="block">
            How It Works
          </Link>

          <Link to="/pricing" onClick={() => setOpenMenu(false)} className="block">
            Pricing
          </Link>

          <Link to="/faq" onClick={() => setOpenMenu(false)} className="block">
            FAQ
          </Link>

          <Link to="/about" onClick={() => setOpenMenu(false)} className="block">
            About
          </Link>

          <div className="pt-3 border-t border-slate-800">

            <SignedOut>
              <Link
                to="/sign-in"
                onClick={() => setOpenMenu(false)}
                className="block mb-3"
              >
                Sign In
              </Link>

              <Link
                to="/sign-up"
                onClick={() => setOpenMenu(false)}
                className="block px-5 py-3 rounded-xl bg-white text-black font-medium text-center"
              >
                Get Started
              </Link>
            </SignedOut>

            <SignedIn>

              <p className="mb-3 text-violet-300 font-semibold">
                Hello {user?.firstName || user?.username || "User"} 👋
              </p>

              <Link
                to="/dashboard"
                onClick={() => setOpenMenu(false)}
                className="block px-5 py-3 rounded-xl bg-violet-600 text-center"
              >
                Dashboard
              </Link>

            </SignedIn>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;
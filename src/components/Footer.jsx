import { Link } from "react-router-dom";
import logo from "../assets/img-logo.png";

function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="AMI" className="w-10 h-10" />
            <span className="text-2xl tracking-[0.35em]">AMI</span>
          </div>
          <p className="text-slate-400">
            Built with intelligence for the future.
          </p>
        </div>

        <div>
          <h5 className="font-semibold mb-4">Product</h5>
          <div className="space-y-2 text-slate-400">
            <Link to="/features" className="block">Features</Link>
            <Link to="/pricing" className="block">Pricing</Link>
          </div>
        </div>

        <div>
          <h5 className="font-semibold mb-4">Company</h5>
          <div className="space-y-2 text-slate-400">
            <Link to="/about" className="block">About</Link>
            <Link to="/careers" className="block">Careers</Link>
            <Link to="/contact" className="block">Contact</Link>
          </div>
        </div>

        <div>
          <h5 className="font-semibold mb-4">Resources</h5>
          <div className="space-y-2 text-slate-400">
            <Link to="/blog" className="block">Blog</Link>
            <Link to="/help-center" className="block">Help Center</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
import { Link } from "react-router-dom";
import { Mail, MessageSquare, Clock, Shield } from "lucide-react";

function Contact() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-16">
          <p className="text-violet-400 font-medium">Contact Us</p>
          <h1 className="text-5xl font-bold mt-3">We’d Love to Hear From You</h1>
          <p className="mt-5 text-slate-400 text-lg max-w-2xl mx-auto">
            Need help, have feedback, or want to partner with AMI?
            Reach out anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Form */}
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800">
            <h2 className="text-3xl font-bold mb-6">Send a Message</h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-4 rounded-2xl bg-slate-950 border border-slate-700 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-5 py-4 rounded-2xl bg-slate-950 border border-slate-700 outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full px-5 py-4 rounded-2xl bg-slate-950 border border-slate-700 outline-none"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-5 py-4 rounded-2xl bg-slate-950 border border-slate-700 outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full px-6 py-4 rounded-2xl bg-violet-600 hover:bg-violet-500 font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">

            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800">
              <Mail className="text-violet-400 mb-4" size={28} />
              <h3 className="text-2xl font-semibold">Email Support</h3>
              <p className="mt-3 text-slate-400">
                support@ami-ai.com
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800">
              <MessageSquare className="text-violet-400 mb-4" size={28} />
              <h3 className="text-2xl font-semibold">Live Help</h3>
              <p className="mt-3 text-slate-400">
                Fast support for Pro users.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800">
              <Clock className="text-violet-400 mb-4" size={28} />
              <h3 className="text-2xl font-semibold">Response Time</h3>
              <p className="mt-3 text-slate-400">
                Usually within 24 hours.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800">
              <Shield className="text-violet-400 mb-4" size={28} />
              <h3 className="text-2xl font-semibold">Secure Communication</h3>
              <p className="mt-3 text-slate-400">
                Your messages are handled securely.
              </p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-4xl font-bold">Ready to Try AMI?</h2>

          <p className="mt-4 text-slate-400">
            Join today and experience your personal AI assistant.
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

export default Contact;
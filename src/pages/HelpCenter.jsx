import { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  CreditCard,
  MessageCircle,
  Shield,
  Settings,
  ChevronDown
} from "lucide-react";

function HelpCenter() {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      icon: <User size={24} />,
      title: "Account & Login",
      answer:
        "Use Clerk sign in to access your account. If login fails, refresh the page or verify your email."
    },
    {
      icon: <CreditCard size={24} />,
      title: "Billing & Plans",
      answer:
        "Upgrade from Pricing page. If payment succeeds but plan not updated, contact support."
    },
    {
      icon: <MessageCircle size={24} />,
      title: "Using AMI",
      answer:
        "Ask questions naturally. You can use AMI for writing, coding, study, planning, and more."
    },
    {
      icon: <Shield size={24} />,
      title: "Privacy & Security",
      answer:
        "Your account uses secure authentication. Never share login credentials."
    },
    {
      icon: <Settings size={24} />,
      title: "Technical Help",
      answer:
        "If page is slow, refresh browser, clear cache, or try another browser."
    }
  ];

  const toggleBox = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-violet-400 font-medium">Help Center</p>
          <h1 className="text-5xl font-bold mt-3">How Can We Help?</h1>
          <p className="mt-4 text-slate-400">
            Click a topic to view quick solutions.
          </p>
        </div>

        <div className="space-y-5">

          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden"
            >
              <button
                onClick={() => toggleBox(index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-800 transition"
              >
                <div className="flex items-center gap-4">
                  <div className="text-violet-400">{item.icon}</div>
                  <span className="text-xl font-semibold">
                    {item.title}
                  </span>
                </div>

                <ChevronDown
                  className={`transition ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-400 leading-7">
                  {item.answer}
                </div>
              )}
            </div>
          ))}

        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold">Still Need Help?</h2>
          <p className="mt-3 text-slate-400">
            Contact our support team anytime.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-6 px-8 py-4 rounded-2xl bg-violet-600 hover:bg-violet-500 font-semibold"
          >
            Contact Support
          </Link>
        </div>

      </div>
    </div>
  );
}

export default HelpCenter;
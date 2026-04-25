import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
  RedirectToSignIn
} from "@clerk/clerk-react";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import HowItWorks from "./pages/HowItWorks";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import HelpCenter from "./pages/HelpCenter";

function App() {
  return (
    <BrowserRouter>
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: '#1e293b',
            color: '#fff',
            border: '1px solid #334155',
            borderRadius: '12px',
          }
        }}
      />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/sign-in/*"
          element={
            <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
              <SignIn
                routing="path"
                path="/sign-in"
                forceRedirectUrl="/dashboard"
                appearance={{
                  elements: {
                    card: "shadow-2xl rounded-2xl bg-slate-900 border border-slate-800",
                    headerTitle: "text-white text-2xl font-bold",
                    headerSubtitle: "text-slate-400",
                    socialButtonsBlockButton:
                      "border border-slate-700 hover:bg-slate-800 text-white",
                    formButtonPrimary:
                      "bg-white text-black hover:bg-slate-200",
                    formFieldInput:
                      "bg-slate-800 border border-slate-700 text-white",
                    footerActionLink:
                      "text-blue-400 hover:text-blue-300"
                  }
                }}
              />
            </div>
          }
        />

        <Route
          path="/sign-up/*"
          element={
            <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
              <SignUp
                routing="path"
                path="/sign-up"
                forceRedirectUrl="/dashboard"
                appearance={{
                  elements: {
                    card: "shadow-2xl rounded-2xl bg-slate-900 border border-slate-800",
                    headerTitle: "text-white text-2xl font-bold",
                    headerSubtitle: "text-slate-400",
                    socialButtonsBlockButton:
                      "border border-slate-700 hover:bg-slate-800 text-white",
                    formButtonPrimary:
                      "bg-white text-black hover:bg-slate-200",
                    formFieldInput:
                      "bg-slate-800 border border-slate-700 text-white",
                    footerActionLink:
                      "text-blue-400 hover:text-blue-300"
                  }
                }}
              />
            </div>
          }
        />

        <Route
          path="/dashboard"
          element={
            <>
              <SignedIn>
                <Dashboard />
              </SignedIn>

              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/help-center" element={<HelpCenter />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
import { useUser } from "@clerk/clerk-react";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

export default function Home() {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-black text-white select-none">
      <Navbar user={user} />
      <HeroSection />
      <Footer />
    </div>
  );
}
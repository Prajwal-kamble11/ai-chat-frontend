import { useAuth } from "../context/AuthContext";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-black text-white select-none">
      <Navbar user={user} />
      <HeroSection />
      <Footer />
    </div>
  );
}
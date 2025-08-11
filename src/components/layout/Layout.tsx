import { useState } from "react";
import Sidebar from "./Sidebar";
import LoginCard from "./LoginCard";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [showLoginCard, setShowLoginCard] = useState(true);

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 ml-[60px] relative">
        {children}
        {showLoginCard && (
          <LoginCard onClose={() => setShowLoginCard(false)} />
        )}
      </main>
    </div>
  );
}
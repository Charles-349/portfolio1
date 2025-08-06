// src/components/Layout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content transition-all duration-300">
      <Navbar />
      <main className="pt-20 px-4 sm:px-8 md:px-16 lg:px-24">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

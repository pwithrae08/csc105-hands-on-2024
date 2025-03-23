import { useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home");

  const scrollToSection = (id) => {
    setActiveTab(id);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-10 py-4 bg-white shadow-md">
      <h1 className="text-xl sm:text-xs md:text-xl lg:text-2xl font-bold">CHAVEE AMRK.</h1>

      <div className="flex space-x-4 md:space-x-6">
        <button
          onClick={() => scrollToSection("home")}
          className={`px-3 py-2 text-sm sm:text-xs md:text-base rounded-full ${
            activeTab === "home" ? "bg-violet-200 text-black" : "text-gray-700"
          }`}
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("aboutMe")}
          className={`px-3 py-2 text-sm sm:text-xs md:text-base rounded-full ${
            activeTab === "aboutMe" ? "bg-violet-200 text-black" : "text-gray-700"
          }`}
        >
          About Me
        </button>
        <button
          onClick={() => scrollToSection("gallery")}
          className={`px-3 py-2 text-sm md:text-base rounded-full ${
            activeTab === "gallery" ? "bg-violet-200 text-black" : "text-gray-700"
          }`}
        >
          Gallery
        </button>
      </div>

      <button className="px-4 py-2 text-sm md:text-base bg-violet-700 text-white rounded-full hover:bg-violet-800">
        Contact
      </button>
    </nav>
  );
};

export default Navbar;







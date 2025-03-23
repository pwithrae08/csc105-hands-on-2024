import React from "react";
import chavee2 from '../image/chavee2.png';

const AboutMe = () => {
  return (
    <section id="aboutMe" className="min-h-screen flex flex-col items-center justify-center text-center p-4">
    <div id="about" className="p-12 flex flex-col md:flex-row items-center justify-between">
      <img className="w-[400px] md:w-[500px] lg:w-[600px] object-cover" src={chavee2} alt="Profile" />
      
      <div className="md:w-1/2 text-left">
        <h2 className="text-4xl font-bold">About Me</h2>
        <h3 className="text-lg font-semibold mt-2">Chairman of Amaraporn Corporation</h3>
        <p className="mt-4 text-gray-700 leading-relaxed max-w-lg">
        An arrogant young man who studied abroad, the number one heir of the Amraporn family. I will receive all of the family's assets on the condition that I marry Araya, a woman I have hated since childhood. "I will divorce you, Araya!"
        </p>
        <button className="mt-6 bg-violet-700 text-white px-6 py-3 rounded-full hover:bg-violet-900 transition">
          Read More
        </button>
      </div>
    </div></section>
  );
};

export default AboutMe;

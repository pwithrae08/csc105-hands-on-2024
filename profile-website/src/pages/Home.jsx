import React from "react";
import facebook from '../icons/facebook.png';
import instagram from '../icons/instagram.png';
import email from '../icons/email.png';
import chavee1 from'../image/chavee1.png';

    const Home = () => {
      return (
        <section id = "home" className="flex flex-col md:flex-row items-center justify-between px-10 py-20 min-h-screen bg-white">
          <div className="max-w-lg text-center md:text-left">
            <h2 className="text-lg font-semibold text-gray-700">Hello, It’s me</h2>
            <h1 className="text-5xl font-bold text-black my-2">Chavee Handsome&Cool</h1>
            <h3 className="text-xl font-medium text-gray-800">I’m a Gentlemen! </h3>
            <p className="text-gray-600 mt-4">
            Never gonna give you up, never gonna let you down
Never gonna run around and desert you
Never gonna make you cry, never gonna say goodbye
Never gonna tell a lie and hurt you
            </p>
    
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              <a href='https://www.facebook.com/nuttanicha.buasumlee'>
                <img src={facebook} alt="facebook" className="flex gap-4 h-10 mt-6 justify-center md:justify-start"/>
              </a>
              <a href='https://www.instagram.com/p.octa_augustp/'>
                <img src={instagram} alt="instagram" className="flex gap-4 h-10 mt-6 justify-center md:justify-start"/>
              </a>
              <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
                <img src={email} alt="email" className="flex gap-4 h-10 mt-6 justify-center md:justify-start"/>
              </a>
            
            </div>
    
            <a href='https://www.youtube.com/watch?v=FHWqqeyguhY'>
            <button className="mt-6 bg-violet-600 text-white px-6 py-3 rounded-full hover:bg-violet-700 transition">
              My Portfolio
            </button>
            </a>
          </div>
    
          <div className="mt-10 md:mt-0">
            <img className="w-64  md:w-48 lg:w-64 object-contain" src={chavee1} />
          </div>
        </section>
      );
    };
    
    export default Home;
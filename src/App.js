import React from "react";
import { useState } from "react";
import "./App.css";
import "./assets/fonts/Gluten.otf";
import bgAlter1 from "./assets/images/Gambar-2.gif";
import Background1 from "./assets/images/Background-1.gif";
import Background2 from "./assets/images/Background-2.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <section
        id="hero"
        className="rajdhani relative bg-cover bg-center bg-no-repeat min-h-screen w-full text-white flex items-end justify-center px-6 md:px-16 lg:px-32 pb-20 text-center overflow-hidden"
      >
        <img
          src={Background1}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center -z-10"
        />
        <div className="max-w-6xl w-full flex flex-col items-center justify-center">
          <h1 className="md:text-9xl text-5xl px-4 py-2 font-boldoa1 ">
            Welcome...
          </h1>
          <h2 className="md:text-6xl text-2xl font-bold text-white px-4 py-2 font-boldoa1">
            if youre asking, im okay...
          </h2>
          {/* <h2 className="text-base md:text-xl text-sm bg-yellow-500 rounded-xl font-bold text-black px-4 py-2">
            CA : 6peK3JRbBPBUgefMhzWEhJPuohaeaTu1WLWYueYtpump
          </h2> */}
        </div>
      </section>

      <br></br>
      <section className="rajdhani text-white px-6 md:px-16 lg:px-40 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 justify-center mb-10 text-center lg:text-left">
          <div className="w-full lg:w-1/2">
            <div className="w-full h-full">
              <img
                src={bgAlter1}
                alt="Logo"
                className="drop-shadow-2xl rounded-sm w-[400px] h-auto"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 max-w-xl">
            <h1 className="font-bold text-[36px] md:text-[50px] leading-tight font-boldoa">
              I'M OKAY...
            </h1>
            <h1 className="font-bold text-[36px] md:text-[50px] leading-tight font-boldoa">
              JUST LET ME EXPLAIN IT
            </h1>
            <h1 className="text-base md:text-lg container font-semibold text-center">
              Alright, listen up, champ. You’ve stumbled upon Okay Coin , and
              guess what? That’s the smartest decision you’ve made all day—don’t
              @ me. But before we dive into this crypto-craziness, let’s get one
              thing straight: You’re okay. Yes, YOU. Even if your Wi-Fi is
              spotty, your coffee went cold, or you accidentally sent memes to
              your boss… you’re still okay. And that’s why Okay Coin exists—to
              help you stay okay while navigating the wild jungle
              of digital coins.
            </h1>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundImage: `url(${Background2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="rajdhani text-white px-6 md:px-16 lg:px-32 py-20"
      >
        <div className="flex flex-col lg:flex-row items-center gap-10 justify-center text-center lg:text-left">
          <div className="flex flex-col gap-4 max-w-xl">
            <h1 className="font-bold text-[36px] md:text-[50px] leading-tight font-boldoa">
              JOIN AND
            </h1>
            <h1 className="font-bold text-[36px] md:text-[50px] leading-tight font-boldoa">
              BE "OKAY" TOGETHER
            </h1>
            <p className="text-base md:text-lg font-semibold">
              So, you’re thinking about joining the Okay Coin crew? Smart move,
              my friend. Here’s the scoop: being part of the Okay Coin community
              isn’t just about making smarter financial decisions—it’s about
              having FUN along the way. Think of us as the cool kids’ table in
              the cafeteria, except everyone gets an invite, and no one has to
              share their lunch money.
            </p>
            <button className="xl:self-start bg-white text-black font-reguler px-10 py-3 rounded-full hover:bg-gray-200 transition duration-300 text-4xl font-boldoa">
              OKAY
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="w-full h-full flex items-center justify-center"></div>
          </div>
        </div>
      </section>

      <br></br>
      <Footer />
    </>
  );
};

export default App;

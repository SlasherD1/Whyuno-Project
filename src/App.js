import React from "react";
import { useState } from "react";
import "./App.css";
import "./assets/fonts/Bugaki.otf";
import bgAlter1 from "./assets/images/Gambar-2.gif";
import Background1 from "./assets/images/Background-1.mp4";
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
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center -z-10"
        >
          <source src={Background1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-10 w-full max-w-6xl flex flex-col items-center justify-start">
          <h1 className="md:text-9xl text-5xl px-4 py-2 font-boldoa">
            Welcome
          </h1>
          <h2 className="md:text-6xl text-2xl font-bold text-white px-4 py-2 font-boldoa">
            Y U HERE
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
                className="drop-shadow-2xl rounded-sm w-[500px] h-auto"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 max-w-xl">
            <h1 className="font-bold text-[36px] md:text-[60px] leading-tight font-boldoa">
              Y U NO
            </h1>
            <h1 className="font-bold text-[36px] md:text-[60px] leading-tight font-boldoa">
              KNO ?
            </h1>
            <h1 className="text-base md:text-lg container font-semibold">
              We've been screaming, we've been memeing — and still... YOU NO
              UNDERSTAND?! Crypto memes are life. Confusion is culture. You
              don't need to get it — you just need to vibe with it.
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
              Y STILL NO
            </h1>
            <h1 className="font-bold text-[36px] md:text-[50px] leading-tight font-boldoa">
              JOIN?
            </h1>
            <p className="text-base md:text-lg font-semibold">
              Every day we cry, we sweat, we meme... AND YET — YOU STILL NO
              JOIN?! This is not a cult. (But maybe it should be.) Hit that
              button, join the chaos. Before we lose what little
              sanity we have left.
            </p>
            <button className="xl:self-start bg-white text-black font-reguler px-10 py-3 hover:bg-gray-200 transition duration-300 text-4xl font-boldoa">
              JOIN! Y U NO JOIN
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

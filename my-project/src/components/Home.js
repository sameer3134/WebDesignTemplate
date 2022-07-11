import React from "react";

export const Home = () => {
  return (
    <div class="">
      <section class="text-gray-600  bg-green-500 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <h1 class="sm:text-3xl text-5xl title-font mb-2 font-bold text-gray-900 py-7">
            You've got a busines, <br /> we have got brilliant,
            <br />
            minds.
          </h1>
          <div class="md:w-3/5 md:pl-6">
            <p class="leading-relaxed text-base text-white py-7 px-5 font-bold">
              Taxidermy bushwick celiac master cleanse microdosing seitan.
              Fashion axe four dollar toast truffaut, direct trade kombucha
              brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki
              drinking vinegar tacos.
            </p>
            <img  src="bg2.jpg" class="h-4 z-20 absolute left-4 top-36 rounded-full "/>
            <img  src="bg2.jpg" class="h-4 z-20 absolute right-20 top-26 rounded-full "/>
            <img src="bg2.jpg" class="h-4 z-20 absolute left-24 bottom-36 rounded-full "/>
            <img src="bg2.jpg" class=" h-4 z-20 absolute left-84 bottom-80 rounded-full"/>
            <div class="flex md:mt-4 mt-6">
              <button class="inline-flex items-center border-2 border-white text-2xl text-white  py-1 px-3 ml-7 focus:outline-none hover:bg-white hover:text-green-500 rounded text-base mt-4 md:mt-0">
                Play video
              </button>
              <a class="inline-flex items-center border-2 border-ehitr ml-4 text-2xl text-white bg-gray-90 py-1 px-3 focus:outline-none hover:bg-white hover:text-green-500 rounded text-base mt-4 md:mt-0">
                Get Started
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="white" fill-opacity="1" d="M0,192L24,202.7C48,213,96,235,144,240C192,245,240,235,288,202.7C336,171,384,117,432,117.3C480,117,528,171,576,165.3C624,160,672,96,720,80C768,64,816,96,864,101.3C912,107,960,85,1008,112C1056,139,1104,213,1152,202.7C1200,192,1248,96,1296,53.3C1344,11,1392,21,1416,26.7L1440,32L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
</svg>
      </section>
    </div>
  );
};

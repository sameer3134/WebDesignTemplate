import React from "react";

const Navbar = () => {
  return (
    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img class="w-14" src="lo.png"></img>
            <span class="ml-3 text-xl cursor-pointer">Digcy</span>
          </a>
          <nav class="md:mr-auto md:ml-4 md:py-1  md:pl-4 my-7 mx-19 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 text-xl   hover:text-gray-2000 cursor-pointer">Home</a>
            <a class="mr-5 text-xl hover:text-gray-900 cursor-pointer">
              Services
            </a>
            <a class="mr-5 text-xl hover:text-gray-900 cursor-pointer">
              Portfolio
            </a>
            <a class="mr-5 text-xl hover:text-gray-900 cursor-pointer">
              Testimonial
            </a>
            <a class="mr-5 text-xl hover:text-gray-900 cursor-pointer">
              Contact
            </a>
          </nav>
          <button class="inline-flex border border-green-500 text-2xl text-green-600 border-3 bg-gray-90 py-1 px-3 focus:outline-none hover:bg-green-400 hover:text-white rounded text-base mt-4 md:mt-0">
            Log in
          </button>
          <button class="inline-flex border border-green-500 ml-4 text-2xl text-green-600 bg-gray-90 py-1 px-3 focus:outline-none hover:bg-green-400 hover:text-white rounded text-base mt-4 md:mt-0">
            Sign up
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

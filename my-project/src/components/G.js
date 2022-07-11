import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

const G = () => {
  return (
    <div>
       <footer class="text-white bg-green-500 body-font">
        <h1 class="pt-10 text-4xl font-bold">Get in Touch</h1>
  <div class="container px-5 py-10 mx-auto">
    <div class="flex flex-wrap md:text-left text-center order-first">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Overview</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white hover:text-gray-800">Theme</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Pricing</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Services</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Contact us</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">RESOURCES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white hover:text-gray-800">Help Center</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Ebook Library</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Affiliates</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Testimonials</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SOLUTION</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white hover:text-gray-800">Business</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Restaurant</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Artists</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Bloggers</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
        <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label for="footer-field" class="leading-7 text-sm text-white">Placeholder</label>
            <input type="text" id="footer-field" name="footer-field" class="w-full bg-white  rounded border border-white-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <button class="inline-flex border border-white text-2xl text-white border-3 bg-gray-90 py-1 px-3 focus:outline-none hover:bg-white hover:text-green-500 rounded text-white mt-4 md:mt-0">
            Submit
          </button>
        </div>
        <p class="text-white text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
          <br class="lg:block hidden"/>waistcoat green juice
        </p>
      </div>
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img src="lo.png" class="h-12"></img>
        <span class="ml-3 text-xl">Digcy</span>
      </a>
      <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2022 Digcy —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray ml-1" target="_blank">Mohd Sameer</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a class="text-green-500">
          <FaInstagram />
        </a>
        <a class="ml-3 text-green-500">
          <FaGithub />
        </a>
        <a class="ml-3 text-green-500">
          <FaFacebook />
        </a>
        <a class="ml-3 text-green-500">
          <FaTwitter />
        </a>
      </span>
    </div>
  </div>
</footer>
    </div>
  )
}

export default G
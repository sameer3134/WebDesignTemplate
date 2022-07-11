import React from "react";
import { FaUser, FaStar } from "react-icons/fa";
const D = () => {
  const style = { color: "#4CAF50", fontSize: "1.5em" };
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 lg:ml-20 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div class="w-full sm:p-4 px-4 mb-6">
              <h1 class="title-font font-bold text-2xl mb-2 text-gray-900">
                Moon hashtag pop-up try-hard offal truffaut
              </h1>
              <div class="leading-relaxed">
                Pour-over craft beer pug drinking vinegar live-edge gastropub,
                keytar neutra sustainable fingerstache kickstarter.
              </div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900">
                2.7K
              </h2>
              <p class="leading-relaxed">Users</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900">
                1.8K
              </h2>
              <p class="leading-relaxed">Subscribes</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900">35</h2>
              <p class="leading-relaxed">Downloads</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900">4</h2>
              <p class="leading-relaxed">Products</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-green-500 px-4 py-10 rounded-lg">
          <FaUser class="text-green-500 w-12 h-12 mb-3 inline-block" />
          <h2 class="title-font font-medium text-3xl text-green-500">2723</h2>
          <p class="leading-relaxed">Users</p>
        </div>
      </div>
      <div class="p-4 md:w-1/8 sm:w-1/4 w-full">
        <div class="border-2 border-green-500 px-4 py-10 rounded-lg">
          <FaStar class="text-green-500 w-12 h-12 mb-3 inline-block" />
          <h2 class="title-font font-medium text-3xl text-green-500">2.7K</h2>
          <p class="leading-relaxed">Subscribers</p>
        </div>
      </div>
     </div>
      </section>
    </div>
  );
};

export default D;

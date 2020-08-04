import React from "react";

function App() {
  return (
    <div className="bg-gray-900 text-white text-center w-full h-screen text-5xl">
      <h1 className="pt-10 font-semibold">News API Guatemala</h1>

      <div>
        <h4 className="text-blue-400">Select Categoryes</h4>
        <form action="" className="flex justify-center">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-blue-500 text-blue-800 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xl"
                id="grid-state"
              >
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

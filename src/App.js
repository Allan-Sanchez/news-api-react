import React from "react";
import FormNews from "./components/FormNews";
import GalleryNews from "./components/GalleryNews";

function App() {
  return (
    <div className="bg-gray-900 text-white text-center w-full h-full text-5xl">
      <h1 className="pt-10 font-semibold">News API Guatemala</h1>

      <div>
        <h4 className="text-blue-400">Select Categories</h4>
          <FormNews/>
        <div className="grid mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          <GalleryNews/>

        </div>
      </div>
    </div>
  );
}

export default App;

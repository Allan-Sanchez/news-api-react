import React,{useState,useEffect} from "react";
import FormNews from "./components/FormNews";
import DataNew from "./components/DataNew"

function App() {

  const [category ,setCategory] = useState('');
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getData = async () =>{
      const proxyUrl = "https://cors-anywhere.herokuapp.com/"
      const url = `${proxyUrl}https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=ca5e7b29534b44cfb71f497d21d15706`;

      const response = await fetch(url);
      const news =await response.json();
      setNews(news.articles);
    };

    getData()
  }, [category])

  return (
    <div className="bg-gray-900 text-white text-center w-full h-full text-5xl">
      <h1 className="px-10 font-semibold">News API Guatemala</h1>

      <div>
        <h4 className="text-blue-400">Select Categories</h4>
          <FormNews
            setCategory={setCategory}
          />
        <DataNew
        news={news}
        />
      </div>
    </div>
  );
}

export default App;

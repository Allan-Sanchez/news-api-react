import React from "react";
import PropTypes from 'prop-types'

const GalleryNews = ({newsItem}) => {
  const {title,author,url,description,urlToImage} = newsItem;
  return (
    <div className="max-w-lg  mx-auto bg-white  shadow-lg rounded-lg overflow-hidden mb-10">
      <div className="px-4 py-2 h-48" >
        <h1 className="text-gray-900 font-bold text-2xl uppercase">{title}</h1>
        <p className="text-gray-600 text-sm mt-1">
          {description}
        </p>
      </div>

      <img className="h-48 w-full object-cover mt-2" src={urlToImage} alt="NIKE AIR"/>

      <div className="flex items-center justify-between px-4 py-2 bg-blue-900">
        <h1 className="text-gray-200 font-bold text-lg">Write: {author}</h1>
        <a href={url} className="px-2 py-1 bg-gray-200 text-xs text-gray-900 font-semibold rounded uppercase hover:bg-gray-400 focus:bg-gray-400">
          Go Publishe
        </a>
      </div>
    </div>
  );
};

GalleryNews.propTypes = {
  newsItem : PropTypes.object.isRequired
}

export default GalleryNews;

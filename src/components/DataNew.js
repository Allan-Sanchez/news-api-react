import React from 'react';
import GalleryNews from "./GalleryNews";
import PropTypes from 'prop-types'




const DataGallery = ({news}) => {
    return (  
        <div className="grid mt-5 sm:grid-cols-1 lg:grid-cols-2 gap-2">
            {news.map(item =>(
            <GalleryNews 
                newsItem={item}
                key={item.url}
            />))}
            
        </div>
    );
}

DataGallery.propTypes={
news : PropTypes.array.isRequired
}
 
export default DataGallery;
import React from 'react'
import useSelect  from "../hooks/useSelect";
import PropTypes from 'prop-types'


const FormNews = ({setCategory}) => {

  const OPTIONS =[
    {value:'general', label:'General'},
    {value:'business', label:'Business'},
    {value:'entertainment', label:'Entertainment'},
    {value:'health', label:'Health'},
    {value:'science', label:'Science'},
    {value:'sports', label:'Sports'},
    {value:'technology', label:'Technology'}
  ]

  const [category, SelectNews] = useSelect('general',OPTIONS);

  const searchNews = (e) =>{
    e.preventDefault();
    setCategory(category)
  };

    return ( 
        <form onSubmit={searchNews} className="flex justify-center items-center flex-col md:flex-row">
          <div className="w-2/3 md:w-1/3 md:p-4 mb-6 md:mb-0">
            <div className="relative">
              <SelectNews/>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            
          </div>
            {/* <div className=""> */}
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded text-xl w-2/3 md:w-48">
              Search
              </button>
            {/* </div> */}
        </form>
     );
}

FormNews.propTypes ={
  setCategory : PropTypes.func.isRequired
}
 
export default FormNews;
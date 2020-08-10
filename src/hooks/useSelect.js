import React,{useState} from 'react';


const useSelect = (stateInitial, options) => {
    
    const [state, setState] = useState(stateInitial)

    const SelectNews = () =>(
        <select
            className="block appearance-none w-full bg-gray-200 border border-blue-500 text-blue-800 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xl"
            id="grid-state"
            value={state}
            onChange={e => setState(e.target.value)}
        >
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
      </select>
    );

    return [state,SelectNews];
}
 
export default useSelect;
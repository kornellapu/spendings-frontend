'use client'

import { useState } from "react";

export default function SpendingsHeader({currencyFilterOptions, currencyFilter, setCurrencyFilter, orderingOptions, orderingOptionKey, setOrderingOptionKey}){  
    return(
        <div className="flex flex-row justify-between mt-12 mb-5 [&>*]:h-8">
            <select className="flex px-2 self-start" 
                onChange={ event => {
                    setOrderingOptionKey(event.target.value);
                }}
                value={orderingOptionKey}    
            >
                { Object.entries(orderingOptions).map( (element, index) => 
                    <option key={index} value={element[0]} >{element[1][0]}</option> 
                )}
            </select>
            
            <div className="flex">
                { currencyFilterOptions.map( (element, index) =>
                    <button className={`mx-1.5 px-2 min-w-[50px] ${element===currencyFilter?"bg-blue-300 hover:bg-blue-400 font-bold text-blue-600":"bg-white hover:bg-blue-100"}`} 
                        onClick={() => setCurrencyFilter(element)} 
                        key={index}
                    >
                        {element}
                    </button>
                )}
            </div>
        </div>
    )
}
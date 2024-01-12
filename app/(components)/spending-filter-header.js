'use client'

import { useState } from "react";

export default function SpendingsHeader({currencyFilterOptions, currencyFilter, setCurrencyFilter}){
    const orderingOptions = {
        "spent_at": "Sort by Date ascending (default)",
        "-spent_at": "Sort by Date descending",
        "amount": "Sort by Amount ascending",
        "-amount": "Sort by Amount descending"
    };    

    return(
        <div className="flex flex-row justify-between mt-12 mb-5 [&>*]:h-8">
            <select className="flex px-2 self-start">
                { Object.entries(orderingOptions).map( (element, index) => 
                    <option key={index} value={element[0]} >{element[1]}</option> 
                )}
            </select>
            
            <div className="flex">
                { currencyFilterOptions.map( (element, index) =>
                    <button className={`mx-1.5 px-2 min-w-[50px] ${element===currencyFilter?"bg-blue-300 font-bold text-blue-600":"bg-white"}`} 
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
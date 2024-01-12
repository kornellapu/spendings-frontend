'use client'

import { Suspense, useEffect, useState } from "react";
import { getAllSpendings } from "../(data-access)/data-access-layer";
import SpendingsHeader from "./spending-filter-header";
import SpendingItem from "./spending-item";

export default function Spendings(){
    const currencyFilterOptions = [
        "ALL",
        "HUF",
        "USD"
    ];

    const [spendings, setSpendings] = useState();
    const [currencyFilter, setCurrencyFilter] = useState(currencyFilterOptions[0]);

    useEffect( ()=>{
        getAllSpendings().then( data => setSpendings(data) )
    }, []);

    console.log(currencyFilter);

    return(
        <div className="flex flex-col min-w-[600px]">
            <SpendingsHeader currencyFilterOptions={currencyFilterOptions} currencyFilter={currencyFilter} setCurrencyFilter={setCurrencyFilter}/>
             
            {spendings && spendings.filter( item => currencyFilter==="ALL" || item.currency && item.currency === currencyFilter ).map( item =>
                <SpendingItem 
                    id={item.id} 
                    description={item.description}
                    amount={item.amount}
                    currency={item.currency}
                    spent_at={item.spent_at}
                />
            )}

        </div>
    );
}
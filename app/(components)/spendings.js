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
    
    function sortBySpendAtAscending(a, b){return Date.parse(a.spent_at) - Date.parse(b.spent_at);}
    function sortBySpendAtDescending(a, b){return Date.parse(b.spent_at) - Date.parse(a.spent_at);}
    function sortByAmountAscending(a, b){return a.amount - b.amount;}
    function sortByAmountDescending(a, b){return b.amount - a.amount;}

    const orderingOptions = {
        "-spent_at": [
            "Sort by Date descending (default)",
            sortBySpendAtDescending
        ],
        "spent_at": [
            "Sort by Date ascending",
            sortBySpendAtAscending
        ],
        "amount": [
            "Sort by Amount ascending",
            sortByAmountAscending
        ],
        "-amount": [
            "Sort by Amount descending",
            sortByAmountDescending
        ]
    };

    const [spendings, setSpendings] = useState();
    const [currencyFilter, setCurrencyFilter] = useState(currencyFilterOptions[0]);
    const [orderingOptionKey, setOrderingOptionKey] = useState("-spent_at");

    useEffect( ()=>{
        getAllSpendings().then( data => setSpendings(data) )
    }, []);

    return(
        <div className="flex flex-col min-w-[600px]">
            <SpendingsHeader 
                currencyFilterOptions={currencyFilterOptions} 
                currencyFilter={currencyFilter} 
                setCurrencyFilter={setCurrencyFilter} 
                orderingOptions={orderingOptions}
                orderingOptionKey={orderingOptionKey}
                setOrderingOptionKey={setOrderingOptionKey}
            />
             
            {spendings && spendings
                .filter( item => 
                    currencyFilter==="ALL" || item.currency && item.currency===currencyFilter 
                )
                .sort( orderingOptions[orderingOptionKey].at(1) )
                .map( item =>
                    <SpendingItem 
                        id={item.id} 
                        description={item.description}
                        amount={item.amount}
                        currency={item.currency}
                        spent_at={item.spent_at}
                    />
                )
            }

        </div>
    );
}
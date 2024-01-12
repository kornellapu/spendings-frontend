'use client'

import { Suspense, useEffect, useState } from "react";
import { getAllSpendings } from "../(data-access)/data-access-layer";
import SpendingsHeader from "./spending-filter-header";
import SpendingItem from "./spending-item";

export default function Spendings(){
    const [spendings, setSpendings] = useState();

    useEffect( ()=>{
        getAllSpendings().then( data => setSpendings(data) )
    }, []);

    return(
        <div className="flex flex-col min-w-[600px]">

            <SpendingsHeader/>
             
            {spendings && spendings.map( item =>{ 
                console.log(item); 
                return(
                    <SpendingItem 
                        id={item.id} 
                        description={item.description}
                        amount={item.amount}
                        currency={item.currency}
                        spent_at={item.spent_at}
                    />
                )
            })}

        </div>
    );
}
'use client'

import { useState } from "react"
import { postNewSpending } from "./DataAccessLayer";

export default function AddSpendingForm(){
    const currencyOptions = ["USD", "HUF"];

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState();
    const [selectedCurrency, setSelectedCurrency] = useState( currencyOptions[0] );

    function onHandleSubmit(event){
        event.preventDefault();

        if(!validateForm){
            console.log("Form is invalid!"); 
            return;
        }

        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        
        formJson["spent_at"] = new Date().toISOString();

        console.log(formJson);
        
        postNewSpending()
    }

    function validateForm(){
        return validateDescription() && validateAmount();
    }

    function validateDescription(){
        if(description === ""){
            console.log("Description is empty!");
            return false;
        }
        
        return true;
    }

    function validateAmount(){
        if(amount === undefined){
            console.log("Amount is undefined!");
            return false;
        }

        return true;
    }

    return(
        <form className="flex flex-row items-center [&>*]:h-8 [&>*]:rounded-md [&>*]:shadow" method="put" onSubmit={onHandleSubmit}>
            <input className="m-2 px-3" type="text" name="description" value={description} required onChange={ event => setDescription(event.target.value) } placeholder="description" />
            <input className="m-2 px-3" type="number" name="amount" min="0" value={amount} required onChange={ event => setAmount(event.target.value) } placeholder="0" />
            <select className="ml-2 px-3" name="currency" value={selectedCurrency} onChange={ event => {setSelectedCurrency(event.target.value)} }>
                { currencyOptions.map( (element) => 
                    <option value={element}>{element}</option> 
                )}
            </select>
            <button className="m-2 px-3 bg-emerald-500 font-semibold text-white" type="submit">
                Save
            </button>
        </form>
    );
}
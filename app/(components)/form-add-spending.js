'use client'

import { useState } from "react"

export default function FormAddSpending({postFunctionCallback, refreshSpendingsCallback}){
    const currencyOptions = ["USD", "HUF"];

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(NaN);
    const [selectedCurrency, setSelectedCurrency] = useState( currencyOptions[0] );
    const [hideInitialDescriptionErrorStyle, setHideInitialDescriptionErrorStyle] = useState(true);
    const [hideInitialAmountErrorStyle, setHideInitialAmountErrorStyle] = useState(true);

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
        
        postFunctionCallback(formJson)
        .then( clearForm )
        .then( refreshSpendingsCallback );
    }

    function clearForm(){
        setDescription("");
        setAmount(NaN);
        setSelectedCurrency( currencyOptions[0] );
        setHideInitialAmountErrorStyle(true);
        setHideInitialDescriptionErrorStyle(true);
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
        if(amount === NaN){
            console.log("Amount is NotANumber(NaN)!");
            return false;
        }

        return true;
    }

    return(
        <form className="flex flex-row items-center min-w-[600px] [&>*]:h-8" method="put" onSubmit={onHandleSubmit} data-testid="form">
            <input className={`m-2 px-3 border-2 border:transparent ${ hideInitialDescriptionErrorStyle?"":"invalid:border-red-600"}`} 
                required 
                type="text" 
                data-testid="description"
                name="description" 
                value={description} 
                onChange={ event => {
                    setDescription(event.target.value); 
                    setHideInitialDescriptionErrorStyle(false);
                }} 
                placeholder="description" 
            />

            <input className={`m-2 px-3 border-2 border:transparent ${ hideInitialAmountErrorStyle?"":"invalid:border-red-600"}`}
                required 
                type="number" 
                data-testid="amount"
                name="amount" 
                min="0" 
                step="0.01" 
                value={ isNaN(+amount)? "" : amount} 
                onChange={ event => {
                    setAmount(event.target.value); 
                    setHideInitialAmountErrorStyle(false);
                }} 
                placeholder="0" 
            />

            <select className="ml-2 px-3" 
                data-testid="currency"
                name="currency" 
                value={selectedCurrency} 
                onChange={ event => {setSelectedCurrency(event.target.value)} }
            >
                { currencyOptions.map( (element, index) => 
                    <option value={element} key={index}>{element}</option> 
                )}
            </select>

            <button className="flex flex-grow items-center justify-center m-2 px-3 bg-emerald-500 font-semibold text-white hover:bg-emerald-400" 
                data-testid="save"
                type="submit" 
                onClick={() => {
                    setHideInitialDescriptionErrorStyle(false);
                    setHideInitialAmountErrorStyle(false);
                }}
            >
                Save
            </button>
        </form>
    );
}
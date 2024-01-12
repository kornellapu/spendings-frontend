import { CrossIcon, EditIcon } from "../ui/icons";

export default function SpendingItem( {id, description, amount, currency, spent_at} ){

    function currencyIconText(){
        switch(currency){
            case "USD": return "$";
            case "HUF": return "Ft";
            default: return currency
        }
    }

    function formatDate(){
        const date = new Date(spent_at);
        return date.toLocaleString( 'en-US',{hour: 'numeric', minute: 'numeric', hour12: true, month: 'long', day: '2-digit', year: 'numeric'}  )
    }

    return (
        <div id={id} className="flex flex-row items-stretch w-[600px] h-16 mb-2 p-3 bg-white" baseStyle="true">
            <div className={`flex flex-row items-center flex-grow-0 flex-shrink-0 justify-center w-10 h-10 bg-blue-300 mr-4 font-bold text-blue-600 rounded-md text-lg`}>
                {currencyIconText()}
            </div> 
            <div className="flex flex-col flex-grow justify-center overflow-hidden text-sm">
                <div className="font-bold text-base" >{description}</div>
                <div className="text-sm text-gray-500" >{formatDate()}</div>
            </div>
            <div className="flex flex-row flex-grow-0 flex-shrink-0 items-center font-bold text-base mx-4" >
                {currencyIconText() + " " + amount}
            </div>
            <div className="flex flex-row items-center ml-2">
                <div className="flex flex-row justify-center items-center w-7 h-7 p-0.5 bg-gray-300 rounded-md">
                <EditIcon
                        fill="grey"
                        alt="edit icon"
                        width={20}
                        height={20}
                    />
                </div>
            </div>
            <div className="flex flex-row items-center ml-2">
                <div className="flex flex-row justify-center items-center w-7 h-7 p-0.5 bg-gray-300 rounded-md">
                    <CrossIcon
                        fill="grey"
                        alt="delete icon"
                        width={24}
                        height={24}
                    />
                </div>
            </div>
        </div>
    )
}
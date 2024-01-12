const baseURL = "https://shielded-depths-43687-bb049deacd16.herokuapp.com/spendings/";

export async function getAllSpendings(){
    const dataRequest = new Request(baseURL);

    return fetch(dataRequest)
        .then( response => response.json() )
        .catch( console.error )
}

export async function postNewSpending({description, amount, currency, spent_at}){
    const dataJson = {
        "description": description,
        "amount": amount,
        "currency": currency,
        "spent_at": spent_at
    }

    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataJson)
    }
    
    const sendData = new Request(baseURL, options);

    return fetch(sendData)
        .then( response => response.json() )
        .catch( console.error )

}
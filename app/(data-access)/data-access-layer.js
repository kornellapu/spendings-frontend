const baseURL = "https://shielded-depths-43687-bb049deacd16.herokuapp.com/spendings/";

export function getAllSpendings(){
    const dataRequest = new Request(baseURL);

    fetch(dataRequest)
        .then( response => response.json() )
        .then( data => console.log(data) )
        .catch( console.error )
}

export function postNewSpending(dataJson){
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(dataJson)
    }
    
    const sendData = new Request(baseURL, options);

    fetch(sendData)
        .then( response => response.json() )
        .then( data => console.log(data) )
        .catch( console.error )
}
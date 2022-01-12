//Dates for anualized ret
var mat3m = "03/25/2022";
var mat6m = "06/24/2022";

let date1 = "220325";
let date2 = "220624"

var maturity3m = new Date(mat3m);
var maturity6m = new Date(mat6m);

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January = 0!
var yyyy = today.getFullYear();

today = new Date(`${mm + '/' + dd + '/' + yyyy}`);

var diff3m = (maturity3m.getTime() - today.getTime())/(24*3600*1000);
var diff6m = (maturity6m.getTime() - today.getTime())/(24*3600*1000);

//Days to maturity
console.log(diff3m);
console.log(diff6m);

let days3m = document.querySelector(".days3m");
days3m.textContent += `${diff3m}`;




//Request WebSockets
async function f1(){

    //First Crypto
    let symb_btc = "btcusdt";
    let symb_f_btc = `btcusd_${date1}`;
    let symb_ff_btc = `btcusd_${date2}`;


    let ws_btc = new WebSocket(`wss://stream.binance.com:9443/ws/${symb_btc}@trade`);
    let wsf_btc = new WebSocket(`wss://dstream.binance.com/ws/${symb_f_btc}@trade`);//@markPrice
    let wsff_btc = new WebSocket(`wss://dstream.binance.com/ws/${symb_ff_btc}@trade`);



    //spot 3m
    let spot_btc = 0
    //future 3m
    let fut_btc = 0
    //Tasa 3m 
    let tasa_d_btc = 0
    let tasa_a_btc= 0

    //spot 6m 
    let spots_btc = 0
    //future 6m 
    let futf_btc = 0
    //Tasa 6m 
    let tasaf_d_btc = 0
    let tasaf_a_btc= 0

    let futy_btc = [];
    let futyf_btc = [];
    let spoty_btc = [];  

    let spotter_btc = null;
    let futter_btc = null;
    let futterf_btc = null;


    ////////////////SPOT call////////////////////////
    ws_btc.onmessage = (event) => {
        //console.log(event.data);
        let spot_p = JSON.parse(event.data).p;
        spoty_btc.push(JSON.parse(spot_p));

        spotter_btc = spoty_btc[spoty_btc.length-1];
        //console.log(spotter_btc)
    }


    ////////////////FUTURE call////////////////////////
    wsf_btc.onmessage = (event) => {
        //console.log(event.data);
        let fut_p = JSON.parse(event.data).p;
        futy_btc.push(JSON.parse(fut_p));

        futter_btc = futy_btc[futy_btc.length-1];

        let tasa = futter_btc / spotter_btc -1;

        let anual = ((((tasa/diff3m)+1)**365)-1)*100;

        if(anual >= 15){
            spot_btc.style.color = "rgb(197, 197, 197)";
            fut_btc.style.color = "rgb(197, 197, 197)";
            tasa_a_btc.style.color = "rgb(0, 255, 34)";
            tasa_d_btc.style.color = "rgb(0, 255, 34)";

        }else if(anual < 10){
            spot_btc.style.color = "black";
            fut_btc.style.color = "black";
            tasa_d_btc.style.color = "black";
            tasa_a_btc.style.color = "rgb(255, 0, 34)";
        }else{
            spot_btc.style.color = "rgb(197, 197, 197)";
            fut_btc.style.color = "rgb(197, 197, 197)";
            tasa_a_btc.style.color = "rgb(197, 197, 197)";
            tasa_d_btc.style.color = "yellow";
        }

        console.log(anual)



    }


    ///////////////FUTURE call////////////////////////
    wsff_btc.onmessage = (event) => {
        //console.log(event.data);
        let fut_p = JSON.parse(event.data).p;
        futyf_btc.push(JSON.parse(fut_p));

        futterf_btc = futyf_btc[futyf_btc.length-1];

        let tasa = futterf_btc / spotter_btc -1;

        let anual = ((((tasa/diff6m)+1)**365)-1)*100;
        
        if(anual >= 15){
            spots_btc.style.color = "rgb(197, 197, 197)";
            futf_btc.style.color = "rgb(197, 197, 197)";
            tasaf_a_btc.style.color = "rgb(0, 255, 34)";
            tasaf_d_btc.style.color = "rgb(0, 255, 34)";

        }else if(anual < 10){
            spots_btc.style.color = "black";
            futf_btc.style.color = "black";
            tasa_d_ada.style.color= "black";
            tasaf_a_btc.style.color = "rgb(255, 0, 34)";
        }else{
            spots_btc.style.color = "rgb(197, 197, 197)";
            futf_btc.style.color  = "rgb(197, 197, 197)";
            tasa_a_btc.style.color = "rgb(197, 197, 197)";
            tasa_d_btc.style.color = "yellow";
        }




   
    }


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //NEXT CRYPTO
    let symb_eth = "ethusdt";
    let symb_f_eth = `ethusd_${date1}`;
    let symb_ff_eth = `ethusd_${date2}`;


    let ws_eth = new WebSocket(`wss://stream.binance.com:9443/ws/${symb_eth}@trade`);
    let wsf_eth = new WebSocket(`wss://dstream.binance.com/ws/${symb_f_eth}@trade`);//@markPrice
    let wsff_eth = new WebSocket(`wss://dstream.binance.com/ws/${symb_ff_eth}@trade`);



    //spot 3m
    let spot_eth = 0
    //future 3m
    let fut_eth = 0
    //Tasa 3m 
    let tasa_d_eth = 0
    let tasa_a_eth= 0

    //spot 6m 
    let spots_eth = 0
    //future 6m 
    let futf_eth = 0
    //Tasa 6m 
    let tasaf_d_eth = 0
    let tasaf_a_eth= 0

    let futy_eth = [];
    let futyf_eth = [];
    let spoty_eth = [];  

    let spotter_eth = null;
    let futter_eth = null;
    let futterf_eth = null;


    ////////////////SPOT call////////////////////////
    ws_eth.onmessage = (event) => {
        //console.log(event.data);
        let spot_p = JSON.parse(event.data).p;
        spoty_eth.push(JSON.parse(spot_p));

        spotter_eth = spoty_eth[spoty_eth.length-1];
    }


    ////////////////FUTURE call////////////////////////
    wsf_eth.onmessage = (event) => {
        //console.log(event.data);
        let fut_p = JSON.parse(event.data).p;
        futy_eth.push(JSON.parse(fut_p));

        futter_eth = futy_eth[futy_eth.length-1];

        let tasa = futter_eth / spotter_eth -1;

        let anual = ((((tasa/diff3m)+1)**365)-1)*100;

        if(anual >= 15){
            spot_eth.style.color = "rgb(197, 197, 197)";
            fut_eth.style.color = "rgb(197, 197, 197)";
            tasa_a_eth.style.color = "rgb(0, 255, 34)";
            tasa_d_eth.style.color = "rgb(0, 255, 34)";

        }else if(anual < 10){
            spot_eth.style.color = "black";
            fut_eth.style.color = "black";
            tasa_d_eth.style.color = "black";
            tasa_a_eth.style.color = "rgb(255, 0, 34)";
        }else{
            spot_eth.style.color = "rgb(197, 197, 197)";
            fut_eth.style.color = "rgb(197, 197, 197)";
            tasa_a_eth.style.color = "rgb(197, 197, 197)";
            tasa_d_eth.style.color = "yellow";
        }



    }


    ///////////////FUTURE call////////////////////////
    wsff_eth.onmessage = (event) => {
        //console.log(event.data);
        let fut_p = JSON.parse(event.data).p;
        futyf_eth.push(JSON.parse(fut_p));

        futterf_eth = futyf_eth[futyf_eth.length-1];

        let tasa = futterf_eth / spotter_eth -1;

        let anual = ((((tasa/diff6m)+1)**365)-1)*100;

        if(anual >= 15){
            spots_eth.style.color = "rgb(197, 197, 197)";
            futf_eth.style.color = "rgb(197, 197, 197)";
            tasaf_a_eth.style.color = "rgb(0, 255, 34)";
            tasaf_d_eth.style.color = "rgb(0, 255, 34)";

        }else if(anual < 10){
            spots_eth.style.color = "black";
            futf_eth.style.color = "black";
            tasaf_d_eth.style.color = "black";
            tasaf_a_eth.style.color = "rgb(255, 0, 34)";
        }else{
            spots_eth.style.color = "rgb(197, 197, 197)";
            futf_eth.style.color = "rgb(197, 197, 197)";
            tasaf_a_eth.style.color = "rgb(197, 197, 197)";
            tasaf_d_eth.style.color = "yellow";
        }

   
    }



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



}

f1();
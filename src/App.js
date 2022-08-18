import { useEffect, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import TableCoins from './components/TableCoins';

function App() {

  const [coins, setCoins] = useState([])

/*setInterval(() => {
  console.log("Hola");
}, 3000)
*/

  const getData = async () =>{
    const answer = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1")
    //console.log(answer.data)
    setCoins(answer.data)
  }
  useEffect(() => {
    setInterval(() => {
      let x = 1;
      console.log(x++);
      getData();
    }, 10000)
//    getData()
  })


//Trying to update data  
/*
  let ws = new WebSocket("wss://stream.binance.com:9443/ws/etheur@trade");
  let stockPriceElement = document.getElementById("stock-price");
  let lastPrice = null;
ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data)
    let price = parseFloat(stockObject.p).toFixed(2)
    stockPriceElement.innerHTML = price;
    stockPriceElement.style.color = !lastPrice || lastPrice === price ? "black" : price > lastPrice ? "green" : "red";
    lastPrice = price;
};
*/

  return (
    <div className="container">
      <h1 id="stock-price">---</h1>
      <div className='row'>
        <TableCoins coins={coins}/>
      </div>
    </div>
  );
}

export default App;

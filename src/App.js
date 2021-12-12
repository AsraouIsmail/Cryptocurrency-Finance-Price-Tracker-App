import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  //using useEffect hook to fetch data from the Api

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false') //using a promise to call the data 
      .then(res => {
        setCoins(res.data)
        console.log(res.data)
      }).catch(error => console.log(error));
    
  });

  //create a function to handle the input search by calling the useState Method

  const handleChange = (e) => {
    //the value tha will be typed by the user
    setSearch(e.target.value)
  }

  //a function to filter the coins
  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
  //the value that will be entered by the user its gonne be changed to lowercase letters
  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search Currency</h1>
        <form>
          <input type="text" placeholder='Search for a Currency' className='coin-input' onChange={handleChange}/>

        </form>
      </div>
      {/* mapping through the api */}
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            price={coin.current_price}
            marketcap={coin.market_cap}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}

          />
        )
      })}
      
    </div>
  );
}

export default App;

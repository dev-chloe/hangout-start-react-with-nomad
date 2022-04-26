import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [cost, setCost] = useState(1);
  const [myMoney, setMyMoney] = useState(1);
  const onChange = (event) => {
    setCost(event.target.value);
    setMyMoney(1);
  }
  const inputHandler = (event) => {
    setMyMoney(event.target.value);
  }
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=1000")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins!{ loading ? " ": `(${coins.length})`}</h1>
      {loading ? (
          <strong>Loading...</strong>
      ) : (
          <select onChange={onChange}> <option>Select Coin!</option>
            {coins.map((coin) =>
              <option
                key={coin.id}
                value={coin.quotes.USD.price}
              >{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD </option>
            )}
          </select>
      )}
        <h3>Please enter the amount</h3>
        <input type="number" value={myMoney} onChange={inputHandler}/>
        <p>You can get <strong>{myMoney / cost}</strong></p>  
      
    </div>
  );
}

export default App;

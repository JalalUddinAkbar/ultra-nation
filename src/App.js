import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(err => console.log(err))
  }, [])

  const handleAddCountry = (country) =>{
    const newCart = [...cart, country];
    setCart(newCart);
    console.log(cart);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Country loaded: {countries.length}</h1>
        <Cart cart = {cart} key={cart.index} ></Cart>
        <ul>
          {
            countries.map(country => <Country country = {country} handleAddCountry = {handleAddCountry} key={country.alpha3Code}></Country>)
          }
        </ul>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

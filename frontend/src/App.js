import './App.css';
import { useEffect, useState } from 'react';
import "bootstrap-icons/font/bootstrap-icons.min.css";
import {getdata} from './api/crypto'
import {sort} from './util/sort'
import "bootstrap/dist/css/bootstrap.min.css";

// const axios = require('axios');


function App() {
  const [cryptos, setCryptos] = useState([]);
  const [pattern, setPattern] = useState("");
  const [sortitem, setSortitem] = useState(0);

  useEffect(() => {
    getdata(setCryptos);
  }, []);


  return (
    <div className="App">
      <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" onChange={(e)=>{
        setPattern(e.target.value);
      }}/>
      <table class="table">
    <thead>
      <tr>
        <th scope="col">No</th>
        <th scope="col">Name<button class="btn btn-light" type="submit" onClick={e => setSortitem(0)}><i class="bi bi-arrow-down"></i></button></th>
        <th scope="col">Price<button class="btn btn-light" type="submit" onClick={e => setSortitem(1)}><i class="bi bi-arrow-down"></i></button></th>
        <th scope="col">Market Cap<button class="btn btn-light" type="submit" onClick={e => setSortitem(2)}><i class="bi bi-arrow-down"></i></button></th>
        <th scope="col">24h Trading Volume<button class="btn btn-light" type="submit" onClick={e => setSortitem(3)}><i class="bi bi-arrow-down"></i></button></th>
      </tr>
    </thead>
    <tbody>
      {
        cryptos.filter((item) => {
          return item.name.indexOf(pattern) != -1
        }).sort((a, b) => sort(b, a, sortitem))
        .map((item, index) => (
          <tr className=''>
            <th>{index}</th>
            <td>{item.name}</td>
            <td>{item.current_price}</td>
            <td>{item.market_cap}</td>
            <td>{item.total_volume}</td>
          </tr>
        ))
      }
      </tbody>
  </table>
    </div>
  );
}

export default App;

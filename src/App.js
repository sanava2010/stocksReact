import React, { useEffect, useState } from 'react';
import './App.css';
import StockItem from './StockItem'

import Nav from './Nav'
function App() {
  
  const [stocks,setStocks] = useState([])
  const [search,setSearch]= useState("")
  useEffect(()=> {
    const url = new URL(
      "https://financialmodelingprep.com/api/v3/quote/AAPL,FB,LITE,MDB,MORN,NFLX,NTNX,PLAB,PTC,GOOG,PEP,TSLA,TRIP,ZNGA,QCOM,MSFT,LTRX,DLTR,FISV,EXPE"
    );

    fetch(url, {
        method: "GET",
        })
        .then(response => response.json())
        .then(json_data => {
          const json=json_data.sort((a,b) => (a.name > b.name) ? 1 : -1);
          setStocks(json)
          
    }); 

  },[])

  function searchChanged(event)
  {
    setSearch(event.target.value)
  }

  let filteredStocks=stocks.filter((searchStockItem) => {return searchStockItem.name.toLowerCase().indexOf(search.toLowerCase()) !== -1})
  const stockItems = filteredStocks.map( (item,index) => <StockItem key={index} item={item} />)
  
  return (
    
    <div>
      <Nav/>
        <div className="main">
        
        <input type="text" value={search} onChange={searchChanged}/>
        <br></br>
        <table>
          <thead>
            <tr>
              <td>
                <h4>Name</h4>
              </td>
              <td>
                <h4>Symbol</h4>
              </td>
              <td>
                <h4>Price</h4>
              </td>
              <td>
                <h4>Low</h4>
              </td>
              <td>
                <h4>High</h4>
              </td>
            </tr>
          </thead>
          <tbody>
            { stockItems }
          </tbody>
        </table>
        
      
      </div>

    </div>
    
  );
}

export default App;

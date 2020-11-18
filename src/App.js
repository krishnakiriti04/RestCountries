import React from 'react';
import './App.css';
import Card from './card';

function App() {

  let [countries, setCountries] = React.useState([]);
  let [search,setSearch] = React.useState("");
  let [filter,setFilter] = React.useState("");

  const getData = async (filter,search) =>{
    let response ;
    try {
      if(!filter){
        response = await fetch('https://restcountries.eu/rest/v2/all');
      }else{
        response = await fetch(`https://restcountries.eu/rest/v2/${filter}/${search}`);
      }
      let data = await response.json();
      if(data && response.status===200){
        countries = data;
      }else{
        countries = [];
      }
      setCountries(countries);  
    } catch (error) {
      console.log('Error while getting data : ',error);
    }    
  }

  React.useEffect(()=>{
    getData();
    // eslint-disable-next-line
  },[filter])

  const getSearch = (event)=>{
    search = (event.target.value).toLowerCase();
    setSearch(search);
  }

  const getCountry = (event)=>{
    event.preventDefault();
    setSearch("");
    getData(filter,search);
    
  }

  const selectFilter = (event)=>{
    filter = event.target.value;
    setFilter(filter);
  }

  const loadData = ()=>{
    if(countries.length!==0){
      return countries.map((val,ind)=>{
        return <Card 
        key={ind}
        name={val.name} 
        capital={val.capital}
        region={val.region} 
        currency={val.currencies[0].code} 
        symbol={val.currencies[0].symbol}
        flag= {val.flag}
        population = {val.population}/>        
      })
    }
    else{
     
      return <div className="text-center">
      <h1>Data Not Found !!</h1>
    </div>
    }
  }

  return (
    <div className="container-bg">
      <div className="text-center">
        <h1>Rest Countries</h1>
        <form onSubmit={getCountry} className="form-group d-flex justify-content-center">
          <select name="filter" id="filter" className="form-control p-1 col-1" onChange={selectFilter}>
            <option value="">Filter By</option>
            <option value="name">Name</option>
            <option value="capital">Capital</option>
            <option value="region">Region</option>
            <option value="lang">Language</option>
            <option value="currency">Currency</option>
          </select>
          <input placeholder="Search" onChange={getSearch} className="form-control col-4" required/>
          <button type="submit" className="btn btn-dark text-light">Search</button>
        </form>
      </div>
      
      <div className="cards">
        {loadData()}        
      </div>
      <div>
        {/* Pagination yet to be done */}
        {/* <ul>
          <li>Prev</li>
          {()=>{
            console.log("came here")
            let num = Math.floor(countries.length / 9) ;
            for(let i=1;i<=num;i++){
              return <li>{i}</li>
            }
          }}
          <li>Next</li>
        </ul> */}
      </div>
    </div>
  );
}

export default App;

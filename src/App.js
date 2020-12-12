import React,{useState, useEffect} from 'react'
import Card from "./card";
import './App.css';
import Pagination from './pagination';


function App() {

    //declaration of states and variables

    const [search,setSearch] = useState("");
    const [countries,setCountries] = useState([]);
    const [countriesPerPage] = useState(12);
    const [currentPage,setCurrentPage] = useState(1);
    // const searchFields = ['name','capital','region','currency', 'population']

    useEffect(()=>{
        const getCountries = async()=>{
            let fetchdata = await fetch("https://restcountries.eu/rest/v2/all");
            let response = await fetchdata.json();
            setCountries(response);
        }
        getCountries();
    },[])

    //search method
    const searchCountries = (allCountries)=>{        
        return allCountries.filter(country=>{
              return country.name.toLowerCase().indexOf(search.toLowerCase())>-1 ||
              country.capital.toLowerCase().indexOf(search.toLowerCase())>-1 ||
              country.region.toLowerCase().indexOf(search.toLowerCase())>-1
            })
        }


    //code for pagination
    const lastCountryIndex = currentPage * countriesPerPage;
    const firstCountryIndex = lastCountryIndex - countriesPerPage;
    const currentCountries = searchCountries(countries).slice(firstCountryIndex, lastCountryIndex);

    return (
        <div className="container-bg">
            <div className="App__search">
                <input placeholder="Search using name, capital or region" value={search} onChange={(e)=>setSearch(e.target.value)} className="form-control my-3 col-6" />
                <h2><i className="fa fa-search App__icon"></i></h2>   
            </div>
            <div className="App__countries">
                <div className="country-list">
                {
                   currentCountries.map((country,ind)=>{
                        return <Card 
                        key={ind}
                        name={country.name} 
                        capital={country.capital}
                        region={country.region} 
                        currency={country.currencies[0].code} 
                        symbol={country.currencies[0].symbol}
                        flag= {country.flag}
                        population = {country.population}/>        
                    })
                }
                </div>
            </div>
            <div className="App__pagination">
                <Pagination 
                    totalItems={countries.length} 
                    paginate={(num)=>setCurrentPage(num)}
                    itemsPerPage = {countriesPerPage}
                    currPage = {currentPage}
                 />
            </div>
            <footer>
                <h5>&copy; Rest Countries 2020</h5>
                <h6>Made with &#10084;&#65039; by Krishna Kireeti</h6>
            </footer>
        </div>
    )
}

export default App;

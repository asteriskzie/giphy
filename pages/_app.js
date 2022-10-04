import '../styles/globals.css'
import Link from "next/link";
import { useState, useEffect } from "react";
import fetchGifs from './api/fetchGifs.js'

function handleSearch (event, setQuery) {  
  event.preventDefault(); 
  const val = document.getElementById('search').value;
  setQuery(val);
}

function Search ({setQuery}) { 
    return (        
        <div>            
        <form onSubmit = {() => handleSearch(event, setQuery)} >
          <input type="text" id="search" name="search" placeholder="Search.." className = "text-neutral-900"></input>      
          <button className = "bg-pink-500" type="submit">Search</button>
        </form>    
        </div>
    )
}   

function Header ({setQuery}) {
  return (
  <div>
    <div className = "flex p-6 space-x-4"> 
      <div>
        <Link href="/"><a>GIPHY</a></Link>
      </div>    
      <div>      
        <Search setQuery = {setQuery}/>        
      </div>
    </div>
  </div>
)};


function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false); 
  const [query, setQuery] = useState(null);
  const [data, setData] = useState(null); 
  const [error, setError] = useState(null);  

  useEffect (() => {
    console.log("new query = ", query); 
    
    setIsLoading(true);             
    fetchGifs(query)    
    .then ((response) => {
        setData(response)        
      })
      .catch(error => setError(error)) 
      .then(console.log("data becomes ", data))      
      .finally(setIsLoading(false))    
  }, [query])

  return (
  <div className = "bg-black text-white">
    <Header setQuery = {setQuery}/>
    <Component className = " flex min-h-screen flex-col items-center justify-center py-2" isLoading = {isLoading} error = {error} data = {data} {...pageProps} />
  </div>
  )
}


export default MyApp

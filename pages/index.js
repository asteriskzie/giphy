import Image from 'next/image'
import SearchBar from '../components/SearchBar'
import { useState, useEffect } from "react";
import fetchGifs from './api/fetchGifs.js'

export default function Home() {
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
    <div className="flex flex-col gap-y-5">
      <SearchBar setQuery = {setQuery}/>
      <div>
          {error ? (
            <div>Error</div>
            ) : (isLoading || !data) ? (
              <div>Loading..</div>
            ) : (
              <div class="flex flex-wrap justify-evenly gap-8">
                {data.map((gif) => (        
                    <div key ={gif.id}>
                      {console.log(gif)}
                      <img src={gif.images.fixed_height.url} />
                    </div>
                  ))} 
            </div>      
          )}
      </div>
    </div>    
  )
}


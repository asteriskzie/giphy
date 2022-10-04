import { GiphyFetch } from '@giphy/js-fetch-api'
const apiKey = "R0hSWGWtCUUAFnRfdhFSw4bd9zjTV3Ta"
const gf = new GiphyFetch(apiKey);

export default async function fetchGifs(query) {    
    const result = query ? await gf.search(query) : await gf.trending(); 
    console.log("result", result.data); 
    return result.data; 
}
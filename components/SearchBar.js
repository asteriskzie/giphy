function handleSearch (event, setQuery) {  
    event.preventDefault(); 
    const val = document.getElementById('search').value;
    setQuery(val);
}  

function SearchBar({setQuery}) {
    return (
        <div>
            <form className="flex bg-white rounded" onSubmit = {() => handleSearch(event, setQuery)}>                
                <input id='search' className="text-lg text-zinc-900 bg-white w-full rounded h-14 p-4" type="text" placeholder="search for a GIF" />
                <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded w-14 h-14 p-4" type="submit">GO</button>
            </form>
        </div>
    )
}

export default SearchBar
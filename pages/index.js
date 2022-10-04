import Image from 'next/image'

export default function Home({ isLoading, error, data }) {
  return <div>
    {error ? (
    <div><span>Error</span></div>
    ) : (isLoading || !data) ? (
      <div><span>Loading..</span></div>
    ) : (
      <div class="container grid grid-cols-3 gap-2 mx-auto">
        {data.map((gif) => (        
            <div key ={gif.id} className = "h-full rounded object-center">
              {console.log(gif)}
              <img src={gif.images.fixed_height.url} />
            </div>
          ))} 
    </div>      
  )}
  </div>
}


import '../styles/globals.css'

function Header () {
  return (
    <div className="flex justify-center">
      <h2 className="p-3 text-4xl font-bold">GIPHY</h2>
    </div>
  )
};


function MyApp({ Component, pageProps }) {
  return (
    <div className="flex justify-center">      
      <div className="w-4/5 ">        
        <Header/>
        <Component className = " flex min-h-screen flex-col items-center justify-center py-2" {...pageProps} />
      </div>
    </div>
  )
}


export default MyApp

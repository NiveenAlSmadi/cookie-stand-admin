import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'


export default function Home() {

  const [nlocation, setLocation] = useState([])


  function CookieHandler(event){
    event.preventDefault();
    const result= {
      location: event.target.location.value,
      minCustomers:event.target.min.value ,
      maxCustomers:event.target.max.value ,
      avgCookie:event.target.avg.value,
    }
   setLocation([...nlocation,result])
  }

  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex bg-green-500 text-black-100 p-3 items-center">
        <h1 className="font-semibold text-2xl font-sans">Cookie Stand Admin</h1>
      </header>

      <main className=" m-10 flex  flex-col justify-center ">


       <div className="bg-green-300 rounded">

       <legend className=" mb-4 text-center">
             <h2 className=" m-10 font-medium text-2xl ">Create Cookie Stand  </h2>
           
       

         <form className="flex flex-wrap mx-2" onSubmit={CookieHandler}>
              <label className=" w-full my-5  ">Location 
              <input className=" w-11/12 mx-1"name="location" />
              </label>

              <label className="w-3/12" >Minimum Customers per Hour
              <input className="px-5 " type="number" name="min" />
              </label>


              <label className="w-3/12" >Maximum Customers per Hour
              <input className=" px-5 " type="number"name="max" />
              </label>

              <label className="w-3/12" >Average Cookie per Sale 
              <input className="px-5 " name="avg"></input>
              </label>

              <input className=" bg-green-500 w-3/12 text-center" type="submit" value="Create" />
            </form>

         </legend>

       </div>

       <div className="text-center p-4">
          <p> Report Table Coming soon ... </p>

          {
              nlocation.map(item => {
                return(
                    <p className="font-mono text-gray-500"> {JSON.stringify(item)} </p>
                  
                )
              })
            }
           
      
         </div>
      </main>

      <footer className="bg-green-500 text-black-200 p-4 ">
        
          <p>&copy;2021</p>
       
      </footer>
    </div>
  )
}

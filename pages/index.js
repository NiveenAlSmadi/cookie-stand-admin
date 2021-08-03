import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import CookieForm from '../components/CreateForm'
import ReportTable from '../components/ReportTable'
import { time } from '../data'

export default function Home() {

  const [nlocation, setLocation] = useState([])

  const [totals, setTotals] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  
  function storInArray(max, min, avg){
    let array = [];
    array[15] = 0;
    for (let i = 0 ; i < 15; i++ ){
      let rand = Math.floor(Math.random() * (max - min + 1) + min);
      let numOfCookies = Math.floor(avg * rand);
      array[i] = numOfCookies;
      array[15] += array[i];
      totals[i]+= array[i]
      
      
      
    }
    totals[15] += array[15]
    return array;
  }

  function CookieHandler(event){
    event.preventDefault();
    let Data = storInArray(parseInt(event.target.max.value), parseInt(event.target.min.value), parseInt(event.target.avg.value))
    const result= {
      location: event.target.location.value,
      minCustomers:event.target.min.value ,
      maxCustomers:event.target.max.value ,
      avgCookie:event.target.avg.value,
      randCookPerHour: Data
    }
   setLocation([...nlocation,result])
  }

  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

    <main className=" m-10 flex  flex-col justify-center ">

      <CookieForm CookieHandler={CookieHandler}/>
      <ReportTable time={time} nlocation={nlocation} totals={totals}/>
    </main>

     <Footer nlocation={nlocation}/>
    </div>
  )
}


export default function CookieForm(props) {
    return (
        <div className="bg-green-200 border border-green-500 rounded">

        <legend className=" mb-4 text-center m-10">
              
            
        
 
          <form className="flex flex-wrap mx-2 " onSubmit={props.CookieHandler}>
               <label className="my-2 text-sm font-semibold ">ADD LOCATION <br></br>
               </label>
               <input className=" w-3/5 mx-1 h-8"name="location"  placeholder="Cookie Stand Location"/>
             

               <label className="w-3/12 mx-11 text-sm font-semibold" >MINIMUM CUSTOMERS PER HOUR 
               <input className="px-5 " type="number" name="min" placeholder="0" />
               </label>
 
 
               <label className="w-3/12 text-sm  mx-11 font-semibold" >MAXIMUM CUSTOMERS PER HOUR 
               <input className=" px-5 " type="number"name="max" placeholder="0"/>
               </label>
 
               <label className="w-3/12 text-sm font-semibold" >AVERAGE COOKIE PER SALE
               <input className="px-5 " name="avg" placeholder="0"></input>
               </label>
               
          
 

               <button className=" bg-green-500 text-xs w-3/12 rounded-md h-5 mt-5" > CREATE STAND </button>
               
              
             </form>
 
          </legend>
 
        </div>
 
    )
}
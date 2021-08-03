
export default function CookieForm(props) {
    return (
        <div className="bg-green-300 rounded">

        <legend className=" mb-4 text-center">
              <h2 className=" m-10 font-medium text-2xl ">Create Cookie Stand  </h2>
            
        
 
          <form className="flex flex-wrap mx-2" onSubmit={props.CookieHandler}>
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
 
    )
}
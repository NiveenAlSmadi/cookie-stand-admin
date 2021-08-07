import { BsTrash } from "react-icons/bs";
export default function Table(props){
    return(
        <div className="flex flex-col text-center">
         
        {
              (props.nlocation.length === 0)?<p class="font-mono text-black-500">No Cookie Stand Available</p>:
              <table className="w=1/2 mx-auto my-4 text-m ">
              <thead className=" bg-green-500 rounded-md ">
                <tr className=" bg-green-500 rounded-md ">
                  <th className=" bg-green-500">Location</th>
                    {
                    props.time.map(item =>{
                        return(
                            <th className="p-2">{item}</th>
                        )
                    })
                    
                    }
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {
                  props.nlocation.map(item => {
                    return(
                      <tr className="bg-green-200 " >
                        <td className=" flex flex-row items-center  justify-between border border-black-600">{item.location}<BsTrash/> </td>
                        {
                            item.randCookPerHour.map(ele =>{
                                 
                                return(   
                                    <td className=" border border-black-600"> {ele}</td>
                                )
                            })
                        }
                        
                      </tr>
                    )
                  })
                }
                
              </tbody>
              <thead>
                <tr>
                  <th className="border bg-green-500">Total</th>
                    {
                            props.totals.map(ele=>{
                                return(
                                    <th className="border bg-green-400">{ele}</th>
                                )
                            })
                    }
                  
                </tr>
              </thead>
            </table>
        }

        </div>
    )
}
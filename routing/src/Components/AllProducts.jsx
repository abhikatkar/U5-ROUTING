import { useState, useEffect } from "react"
import axios from "axios"


export const AllProducts = ()=>{
    const [list , setList] = useState([])

    useEffect(()=>{
      axios.get("http://localhost:3040/userData").then((res)=>{setList(res.data)})
    },[]);

    // console.log(list)
    return <div>


        <h1>All Products</h1>


        
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>price</th>
              <th>more details</th>
            </tr>
          </thead>
          <tbody>
            {list.map((d)=>{
              return(
                <tr key={d.id}>
                  <td>{d.name}</td>
                  <td>{d.price}</td>
                  <td><button>more details</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
            
           
    </div>
}
import { useState, useEffect } from "react"
import axios from "axios"


export const Users = ()=>{
    const [list , setList] = useState([])

    useEffect(()=>{
      axios.get("")
    })
    return <div>
        {list.map((e)=>{
                <div key={e.id}>
                    {e.id}.{e.first_name}
                    </div>
            })}
    </div>
}
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const ProductDetail = ()=>{
const {id} = useParams()
const [oneProduct, setOneProduct] = useState({})
useEffect(()=>{
axios.get(`http://localhost:3040/userData/${id}`).then((res)=>{
setOneProduct({...res.data})
})
},[])
    return (
        <div>
            <h2>Product Details</h2>
            
            <h4>Product Name - {oneProduct.name}</h4>
            <h4>Product Price - {oneProduct.price}</h4>
            
        </div>
    )
}
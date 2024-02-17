import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Singleproduct = () => {
    
const [Product,setProduct]=useState([])
    const data=useParams()
    useEffect(() => {
 
        async function ApiGet() {
            try {
                let apiData = await axios.get("https://fakestoreapi.com/products")
                console.log("***************", apiData.data);
                setProduct(apiData.data)
    
            } catch (err) {
                console.log(err);
            }
    
        }
        ApiGet()
    },[])

const singleProduct=Product.filter((li)=>{
    return li.id==data.id
})


  return (
    <div>
        {singleProduct.map((li)=>(
            <img src={li.image}/>
        ))}
    </div>
  )
}

export default Singleproduct
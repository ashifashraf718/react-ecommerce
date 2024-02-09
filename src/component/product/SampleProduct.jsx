// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const SampleProduct = () => {
//     const [Product,setProduct]=useState([])
//     useEffect(() => {
 
//         async function ApiGet() {
//             try {
//                 let apiData = await axios.get("https://fakestoreapi.com/products")
//                 console.log("***************", apiData.data);
//                 setProduct(apiData.data)
    
//             } catch (err) {
//                 console.log(err);
//             }
    
//         }
//         ApiGet()
//     },[])


//     console.log("************",Product);
//   return (
//     <div>{
//      Product.map((li)=>(
//         li.category && "men's clothing"
//      ))   
//         }</div>
//   )
// }

// export default SampleProduct
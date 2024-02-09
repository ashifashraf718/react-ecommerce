import React, { useEffect, useState } from 'react'
import axios from "axios"
import { ThreeCircles } from 'react-loader-spinner'
import Products from '../component/product/Products'

const Home = () => {
    const [product,setProduct]=useState([])
    const [loading,setLoading]=useState(false)

    async function ApiGet(){
        try{
            setLoading(true)
            let apiData=await axios.get("https://fakestoreapi.com/products/category/jewelery")
            console.log("***************",apiData.data);

            if(apiData){
                setLoading(false)
                setProduct(apiData.data)
            }
        }catch(err){
            console.log(err);
        }

    }

    useEffect(()=>{
        ApiGet()
    },[])
  return (
    <div>
        {
            loading ? 
            <div className='min-h-screen w-full flex justify-center items-center'>
                <ThreeCircles height={"120"} width={"120"} color="rgb(127,29,29)" visible={true} />

            </div> : <div className='min-h-[80vh] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4   max-w-6xl mx-auto p-3'> 
                {
                    product && product.length ? 
                    product.map((product)=>(
                        
                            <Products value={product}/>
                    )) : null
                }
                {/* <Products product={product}/> */}

            </div>
        }
    </div>
  )
}

export default Home



// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import Products from '../component/product/Products'
// const home = () => {
//     const [product, setProduct] = useState([])

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

//     console.log("product",product);
//     return (
//         <div>
//             <Products value={product}/>
//         </div>
//     )
// }

// export default home
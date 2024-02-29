import React, { useEffect, useState } from 'react'
import axios from "axios"
import { ThreeCircles } from 'react-loader-spinner'
import Products from '../component/product/Products'
import { electronicsProduct, jeweleryProduct, menProduct, womenProoduct } from '../api/api'
import { useDispatch } from 'react-redux'
import { addProduct } from '../store/productSlice'
import Header from '../component/header/Header'

const Home = () => {
    const [men,setMen]=useState([])
    const [women,setWomen]=useState([])
    const [jewelery,setJewelery]=useState([])
    const [electronic,setElectronic]=useState([])
    const [status,setStatus]=useState(false)
    const [loading,setLoading]=useState(false)
    const dispatch=useDispatch()
    async function ApiGet(){
        try{
            setLoading(true)
            let menData=await axios.get(menProduct)
            let womenData=await axios.get(womenProoduct)
            let jeweleryData=await axios.get(jeweleryProduct)
            let electronicData=await axios.get(electronicsProduct)
            // console.log("***************",jeweleryData.data);


            if(menData && womenData && jeweleryData && electronic){
                setStatus(true)
                setLoading(false)
                setMen(menData.data)
                setWomen(womenData.data)
                setJewelery(jeweleryData.data)
                setElectronic(electronicData.data)
            
                dispatch(addProduct([men,women,jewelery,electronic]))
            }
            // if(men.length && women.length && jewelery.length && electronic.lengt){
            // }
        }catch(err){
            console.log(err);
        }

    }

    
    

    useEffect(()=>{
        
        ApiGet()
    },[status])

    
  return (
      <div>
        <Header/>
        {
            loading ? 
            <div className='min-h-screen w-full flex justify-center items-center'>
                <ThreeCircles height={"120"} width={"120"} color="rgb(127,29,29)" visible={true} />

            </div> : <div> 
                            <Products men={men} jewelery={jewelery} women={women} electronic={electronic}/>
        

            </div>
        }
    </div>
  )
}
  export default Home

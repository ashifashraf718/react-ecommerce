import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import Header from '../header/Header';

const Singleproduct = () => {
    const data=useParams()
   console.log("data id",data);
    const product=useSelector((state)=>state.product.productData[1])
    console.log("products.......",product);

    // const allProduct=product.men || product.women || product.jewelery || product.electronic
// const singleProduct=allProduct.filter((li)=>{
//     return li.id==data.id
// }) 
// console.log("data : ....",singleProduct);


const mapProduct=product.map(innerArr => innerArr)
console.log("map...... :",mapProduct);
const merge=mapProduct.flat(Infinity) 
const singleProduct=merge.filter(((li)=>{
  return li.id==data.id 
}))
console.log("single ",singleProduct );
return (
  <div>
    <Header/>
    <div className='flex'>
        {
        singleProduct.map((li)=>(
          <div  key={li.id}>
            <img className='h-1/2' src={li.image}></img>
            <h1>{li.title}</h1>
          </div>
          ))
        }
        <div>
          <div className='flex bg-gray'>
            <button className='font-bold'>-</button>
            <p></p>
            <button>+</button>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Singleproduct
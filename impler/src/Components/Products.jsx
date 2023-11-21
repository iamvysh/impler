import React, { useEffect, useState,useContext } from 'react'
import '../Styles/Products.css'
import { context } from '../utils/context';

import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';

const Products = () => {

    const { cart, setcart } = useContext(context);


    const [products ,setProducts] = useState([])


    const productFetchHandler =async ()=>{

        const response = await axios.get("http://localhost:3000/products")
        console.log("products",response.data.Data)

        setProducts(response.data.Data)
    }


    const AddToCart = (product) => {
        const items= cart.find((item) => item.id === product.id);
      
        if (!items) {
          setcart([...cart, product]);
          const notify = (msg) => toast(msg);
          alert("item added successfully")
        } else {
          alert("Item already added to cart");
        }
      }
    console.log(cart);


    useEffect(()=>{
        productFetchHandler()
    },[])
  return (

    
    <div className='product_mainContainer'>
           <ToastContainer
                        position="top-left"
                        autoClose={1000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                      
                      
                      />


        <div className="product_header">

            <h2>Products</h2>
        </div>

       <div className="produts_list">
        <div className="products">
            { products.map((item)=>(
                <>
       <MDBCard style={{width:'16rem'}}>
      <MDBCardImage src={item.img} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{item.name}</MDBCardTitle>
        <MDBCardText>
        ₹ {item.price}
        </MDBCardText>
        <MDBCardText>
        {item.description}
        </MDBCardText>
        <MDBBtn onClick={()=>AddToCart(item)}>Add to cart</MDBBtn>
      </MDBCardBody>
    </MDBCard> 
    </>

))}
   
    </div>

       </div>
      
    </div>
  )
}

export default Products

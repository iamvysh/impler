import React, { useContext, useRef, useState } from 'react'
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    } from "mdb-react-ui-kit";
    import { context } from '../utils/context';
    import axios from "axios"
    import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const  navigate=useNavigate()

    const firstNameRef=useRef("")
    const LastNameRef=useRef("")
    const AddressRef=useRef("")





    

    const { cart, setcart } = useContext(context);

   
    const [basicModal, setBasicModal] = useState(false);

    const toggleOpen = () => setBasicModal(!basicModal)
   

    const totalAmount = cart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
      }, 0);

      const increaseQuantity = (id) => {
        const updatedCart = cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setcart(updatedCart);
      };
    
      const decreaseQuantity = (id) => {
        const updatedCart = cart.map((item) =>
          item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
        setcart(updatedCart);
      };

      const handlePayment=async()=>{

        try {

            const Data={
                firstName:firstNameRef.current.value,
                lastName:LastNameRef.current.value,
                address:AddressRef.current.value
        
            }
           const response=await axios.post("http://localhost:3000/placeOrder",Data)

           console.log("response",response);
           if(response.status==200){
            alert("payment successfull")
            navigate("/")
            setcart([])
           }
        } catch (error) {
            return alert(error)
        }
      }


 


  return (
    <>
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
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
  <MDBContainer className="py-5 h-100">
    <MDBRow className="justify-content-center align-items-center h-100">
      <MDBCol size="12">
        <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
          <MDBCardBody className="p-0">
            <MDBRow className="g-0">
              <MDBCol lg="">
                <div className="p-5">
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                      Shopping Cart
                    </MDBTypography>
                    <MDBTypography className="mb-0 text-muted">
                      {cart.length}items
                    </MDBTypography>
                  </div>

                  <hr className="my-4" />
                    {/* ======================================== */}


                    {cart.map((item)=>(
<>
<MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                    <MDBCol md="2" lg="2" xl="2">
                      <MDBCardImage
                        src={item.img}
                        fluid className="rounded-3" alt="Cotton T-shirt" />
                    </MDBCol>
                    <MDBCol md="3" lg="3" xl="3">
                      <MDBTypography tag="h6" className="text-muted">
                        {item.name}
                      </MDBTypography>
                      <MDBTypography tag="h6" className="text-black mb-0">
                      {item.description}
                      </MDBTypography>
                    </MDBCol>
                    <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
          <MDBBtn color="link" className="px-2" onClick={() => decreaseQuantity(item.id)}>
            <MDBIcon fas icon="minus" />
          </MDBBtn>

          <MDBInput type="number" min="0" value={item.quantity} size="sm" readOnly />

          <MDBBtn color="link" className="px-2" onClick={() => increaseQuantity(item.id)}>
            <MDBIcon fas icon="plus" />
          </MDBBtn>
        </MDBCol>
                    <MDBCol md="3" lg="2" xl="2" className="text-end">
                      <MDBTypography tag="h6" className="mb-0">
                      ₹  {item.price*item.quantity}
                      </MDBTypography>
                    </MDBCol>
                    <MDBCol md="1" lg="1" xl="1" className="text-end">
                      <a href="#!" className="text-muted">
                        <MDBIcon fas icon="times" />
                      </a>
                    </MDBCol>
                  </MDBRow>

                  <hr className="my-4" />

                  </>

                    ))}
                  
                  

                  <div className="d-flex justify-content-between mb-4">
                    <MDBTypography tag="h5" className="text-uppercase">
                      items {cart.length}
                    </MDBTypography>
                    <MDBTypography tag="h5">₹  {totalAmount}</MDBTypography>
                  </div>

                  <MDBTypography tag="h5" className="text-uppercase mb-3">
                    Shipping
                  </MDBTypography>

                  <div className="mb-4 pb-2">
                    <select className="select p-2 rounded bg-grey" style={{ width: "100%" }}>
                      <option value="1">Standard-Delivery- ₹ 5.00</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                      <option value="4">Four</option>
                    </select>
                  </div>

                  <MDBTypography tag="h5" className="text-uppercase mb-3">
                    Give code
                  </MDBTypography>

                  <div className="mb-5">
                    <MDBInput size="lg" label="Enter your code" />
                  </div>

                  <hr className="my-4" />

                  <div className="d-flex justify-content-between mb-5">
                    <MDBTypography tag="h5" className="text-uppercase">
                      Total price
                    </MDBTypography>
                    <MDBTypography tag="h5">₹  {totalAmount+5}</MDBTypography>
                  </div>

                  <MDBBtn onClick={toggleOpen} color="dark" block size="lg">
                    Proceed to Pay
                  </MDBBtn>
                  <MDBModal open={basicModal} setopen={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>PAYMENT INFO</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>

            <MDBInput wrapperClass='mb-4' ref={firstNameRef} label='First Name' size='lg' id='form1' type='text'/>
            <MDBInput wrapperClass='mb-4' ref={LastNameRef} label='Last Name' size='lg' id='form2' type='text'/>
            <MDBInput wrapperClass='mb-4' ref={AddressRef} label='Address' size='lg' id='form2' type='text'/>

       
       


            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn  onClick={handlePayment}>PAY</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

                </div>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</section>
    
    
    </>
  )
}

export default Cart
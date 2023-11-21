import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
const Carousel = () => {
  return (
    <>
      <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src='https://www.jiomart.com/images/cms/aw_rbslider/slides/1691950286_Freedom_to_save_more_on_Beauty_and_Personalcare.jpg?im=Resize=(1680,320)' className='d-block w-100' alt='...' />
        
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src='https://www.jiomart.com/images/cms/aw_rbslider/slides/1691935239_Freedom_Finds.jpg?im=Resize=(1680,320)' className='d-block w-100' alt='...' />
        
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src='https://www.jiomart.com/images/cms/aw_rbslider/slides/1691935181_Freedom_From_High_Prices_Kitchenware_Range_.jpg?im=Resize=(1680,320)' className='d-block w-100' alt='...' />
        
      </MDBCarouselItem>


      <MDBCarouselItem itemId={4}>
        <img src='https://www.jiomart.com/images/cms/aw_rbslider/slides/1692640422_Oral_Care_Fest_Without_Logo_Desktop.jpg?im=Resize=(1680,320)' className='d-block w-100' alt='...' />
        
      </MDBCarouselItem>

      <MDBCarouselItem itemId={5}>
        <img src='https://www.jiomart.com/images/cms/aw_rbslider/slides/1692820219_Rakhi_special_delight_Desktop.jpg?im=Resize=(1680,320)' className='d-block w-100' alt='...' />
        
      </MDBCarouselItem>

      <MDBCarouselItem itemId={6}>
        <img src='https://www.jiomart.com/images/cms/aw_rbslider/slides/1692180619_Delicious_Deals_Savor_the_Savings_Desktop.jpg?im=Resize=(1680,320)' className='d-block w-100' alt='...' />
        
      </MDBCarouselItem>
    </MDBCarousel>
    
    
    </>
  )
}

export default Carousel
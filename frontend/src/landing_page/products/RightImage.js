import React from "react";
function RightImage({
  imageURL,
  productName,
  productDescription,
  learnMore,
  
}) {
  return <div className='container'>
        <div className='row'>
            
             <div className='col-6 p-5 mt-5'>
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div className='mt-3'>
                    
                <a href={learnMore}>learnMore  </a>
                </div>  
             </div>
             <div className='col-6 p-5'>
                <img src= {imageURL}/>
            </div>
        </div>
    </div> 
}

export default RightImage;

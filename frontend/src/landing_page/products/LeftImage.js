import React from 'react';
function LeftImage({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return <div className='container'>
        <div className='row'>
            <div className='col-6 p-5'>
                <img src= {imageURL}/>
            </div>
             <div className='col-6 p-5 mt-5'>
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div className='mt-3'>
                    <a href={tryDemo}>Try Demo</a>
                <a href={learnMore} style={{marginLeft: "50px"}}>Learn More</a>
                </div>
                <div className='mt-3'>
                    <a href={googlePlay}><img src='media/images/googlePlayBadge.svg'/></a>
                <a href={appStore}><img src='media/images/appstoreBadge.svg 'style={{marginLeft:"50px"}}/></a>
                </div>
                
                
             </div>
        </div>
    </div> 
       
    
}

export default LeftImage;
import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>

                    <img src ='media/images/largestBroker.svg' alt='largest broker detail'/>
                    
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>Largest Stock broker in india</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all volumes in india daily by trading and investing in: </p>
                    <div className='row'>
                        <div className='col-6  '>
                            <ul>
                        <li>
                            <p>Futures and options </p>
                        </li>
                         <li>
                            <p>Commodity derivatives</p>
                        </li>
                         <li>
                            <p>Currency derivatives </p>
                        </li>
                    </ul>
                        </div>
                         <div className='col-6 '>
                            <ul>
                        <li>
                            <p>Stocks & IPOs </p>
                        </li>
                         <li>
                            <p>Direct mutual fund</p>
                        </li>
                         <li>
                            <p>Bond and Govt. Securities </p>
                        </li>
                    </ul> 
                         </div>
                    </div>
                     <img src='media\images\pressLogos.png 'alt='stock images'style={{width:"90%"}}/>
                </div>


            </div>

        </div>
     );
}

export default Awards;
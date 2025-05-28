import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottam text-center  ">
        <h1>Pricing</h1>
        <h3 className="text-muted mt-3 fs-5">
          Free equity investment and flat ₹20 traday and F&O trades
        </h3>
      </div>
      <div className="row p-5 mt-5 text-center  ">
        <div className="col-4 p-5">
          <img src="media/images/pricingEquity.svg" />
          <h1 className="fs-3">Free Equity Delivery</h1>
          <p className="text-muted">
            all equity delivery investment(NSE,BSE) are absolutely free - ₹0
            brokerage
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/intradayTrades.svg" />
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted">
            intraday and F&O trades Flat Rs. 20 0.03% (whichever is lower per
            executed) order on intraday trades accross equity,currency,and
            commodity trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/pricingEquity.svg" />
          <h1 className="fs-3"> Free direct MF</h1>
          <p className="text-muted">
            {" "}
            All Direct mutual fund investments are absolutely free - ₹ 0
            commission and DP charges.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

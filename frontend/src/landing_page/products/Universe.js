import React from "react";
function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5 ">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{maxHeight:"50px"}}/>
          <p className="text-small text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png"style={{maxHeight:"50px"}} />
          <p className="text-small text-muted">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5 ">
          <img src="media/images/sensibullLogo.svg" />
          <p className="text-small text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" />
          <p className="text-small text-muted">
            smallcases are modern investment products that help you build a
            diversified, low-cost & long term portfolio
          </p>
        </div>
        <div className="col-4 p-3 mt-5 ">
          <img src="media/images/goldenpiLogo.png" />
          <p className="text-small text-muted">
            With Ditto’s expert claims team at your disposal 24/7, you and your
            family will always receive the support you deserve.
          </p>

        </div>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"auto"}}>Signup Now</button>
      </div>
    </div>
  );
}

export default Universe;

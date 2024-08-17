import React from "react";

const Universe = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center mt-5 text-muted">
        <h1>The Zerodha Universe</h1>
        <p className="mt-4 p-3 fs-4 mb-4">
          Extend your trading and investment experience even further with our
          partner platforms.
        </p>
        <div className="col-4 p-3 ">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="fund house"
            style={{ width: "60%" }}
          />
          <p className="text-center text-small mt-4 p-3">
            Our asset management venture that is creating simple and transparent
            indexfunds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/streakLogo.png"
            alt="streak logo"
            style={{ width: "60%" }}
          />
          <p className="text-center text-small mt-4 p-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/sensibullLogo.svg"
            alt="sensibull"
            style={{ width: "60%" }}
          />
          <p className="text-center mt-4">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
      </div>
      <div className="row text-center text-small text-muted  mt-5">
        <div className="col-4">
          <img
            src="media/images/smallcaseLogo.png"
            alt="smallcase"
            style={{ width: "60%" }}
          />
          <p className="text-center mt-4 p-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4">
          <img
            src="media/images/dittoLogo.png"
            alt="logo"
            style={{ width: "60%" }}
          />
          <p className="text-center mt-4 p-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <div className="col-4">
          <img
            src="media/images/tijori.svg"
            alt="tijori"
            style={{ width: "60%" }}
          />
          <p className="text-center mt-4 p-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <button className='btn btn-primary p-3 mt-4' style={{width: '15%', margin: '0 auto', fontWeight: '600'}}>Sign up now</button>
      </div> 
    </div>
  );
};

export default Universe;

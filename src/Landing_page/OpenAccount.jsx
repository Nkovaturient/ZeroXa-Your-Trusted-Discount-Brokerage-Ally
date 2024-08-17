import React from "react";

const OpenAccount = () => {
  return (
    <div className="container mt-5 p-5 mb-5">
      <div className="row text-center p-5">
        <h1 className="fs-2">Open a Zerodha Account</h1>
        <p className="text-muted fs-5 mt-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="btn btn-primary fs-5 text-bold p-3 mt-4"
          style={{ width: "20%", margin: "0 auto", fontWeight: "600" }}
        >
          Sign up now
        </button>
      </div>
    </div>
  );
};

export default OpenAccount;

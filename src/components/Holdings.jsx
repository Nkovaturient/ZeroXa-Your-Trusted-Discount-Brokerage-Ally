import React, { useEffect, useState } from "react";
import axios from 'axios';

const Holdings = () => {
  const[holdings, setHoldings]=useState([]);
  const url=`http://localhost:7000`


  useEffect(()=>{
   axios.get(`${url}/api/holdings`).then((res)=>{
    const result=res.data;
    setHoldings(result.data);
   });

  },[])
  return (
    <>
      <h3
        className="title"
        style={{
          color: "rgb(211, 211, 211)",
          fontWeight: "600",
          fontSize: "2.1rem",
        }}
      >
        Holdings ({holdings.length})
      </h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. Cost</th>
            <th>LTP</th>
            <th>Cur. val.</th>
            <th>P&L</th>
            <th>Net Chg.</th>
            <th>Day Chg.</th>
          </tr>

          {holdings.map((stock, index) => {
            const curVal = stock.price * stock.qty;
            const isProfit = curVal - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curVal}</td>
                <td className={profClass}>
                  {(curVal - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;

import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import DoughnutChart from "./DoughnutChart";

const WatchList = () => {
  const watchlistData={
    labels: watchlist.map((stock)=> stock.name),
    datasets: [
      {
        label: "",
        data: watchlist.map((stock)=> stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 9.2)",
          "rgba(54, 162, 235, 9.2)",
          "rgba(255, 266, 85, 9.2)",
          "rgba(75, 192, 192, 9.2)",
          "rgba(153, 192, 255, 9.2)",
          "rgba(255, 162, 64, 9.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 266, 85, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 162, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          className="search"
          placeholder="Search eg:infy, bse,  nifty fut weekly, gold mcx.."
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
      <DoughnutChart data={watchlistData}/>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showListItem, setShowListItem] = useState(false);

  const handleMouseEnter = (e) => {
    setShowListItem(true);
  };

  const handleMouseLeave = (e) => {
    setShowListItem(false);
  };

  return (
    <>
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="item">
          <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
          <div className="item-info">
            {" "}
            {/*//rightend */}
            <span className="percent">{stock.percent}</span>
            {stock.isDown ? (
              <KeyboardArrowDown className="down" />
            ) : (
              <KeyboardArrowUp className="up" />
            )}
            <span className="price">{stock.price}</span>
          </div>
        </div>

        {showListItem && <WatchListActions uid={stock.name} />}
      </li>
    </>
  );
};

const WatchListActions = ({ uid }) => {
  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Anaytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};

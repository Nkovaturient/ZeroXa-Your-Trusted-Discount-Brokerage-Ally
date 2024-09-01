import React from "react";

const RightImgSection = ({ productName, description, img, learnMore }) => {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-6 p-5 mt-5">
          <h1 className="mb-4">{productName}</h1>
          <p className="text-muted">{description}</p>
          <div>
            <a style={{ color: "rgb(11, 87, 201)" }} href={learnMore}>
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-4">
          <img src={img} alt={productName} />
        </div>
      </div>
    </div>
  );
};

export default RightImgSection;

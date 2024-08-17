import React from "react";
import Hero from "./Hero";
import LeftImgSection from "./LeftImgSection";
import RightImgSection from "./RightImgSection";
import Universe from "./Universe";

const ProductPage = () => {
  return (
    <>
      <Hero />
      <LeftImgSection
        img={"media/images/kite.png"}
        productName={"Kite"}
        description={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
      />
      <RightImgSection
        img={"media/images/console.png"}
        productName={"Console"}
        description={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
      />
      <LeftImgSection
        img={"media/images/coin.png"}
        productName={"Coin"}
        description={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        }
      />
      <RightImgSection
        img={"media/images/kiteconnect.png"}
        productName={"Kite Connect API"}
        description={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
      />
      <LeftImgSection
        img={"media/images/varsity.png"}
        productName={"Varsity Mobile"}
        description={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
      />

      <h3 className="text-muted text-center mt-5 p-5 mb-5">
        Want to know more about our technology stack? Check out the{" "}
        <a href="#" style={{ color: "rgb(11, 87, 201)" }}>
          Zerodha.tech
        </a> blog.
      </h3>

      <Universe />
    </>
  );
};

export default ProductPage;

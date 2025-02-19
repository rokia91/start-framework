import React from "react";
import "./Home.css";
import mainpic from "../../assets/Images/avataaars.svg";

export default function Home() {
  return (
    <>
      <div className="home align-content-center ">
        <img src={mainpic} alt="mainpic" className="w-25  pt-5 mt-5" />
        <h1 className="text-center text-capitalize text-white pb-3 home-txt">
          start Framework
        </h1>
        <div className="home-star">
          <i class="fa-solid fa-star text-white fs-5"></i>
        </div>
        <p className="text-white pb-3">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </>
  );
}

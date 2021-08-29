import React, { useEffect, useState } from "react";
import "../App.css";
import { one, two, three, dot, ring } from "../img";

export default function Home() {
  const [count, setCount] = useState(1)
  useEffect(() => {
    setInterval(() => {
      count === 10 ? setCount(1) : setCount(count=>count + 1)
      console.log(count);
    }, 3000);
  },[])
  return (
    <div className="home">
      <div className="home-tagline">
        <p className="description">The First Complete</p>
        <h1 className="heading">CRYPTO DERIVATIVES EXCHANGE</h1>
        <div className="works">
          Trade Perpetuals, Futures and Exchange-quoted Spreads
        </div>
        <button className="pointer">VIEW TRADE</button>
      </div>
      <div className="steps">
        <h2>Start Trading in 3 easy steps</h2>
        <p>
          <div className="steps-list">
            <div className="steps-index">
              <img src={one} alt="" />
            </div>
            <img src={dot} alt="" />
            <div className="content">
              <h4>REGISTER</h4>
              <p>Sign-up for your free account in less than a minute.</p>
            </div>
          </div>
          <div className="steps-list">
            <div className="steps-index">
              <img src={two} alt="" />
            </div>
            <img src={dot} alt="" />
            <div className="content">
              <h4>DEPOSIT</h4>
              <p>Fund your account by depositing USDT.</p>
            </div>
          </div>
          <div className="steps-list">
            <div className="steps-index">
              <img src={three} alt="" />
            </div>
            <img src={dot} alt="" />
            <div className="content">
              <h4>TRADE</h4>
              <p>Make your first trade</p>
            </div>
          </div>
        </p>
      </div>
      <div className="ring">
        <img style={{ transform: `rotate(${count*36}deg)` }} src={ring} alt="" />
      </div>
    </div>
  );
}

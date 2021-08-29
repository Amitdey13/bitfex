import React from "react";
import "../App.css";
import { exchange, perpetual, futures } from "../img";

export default function Services() {
  return (
    <div className="services">
      <h1 className="heading">Services</h1>
      <div className="services-content">
        <div style={{ gridArea: "perpetual" }} className="card">
          <img src={perpetual} alt="perpetual" />
          <div className="content">
            <h3>PERPETUAL</h3>
            <p>
              Easy-to-trade, non-expiring crypto
              <br />
              derivatives contracts.
            </p>
            <br />
            <br />
            <button>
              Read more
            </button>
          </div>
        </div>
        <div style={{ gridArea: "futures" }} className="card">
          <img src={futures} alt="futures" />
          <div className="content">
            <h3>FUTURES</h3>
            <p>
              Cash-settled derivatives contracts for
              <br />
              going long or short on future
              <br /> cryptocurrency prices.
            </p>
            <br />
            <button>
              Read more
            </button>
          </div>
        </div>
        <div style={{ gridArea: "exchange" }} className="card">
          <img style={{ gridArea: "img" }} src={exchange} alt="exchange" />
          <div style={{ gridArea: "content" }} className="content">
            <h3>EXCHANGE-QOUTED SPREADS</h3>
            <p>
              Low-risk trading instruments to easily trade
              <br />
              the price difference of underlying futures
              <br />
              and perpetual contracts.
            </p>
            <br />
            <button>
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

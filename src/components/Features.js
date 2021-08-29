import React from 'react'
import "../App.css"
import { trade, candle, intuitive, security} from "../img"

export default function Features() {
    return (
      <div className="features">
        <h1 className="heading">Why Bitfex?</h1>
        <p className="description">
          Bitfex is a P2P crypto-products trading platform, providing traders a
          diverse range of crypto contracts and a highly secure & intuitive
          trading interface, powered by institutional-grade infrastructure.
          Built by veteran traders and supported by a diverse community of VCs,
          Traders and Investors from both traditional and crypto space.
        </p>
        <div className="features-content">
          <div className="card">
            <img src={candle} alt=""></img>
            <div className="content">
              <h3>UNIQUE TRADING PRODUCTS</h3>
              <p>
                First to launch Exchange Quoted Spreads which dramatically
                <br />
                reduce execution risk in volatile markets.
              </p>
            </div>
          </div>
          <div className="card">
            <img src={trade} alt=""></img>
            <div className="content">
              <h3>TRADE MINING</h3>
              <p>Earn rewards on the fees you pay as per trade volume.</p>
            </div>
          </div>
          <div className="card">
            <img src={security} alt=""></img>
            <div className="content">
              <h3>MAXIMUM SECURITY</h3>
              <p>
                Funds stored in multi-signature deep cold storage. Insurance
                <br />
                Fund from Day 1.
              </p>
            </div>
          </div>
          <div className="card">
                    <img src={ intuitive} alt=""></img>
            <div className="content">
              <h3>INTUITIVE INTERFACE</h3>
              <p>
                Easy-to-use, highly customisable and trader-friendly
                <br />
                platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

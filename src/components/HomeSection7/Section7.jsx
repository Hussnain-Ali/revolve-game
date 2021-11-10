import React from "react";
import "./section7.scss";
import img1 from "../../assets/image/6.png";
import bar from "../../assets/image/p6l.e3e32c11.svg";
import img2 from "../../assets/image/7.png";

const Section7 = () => {
  return (
    <>
      <img src={bar} className="barYellow" />
      <div className="home-section7">
        <div className="wrapper">
          <div className="head">
            <div className="number">
              <div className="line"></div>
              <span>THE NUMBERS</span>
            </div>
            <div className="title">Tokenomics</div>
            <div className="para">
              $MNG’s transaction fees will play a key role in its success and
              longevity. These fees are used to create price stability, steady
              deflation, and rewards for token holders.
              <br />
              <br />
              Why did we choose a total supply of 384 million? It’s the number
              of meters from Earth to the moon… a distance we can’t stop
              thinking about.
            </div>
          </div>

          <div className="table-wrapper">
            <div className="data">
              <div className="inner">
                <div className="row1">
                  <div className="d1 br-left">Total Supply</div>

                  <div className="d2 br-right">384,400,000</div>
                </div>

                <div className="row1">
                  <div className="d1 even-d1">
                    <span>Total Transaction Fee</span>
                    <span className="subtitle">
                      A fee applied whenever tokens are bought, sold, or
                      transferred.
                    </span>
                  </div>

                  <div className="d2 even-d2">10%</div>
                </div>

                <div className="row1">
                  <div className="d1">
                    <span>Liquidity</span>
                    <span className="subtitle">
                      Tokens sent to the Liquidity Pool to maintain price
                      stability.
                    </span>
                  </div>

                  <div className="d2">3%</div>
                </div>

                <div className="row1">
                  <div className="d1 even-d1">
                    <span>Reflection</span>
                    <span className="subtitle">
                      Tokens redistributed back to all token holders.
                    </span>
                  </div>

                  <div className="d2 even-d2">3%</div>
                </div>

                <div className="row1">
                  <div className="d1">
                    <span>Burn</span>
                    <span className="subtitle">
                      Tokens sent to a burn address to cause deflation.
                    </span>
                  </div>

                  <div className="d2">2%</div>
                </div>

                <div className="row1">
                  <div className="d1 even-d1 br-bt-left">
                    <span>Marketing & Development</span>
                    <span className="subtitle">
                      Tokens re-invested into growing and improving the project.
                    </span>
                  </div>

                  <div className="d2 even-d2 br-bt-right">2%</div>
                </div>
              </div>

              <div className="row-total">
                <div className="text">Buy Now</div>

                <div className="btn">
                  <div className="btn-inner">
                    <img src={img2} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="image">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section7;

import React from "react";
import arrowimagenext from "../../assets/image/p2RArr.7fb898f9.svg";
import arrowimageprevious from "../../assets/image/p2LArr.1c980cd6.svg";
import activecircle from "../../assets/image/sliderActive.36cde131.svg";
import inactivecircle from "../../assets/image/sliderInactive.b52e7fa3.svg";

const Section2 = () => {
  return (
    <>
      <div class="SecondPart_externalWrapper__2EMD9">
        <div class="SecondPart_mainWrapper__SBV5r"></div>
        <div class="SecondPart_line__35ouI"></div>
        <div class="SecondPart_bckrnd__H7Xi6"></div>
        <div class="SecondPart_logicWrapper__2P8-R">
          <h1 class="SecondPart_fHead__1GJw-">AN EVOLUTION IN</h1>
          <h1 class="SecondPart_sHead__18QwK">BLOCKCHAIN GAMING</h1>
          <div class="SecondPart_someLogo__21fAZ"></div>
          <div class="Slider_sliderWrapper__2cqcF">
            <h1 class="Slider_sliderHeader__ErYzX">
              NFTs As Tethered Staking Avatars
            </h1>
            <p class="Slider_sliderText__1eNjJ">
              In the Revolve ecosystem, actionable NFT assets are tethered to a
              stake of RPG (the native token). An actionable NFT cannot be used
              in the platform without holding the NFTs respective stake, the two
              are tethered exclusively. While the NFT is always tethered to it’s
              stake, the NFT can be transferred or sold to another wallet
              through a staking contract transfer. The NFT acts as a
              certificate, stating that whoever returns the NFT back to the
              staking contract will be able to withdraw the staked amount.
            </p>
            <div class="Slider_controlPanel__3CHHT">
              <div class="Slider_sliderPosition__3rpvB">
                <img
                  class="Slider_sliderPositionItem__33G7s"
                  src={activecircle}
                />
                <img
                  class="Slider_sliderPositionItem__33G7s"
                  src={inactivecircle}
                />
                <img
                  class="Slider_sliderPositionItem__33G7s"
                  src={inactivecircle}
                />
                <img
                  class="Slider_sliderPositionItem__33G7s"
                  src={inactivecircle}
                />
              </div>
              <div class="Slider_sliderArrows__CaHcN">
                <div class="Slider_arrowWrapper__HpqQE">
                  <div class="Slider_inactiveArrowWrapper__1QI2X">
                    <div class="Slider_inactiveArrow__2Blwi">
                      <img
                        class="Slider_arrowIcon__lA6y9"
                        src={arrowimageprevious}
                      />
                    </div>
                  </div>
                </div>
                <div class="Slider_arrowWrapper__HpqQE">
                  <div class="Slider_inactiveArrowWrapper__1QI2X">
                    <div class="Slider_inactiveArrow__2Blwi">
                      <img
                        class="Slider_arrowIcon__lA6y9"
                        src={arrowimagenext}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;

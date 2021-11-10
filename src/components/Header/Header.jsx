import React from "react";
import overview from "../../assets/image/overviewLogoW.9648c268.svg";
const Header = () => {
  return (
    <>
      {/* <!-- Header Menu --> */}
      {/* <div class="PageHeader_headerWrapper__1IKqf">
        <div
          class="PageHeader_headerLogoBckgrd__3ru9j"
      
        ></div>
        <a class="PageHeader_headerLogoLink__12oBR" href="/"
          ><div
            class="PageHeader_headerLogo__1oRua"
          ></div
        ></a>
                    <div class="PageHeader_headerMenuBtn__2OMGz">menu</div>
                    <div class="SignInBtn_btnWrapper__1bvWm">
                        <p>Connect</p>
                    </div>
                </div> */}

      <div class="SideMenuPopup_sidebarArea__1CRrw SideMenuPopup_none__2tLRD">
        <div
          class="SideMenuPopup_sidebarWrapper__3IVXS"
          id="sidebarBody"
          style={{ marginRight: "-300px" }}
        >
          <div class="SideMenuPopup_closeBtn__3Wj00">×</div>
          <div
            class="SideMenuPopup_navLinksWrapper__f3yMi"
            style={{ marginTop: "90px" }}
          >
            <a class="SideMenuPopup_sideBarLink__1k6b8" href="/">
              <div class="SideMenuPopup_sideBarCurrentLink__1QP0x"></div>
              <img
                src="media/overviewLogoW.9648c268.svg"
                alt="Sidebar icon"
                class="SideMenuPopup_sideBarLogo__1I06t"
              />
              <p class="SideMenuPopup_sideBarLinkText__2ACzV">Overview</p>
            </a>
            <a
              class="SideMenuPopup_sideBarLink__1k6b8"
              href="/liquidityStaking"
            >
              <img
                src="/media/liquidityLogo.ad04a675.svg"
                alt="Sidebar icon"
                class="SideMenuPopup_sideBarLogo__1I06t"
              />
              <p class="SideMenuPopup_sideBarLinkText__2ACzV">
                Liquidity staking
              </p>
            </a>
            <a class="SideMenuPopup_sideBarLink__1k6b8" href="/nft-generate">
              <img
                src="..//image/generateLogo.1fd86410.svg"
                alt="Sidebar icon"
                class="SideMenuPopup_sideBarLogo__1I06t"
              />
              <p class="SideMenuPopup_sideBarLinkText__2ACzV">
                Generate assets
              </p>
            </a>
            <a class="SideMenuPopup_sideBarLink__1k6b8" href="/game">
              <img
                src="/media/gameLogo.066994aa.svg"
                alt="Sidebar icon"
                class="SideMenuPopup_sideBarLogo__1I06t"
              />
              <p class="SideMenuPopup_sideBarLinkText__2ACzV">Play</p>
            </a>
            <a class="SideMenuPopup_sideBarLink__1k6b8" href="/inventory">
              <img
                src="/media/invLogo.b2a221a5.svg"
                alt="Sidebar icon"
                class="SideMenuPopup_sideBarLogo__1I06t"
              />
              <p class="SideMenuPopup_sideBarLinkText__2ACzV">Inventory</p>
            </a>
            <a class="SideMenuPopup_sideBarLink__1k6b8" href="/analytics">
              <img
                src="/media/analyticsLogo.398a7da1.svg"
                alt="Sidebar icon"
                class="SideMenuPopup_sideBarLogo__1I06t"
              />
              <p class="SideMenuPopup_sideBarLinkText__2ACzV">Analytics</p>
            </a>
          </div>
          <div class="SideMenuPopup_sideBarLowerLinkWrapper__3WiFB">
            <a
              href="https://drive.google.com/file/d/1N4q7YuUyM4W6cQ77VJOH9tQy018rM08g/view?usp=sharing"
              class="SideMenuPopup_sideBarLowerLink__UJXVk"
            >
              Whitepaper
            </a>
          </div>
        </div>
      </div>

      <div class="PageHeader_headerWrapper__1IKqf">
        <div
          class="PageHeader_headerLogoBckgrd__3ru9j"
        ></div>
        <a class="PageHeader_headerLogoLink__12oBR" href="/">
          <div
            class="PageHeader_headerLogo__1oRua"
          ></div>
        </a>
        <div class="PageHeader_headerMenuBtn__2OMGz">menu</div>
        <div class="SignInBtn_btnWrapper__1bvWm">
          <p>Connect</p>
        </div>
      </div>
      
    </>
  );
};

export default Header;

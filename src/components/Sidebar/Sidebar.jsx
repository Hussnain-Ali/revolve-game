import React from 'react'
import overviewLogo from '../../assets/image/overviewLogoW.9648c268.svg'
import liquidityLogo from '../../assets/image/liquidityLogo.ad04a675.svg'
import generateLogo from '../../assets/image/generateLogo.1fd86410.svg'
import invLogo from '../../assets/image/invLogo.b2a221a5.svg'
import gamelogo from '../../assets/image/gameLogo.066994aa.svg'
import analyticsLogo from '../../assets/image/analyticsLogo.398a7da1.svg'

const Sidebar = () => {
  return (
    <div
      class="SideBar_sideBarArea__1WWX7"
      style={{ backgroundColor: 'rgb(25, 25, 33)' }}
    >
      <div class="SideBar_sideBarWrapper__928Mk">
        <div class="SideBar_sideBarLine__2OI8-"></div>
        <div class="SideBar_navLinksWrapper__RT3C9">
          <a class="SideBar_sideBarLink__2umRc" href="/">
            <div class="SideBar_sideBarCurrentLink__2EmF8"></div>
            <img
              src={overviewLogo}
              alt="Sidebar icon"
              class="SideBar_sideBarLogo__2_o8z"
            />
            <p class="SideBar_sideBarLinkText__1MvIU">Overview</p>
          </a>
          <a class="SideBar_sideBarLink__2umRc" href="#">
            <img
              src={liquidityLogo}
              alt="Sidebar icon"
              class="SideBar_sideBarLogo__2_o8z"
            />
            <p class="SideBar_sideBarLinkText__1MvIU">Liquidity staking</p>
          </a>
          <a class="SideBar_sideBarLink__2umRc" href="#">
            <img
              src={generateLogo}
              alt="Sidebar icon"
              class="SideBar_sideBarLogo__2_o8z"
            />
            <p class="SideBar_sideBarLinkText__1MvIU">Generate assets</p>
          </a>
          <a class="SideBar_sideBarLink__2umRc" href="#">
            <img
              src={invLogo}
              alt="Sidebar icon"
              class="SideBar_sideBarLogo__2_o8z"
            />
            <p class="SideBar_sideBarLinkText__1MvIU">Inventory</p>
          </a>
          <a class="SideBar_sideBarLink__2umRc" href="#">
            <img
              src={gamelogo}
              alt="Sidebar icon"
              class="SideBar_sideBarLogo__2_o8z"
            />
            <p class="SideBar_sideBarLinkText__1MvIU">Play</p>
          </a>
          <a class="SideBar_sideBarLink__2umRc" href="#">
            <img
              src={analyticsLogo}
              alt="Sidebar icon"
              class="SideBar_sideBarLogo__2_o8z"
            />
            <p class="SideBar_sideBarLinkText__1MvIU">Analytics</p>
          </a>
        </div>
        <div class="SideBar_sideBarLowerLinkWrapper__3UCUG">
          <a href="#" class="SideBar_sideBarLowerLink__2AlsD">
            Whitepaper
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

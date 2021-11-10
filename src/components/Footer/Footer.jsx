import React from 'react'
import bar from '../../assets/image/p8l.99111bac.svg'
import blur from '../../assets/image/p8Blur.3b15ff8b.png'
import youtube from '../../assets/image/youtube.png'
import revolveofficail from '../../assets/image/p8tlgrm.abf96243.svg'
import gameremote from '../../assets/image/p8dis.7d6597b7.svg'
import videoplayer from '../../assets/image/p8yt.1a6fa6b0.svg'
import twitter from '../../assets/image/p8twit.adcc5189.svg'
import camera from '../../assets/image/p8med.45e5daec.svg'
import cat from '../../assets/image/p8git.608c989f.svg'

const Footer = () => {
  return (
    <div>
      <div class="EighthPart_outerWrapper__1wMZr">
        <img class="EighthPart_line__3peTD" src={bar}></img>
        <img class="EighthPart_blur__3JOhQ" src={blur}></img>
        <div class="EighthPart_logicWrapper__3ePw3">
          <p class="EighthPart_header__2JnVu">Subscribe to newsletter:</p>
          <div class="EighthPart_inputWrapper__3zYyH">
            <div class="EighthPart_inputSelfWrapper__1SHqC">
              <input
                type="email"
                placeholder="Your Email"
                class="EighthPart_input___TEJr"
                value=""
              />
            </div>
            <img class="EighthPart_inputBtn__36czv" src={youtube}></img>
          </div>
          <div class="EighthPart_cnWrapper__2PwH5">
            <a
              href="https://t.me/revolvegames_official"
              target="_blank"
              rel="noreferrer"
              class="EighthPart_cnItemWrapper__2pEyN"
            >
              <div class="EighthPart_cnItemInnerWrapper__2A7Nq">
                <div class="EighthPart_cnItemCircle__1eZQL">
                  <img
                    class="EighthPart_cnItemLogo__2B3fK"
                    src={revolveofficail}
                  ></img>
                </div>
              </div>
            </a>
            <a
              href="https://discord.gg/4HQu8pU4h9"
              target="_blank"
              rel="noreferrer"
              class="EighthPart_cnItemWrapper__2pEyN"
            >
              <div class="EighthPart_cnItemInnerWrapper__2A7Nq">
                <div class="EighthPart_cnItemCircle__1eZQL">
                  <img
                    class="EighthPart_cnItemLogo__2B3fK"
                    src={gameremote}
                  ></img>
                </div>
              </div>
            </a>
            <a
              href="https://www.youtube.com/channel/UCtzCRHCzUNSNtd9uwKw7nAw"
              target="_blank"
              rel="noreferrer"
              class="EighthPart_cnItemWrapper__2pEyN"
            >
              <div class="EighthPart_cnItemInnerWrapper__2A7Nq">
                <div class="EighthPart_cnItemCircle__1eZQL">
                  <img
                    class="EighthPart_cnItemLogo__2B3fK"
                    src={videoplayer}
                  ></img>
                </div>
              </div>
            </a>
            <a
              href="https://twitter.com/RevolveGamesio"
              target="_blank"
              rel="noreferrer"
              class="EighthPart_cnItemWrapper__2pEyN"
            >
              <div class="EighthPart_cnItemInnerWrapper__2A7Nq">
                <div class="EighthPart_cnItemCircle__1eZQL">
                  <img class="EighthPart_cnItemLogo__2B3fK" src={twitter}></img>
                </div>
              </div>
            </a>
            <a
              href="https://medium.com/revolve-games"
              target="_blank"
              rel="noreferrer"
              class="EighthPart_cnItemWrapper__2pEyN"
            >
              <div class="EighthPart_cnItemInnerWrapper__2A7Nq">
                <div class="EighthPart_cnItemCircle__1eZQL">
                  <img class="EighthPart_cnItemLogo__2B3fK" src={camera}></img>
                </div>
              </div>
            </a>
            <a
              href="https://revolvegames.io/#"
              target="_blank"
              rel="noreferrer"
              class="EighthPart_cnItemWrapper__2pEyN"
            >
              <div class="EighthPart_cnItemInnerWrapper__2A7Nq">
                <div class="EighthPart_cnItemCircle__1eZQL">
                  <img class="EighthPart_cnItemLogo__2B3fK" src={cat}></img>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

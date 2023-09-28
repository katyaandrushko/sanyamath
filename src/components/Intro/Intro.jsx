import React from 'react'
import { SocialIcon } from 'react-social-icons'
import './intro.scss'

const Intro = () => {
  return (
    <header className="intro">
      <div className="i-left">
        <div className="i-name">
          <h1 className="i-title">
            Підготую до <span>НМТ </span> на <span> 200</span> не виходячи з
            дому
          </h1>

          <div>
            <h5 className="i-desc">
              Отримай професійну підготовку від досвідченого викладача за
              найнижчою ціною.
            </h5>
          </div>
        </div>

        <div class="i-btn">
          <button
            className="button i-button"
            onClick={() => {
              document
                .getElementById('contact')
                .scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Дізнатися деталі курсу
          </button>
        </div>
        <div className="i-icons">
          <h3 className="i-text">Соцмережі:</h3>
          <SocialIcon
            className="icons"
            network="instagram"
            url="https://instagram.com/sanya.math?igshid=MWZjMTM2ODFkZg=="
            style={{ height: 60, width: 60 }}
          />
          <SocialIcon
            className="icons"
            network="youtube"
            url="https://youtube.com/@math_Alex_lenc?si=MUiNosL6KOstn1rX"
            style={{ height: 60, width: 60 }}
          />
          <SocialIcon
            className=""
            network="telegram"
            url="https://t.me/multimatem"
            style={{ height: 60, width: 60 }}
          />
        </div>
      </div>

      <div className="i-right">
        <div className="i-img">
          <img src="./assets/mainphoto1.png" alt="" className="i-photo" />
        </div>
      </div>
    </header>
  )
}

export default Intro

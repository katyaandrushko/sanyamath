import React from 'react'
import './aboutteacher.scss'

import Typewriter from 'typewriter-effect'
const AboutTeacher = () => {
  return (
    <section id="aboutteacher">
      <h1 className="title">Викладач</h1>

      <div className="aboutteach">
        <div className="left">
          <div className="bgimg">
            <img src="./assets/sanyaa.png" alt="" className="bggimg2" />
          </div>
        </div>

        <div className="right ">
          <h2 className="titlealex">Привіт! Мене звати Алекс Ленц 👋</h2>
          <div className="typewr">
            <Typewriter
              options={{
                strings: ['Пояснюю складне простою мовою!'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <div className="desc">
            <div className="a-desc">
              <h2> 👨‍💻 Я вже 5 років готую учнів до ЗНО та НМТ з математики </h2>
              <h2> 🧑‍🏫 За спеціальністю я інженер, закінчив КПІ в 2021 році</h2>
              <h2>
                💁‍♂ Сам я підготувався до ЗНО за рік на 193 бали і це після 2
                балів на ДПА в 9 класі
              </h2>
              <h2>
                🎉 За <span>5 років</span> випустив більше 400 учнів,{' '}
                <span>середній бал яких 180+</span>
              </h2>

              <h2 className="motiv">
                Я, як ніхто інший розумію, що таке готуватися з 0, саме тому
                впевнений, що зможу допомогти кожному учню 😎
              </h2>

              <div className="main-rect">
                <div className="rect">
                  <p className="a-title">5 років досвіду</p>
                </div>

                <div className="rect">
                  <p className="a-title">Середній бал учнів 180 +</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutTeacher

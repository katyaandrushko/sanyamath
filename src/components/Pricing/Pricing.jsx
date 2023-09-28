import React from 'react'
import './pricing.scss'

function Pricing() {
  return (
    <section id="pricing">
      <div>
        <h1 className="title">Наші тарифи </h1>
      </div>
      <div className="priicing">
        <div className="card-wrapper">
          <div className="card-header">
            <p className="emogip">🌟</p>
            <h2 className="title-p">СТАНДАРТ</h2>
          </div>
          <div className="card-detail1">
            <p>
              <span> 🖇️ </span>
              10-12 онлайн занять
            </p>
            <p>
              <span> 🖇️ </span>
              Записи занять
            </p>

            <p>
              <span> 🖇️ </span>
              Конспекти та робочі зошити
            </p>
            <p>
              <span> 🖇️ </span>
              Домашні завдання з підказками та рішенням
            </p>
            <p>
              <span> 🖇️ </span>
              Відеорозв’язки складних задач
            </p>
            <p>
              <span> 🖇️ </span>
              Особистий куратор
            </p>
            <p>
              <span> 🖇️ </span>
              Авторський варіант НМТ
            </p>
            <p>
              <span> 🖇️ </span>
              Телеграм бот для зберігання матеріалів
            </p>
            <p>
              <span> 🖇️ </span>
              Атмосферний чат з учнями
            </p>
          </div>

          <div className="card-price1">
            <p className="price"> 1090 грн</p>
          </div>

          <button
            class="button"
            onClick={() => {
              document
                .getElementById('contact')
                .scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Дізнатися деталі
          </button>

          <p className="text">
            ‼️ Залишай заявку, щоб <span>безкоштовно</span> отримати пробний
            урок з авторськими матеріалами та домашнім завданням
          </p>
        </div>

        <div className="card-wrapper">
          <div className="card-header">
            <p className="emogip">🔥</p>
            <h2 className="title-p">ВІП</h2>
          </div>
          <div className="card-detail">
            <p className="descc">
              <span> 🖇️ </span>
              10-12 онлайн занять
            </p>
            <p>
              <span> 🖇️ </span>
              Записи занять
            </p>

            <p>
              <span> 🖇️ </span>
              Конспекти та робочі зошити
            </p>
            <p>
              <span> 🖇️ </span>
              Домашні завдання з підказками та рішенням
            </p>
            <p>
              <span> 🖇️ </span>
              Відеорозв’язки складних задач
            </p>
            <p>
              <span> 🖇️ </span>
              Особистий куратор
            </p>
            <p>
              <span> 🖇️ </span>
              Авторський варіант НМТ
            </p>
            <p>
              <span> 🖇️ </span>
              Телеграм бот для зберігання матеріалів
            </p>
            <p>
              <span> 🖇️ </span>
              Атмосферний чат з учнями
            </p>
            <p className=" flex">
              <span> 🖇️ </span>
              <div className="font-medium px-1 md:text-base ">
                2 зум зустрічі з викладачем
              </div>
            </p>
            <p className=" flex">
              <span> 🖇️ </span>
              <div className="font-medium px-1 sm:max ">
                Особистий чат з викладачем
              </div>
            </p>
          </div>

          <div className="card-price">
            <p className="price">1690 грн</p>
          </div>

          <button
            class="button"
            onClick={() => {
              document
                .getElementById('contact')
                .scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Дізнатися деталі
          </button>

          <p className="text">
            ‼️ Залишай заявку, щоб <span>безкоштовно</span> отримати пробний
            урок з авторськими матеріалами та домашнім завданням
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing

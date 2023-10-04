import React from 'react'
import './testimonials.scss'

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h1 className="title">Відгуки учнів</h1>

      <div className="outer">
        <div className="inner">
          <div className="div1 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <img src="./assets/girl.png" alt="" />
              </div>
              <div className="detbox">
                <p className="name dark">Таня Ілютенко</p>
              </div>
            </div>
            <div className="review dark">
              <p>
                Математика 151 бал. Чесно сказати, якби не цей курс, я б склала
                десь на 100 максимум. Такі завдання, шо просто так не вгадаєш і
                не додумаєшся сам. А школу я закінчила ще в 2015, та й то нічого
                не знала з математики😅 Дуже вдячна❤️ програма дуже добре
                продумана, всі конспекти під носом, і найбільше подобається, як
                Алекс пояснює, в школі було тупо. Я зараз вчила все заново, а не
                згадувала. Думаю, якби в мене було більше вільного часу, щоб
                займатись, було б набагато краще. А так аж соромно казати бал😅
                але я ж кажу, без цього я б не здала 100% А так маю прохідний
                бал на «Медицину» Дякуююю
              </p>
            </div>
          </div>

          <div className="div2 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <img src="./assets/testimon1.jpg" />
              </div>
              <div className="detbox">
                <p className="name dark">Мирослава</p>
              </div>
            </div>
            <div className="review dark">
              <p>
                Загалом супер,як і самі заняття,так і домашка,завжди усе
                зрозуміло,коли питання з'являлися їх швидко змушували
                зникнути,бо пояснення тут як тут,дуже рада була готуватися
                разом,бо сама б і на 130 певне не написала
              </p>
            </div>
          </div>

          <div className="div3 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <img src="./assets/tstimon2.jpg" />
              </div>
              <div className="detbox">
                <p className="name dark">@Sova_mar</p>
              </div>
            </div>
            <div className="review dark">
              <p>
                Добрий вечір! Я склала НМТ на 171 з математики, і неймовірно
                рада результату! Ви з Алексом витягнули мене зі 107😅 на той
                результат, який сьогодні є🥹 Дякую велике❤️
              </p>
            </div>
          </div>

          <div className="div4 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <img src="./assets/tstimon2.jpg" />
              </div>
              <div className="detbox">
                <p className="name dark ">@Sova_mar</p>
              </div>
            </div>
            <div className="review dark">
              <p>
                Хочу подякувати за курс. Завдяки ньому я почала навіть любити
                математику. Матеріал викладений дуже цікаво та зрозуміло,
                куратор також крута. Хоч я й дивлюся всі уроки в записі, але це
                реально дуже-дуже крутою. Дякуємо Вам за вашу роботу❤️
                <div className="hid dark">
                  Добрий вечір! Я склала НМТ на 171 з математики, і неймовірно
                  рада результату! Ви з Алексом витягнули мене зі 107😅 на той
                  результат, який сьогодні є🥹 Дякую велике❤️
                </div>
              </p>
            </div>
          </div>

          <div className="div5 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <img src="./assets/testimon4.jpg" />
              </div>
              <div className="detbox">
                <p className="name ">@frolikpower</p>
              </div>
            </div>

            <div className="review">
              <p>
                Алексе, ти крутий🚀! Дякую і тобі за старання заради нас,
                майбутніх абітурієнтів 🧑‍🎓 Хочу сказати просто шалено велике
                ДЯКУЮ за всю ту підтримку під час навчання на курсі🥺💔💔!!!!
                <br /> <br />
                Це все точно не було марним, і це, по великому рахунку, ваша з
                Алексом величезна робота, завдяки якій навчання стає максимально
                комфортним💔 Я буду сумувати за нашими уроками і за вами з
                Алексом, то були дуже круті та фанові часи з вами і моїми
                одногрупниками😭😭😭😭
              </p>
            </div>
          </div>

          <div className="div6 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <img src="./assets/testimon6.jpg" alt="" />
              </div>
              <div className="detbox">
                <p className="name dark">Ельміра</p>
              </div>
            </div>
            <div className="review dark">
              <p>
                Привіт! Дуже дякую😘 Я дуже вдячна за вашу спільну роботу над
                цим курсом. Це щось неймовірно. Така крута система навчання, я
                просто в захваті😍
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

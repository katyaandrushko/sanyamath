import React from 'react'
import './learning.scss'

function Learning() {
  return (
    <section id="learning">
      <div>
        <h1 className="title">Як проходить навчання</h1>
      </div>

      <div className="aboutlearn">
        <div className="lesson-wrapper">
          <div className="lessons">
            <div className="lesson-header">
              <h1 className="titlelesson">12 занять на місяць</h1>
            </div>
            <div className="lesson-detail">
              <p className="p-lesson">
                12 онлайн занять на місяць по 1,5 години, де ми поступово
                пройдемо весь матеріал
              </p>
            </div>
            <div className="emoji">
              <span className="emogi">👩‍💻</span>
            </div>
          </div>
        </div>

        <div className="lesson-wrapper">
          <div className="lessons">
            <div className="lesson-header">
              <h1 className="titlelesson">Записи всіх занять</h1>
            </div>
            <div className="lesson-detail">
              <p className="p-lesson">
                Займайся у будь-який зручний тобі час, адже записи будуть
                доступні до самого іспиту
              </p>
            </div>
            <div className="emoji">
              <span className="emogi">💻</span>
            </div>
          </div>
        </div>

        <div className="lesson-wrapper">
          <div className="lessons">
            <div className="lesson-header">
              <h1 className="titlelesson">Авторські матеріали</h1>
            </div>
            <div className="lesson-detail">
              <p className="p-lesson">
                Ілюстровані конспекти та робочі зошити до кожного заняття
              </p>
            </div>
            <div className="emoji">
              <span className="emogi">📚</span>
            </div>
          </div>
        </div>

        <div className="lesson-wrapper">
          <div className="lessons">
            <div className="lesson-header">
              <h1 className="titlelesson">Домашнє завдання після уроку</h1>
            </div>
            <div className="lesson-detail">
              <p className="p-lesson">
                Для закріплення матеріалу ви отримаєте домашні завдання з
                підказками та розв’язками
              </p>
            </div>
            <div className="emoji">
              <span className="emogi">📖</span>
            </div>
          </div>
        </div>

        <div className="lesson-wrapper">
          <div className="lessons">
            <div className="lesson-header">
              <h1 className="titlelesson">Відеорозвʼязки найважчих завдань</h1>
            </div>
            <div className="lesson-detail">
              <p className="p-lesson">
                До найскладніших задач домашнього завдання ви отримаєте
                відеорозв’язки
              </p>
            </div>
            <div className="emoji">
              <span className="emogi">📲</span>
            </div>
          </div>
        </div>

        <div className="lesson-wrapper">
          <div className="lessons">
            <div className="lesson-header">
              <h1 className="titlelesson">Особистий куратор</h1>
            </div>
            <div className="lesson-detail">
              <p className="p-lesson">
                Людина, яка 24/7 на зв’язку, відповідає на всі питання та
                допомагає з практикою
              </p>
            </div>
            <div className="emoji">
              <span className="emogi">👩‍🎓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Learning

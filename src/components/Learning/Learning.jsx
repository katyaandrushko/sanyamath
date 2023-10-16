import React from 'react'
import { motion } from 'framer-motion'
import './learning.scss'

const learningItems = [
  {
    title: '12 занять на місяць',
    description:
      '12 онлайн занять на місяць по 1,5 години, де ми поступово пройдемо весь матеріал',
    emoji: '👩‍💻',
  },
  {
    title: 'Записи всіх занять',
    description:
      'Займайся у будь-який зручний тобі час, адже записи будуть доступні до самого іспиту',
    emoji: '💻',
  },
  {
    title: 'Авторські матеріали',
    description: 'Ілюстровані конспекти та робочі зошити до кожного заняття',
    emoji: '📚',
  },
  {
    title: 'Домашнє завдання після уроку',
    description:
      'Для закріплення матеріалу ви отримаєте домашні завдання з підказками та розв’язками',
    emoji: '📖',
  },
  {
    title: 'Відеорозвʼязки найважчих завдань',
    description:
      'До найскладніших задач домашнього завдання ви отримаєте відеорозв’язки',
    emoji: '📲',
  },
  {
    title: 'Особистий куратор',
    description:
      'Людина, яка 24/7 на зв’язку, відповідає на всі питання та допомагає з практикою',
    emoji: '👩‍🎓',
  },
]

function Learning() {
  return (
    <section id="learning">
      <div>
        <h1 className="title">Як проходить навчання</h1>
      </div>

      <div className="aboutlearn">
        {learningItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -70 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, type: 'winter' }}
            viewport={{ once: true }}
          >
            <div className="lesson-wrapper">
              <div className="lessons">
                <div className="lesson-header">
                  <h1 className="titlelesson">{item.title}</h1>
                </div>
                <div className="lesson-detail">
                  <p className="p-lesson">{item.description}</p>
                </div>
                <div className="emoji">
                  <span className="emogi">{item.emoji}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Learning

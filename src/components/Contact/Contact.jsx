import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './contact.scss'

// npm i @emailjs/browser
function Contact() {
  const [value, setValue] = useState()
  const form = useRef()
  const [popupMessage, setPopupMessage] = useState('')
  const [showPopup, setShowPopup] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    emailjs
      .sendForm(
        'service_oly5gjk',
        'template_h8cdhwh',
        form.current,
        '8v6lulg2vtwc0EPiD'
      )
      .then(
        (result) => {
          console.log(result.text)
          console.log('message sent')
          setPopupMessage(
            'Дякуємо за заявку, ми зателефонуємо через 15 хвилин!'
          )
          setShowPopup(true)
          form.current.reset()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  const closePopup = () => {
    setShowPopup(false)
  }

  // const contactForm = document.getElementById('form')
  // const popup = document.getElementById('popup')
  // const popupMessage = document.getElementById('popup-message')
  // const closePopup = document.getElementById('close-popup')
  // const form = useRef()

  // const sendEmail = (e) => {
  //   e.preventDefault()

  //   emailjs
  //     .sendForm(
  //       'service_uc8p8pe',
  //       'template_5qyrsbc',
  //       form.current,
  //       'yzFIv3-4kTUuiUtG1'
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text)
  //         console.log('message sent')
  //       },
  //       (error) => {
  //         console.log(error.text)
  //       }
  //     )
  // }

  // contactForm.addEventListener('submit', function (e) {
  //   e.preventDefault()

  //   const fullName = document.getElementById('full-name').value
  //   const email = document.getElementById('email').value
  //   const phone = document.getElementById('phone').value

  //   if (!validateForm(fullName, email, phone)) {
  //     return
  //   }

  //   setTimeout(() => {
  //     showPopup('Form submitted successfully')
  //     contactForm.reset()
  //   }, 1000)
  // })

  function validateForm() {
    const fullName = document.getElementById('user_name').value
    const email = document.getElementById('user_email').value
    const phone = document.getElementById('user_number').value

    const nameError = document.getElementById('name-error')
    const emailError = document.getElementById('email-error')
    const numberError = document.getElementById('number-error')
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^(\+380|0)[1-9]\d{8}$/

    if (fullName.trim() === '') {
      nameError.textContent = 'Please enter your full name'
      return false
    } else {
      nameError.textContent = ''
    }

    if (!email.match(emailRegex)) {
      emailError.textContent =
        'Будь ласка, введіть коректну адресу типу name@gmail.com'
      return false
    } else {
      emailError.textContent = ''
    }

    if (phone.trim(phoneRegex) === '') {
      numberError.textContent =
        'Будь ласка, введіть коректний номер телефону типу +380'
      return false
    } else {
      numberError.textContent = ''
    }

    return true
  }

  // function showPopup(message) {
  //   popupMessage.textContent = message
  //   popup.style.display = 'block'
  // }

  // window.addEventListener('DOMContentLoaded', (event) => {
  //   closePopup.addEventListener('click', function () {
  //     popup.style.display = 'none'
  //   })
  // })

  return (
    <section id="contact">
      <h1 className="title">Залишай заявку та отримуй безкоштовний урок!</h1>

      <div className="rectcontact">
        <div className="cc-left">
          <div className="c-left">
            <div className="c-main">
              <h1 class="cc-title">
                Залишайте заявку та починайте підготовку <span>вже зараз!</span>
              </h1>

              <form ref={form} onSubmit={sendEmail} id="form">
                {/* <label>Ім`я та прізвище</label> */}
                <p class="error" id="name-error"></p>
                <p class="error" id="number-error"></p>
                <p class="error" id="email-error"></p>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  placeholder="Ваше ім'я"
                  required
                />
                {/* <label>Номер телефону</label> */}

                <input
                  type="number"
                  name="user_number"
                  id="user_number"
                  maxLength={10}
                  placeholder="Номер телефону"
                  required
                />
                {/* <input
                  type="text"
                  name="user_email"
                  id="user_email"
                  placeholder="Електронна пошта" 
                  required
                /> */}
                {/* <input type="submit" value="Send" className="btn" /> */}

                <button className="btn c-btn" type="submit">
                  Надіслати заявку
                </button>
              </form>
            </div>

            <div className={`popup${showPopup ? '-show' : ''}`} id="popup">
              <div className="popup-content">
                <span onClick={closePopup}>&times;</span>
                <p>{popupMessage}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="c-right">
          <img
            src="./assets/security.svg"
            alt=""
            className="c-img md:hidden sm:hidden"
          />
        </div>
      </div>
    </section>
  )
}

export default Contact

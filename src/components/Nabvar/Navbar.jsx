import React from 'react'
import './navbar.scss'

const Navbar = () => {
  return (
    <nav className="n-wrapper">
      <div className="n-left">
        <div className="n-name">sanya.math</div>
      </div>

      <div className="n-right">
        <div className="n-list">
          <ul class="n-ulist">
            <li className="n-llist">Головна</li>
            <li className="n-llist">Навчання</li>
            <li className="n-llist">Тарифи</li>
            <li className="n-llist">Викладач</li>
            <li className="n-llist">Відгуки</li>
          </ul>
        </div>

        <button className="button n-btn" id="contact">
          Зв`язатися
        </button>
      </div>
    </nav>
  )
}

export default Navbar

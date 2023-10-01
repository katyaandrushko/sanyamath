import { useState } from 'react'
import React from 'react'
import './navig.scss'

function Navig() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <>
      {/* сам вигляд бургера на телефоні */}
      <section className="MOBILE-MENU flex lg:hidden justify-between ">
        <div
          className="HAMBURGER-ICON space-y-2"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          {/* самі полосочки для бургера */}
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        </div>

        <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
          {/* якщо натиснути на бургер як все буде виглядати */}
          <div
            className="absolute top-1 right-1 px-8 py-8 "
            onClick={() => setIsNavOpen(false)}
          >
            {/* показує хрестик коли відкривається гамбургер щоб його закрити
             */}
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          {/* як виглядає текст у бургері
           */}
          <ul className="flex flex-col items-center justify-between min-h-[200px] ">
            <li className="border-b border-gray-400 my-8 uppercase hover:text-yellow-600">
              <a href="/">Головна</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="#learning">Навчання</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="#pricing">Тарифи</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="#aboutteacher">Викладач</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="#testimonials">Відгуки</a>
            </li>
          </ul>
        </div>
      </section>
      {/* на великому екрані що робиться з текстом
       */}
      <ul className="DESKMTOP-MENU hidden space-x-8 lg:flex">
        <li className=" hover:text-yellow-600">
          <a href="/">Головна</a>
        </li>
        <li className=" hover:text-yellow-600">
          <a href="#learning">Навчання</a>
        </li>
        <li className=" hover:text-yellow-600">
          <a href="#pricing">Тарифи</a>
        </li>
        <li className=" hover:text-yellow-600">
          <a href="#aboutteacher">Викладач</a>
        </li>
        <li className=" hover:text-yellow-600">
          <a href="#testimonials">Відгуки</a>
        </li>
      </ul>
      {/* <style>
        {`
        .hideMenuNav {
            display: none;
        }
        .showMenuNav {
            display: block;
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            background: white;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }`}
      </style> */}
    </>
  )
}

export default Navig

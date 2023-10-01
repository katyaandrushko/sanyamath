import { useEffect, useState } from 'react'
import React from 'react'
import Navig from './Navig/Navig'
import './hamburger.scss'

function getWindowWidth() {
  const { innerWidth: width } = window
  return width
}

function useWidthDimensions() {
  const [width, setWindowDimensions] = useState(getWindowWidth())

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowWidth())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width
}

function Hamburger() {
  const width = useWidthDimensions()

  return (
    <>
      {width > 1024 ? (
        <nav className=" flex items-center justify-between py-8 h-[10%] navig">
          <a href="/">
            <h1 className="font-bold">sanya.math</h1>
          </a>
          <Navig />
          <button
            className="button n-btn"
            onClick={() => {
              document
                .getElementById('contact')
                .scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Зв`язатися
          </button>
        </nav>
      ) : (
        <nav className="flex items-center justify-between py-8 h-[10%] ">
          <a href="/">
            <h1 className="font-bold logo">sanya.math</h1>
          </a>
          <button
            className="button n-btn"
            onClick={() => {
              document
                .getElementById('contact')
                .scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Зв`язатися
          </button>
          <Navig />
        </nav>
      )}
    </>
  )
}

export default Hamburger

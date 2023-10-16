import React, { useState, useEffect } from 'react'
import './leadmagnet.scss'

function LeadMagnet() {
  const [showWidget, setShowWidget] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWidget(true)
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const closeWidget = () => {
    setShowWidget(false)
  }

  return (
    showWidget && (
      <div className="leadmagnet">
        <button onClick={closeWidget} className="close-button">
          х
        </button>
        <div className="content">
          <span className="text-lead">
            Отримайте безкоштовний урок з авторськими матеріалами!
          </span>

          <a href="#contact" className="btn">
            <button className="button">Отримати</button>
          </a>
        </div>
      </div>
    )
  )
}

export default LeadMagnet

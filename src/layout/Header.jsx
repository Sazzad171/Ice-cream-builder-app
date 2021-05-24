import React from 'react'

import logo from '../images/logo.svg'
import reactLogo from '../images/react.svg'

export default function Header() {
  return (
    <header>
      <div className="container react">
        <div>
          <img className="logo" src={ logo } alt="Logo" />
        </div>
        <div className="textRight">
          <img src={ reactLogo } alt="React" className="reactLogo" />
          <strong>React</strong>
        </div>
      </div>
    </header>
  )
}

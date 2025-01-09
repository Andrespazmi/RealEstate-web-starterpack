import React from 'react'

const Header = () => {
  return (
     <section className="h-wrapper">
      <div className="h-container">

          <img src="./logo.png" alt="logo" width={100} />
          
          <div className="h-menu">
            <a href="#">
              Inicio
            </a>
            <a href="">
              2
            </a>
            <a href="">
              3
            </a>
            <a href="">
              4
            </a>
            <a href="">
              5
            </a>
          </div>
      </div>
    </section>
  )
}

export default Header

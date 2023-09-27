import React from 'react'
import Backend from './Backend'
import Frontend from './Frontend'
import "./skills.css"

const Skills = () => {
  return (
    <section className="skill section" id="skills">
      <h2 className="section__title">Habilidades</h2>
      <span className="section__subtitle">Mi nivel técnico</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  )
}

export default Skills
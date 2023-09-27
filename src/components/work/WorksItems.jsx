import React from 'react'

const WorksItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a href={item.url} target="_blank" className="work__button">
        Ver Proyecto <i class='bx bxs-chevrons-right work__button-icon'></i>
      </a>
    </div>
  )
}

export default WorksItems
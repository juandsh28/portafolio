import React, { useEffect, useState } from 'react'
import { projectsData } from './Data'
import { projectsNav } from './Data'
import WorksItems from './WorksItems'

const Works = () => {
  const [item, setItem] = useState({name: 'todos'});
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'todos') {
      setProjects(projectsData);
    }else {
      const newProjects = projectsData.filter((projects) => {
        return projects.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({name: e.target.textContent.toLowerCase()});
    setActive(index);
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span onClick={(e) => {handleClick(e, index);}} 
              className={`${active === index ? 'active-work' : ''} work__item`} 
              key={index}>
              {item.name}
            </span>
          )      
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorksItems item={item} key={item.id} />
        })}
      </div>
    </div>
  )
}

export default Works
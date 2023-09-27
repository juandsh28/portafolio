import React from 'react'
import "./scrollup.css"

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    // when the scroll ins higher than 560 viewport heingh, add the show-scroll class to a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });

  return (
    <a href="#" className="scrollup">
      <i class='bx bx-chevrons-up scrollup__icon'></i>
    </a>
  )
}

export default ScrollUp
import React from 'react';

const ScrollToElementById = (props) => {
  const scrollToElement = () => {
    const el = document.getElementById(props.id);
    if(el !== null) {
      el.scrollIntoView({behavior: 'smooth'})
    }
  };

  return (
    <button onClick={scrollToElement}>Scroll to element</button>
  )
};

export default ScrollToElementById;
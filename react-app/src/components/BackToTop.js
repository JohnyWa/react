import React from 'react';

const BackToTop = () => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  };

  return (
    <button onClick={backToTop}>Back to top</button>
  )
};

export default BackToTop;
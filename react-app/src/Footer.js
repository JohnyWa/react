import React from 'react';
import PropTypes from 'prop-types';

function Footer(
    {
      text,
      count,
      children,
      age,
      loading
    }
  ) {

  // if(loading) {
  //   return (
  //     <h2>Loading...</h2>
  //   )
  // }
  const isLoadingStatus = loading ? 'LOADING' : 'NE';

  return(
    <div className="footer">
      {loading && <h2>Loading...</h2>}
      {text}: {count}
      <h3>{age}</h3>
      <h2>{children}</h2>
      <p>------</p>
      {loading ? (
        <h2>LOADING</h2>
      ) : (
        <h2>NE</h2>
      )}
      <p>------</p>
      <h2>{isLoadingStatus}</h2>
      <p>------</p>
    </div>
  )
}

Footer.defaultProps = {
  text: 'Default text',
  loading: false
};

Footer.propTypes = {
  text: PropTypes.string,
  count: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
  loading: PropTypes.bool
};

export default Footer;

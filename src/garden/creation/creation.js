import React from 'react';
import '../garden.scss';

/**
 * Base creation entity style
 * @param type
 * @returns {JSX.Element}
 * @constructor
 */

const Creation = ({ type }) => {
  return (
    <div className={`creation ${type}`}></div>
  )
}

export default Creation;
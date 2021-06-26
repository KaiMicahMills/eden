import React from 'react';
import styles from '../garden.scss';

/**
 * Base creation entity style
 * @param type
 * @returns {JSX.Element}
 * @constructor
 */

const Creation = ({ type }) => {
  return (
    <div className={styles[type]}></div>
  )
}

export default Creation;
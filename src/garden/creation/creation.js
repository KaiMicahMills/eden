import React from 'react';
import '../garden.scss';

/**
 * Base creation entity style
 * @param type
 * @returns {JSX.Element}
 * @constructor
 */

const Creation = ({ type }) => {

  const skinTones = [
    '#F7D4A6',
    '#D9A665',
    '#895323',
  ]

  const range = (min, max) => Math.random() * (max - min) + min;

  if (type === "human") {
    return (
      <div className={`creation ${type}`} style={{ opacity: range(0.95, 1), backgroundColor: skinTones[Math.floor(Math.random()*skinTones.length)] }}></div>
    )
  } else {
    return (
      <div className={`creation ${type}`} style={{ opacity: range(0.95, 1) }}></div>
    )
  }
}

export default Creation;
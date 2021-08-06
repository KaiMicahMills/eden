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

export const FOV = (radius, position, everything) => {
  let vision = []

  for(let i = 0; i <= radius; i++){

    if(i === 0) {

      let baseline = everything[position - radius, position + radius];

      vision.push(baseline);

    } else {

      let up = everything[position - ((i * 30) + (radius - i)), position - ((i * 30) - (radius - i))];
      let down = everything[position + ((i * 30) - (radius - i)), position + ((i * 30) + (radius - i))];

      vision.push(up);
      vision.push(down);
    }

  }

  return vision;
}

export default Creation;
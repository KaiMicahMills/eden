import React from 'react';
import '../garden.scss';

/**
 * Base creation entity style
 * @param type
 * @returns {JSX.Element}
 * @constructor
 */

const Creation = ({ type, index }) => {

  const skinTones = [
    '#F7D4A6',
    '#D9A665',
    '#895323',
  ]

  const range = (min, max) => Math.random() * (max - min) + min;

  if (type === "human") {
    return (
      <div className={`creation ${type}`} style={{ opacity: range(0.95, 1), backgroundColor: skinTones[Math.floor(Math.random()*skinTones.length)] }}>
        <p>{index}</p>
      </div>
    )
  } else {
    return (
      <div className={`creation ${type}`} style={{ opacity: range(0.95, 1) }}>
        <p>{index}</p>
      </div>
    )
  }
}

export const FOV = (radius, position, everything, maxCreation) => {
  let vision = [];

  for(let i = 0; i <= radius; i++){

    if(i === 0) {

      let baseline = everything.slice(position - radius, position + radius);

      vision = [...vision, ...baseline];

    } else {

      let up = everything.slice(
        position - ((i * ((maxCreation + 1) / 30)) + (radius - i)),
        position - ((i * ((maxCreation + 1) / 30)) - (radius - i)));
      let down = everything.slice(
        position + ((i * ((maxCreation + 1) / 30)) - (radius - i)),
        position + ((i * ((maxCreation + 1) / 30)) + (radius - i)));

      vision = [...vision, ...up, ...down];
    }

  }

  return vision;
}

export default Creation;
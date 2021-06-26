import React, { useState } from 'react';
import Genesis from "./genesis/genesis";

/**
 * EDEN
 * Authors:
 * Kai Micah Mills
 * Justin Benz
 *
 * @returns {JSX.Element}
 * @constructor
 */

const Garden = () => {

  const [everything, setEverything] = useState({

  });

  return (
    <>
      <Genesis everything={everything} setEverything={setEverything} />
      <div></div>
    </>
  );
};

export default Garden;

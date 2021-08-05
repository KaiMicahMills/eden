import React, { useState } from 'react';
import Genesis from "./genesis/genesis";
import './garden.scss';
import Creation from "./creation/creation";

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

  const [everything, setEverything] = useState([]);

  return (
    <>
      <Genesis setEverything={setEverything} />
      <div className="garden">
        {
          everything.map((creation) => {
            return (
              <Creation type={creation} key={Math.random()} />
            )
          })
        }
      </div>
    </>
  );
};

export default Garden;

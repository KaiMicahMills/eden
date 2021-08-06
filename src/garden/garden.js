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
  const [timesGenerated, setTimesGenerated] = useState(0);

  return (
    <div className="space">
      <Genesis everything={everything} setEverything={setEverything} timesGenerated={timesGenerated} />
      <h1 className="title">EDEN</h1>
      <div className="garden">
        {
          everything.map((creation) => {
            return (
              <Creation type={creation} key={Math.random()} />
            )
          })
        }
      </div>
      <button className="generate" onClick={() => setTimesGenerated(timesGenerated + 1)}>Generate</button>
    </div>
  );
};

export default Garden;

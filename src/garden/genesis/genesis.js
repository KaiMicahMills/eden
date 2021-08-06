import { useEffect } from 'react';
import { FOV } from '../creation/creation';

/**
 * Genesis
 * The lifecycle of eden
 * @constructor
 */

const Genesis = ({ everything, setEverything, timesGenerated }) => {

  const maxCreation = 899;

  const creationTypes = [
    {
      id: "apple",
      probability: 1,
    },
    {
      id: "water",
      probability: 1,
    }
  ];

  const generateWorld = () => {
    const everything = [];

    for (let i = 0; i <= maxCreation; i++) {
      /**
       * Fallback of grass
       * @type {string}
       */
      let newCreation = "grass";

      if (i === 434 || i === 465) {
        /**
         * Spawn humans in center
         */
        newCreation = "human";
      } else {
        /**
         * Run through probability of creations
         */
        creationTypes.forEach((type, index) => {
          let prob = type.probability;

          /**
           * Generate bodies of water
           */
          if (type.id === "water") {
            if (everything[i - 1] === "water" || everything[i - 30] === "water") {
              prob = 50;
            }
          }

          /**
           * Generate creation
           * @type {number}
           */
          const roll = Math.random() * 100;
          if (roll <= prob) newCreation = type.id;
        })
      }

      /**
       * Add to everything array
       */
      everything.push(newCreation);
      /**
       * Update state if last run
       */
      if (everything.length === maxCreation) setEverything(everything);
    }
  }

  /**
   *
   */
  useEffect(() => {
    setInterval(() => {
      everything.forEach((type, index) => {
        if(type === "human") {
          console.log(FOV(5, index, everything, maxCreation));
        }
      })
      
    }, 1000)
  }, [everything])

  /**
   * Generate the world
   */
  useEffect(() => {
    generateWorld();
  }, [timesGenerated])
  return null;
}

export default Genesis;
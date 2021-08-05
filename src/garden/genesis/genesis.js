import { useEffect } from 'react';

/**
 * Genesis
 * The lifecycle of eden
 * @constructor
 */

const Genesis = ({ setEverything }) => {

  const creationTypes = [
    {
      id: "apple",
      probability: 1,
    },
  ];

  const generateWorld = () => {
    const maxCreation = 899;
    const everything = [];

    for (let i = 0; i <= maxCreation; i++) {
      let newCreation = "grass";

      if (i === 434 || i === 465) {
        newCreation = "human";
      } else {
        creationTypes.forEach((type, index) => {

          const roll = Math.random() * 100;
          if (roll <= type.probability) newCreation = type.id;

        })
      }

      everything.push(newCreation);
      if (everything.length === maxCreation) setEverything(everything);

    }
  }

  useEffect(() => {
    generateWorld();

    /**
    setInterval(() => {
    }, 1000);
    */

  }, [])

  return null;
}

export default Genesis;
import { useEffect } from 'react';

/**
 * Genesis
 * The lifecycle of eden
 * @constructor
 */

const Genesis = ({ everything, setEverything }) => {

  useEffect(() => {

    setTimeout(() => {
      /**
       * Algorithm for all entities every 1 second
       * for each thru everything
       * check Sins for individual entity
       * update everything after all new data gathered (don't set state until all are done)
       */
    }, 1000);
  }, [])
}

export default Genesis;
import React from 'react';
import Creation from "../creation";

/**
 * Human Creation
 * @param health
 * @param hunger
 * @param sex
 * @param love
 * @returns {JSX.Element}
 * @constructor
 */

const Human = ({ health, hunger, sex, love }) => {

  return (
    <Creation type="human" />
  )
}

export default Human;
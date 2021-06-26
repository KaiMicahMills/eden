import React from 'react';
import ReactDOM from 'react-dom';
import Garden from './garden/garden';

/**
 * Index renderer
 */

ReactDOM.render(
  <React.StrictMode>
    <Garden />
  </React.StrictMode>,
  document.getElementById('root')
);

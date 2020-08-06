import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './routes/App';

ReactDOM.render(
  // Se encapsula nuestra App dentro de un provider, porque nada fuera del provider podrá acceder al store.
  // El <Provider /> hace que la store de Redux esté disponible para cualquier componente anidado que se haya incluido en la función connect().
  <Provider>
    <App />
  </Provider>,
  document.getElementById('app')
);

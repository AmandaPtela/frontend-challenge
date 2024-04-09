import React from 'react'
import ReactDOM from 'react-dom';
import App from './App'

import './index.css'
import {Provider} from './Context/Context';

const AppContainer = () => {
  return (
    <React.StrictMode>
      <Provider>
        <App />
      </Provider>
    </React.StrictMode>
  )
}

ReactDOM.render(<AppContainer />, document.getElementById('szb-app-root'))

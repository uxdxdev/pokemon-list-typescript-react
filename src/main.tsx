import 'bulma/css/bulma.min.css'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import Pokemon from './Pokemon'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.Fragment>
    <Pokemon />
  </React.Fragment>
)

import React from 'react'
import ReactDOM from 'react-dom'
import App from '../app.js'

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('app')

  if (reactElement) {
    ReactDOM.render(
      <App/>,
      reactElement
    )
  }
})

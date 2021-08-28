import React from 'react'
import ReactDom from 'react-dom'
let element=React.createElement(
  'div',
  { id: 'main', className: 'container' },
  'Hello World!!!')
  ReactDom.render(element,document.getElementById('root'))
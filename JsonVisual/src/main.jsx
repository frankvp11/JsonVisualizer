import React from 'react'
import Tree from 'react-d3-tree'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import OrgChartTree from './treemaker'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <OrgChartTree/>
    <App/>
  </React.StrictMode>,
)

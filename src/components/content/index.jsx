import React from 'react'
import Drawer from './drawer'
import ProjectWindow from './projectWindow'

function Content() {

  return (

    <div style={containerStyle}>
      <Drawer/>
      <ProjectWindow/>
    </div>
  )
}

const containerStyle = {
  display: 'flex', 
};

export default Content;
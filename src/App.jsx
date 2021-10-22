import React, { useState } from 'react'
import Header from './components/Header'
import LeftSidebar from './components/LeftSidebar'
import MainBody from './components/MainBody'
import RightSidebar from './components/RightSidebar'
import './App.css'
import styled from 'styled-components'

const StyledBody = styled.div`
  display: flex;
  height: 100vh;
`

const App = () => {
  return (
    <div>
      <Header />
      <StyledBody>
        <LeftSidebar />
        <MainBody />
        <RightSidebar />
      </StyledBody>
    </div>
  );
}

export default App;

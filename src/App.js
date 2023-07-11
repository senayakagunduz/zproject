import React from 'react'
import HomePage from './pages/user/home-page'
import UserTemplate from './templates/user-template'

const App = () => {
  return (
    <div>
      <UserTemplate>
        <HomePage/>
      </UserTemplate>
    </div>
  )
}

export default App
import React from 'react'
import HomePage from './pages/user/home-page'
import UserTemplate from './templates/user-template'
import CustomRoutes from './router/custom-routers.js'

const App = () => {
  return (
    <div>
      <CustomRoutes/>
    </div>
  )
}

export default App
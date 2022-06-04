import { useState } from 'react'
import './App.scss'
import { useUsersQuery } from './redux/services/api'

function App() {
  const { isLoading, data } = useUsersQuery('caarlosdamian')


  console.log(data)
  

  return (
    <div className="App">

    </div>
  )
}

export default App

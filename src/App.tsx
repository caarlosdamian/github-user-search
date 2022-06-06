import { useState } from 'react'
import { useSelector } from 'react-redux'
import './App.scss'
import { Top } from './components/Top/Top'
import { Selector } from './interfaces/interfaces'
import { useUsersQuery } from './redux/services/api'

function App() {
  const { isLoading, data } = useUsersQuery('caarlosdamian')

const {light} = useSelector((state:Selector)=>state.theme)
  console.log(light);

  return (
    <div className={`App ${light?'light':'dark'}`}>
      <Top/>
    </div>
  )
}

export default App

import { NavLink } from 'react-router-dom'
import './App.css'
import RoutesController from './routes'
import Header from './components/header/Header'

function App() {
  return (
    <>
      <Header />
      <RoutesController />
    </>
  )
}

export default App

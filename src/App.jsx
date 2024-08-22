import { useLocation } from 'react-router-dom'
import './App.css'
import RoutesController from './routes'
import Header from './components/header/Header'

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/login' && <Header />}
      <RoutesController />
    </>
  )
}

export default App

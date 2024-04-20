
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import About from './components/pages/About'
import Signin from './components/pages/Signin.jsx'
import Header from './components/Header'
import Home from './components/pages/Home.jsx'
function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes> 
      <Route path='/' element ={<Home />} />
        <Route path='/about' element ={<About />} />
        <Route path='/sign-in' element ={<Signin />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

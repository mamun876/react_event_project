import { Outlet } from 'react-router-dom'
import './App.css'

import Footer from './component/Footer'
import Header from './component/Header'

function App() {
return (
    <>
  
    <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}
export default App

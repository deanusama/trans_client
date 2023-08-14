import Landing from "./pages/Landing"
import Login from "./pages/authentication/Login"
import Register from "./pages/authentication/Register"

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route exact path='/' element={<Landing />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import { Add_member, Home, Login, Register, Update_member } from './index'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Add_member' element={<Add_member/>}/>
      <Route path='/Update_member/:id' element={<Update_member/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
    </Routes>
    </>
  )
}

export default App
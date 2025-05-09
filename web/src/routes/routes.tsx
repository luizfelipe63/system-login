import { Routes, Route } from 'react-router'
import { Register } from '../pages/register'
import { Authenticate } from '../pages/authenticate'

export function Router() {
  return (
    <Routes>
      <Route path="/signup" element={<Register />} />
      <Route path="/login" element={<Authenticate />} />
    </Routes>
  )
}

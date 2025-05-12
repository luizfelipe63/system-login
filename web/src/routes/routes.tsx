import { Routes, Route } from 'react-router'
import { Register } from '../pages/register'
import { Authenticate } from '../pages/authenticate'
import { Profile } from '../pages/profile'

export function Router() {
  return (
    <Routes>
      <Route path="/signup" element={<Register />} />
      <Route path="/login" element={<Authenticate />} />
      <Route path="/me" element={<Profile />} />
    </Routes>
  )
}

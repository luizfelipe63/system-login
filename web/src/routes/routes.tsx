import { Routes, Route } from 'react-router'
import { Register } from '../pages/register'

export function Router() {
    return (
        <Routes>
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

import { BrowserRouter, Routes, Route } from 'react-router'
import Agente from './pages/agent.jsx'
import Intro from './pages/Intro.jsx'

export default function Navegacao() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Intro/>}/>
            <Route path='/Agt' element={<Agente/>}/>
        </Routes>
        </BrowserRouter>
    )
} 
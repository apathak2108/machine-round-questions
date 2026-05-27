import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import FileExplorerPage from './problems/file-explorer/FileExplorerPage'
import MemoryGamePage from './problems/memory-game/MemoryGamePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memory-game" element={<MemoryGamePage />} />
        <Route path="/file-explorer" element={<FileExplorerPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

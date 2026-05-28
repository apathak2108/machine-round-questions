import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import FileExplorerPage from './problems/file-explorer/FileExplorerPage'
import MemoryGamePage from './problems/memory-game/MemoryGamePage'
import Accordion from './problems/accordion/AccordionPage'
import NestedCommentsPage from './problems/nested-comments'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memory-game" element={<MemoryGamePage />} />
        <Route path="/file-explorer" element={<FileExplorerPage />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path='/nested-comments' element={<NestedCommentsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

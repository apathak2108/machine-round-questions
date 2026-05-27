import MemoryGame from './components/MemoryGame'
import './memory-game.css'

function MemoryGamePage() {
  return (
    <div className="memory-game">
      <div className="memory-game-main">
        <MemoryGame />
      </div>
    </div>
  )
}

export default MemoryGamePage

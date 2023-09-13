import Setup from "./Components/Setup/Setup"
import { useGame } from "./Context/GameProvider"
import Game from "./Components/Game/Game"

function App() {
  const { stateGame } = useGame()
  return (
    <div className=" select-none w-screen overflow-hidden">
      {stateGame.status === "setup" ? <Setup /> : <Game />}
    </div>
  )
}

export default App

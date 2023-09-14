import Header from "./Header/Header"
import GridCells from "./GridCells/GridCells"
import Players from "./Players/Players"
import { useGame } from "../../Context/GameProvider"
import BestScore from "./BestScore/BestScore"
import useOverlay from "../../Hooks/useOverlay"
import useTimer from "../../Hooks/useTimer"
function Game() {
  const { stateGame } = useGame()
  const { overlay } = stateGame
  useOverlay()
  useTimer()

  return (
    <div className="  pt-16 pb-6 h-full w-full  flex flex-col gap-12">
      {overlay && (
        <div className="fixed inset-0 bg-black/30 h-screen w-screen z-10"></div>
      )}

      <Header />
      <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[1fr_2fr_1fr]">
        <BestScore />
        <GridCells />
      </div>
      <Players />
    </div>
  )
}

export default Game

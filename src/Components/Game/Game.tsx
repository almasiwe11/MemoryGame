import { useEffect } from "react"
import Header from "./Header/Header"
import GridCells from "./GridCells/GridCells"
import Players from "./Players/Players"
import { useGame } from "../../Context/GameProvider"
function Game() {
  const { stateGame, dispatch } = useGame()
  const { numberOfPlayers, status } = stateGame
  useEffect(() => {
    let timer: number
    if (numberOfPlayers === 1) {
      timer = setInterval(() => {
        dispatch({ type: "tick" })
      }, 1000)
    }

    return () => {
      clearInterval(timer)
    }
  }, [dispatch, numberOfPlayers])
  return (
    <div className="  pt-16 pb-6 h-full w-full  flex flex-col gap-12">
      {status === "finished" && (
        <div className="fixed inset-0 bg-black/30 h-screen w-screen z-10"></div>
      )}

      <Header />
      <GridCells />
      <Players />
    </div>
  )
}

export default Game

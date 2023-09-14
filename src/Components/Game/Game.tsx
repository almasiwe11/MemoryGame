import { useEffect, useState } from "react"
import Header from "./Header/Header"
import GridCells from "./GridCells/GridCells"
import Players from "./Players/Players"
import { useGame } from "../../Context/GameProvider"
import BestScore from "./BestScore/BestScore"
import { BestTypes } from "../../Context/ContextTypes"
function Game() {
  const { stateGame, dispatch } = useGame()
  const { numberOfPlayers, status, moves, timer } = stateGame

  const savedBestResult = localStorage.getItem("bestResult")
  const defaultBestResult: BestTypes = {
    time: Infinity,
    moves: Infinity,
  }

  const initialBestResult = savedBestResult
    ? (JSON.parse(savedBestResult) as BestTypes)
    : defaultBestResult

  const [best, setBest] = useState<BestTypes>(initialBestResult)

  useEffect(() => {
    let timer: number
    if (numberOfPlayers === 1) {
      if (status !== "finished") {
        timer = setInterval(() => {
          dispatch({ type: "tick" })
        }, 1000)
      }
    }

    return () => {
      clearInterval(timer)
    }
  }, [dispatch, numberOfPlayers, status])

  useEffect(() => {
    if (status === "finished") {
      const newBest = { ...best }

      if (best.time > timer) {
        newBest.time = timer
      }

      if (best.moves > moves) {
        newBest.moves = moves
      }

      setBest(newBest)

      localStorage.setItem("bestResult", JSON.stringify(newBest))
    }
  }, [status])

  return (
    <div className="  pt-16 pb-6 h-full w-full  flex flex-col gap-12">
      {status === "finished" && (
        <div className="fixed inset-0 bg-black/30 h-screen w-screen z-10"></div>
      )}

      <Header />
      <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[1fr_2fr_1fr]">
        <BestScore best={best} />
        <GridCells />
      </div>
      <Players />
    </div>
  )
}

export default Game

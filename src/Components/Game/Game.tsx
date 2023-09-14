import { useEffect, useState } from "react"
import Header from "./Header/Header"
import GridCells from "./GridCells/GridCells"
import Players from "./Players/Players"
import { useGame } from "../../Context/GameProvider"
import BestScore from "./BestScore/BestScore"
import { BestTypes, BestResults } from "../../Context/ContextTypes"
function Game() {
  const infinityPlaceHolder = 999999999999999
  const { stateGame, dispatch } = useGame()
  const { numberOfPlayers, status, moves, timer, gridSize, overlay, pause } =
    stateGame

  const infiniteReslts: BestTypes = {
    time: infinityPlaceHolder,
    moves: infinityPlaceHolder,
  }

  const allBestResultsInfinite: BestResults = {
    4: infiniteReslts,
    6: infiniteReslts,
  }

  const bestFromStorage = localStorage.getItem("bestResults")

  const [allBestResults, setAllBestResults] = useState<BestResults>(
    bestFromStorage ? JSON.parse(bestFromStorage) : allBestResultsInfinite
  )

  const rightGridSizeBest = allBestResults[gridSize]

  useEffect(() => {
    if (status === "finished") {
      const newBest = { ...rightGridSizeBest }
      const newBestAll = { ...allBestResults }
      if (timer < rightGridSizeBest.time) {
        newBest.time = timer
      }
      if (moves < rightGridSizeBest.moves) {
        newBest.moves = moves
      }
      newBestAll[gridSize] = newBest
      setAllBestResults(newBestAll)
      localStorage.setItem("bestResults", JSON.stringify(newBestAll))
    }
  }, [status, moves, allBestResults, gridSize, timer, rightGridSizeBest])

  useEffect(() => {
    let timer: number
    if (numberOfPlayers === 1) {
      if (status !== "finished" && !pause) {
        timer = setInterval(() => {
          dispatch({ type: "tick" })
        }, 1000)
      }
    }

    return () => {
      clearInterval(timer)
    }
  }, [dispatch, numberOfPlayers, status, pause])

  useEffect(() => {
    if (overlay) {
      document.body.style.overflow = "hidden"
      document.documentElement.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
      document.documentElement.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
      document.documentElement.style.overflow = "auto"
    }
  }, [overlay])

  return (
    <div className="  pt-16 pb-6 h-full w-full  flex flex-col gap-12">
      {overlay && (
        <div className="fixed inset-0 bg-black/30 h-screen w-screen z-10"></div>
      )}

      <Header />
      <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[1fr_2fr_1fr]">
        <BestScore best={rightGridSizeBest} inf={infinityPlaceHolder} />
        <GridCells />
      </div>
      <Players />
    </div>
  )
}

export default Game

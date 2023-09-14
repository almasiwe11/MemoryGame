import { useEffect, useState } from "react"
import { useGame } from "../Context/GameProvider"
import { BestTypes, BestResults } from "../Context/ContextTypes"

export default function useLocalStorage() {
  const { stateGame } = useGame()
  const infinityPlaceHolder = 999999999999999
  const { status, moves, timer, gridSize } = stateGame

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

  return { infinityPlaceHolder, rightGridSizeBest }
}

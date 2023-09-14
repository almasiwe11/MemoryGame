import { useEffect } from "react"
import { useGame } from "../Context/GameProvider"

export default function useTimer() {
  const { stateGame, dispatch } = useGame()
  const { numberOfPlayers, pause, status } = stateGame
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
}

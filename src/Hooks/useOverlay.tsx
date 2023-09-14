import { useEffect } from "react"
import { useGame } from "../Context/GameProvider"

export default function useOverlay() {
  const { stateGame } = useGame()
  const { overlay } = stateGame
  useEffect(() => {
    if (overlay) {
      document.body.style.overflowY = "hidden"
      document.documentElement.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "auto"
      document.documentElement.style.overflowY = "auto"
    }

    return () => {
      document.body.style.overflowY = "auto"
      document.documentElement.style.overflowY = "auto"
    }
  }, [overlay])
}

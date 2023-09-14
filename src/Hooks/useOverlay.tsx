import { useEffect } from "react"
import { useGame } from "../Context/GameProvider"

export default function useOverlay() {
  const { stateGame } = useGame()
  const { overlay } = stateGame
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
}

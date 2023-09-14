import { useGame } from "../../../Context/GameProvider"
import MultiPlayer from "./MultiPlayer"
import SoloPlayer from "./SoloPlayer"

export default function Players() {
  const { stateGame } = useGame()
  const { numberOfPlayers } = stateGame
  return (
    <div className="wrapper">
      {numberOfPlayers > 1 ? <MultiPlayer /> : <SoloPlayer />}
    </div>
  )
}

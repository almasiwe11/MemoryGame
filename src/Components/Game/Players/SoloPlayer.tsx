import { useGame } from "../../../Context/GameProvider"
import DisplayStat from "../DisplayStat/DisplayStat"
import Timer from "./Timer"

export default function SoloPlayer() {
  const { stateGame } = useGame()
  return (
    <div className="max-w-xl w-full mx-auto grid gap-5 grid-cols-2">
      <Timer />
      <DisplayStat left={"Moves"} right={stateGame.moves} />
    </div>
  )
}

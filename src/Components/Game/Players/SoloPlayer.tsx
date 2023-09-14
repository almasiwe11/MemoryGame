import { useGame } from "../../../Context/GameProvider"
import Timer from "./Timer"

export default function SoloPlayer() {
  const { stateGame } = useGame()
  return (
    <div className="max-w-xl w-full mx-auto grid gap-5 grid-cols-2">
      <Timer />
      <div className="w-full flex justify-between p-4 bg-gray rounded-xl font-semibold">
        <span className="text-gray-middle">Moves</span>
        <span className="font-extrabold text-2xl text-gray-dark">
          {stateGame.moves}
        </span>
      </div>
    </div>
  )
}

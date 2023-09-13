import { useGame } from "../../../Context/GameProvider"

export default function Timer() {
  const { stateGame } = useGame()
  const { timer } = stateGame
  return (
    <div className="w-full flex justify-between p-4 bg-gray rounded-xl font-semibold">
      <span className="text-gray-middle">Time</span>
      <span className="font-extrabold text-2xl">
        {Math.floor(timer / 60)} : {timer % 60 < 10 ? "0" : ""}
        {timer % 60}
      </span>
    </div>
  )
}

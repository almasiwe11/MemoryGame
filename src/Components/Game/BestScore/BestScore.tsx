import { useGame } from "../../../Context/GameProvider"
import useLocalStorage from "../../../Hooks/useLocalStorage"

export default function BestScore() {
  const { infinityPlaceHolder: inf, rightGridSizeBest: best } =
    useLocalStorage()
  const { stateGame } = useGame()
  return (
    <div className="max-w-xl w-[90%] mx-auto font-semibold text-2xl lg:flex-center">
      {best.moves < inf && stateGame.numberOfPlayers === 1 && (
        <div className="flex lg:flex-col gap-5">
          <span className="font-extrabold text-gray-dark">
            {" "}
            Your best results
          </span>
          <div className="flex lg:flex-col  gap-3 w-full">
            <span className="text-2xl font-bold text-gray-middle">
              {" "}
              Time: {best.time}
            </span>
            <span className="text-2xl font-bold text-gray-middle">
              Moves: {best.moves}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

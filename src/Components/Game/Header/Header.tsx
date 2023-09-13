import { useGame } from "../../../Context/GameProvider"
import Logo from "../../Logo"

export default function Header() {
  const { dispatch } = useGame()
  return (
    <div className="flex justify-between wrapper">
      <Logo />
      <div className="flex gap-3">
        <div
          className="button bg-yellow text-white text-lg p-3 font-bold px-8 rounded-full cursor-pointer"
          onClick={() => dispatch({ type: "start" })}
        >
          Restart
        </div>
        <div
          className="button bg-gray text-gray-dark text-lg p-3 font-bold px-5 rounded-full cursor-pointer"
          onClick={() => dispatch({ type: "new setup" })}
        >
          New Game
        </div>
      </div>
    </div>
  )
}

import { useGame } from "../../../Context/GameProvider"
import Logo from "../../Logo"
import MobileMenu from "./MobileMenu"
export default function Header() {
  const { dispatch, stateGame } = useGame()
  const { mobileMenu } = stateGame
  return (
    <div className="flex justify-between wrapper items-center">
      <Logo />
      <div className="flex gap-3">
        <div
          className="button hidden md:block bg-yellow text-white text-lg p-3 font-bold px-8 rounded-full cursor-pointer"
          onClick={() => dispatch({ type: "start" })}
        >
          Restart
        </div>
        <div
          className="button hidden md:block bg-gray text-gray-dark text-lg p-3 font-bold px-5 rounded-full cursor-pointer"
          onClick={() => dispatch({ type: "new setup" })}
        >
          New Game
        </div>
      </div>

      {mobileMenu && <MobileMenu />}

      <button
        onClick={() => dispatch({ type: "toggleMobile" })}
        className="bg-yellow rounded-full p-2 pb-2.5 px-5 flex-center text-xl text-white font-bold"
      >
        Menu
      </button>
    </div>
  )
}

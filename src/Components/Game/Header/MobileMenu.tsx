import { useRef, useEffect } from "react"
import { useGame } from "../../../Context/GameProvider"

export default function MobileMenu() {
  const menuRef = useRef<HTMLDivElement | null>(null)
  const { dispatch, stateGame } = useGame()

  useEffect(() => {
    function menuCloseHandler(e: MouseEvent) {
      if (menuRef === null) return
      if (!menuRef.current?.contains(e.target as Node)) {
        dispatch({ type: "toggleMobile" })
      }
    }
    document.addEventListener("mousedown", menuCloseHandler)

    return () => {
      document.removeEventListener("mousedown", menuCloseHandler)
    }
  }, [stateGame.overlay, dispatch])

  return (
    <div className="fixed flex-center inset-0 z-50">
      <div
        className="flex flex-col w-[90%] p-6 bg-white rounded-xl gap-3 "
        ref={menuRef}
      >
        <div
          className="button bg-yellow flex-center text-white text-lg p-3 font-bold px-8 rounded-full cursor-pointer"
          onClick={() => {
            dispatch({ type: "start" })
            dispatch({ type: "toggleMobile" })
          }}
        >
          Restart
        </div>
        <div
          className="button bg-gray flex-center text-gray-dark text-lg p-3 font-bold px-5 rounded-full cursor-pointer"
          onClick={() => {
            dispatch({ type: "new setup" })
          }}
        >
          New Game
        </div>
        <div
          className="button bg-gray flex-center text-gray-dark text-lg p-3 font-bold px-5 rounded-full cursor-pointer"
          onClick={() => dispatch({ type: "toggleMobile" })}
        >
          Resume Game
        </div>
      </div>
    </div>
  )
}

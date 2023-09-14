import { useGame } from "../../../Context/GameProvider"
import { IconType } from "react-icons"

function CellGame({ cell, index }: { cell: number | IconType; index: number }) {
  const { dispatch, stateGame } = useGame()
  const { observing, openedCells, blocked } = stateGame
  const isOpen =
    observing.some((observation) => observation.index === index) ||
    openedCells.some((ind) => index === ind)

  const right = openedCells.some((ind) => index === ind)

  function handleOpen() {
    if (isOpen || blocked) return
    dispatch({ type: "open", open: cell, index: index })
    console.log(cell)

    if (observing.length === 1) {
      dispatch({ type: "block" })
      setTimeout(() => {
        dispatch({ type: "check", open: cell, index: index })
      }, 500)
    }
  }
  return (
    <div
      className={`bg-gray-dark rounded-full cursor-pointer aspect-square flex-center text-white border-none `}
      onClick={handleOpen}
    >
      <div
        className={`${
          right ? "bg-yellow right" : "bg-gray"
        } rounded-full w-full   h-full flex-center text-2xl font-bold duration-300 ease-in-out ${
          isOpen ? "scale-[101%]" : "scale-0"
        }`}
      >
        {typeof cell === "number" ? (
          cell
        ) : (
          <>
            {(() => {
              const Icon = cell
              return (
                <div className="scale-[125%] ico:scale-[150%] lg:scale-[180%]">
                  <Icon />
                </div>
              )
            })()}
          </>
        )}
      </div>
    </div>
  )
}

export default CellGame

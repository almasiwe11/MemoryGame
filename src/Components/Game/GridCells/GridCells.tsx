import { useEffect } from "react"
import { useGame } from "../../../Context/GameProvider"
import CellGame from "../Cell/Cell"
import FinishScreen from "../FinishScreen/FinishScreen"

function GridCells() {
  const { stateGame, dispatch } = useGame()
  const { gridSize, allCells, openedCells, status, moves } = stateGame

  useEffect(() => {
    if (openedCells.length === gridSize * gridSize) {
      dispatch({ type: "victory" })
    }
  }, [moves, dispatch, gridSize, openedCells])

  const gridStyle = {
    gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
  }

  return (
    <div className="max-w-xl w-[90%] mx-auto  ">
      <div
        className={`grid  ${gridSize === 4 ? "gap-7" : "gap-3"} `}
        style={gridStyle}
      >
        {allCells.map((cell, index) => (
          <CellGame cell={cell} index={index} key={index} />
        ))}
      </div>
      {status === "finished" && <FinishScreen />}
    </div>
  )
}

export default GridCells

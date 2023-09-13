import { useGame } from "../../../Context/GameProvider"
import CellGame from "../Cell/Cell"

function GridCells() {
  const { stateGame } = useGame()
  const { gridSize, allCells } = stateGame

  // Create an array of needed size
  return (
    <div className="max-w-xl w-full mx-auto ">
      <div
        className={`grid grid-cols-${gridSize} ${
          gridSize === 4 ? "gap-7" : "gap-3"
        }`}
      >
        {allCells.map((cell, index) => (
          <CellGame cell={cell} index={index} key={index} />
        ))}
      </div>
    </div>
  )
}

export default GridCells

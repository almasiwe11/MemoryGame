import Header from "./Header/Header"
import GridCells from "./GridCells/GridCells"
import Players from "./Players/Players"
function Game() {
  return (
    <div className="  pt-16 pb-6 h-full w-full  flex flex-col justify-between">
      <Header />
      <GridCells />
      <Players />
    </div>
  )
}

export default Game

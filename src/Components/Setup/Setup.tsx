import { useGame } from "../../Context/GameProvider"

export default function Setup() {
  const { dispatch, stateGame } = useGame()

  const buttonStyle = "rounded-full py-2 flex-center w-full text-white text-xl "

  const numPlayersArray = Array.from({ length: 4 }, (_, i) => i + 1)

  return (
    <section className="h-full w-full bg-gray-dark flex-center font-semibold flex-col gap-12 md:gap-16">
      <h1 className="text-white text-2xl font-bold tracking-wider">memory</h1>
      <div className="bg-white p-7 md:py-10 md:px-8 flex flex-col max-w-2xl wrapper rounded-xl gap-6 md:gap-8">
        {/*  */}
        <div className="flex flex-col gap-4">
          <span className="text-gray-dark ">Select Theme</span>
          <div className="grid grid-cols-2 gap-4 md:gap-5 lg:gap-6">
            <button
              className={`${buttonStyle} ${
                stateGame.theme === "Numbers" ? "bg-gray-dark" : "bg-gray"
              }`}
              onClick={() => dispatch({ type: "theme", theme: "Numbers" })}
            >
              Numbers
            </button>
            <button
              className={`${buttonStyle} ${
                stateGame.theme === "Icons" ? "bg-gray-dark" : "bg-gray"
              }`}
              onClick={() => dispatch({ type: "theme", theme: "Icons" })}
            >
              Icons
            </button>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col gap-4">
          <span className="text-gray-dark ">Number of Players</span>
          <div className="grid grid-cols-4 gap-4 md:gap-5 lg:gap-6">
            {numPlayersArray.map((number) => (
              <button
                key={number}
                className={`${buttonStyle} ${
                  stateGame.numberOfPlayers === number
                    ? "bg-gray-dark"
                    : "bg-gray"
                }`}
                onClick={() =>
                  dispatch({ type: "numPlayers", payload: number })
                }
              >
                {number}
              </button>
            ))}
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col gap-4">
          <span className="text-gray-dark ">Grid Size</span>
          <div className="grid grid-cols-2 gap-4 md:gap-5 lg:gap-6">
            <button
              className={`${buttonStyle} ${
                stateGame.gridSize === 4 ? "bg-gray-dark" : "bg-gray"
              }`}
              onClick={() => dispatch({ type: "gridSize", payload: 4 })}
            >
              4x4
            </button>
            <button
              className={`${buttonStyle} ${
                stateGame.gridSize === 6 ? "bg-gray-dark" : "bg-gray"
              }`}
              onClick={() => dispatch({ type: "gridSize", payload: 6 })}
            >
              6x6
            </button>
          </div>
        </div>
        {/*  */}
        <button className="bg-yellow w-full text-white font-bold flexcenter py-2.5 text-xl rounded-full">
          Start Game
        </button>
      </div>
    </section>
  )
}

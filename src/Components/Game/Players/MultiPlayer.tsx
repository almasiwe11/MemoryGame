import { useGame } from "../../../Context/GameProvider"

export default function MultiPlayer() {
  const { stateGame } = useGame()
  const { currentPlayer, players } = stateGame
  return (
    <div className="flex justify-center gap-4 ">
      {players.map((player) => (
        <div key={player.player} className="flex w-full flex-col gap-5">
          <div
            className={`w-full text-lg  relative  p-4 px-5 rounded-lg flex justify-between text-gray-dark font-semibold ${
              currentPlayer === player.player ? "bg-yellow" : "bg-gray"
            }`}
          >
            {currentPlayer === player.player && (
              <div className="bg-yellow absolute h-4 w-8 cut -top-4 bottom-0 left-[50%] translate-x-[-50%]"></div>
            )}
            <span
              className={`${
                currentPlayer === player.player
                  ? "text-white"
                  : "text-gray-dark"
              }`}
            >
              Player {player.player}
            </span>
            <span
              className={`${
                currentPlayer === player.player
                  ? "text-white"
                  : "text-gray-dark"
              } text-2xl`}
            >
              {player.score}
            </span>
          </div>

          <div className="tracking-widest uppercase text-gray-middle text-center font-semibold">
            {currentPlayer === player.player && "Current Turn"}
          </div>
        </div>
      ))}
    </div>
  )
}

import { useGame } from "../../../Context/GameProvider"
import Timer from "./Timer"

export default function Players() {
  const { stateGame } = useGame()
  const { numberOfPlayers, currentPlayer, players, moves } = stateGame
  return (
    <div className="wrapper">
      {numberOfPlayers > 1 ? (
        <div className="flex justify-center gap-4">
          {players.map((player) => (
            <div
              key={player.player}
              className={`w-full text-lg   p-4 px-5 rounded-lg flex justify-between text-gray-dark font-semibold ${
                currentPlayer === player.player ? "bg-yellow" : "bg-gray"
              }`}
            >
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
          ))}
        </div>
      ) : (
        <div className="max-w-xl w-full mx-auto grid gap-5 grid-cols-2">
          <Timer />
          <div className="w-full flex justify-between p-4 bg-gray rounded-xl font-semibold">
            <span className="text-gray-middle">Moves</span>
            <span className="font-extrabold text-2xl text-gray-dark">
              {moves}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

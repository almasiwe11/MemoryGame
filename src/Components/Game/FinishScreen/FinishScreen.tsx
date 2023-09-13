import { useGame } from "../../../Context/GameProvider"

function FinishScreen() {
  const { stateGame, dispatch } = useGame()
  const { players } = stateGame
  const sortedPlayers = players.sort((a, b) => b.score - a.score)
  const maxScore = sortedPlayers[0].score
  return (
    <div className="fixed inset-0 flex-center z-50 ">
      <div className="bg-white max-w-xl w-[90%] p-5 md:px-10 md:py-12 rounded-xl flex flex-col gap-4 text-center">
        <h1 className="text-gray-dark font-bold text-4xl">
          {sortedPlayers[0].score === sortedPlayers[1].score
            ? "It's a tie"
            : `Player ${sortedPlayers[0].player} wins`}
        </h1>
        <p className="text-li-text">Game over! Here are the results...</p>
        <ul className="flex flex-col gap-4">
          {sortedPlayers.map((player) => (
            <li
              key={player.player}
              className={`rounded-xl ${
                player.score === maxScore ? "bg-gray-dark" : "bg-li "
              } flex justify-between p-5 px-9`}
            >
              <span
                className={`${
                  player.score === maxScore ? "text-white" : "text-li-text"
                } font-bold text-lg`}
              >
                Player {player.player} {player.score === maxScore && "(Winner)"}
              </span>
              <span
                className={`text-2xl font-bold ${
                  player.score === maxScore ? "text-white" : "text-gray-dark"
                }`}
              >
                {player.score} Pairs
              </span>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-2 gap-4">
          <div
            className="bg-yellow text-white flex-center py-3 mt-5 text-lg font-bold rounded-full cursor-pointer"
            onClick={() => dispatch({ type: "start" })}
          >
            Restart
          </div>
          <div
            className="bg-li  text-gray-dark flex-center py-3 mt-5 text-lg font-bold rounded-full cursor-pointer"
            onClick={() => dispatch({ type: "new setup" })}
          >
            Setup New Game
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinishScreen

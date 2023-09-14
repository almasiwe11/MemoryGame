import { useGame } from "../../../Context/GameProvider"
import PlayersScore from "./PlayersScore"

function FinishScreen() {
  const { stateGame, dispatch } = useGame()
  const { players, numberOfPlayers, timer, moves } = stateGame
  const sortedPlayers = players.sort((a, b) => b.score - a.score)
  const maxScore = sortedPlayers[0].score
  return (
    <div className="fixed inset-0 flex-center z-50 ">
      <div className="bg-white max-w-xl w-[90%] p-5 md:px-10 md:py-12 rounded-xl flex flex-col gap-4 text-center">
        <h1 className="text-gray-dark font-bold text-4xl">
          {numberOfPlayers > 1
            ? sortedPlayers[0].score === sortedPlayers[1].score
              ? "It's a tie"
              : `Player ${sortedPlayers[0].player} wins`
            : `You did it!`}
        </h1>
        <p className="text-li-text">
          Game over!{" "}
          {numberOfPlayers > 1
            ? "Here are the results..."
            : "Here's how you got on"}
        </p>
        <ul className="flex flex-col gap-4">
          {numberOfPlayers > 1 ? (
            <PlayersScore sortedPlayers={sortedPlayers} maxScore={maxScore} />
          ) : (
            <>
              <li className={`rounded-xl  bg-li flex justify-between p-5 px-9`}>
                <span className="text-li-text">Time Elapsed</span>
                <span className="font-extrabold text-gray-dark text-2xl">
                  {Math.floor(timer / 60)} : {timer % 60 < 10 ? "0" : ""}
                  {timer % 60}
                </span>
              </li>
              <li className={`rounded-xl  bg-li flex justify-between p-5 px-9`}>
                <span className="text-li-text">Moves Taken</span>
                <span className="font-extrabold text-gray-dark text-2xl">
                  {moves} Moves
                </span>
              </li>
            </>
          )}
        </ul>
        <div className="grid grid-cols-2 gap-4">
          <div
            className="bg-yellow text-white flex-center py-3 mt-5 text-lg font-bold rounded-full cursor-pointer"
            onClick={() => {
              dispatch({ type: "start" })
            }}
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

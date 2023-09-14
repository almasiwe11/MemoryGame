import { PlayerType } from "../../../Context/ContextTypes"

type PropTypes = {
  sortedPlayers: PlayerType[]
  maxScore: number
}

export default function PlayersScore({ sortedPlayers, maxScore }: PropTypes) {
  return (
    <>
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
    </>
  )
}

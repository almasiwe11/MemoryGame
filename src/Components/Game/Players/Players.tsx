import { useGame } from "../../../Context/GameProvider"

export default function Players() {
  const { stateGame } = useGame()
  const { numberOfPlayers, currentPlayer } = stateGame
  const players = Array.from({ length: numberOfPlayers }, (_, i) => i + 1)
  return (
    <div className="wrapper">
      {numberOfPlayers > 1 && (
        <div className="flex justify-center gap-4">
          {players.map((player) => (
            <div
              key={player}
              className={`w-full  p-3 rounded-lg text-sm text-gray-dark font-semibold ${
                currentPlayer === player ? "bg-yellow" : "bg-gray"
              }`}
            >
              Player {player}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

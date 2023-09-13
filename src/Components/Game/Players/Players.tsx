import { useGame } from "../../../Context/GameProvider"

export default function Players() {
  const { stateGame } = useGame()
  const { numberOfPlayers } = stateGame
  const players = Array.from({ length: numberOfPlayers }, (_, i) => i + 1)
  return (
    <div className="wrapper">
      <div className="flex justify-center gap-4">
        {players.map((player) => (
          <div
            key={player}
            className="w-full bg-gray p-3 rounded-lg text-sm text-gray-dark font-semibold"
          >
            Player {player}
          </div>
        ))}
      </div>
    </div>
  )
}

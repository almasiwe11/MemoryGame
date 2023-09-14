import { useGame } from "../../../Context/GameProvider"
import DisplayStat from "../DisplayStat/DisplayStat"

export default function Timer() {
  const { stateGame } = useGame()
  const { timer } = stateGame
  const timeFormat = `${Math.floor(timer / 60)}:${timer % 60 < 10 ? "0" : ""}${
    timer % 60
  }`

  return <DisplayStat left="time" right={timeFormat} />
}

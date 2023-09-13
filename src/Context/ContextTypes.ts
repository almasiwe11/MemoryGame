import { Dispatch } from "react"

type DispatchType = Dispatch<ActionType>

type ActionType = {
  theme?: string
  type: string
  payload?: number
}

type stateGameType = {
  theme: string
  numberOfPlayers: number
  gridSize: number
}

type GameContextType = {
  stateGame: stateGameType
  dispatch: DispatchType
}

export type { GameContextType, stateGameType, ActionType, DispatchType }

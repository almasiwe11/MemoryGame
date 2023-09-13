import { Dispatch } from "react"

type DispatchType = Dispatch<ActionType>

type CellInfo = {
  number: number
  index: number
}

type ObserverType = CellInfo[]

type ActionType = {
  theme?: string
  type: string
  payload?: number
  open?: number
  index?: number
}

type PlayerType = {
  player: number
  score: number
}

type stateGameType = {
  theme: string
  numberOfPlayers: number
  gridSize: number
  status: string
  allCells: number[]
  observing: ObserverType
  openedCells: number[]
  blocked: boolean
  players: PlayerType[]
  currentPlayer: number
}

type GameContextType = {
  stateGame: stateGameType
  dispatch: DispatchType
}

export type {
  GameContextType,
  stateGameType,
  ActionType,
  DispatchType,
  ObserverType,
  CellInfo,
}

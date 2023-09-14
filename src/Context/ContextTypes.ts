import { Dispatch } from "react"
import { IconType } from "react-icons"

type DispatchType = Dispatch<ActionType>

type CellInfo = {
  number: number | IconType
  index: number
}

type ObserverType = CellInfo[]

type ActionType = {
  theme?: string
  type: string
  payload?: number
  open?: number | IconType
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
  allCells: (number | IconType)[]
  observing: ObserverType
  openedCells: number[]
  blocked: boolean
  players: PlayerType[]
  currentPlayer: number
  moves: number
  timer: number
}

type GameContextType = {
  stateGame: stateGameType
  dispatch: DispatchType
}

type BestTypes = {
  time: number
  moves: number
}

export type {
  GameContextType,
  stateGameType,
  ActionType,
  DispatchType,
  ObserverType,
  CellInfo,
  PlayerType,
  BestTypes,
}

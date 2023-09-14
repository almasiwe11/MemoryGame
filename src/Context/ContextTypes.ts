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
  gridSize?: keyof BestResults
}

type PlayerType = {
  player: number
  score: number
}

type stateGameType = {
  theme: string
  numberOfPlayers: number
  gridSize: keyof BestResults
  status: string
  allCells: (number | IconType)[]
  observing: ObserverType
  openedCells: number[]
  blocked: boolean
  players: PlayerType[]
  currentPlayer: number
  moves: number
  timer: number
  overlay: boolean
  mobileMenu: boolean
  pause: boolean
}

type GameContextType = {
  stateGame: stateGameType
  dispatch: DispatchType
}

type BestTypes = {
  time: number
  moves: number
}

type BestResults = {
  4: BestTypes
  6: BestTypes
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
  BestResults,
}

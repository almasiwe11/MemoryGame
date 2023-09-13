import { ReactNode, createContext, useReducer, useContext } from "react"
import {
  stateGameType,
  ActionType,
  GameContextType,
  CellInfo,
} from "./ContextTypes"

const GameContext = createContext<GameContextType | null>(null)

function createArray(gridSize: number) {
  const uniqeCells = (gridSize * gridSize) / 2
  const uniqueNumbersArr = Array.from({ length: uniqeCells }, (_, i) => i + 1)
  return shuffleArray([...uniqueNumbersArr, ...uniqueNumbersArr])
}

function shuffleArray(arr: number[]) {
  const shuffled = [...arr]

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * shuffled.length)
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled
}

function reducer(state: stateGameType, action: ActionType): stateGameType {
  switch (action.type) {
    case "numPlayers":
      if (action.payload === undefined)
        throw new Error("Payload should be a number")
      return { ...state, numberOfPlayers: action.payload }
    case "theme":
      if (action.theme === undefined)
        throw new Error("'Theme' expected as a string")
      return { ...state, theme: action.theme }
    case "gridSize":
      if (action.payload === undefined)
        throw new Error("'Payload should be a number")
      return { ...state, gridSize: action.payload }
    case "start":
      return {
        ...state,
        allCells: createArray(state.gridSize),
        status: "playing",
      }
    case "open": {
      if (action.open === undefined) throw new Error("What was opened")
      if (action.index === undefined) throw new Error("Index required")
      const observe: CellInfo = {
        number: action.open,
        index: action.index,
      }
      return {
        ...state,
        observing: [...state.observing, observe],
      }
    }
    case "check": {
      if (action.open === undefined) throw new Error("What was opened")
      if (action.index === undefined) throw new Error("Index required")
      const prev = state.observing[0]
      if (prev.number === action.open) {
        return {
          ...state,
          observing: [],
          openedCells: [...state.openedCells, prev.index, action.index],
          blocked: false,
        }
      } else {
        return { ...state, observing: [], blocked: false }
      }
    }
    case "block": {
      return { ...state, blocked: true }
    }

    default:
      throw new Error("Action type is not recognized")
  }
}

const initialState: stateGameType = {
  theme: "Numbers",
  numberOfPlayers: 1,
  gridSize: 4,
  status: "setup",
  allCells: [],
  observing: [],
  openedCells: [],
  blocked: false,
}

function GameProvider({ children }: { children: ReactNode }) {
  const [stateGame, dispatch] = useReducer(reducer, initialState)
  console.log(stateGame)

  return (
    <GameContext.Provider value={{ stateGame, dispatch }}>
      {children}
    </GameContext.Provider>
  )
}

function useGame() {
  const context = useContext(GameContext)
  if (context === null)
    throw new Error("useGame can only be used inside a Provider")
  return context
}

export { GameProvider, useGame }

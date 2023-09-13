import { ReactNode, createContext, useReducer, useContext } from "react"
import { stateGameType, ActionType, GameContextType } from "./ContextTypes"

const GameContext = createContext<GameContextType | null>(null)

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
    default:
      throw new Error("Action type is not recognized")
  }
}

const initialState: stateGameType = {
  theme: "Numbers",
  numberOfPlayers: 1,
  gridSize: 4,
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

import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "../style.css"
import { GameProvider } from "./Context/GameProvider.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>
)

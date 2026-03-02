import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"

// 🔹 Vite-aware basename (dev + production safe)
const basename = import.meta.env.BASE_URL

// 🔹 HANDLE GITHUB PAGES REDIRECT
const params = new URLSearchParams(window.location.search)
const redirect = params.get("redirect")

if (redirect) {
  window.history.replaceState(
    null,
    "",
    redirect.replace(basename, "/")
  )
}

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"

import RegisterTeam from "./pages/RegisterTeam"
import UploadDocuments from "./pages/UploadDocuments"
import ScoreboardRound1 from "./pages/ScoreboardRound1"
import ScoreboardRound2 from "./pages/ScoreboardRound2"
import Accounts from "./pages/Accounts"

import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* ALL DASHBOARD ROUTES PROTECTED */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard/register-team"
        element={
          <ProtectedRoute>
            <RegisterTeam />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard/upload-documents"
        element={
          <ProtectedRoute>
            <UploadDocuments />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard/scoreboard-round1"
        element={
          <ProtectedRoute>
            <ScoreboardRound1 />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard/scoreboard-round2"
        element={
          <ProtectedRoute>
            <ScoreboardRound2 />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard/accounts"
        element={
          <ProtectedRoute>
            <Accounts />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App
 
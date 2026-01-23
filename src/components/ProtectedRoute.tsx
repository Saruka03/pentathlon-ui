import { Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setAuthenticated(!!data.session)
      setLoading(false)
    })
  }, [])

  if (loading) return null

  return authenticated ? children : <Navigate to="/login" />
}

export default ProtectedRoute

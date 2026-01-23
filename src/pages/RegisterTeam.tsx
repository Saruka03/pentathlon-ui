import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"
import { motion } from "framer-motion"
import bg from "../assets/bg.jpg"

interface Team {
  id: string
  team_name: string
  round1_score: number
  round2_score: number
}

interface Member {
  id: string
  member_name: string
  grade: string
  phone: string
}

const RegisterTeam = () => {
  const [teams, setTeams] = useState<Team[]>([])
  const [members, setMembers] = useState<Member[]>([])
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null)

  const [showForm, setShowForm] = useState(false)

  const [teamName, setTeamName] = useState("")
  const [contactName, setContactName] = useState("")
  const [contactPhone, setContactPhone] = useState("")
  const [newMembers, setNewMembers] = useState([
    { name: "", grade: "", phone: "" },
  ])

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow =
      showForm || selectedTeam ? "hidden" : "auto"
  }, [showForm, selectedTeam])

  /* Fetch Teams */
  const fetchTeams = async () => {
    const { data } = await supabase
      .from("teams")
      .select("id, team_name, round1_score, round2_score")
      .order("created_at", { ascending: false })

    if (data) setTeams(data)
  }

  useEffect(() => {
    fetchTeams()
  }, [])

  /* Fetch Members of selected team */
  const openTeamDetails = async (team: Team) => {
    setSelectedTeam(team)

    const { data } = await supabase
      .from("team_members")
      .select("id, member_name, grade, phone")
      .eq("team_id", team.id)

    if (data) setMembers(data)
  }

  /* Add member row */
  const addMember = () => {
    setNewMembers([...newMembers, { name: "", grade: "", phone: "" }])
  }

  /* Save Team */
  const handleSubmit = async () => {
    if (!teamName.trim()) return alert("Team name required")

    const validMembers = newMembers.filter(
      (m) => m.name && m.grade && m.phone
    )

    if (!validMembers.length)
      return alert("At least one member required")

    const { data: team, error } = await supabase
      .from("teams")
      .insert({
        team_name: teamName,
        contact_person_name: contactName,
        contact_person_phone: contactPhone,
      })
      .select()
      .single()

    if (error) return alert(error.message)


    await supabase.from("team_members").insert(
      validMembers.map((m) => ({
        team_id: team.id,
        member_name: m.name,
        grade: m.grade,
        phone: m.phone,
      }))
    )

    setShowForm(false)
    setTeamName("")
    setContactName("")
    setContactPhone("")
    setNewMembers([{ name: "", grade: "", phone: "" }])

    fetchTeams()
  }

  return (
    <>
      {/* Background */}
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center px-6"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="w-full max-w-6xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10">
          <h1 className="text-3xl font-bold text-white text-center mb-12">
            Register Teams
          </h1>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Add Team */}
            <div
              onClick={() => setShowForm(true)}
              className="cursor-pointer h-40 rounded-2xl bg-white/10 border border-dashed border-white/30 flex items-center justify-center text-white text-lg font-semibold"
            >
              + Add Team
            </div>

            {/* Teams */}
            {teams.map((team) => (
              <motion.div
                key={team.id}
                whileHover={{ scale: 1.05 }}
                onClick={() => openTeamDetails(team)}
                className="cursor-pointer h-40 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white text-xl font-semibold"
              >
                {team.team_name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* TEAM DETAILS MODAL */}
      {selectedTeam && (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
    <div className="relative w-full max-w-xl">

      {/* BLUE GLOW */}
      <div className="absolute inset-0 rounded-3xl bg-blue-500/20 blur-3xl opacity-80" />

      {/* GLASS CARD */}
      <div className="relative bg-white/10 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-10 space-y-6 shadow-[0_0_60px_rgba(59,130,246,0.45)]">

        <h2 className="text-white text-2xl font-bold text-center">
          {selectedTeam.team_name}
        </h2>

        <div className="flex justify-between text-white">
          <span>Round 1 Score</span>
          <span className="font-bold">{selectedTeam.round1_score}</span>
        </div>

        <div className="flex justify-between text-white">
          <span>Round 2 Score</span>
          <span className="font-bold">{selectedTeam.round2_score}</span>
        </div>

        <hr className="border-white/20" />

        <div className="space-y-3">
          {members.map((m) => (
            <div
              key={m.id}
              className="flex justify-between text-white text-sm bg-white/5 px-4 py-2 rounded-lg"
            >
              <span>{m.member_name}</span>
              <span>Grade {m.grade}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-end pt-4">
          <button
            onClick={() => setSelectedTeam(null)}
            className="px-6 py-2 rounded-full bg-blue-500 text-white"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  </div>
)}

      {/* REGISTER TEAM MODAL */}
{showForm && (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
    <div className="relative w-full max-w-2xl">

      {/* BLUE GLOW */}
      <div className="absolute inset-0 rounded-3xl bg-blue-500/20 blur-3xl opacity-80" />

      {/* GLASS CARD */}
      <div
        className="
          relative
          bg-white/10 backdrop-blur-xl
          border border-blue-400/30
          rounded-3xl
          p-10 space-y-10
          shadow-[0_0_60px_rgba(59,130,246,0.45)]
          max-h-[90vh]
          overflow-y-auto
          scrollbar-hide
        "
      >
        <h2 className="text-white text-2xl font-bold text-center">
          Register New Team
        </h2>

        {/* TEAM INFO */}
        <div className="space-y-6">
          <input
            placeholder="Team Name"
            className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-blue-400/50"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />

          <input
            placeholder="Contact Person Name"
            className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-blue-400/50"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
          />

          <input
            placeholder="Contact Person Phone"
            className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-blue-400/50"
            value={contactPhone}
            onChange={(e) => setContactPhone(e.target.value)}
          />
        </div>

        <hr className="border-white/20" />

        {/* MEMBERS */}
        <div className="space-y-6">
          {newMembers.map((_, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                placeholder="Member Name"
                className="px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white outline-none"
                onChange={(e) => {
                  const copy = [...newMembers]
                  copy[i].name = e.target.value
                  setNewMembers(copy)
                }}
              />
              <input
                placeholder="Grade"
                className="px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white outline-none"
                onChange={(e) => {
                  const copy = [...newMembers]
                  copy[i].grade = e.target.value
                  setNewMembers(copy)
                }}
              />
              <input
                placeholder="Phone"
                className="px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white outline-none"
                onChange={(e) => {
                  const copy = [...newMembers]
                  copy[i].phone = e.target.value
                  setNewMembers(copy)
                }}
              />
            </div>
          ))}
        </div>

        <button
          onClick={addMember}
          className="text-blue-400 text-sm hover:underline"
        >
          + Add Member
        </button>

        {/* ACTIONS */}
        <div className="flex justify-end gap-6 pt-6">
          <button
            onClick={() => setShowForm(false)}
            className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="
              px-8 py-3 rounded-full
              bg-blue-500 text-white font-semibold
              shadow-[0_0_20px_rgba(59,130,246,0.8)]
              hover:shadow-[0_0_35px_rgba(59,130,246,1)]
              transition
            "
          >
            Save Team
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </>
  )
}

export default RegisterTeam

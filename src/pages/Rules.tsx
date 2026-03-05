import { Link } from "react-router-dom"

const Rules = () => {
  return (
    <div className="min-h-screen bg-[#050816]">
      {/* Background gradients */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-500/30 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] right-[-15%] w-[60%] h-[60%] bg-purple-500/25 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] bg-pink-500/20 rounded-full blur-[100px]" />
        <div className="absolute top-[10%] right-[20%] w-[30%] h-[30%] bg-cyan-400/15 rounded-full blur-[120px]" />
      </div>

      {/* Glass overlay */}
      <div className="fixed inset-0 bg-white/5 backdrop-blur-2xl" />

      {/* Navigation Bar */}
      <nav className="relative z-10 bg-white/5 backdrop-blur-md border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <ul className="flex justify-center gap-8">
            <li>
              <Link to="/about" className="text-white/70 hover:text-cyan-400 transition-colors duration-300">About</Link>
            </li>
            <li>
              <Link to="/rules" className="text-cyan-400 font-semibold">Rules</Link>
            </li>
            <li>
              <Link to="/prizes" className="text-white/70 hover:text-cyan-400 transition-colors duration-300">Prizes</Link>
            </li>
            <li>
              <Link to="/schedule" className="text-white/70 hover:text-cyan-400 transition-colors duration-300">Schedule</Link>
            </li>
            <li>
              <Link to="/announcements" className="text-white/70 hover:text-cyan-400 transition-colors duration-300">Announcements</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content */}
      <div className="relative pt-12 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-5xl md:text-6xl font-bold text-white text-center mb-12"
            style={{ fontFamily: "'Racing Sans One', cursive" }}
          >
            Rules
          </h1>

          {/* Official Rulebook Content */}
          <div className="space-y-8 text-white/80">
            
            {/* Header */}
            <div className="text-center mb-12">
              <p className="text-xl text-cyan-400 font-semibold">OFFICIAL RULEBOOK</p>
              <p className="text-lg text-white/60 mt-2">Inter-School Academic Competition</p>
            </div>

            {/* 1. General Regulations */}
            <section className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3" style={{ fontFamily: "'Racing Sans One', cursive" }}>
                <span className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white text-lg font-bold">1</span>
                General Regulations
              </h2>
              <ul className="space-y-3 list-disc list-inside text-white/70">
                <li>This competition is open only for students of Grade 9, 10, and 11.</li>
                <li>Each school team must consist of 5 members.</li>
                <li>All registered participants must join the official WhatsApp group created by the organizing committee.</li>
                <li>Participants are strictly prohibited from using calculators or any electronic devices, except those provided by the organizers.</li>
                <li>All competitors must attend the competition in their official school uniform.</li>
                <li>Failure to follow the rules may result in disqualification.</li>
              </ul>
            </section>

            {/* 2. Competition Structure */}
            <section className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3" style={{ fontFamily: "'Racing Sans One', cursive" }}>
                <span className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white text-lg font-bold">2</span>
                Competition Structure
              </h2>
              <p className="text-white/70 mb-4">The competition consists of two main rounds:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-purple-500/20 rounded-xl p-4 border border-purple-500/30">
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">Selection Round</h3>
                  <p className="text-white/60 text-sm">Virtual quiz format for all registered teams</p>
                </div>
                <div className="bg-cyan-500/20 rounded-xl p-4 border border-cyan-500/30">
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">Final Round</h3>
                  <p className="text-white/60 text-sm">Top 7 teams qualify for the final round</p>
                </div>
              </div>
              <p className="text-white/70 mt-4">All registered teams will participate in the Selection Round.</p>
              <p className="text-white/70">The top 7 teams based on scores will qualify for the Final Round.</p>
            </section>

            {/* 3. Selection Round */}
            <section className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3" style={{ fontFamily: "'Racing Sans One', cursive" }}>
                <span className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white text-lg font-bold">3</span>
                Selection Round
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Format</h3>
                  <ul className="space-y-2 list-disc list-inside text-white/70">
                    <li>Conducted as a virtual quiz.</li>
                    <li>Team members are allowed to discuss among themselves before answering.</li>
                    <li>The quiz consists of 30 Multiple Choice Questions (MCQs).</li>
                    <li>Total duration: 40 minutes.</li>
                    <li>Each team will be provided with a laptop. Only the provided laptop must be used.</li>
                    <li>The quiz follows a sequential method: Once a team moves to the next question, they cannot return to the previous question.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Scoring System</h3>
                  <ul className="space-y-2 list-disc list-inside text-white/70">
                    <li>Correct Answer: 100 marks</li>
                    <li>Wrong Answer: –50 marks</li>
                    <li>No Answer: 0 marks</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Time Bonus System</h3>
                  <ul className="space-y-2 list-disc list-inside text-white/70">
                    <li>Each question begins with 60 time bonus marks.</li>
                    <li>The time bonus decreases every second.</li>
                    <li>When a team submits a correct answer, the remaining time bonus will be added to their score.</li>
                    <li>If the answer is incorrect, no time bonus will be awarded.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Qualification Criteria</h3>
                  <p className="text-white/70">Teams will be ranked based on their total score.</p>
                  <p className="text-white/70">The top 7 schools will qualify for the Final Round.</p>
                </div>
              </div>
            </section>

            {/* 4. Final Round */}
            <section className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3" style={{ fontFamily: "'Racing Sans One', cursive" }}>
                <span className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white text-lg font-bold">4</span>
                Final Round
              </h2>
              
              <p className="text-white/70 mb-6">The Final Round consists of three stages:</p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-red-500/20 text-red-300 rounded-full text-sm border border-red-500/30">Knockout Round</span>
                <span className="px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm border border-yellow-500/30">Qualifier Round</span>
                <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">Grand Final Round</span>
              </div>

              {/* 4.1 Knockout Round */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">4.1 Knockout Round (7 Teams)</h3>
                <p className="text-white/70 mb-4">This stage consists of two sub-rounds:</p>
                
                <div className="space-y-6 ml-4">
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-300 mb-3">A. Buzzer Quiz Round</h4>
                    <p className="text-white/60 mb-3">The round may be conducted as individual or group participation. The format will be announced on the spot.</p>
                    <p className="text-white/70 mb-3">Scoring follows the Credit System below:</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-white/70">
                        <thead>
                          <tr className="border-b border-white/20">
                            <th className="text-left py-2 px-3">Subject</th>
                            <th className="text-center py-2 px-3">Credit Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-white/10">
                            <td className="py-2 px-3">Mathematics</td>
                            <td className="text-center py-2 px-3">3</td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 px-3">Science</td>
                            <td className="text-center py-2 px-3">3</td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 px-3">Information Technology (IT)</td>
                            <td className="text-center py-2 px-3">2</td>
                          </tr>
                          <tr className="border-b border-white/10">
                            <td className="py-2 px-3">General Knowledge (GK)</td>
                            <td className="text-center py-2 px-3">1</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3">Sports</td>
                            <td className="text-center py-2 px-3">1</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-white/70 mt-3">Scoring Method:</p>
                    <ul className="space-y-1 list-disc list-inside text-white/60 ml-4">
                      <li>Correct Answer: 2 marks</li>
                      <li>Wrong / No Answer: 0 marks</li>
                    </ul>
                    <p className="text-white/70 mt-3 font-medium">Final Quiz Score Calculation:</p>
                    <p className="text-white/50 text-sm ml-4">(Total Correct Answers × 2 × Subject Credit) ÷ 10</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-cyan-300 mb-3">B. Practical Round</h4>
                    <ul className="space-y-2 list-disc list-inside text-white/70">
                      <li>No credit system applies.</li>
                      <li>Timing plays a crucial role.</li>
                      <li>Each team starts with 6000 marks.</li>
                      <li>Marks are reduced every second.</li>
                      <li>The score at the moment of completion will be the team's final practical score.</li>
                    </ul>
                  </div>

                  <div className="bg-cyan-500/10 rounded-xl p-4 border border-cyan-500/30">
                    <p className="text-white font-medium">Advancement Criteria</p>
                    <p className="text-white/70">Total Score = Buzzer Quiz Score + Practical Round Score</p>
                    <p className="text-cyan-300 mt-2">The top 5 schools will advance to the Qualifier Round.</p>
                  </div>
                </div>
              </div>

              {/* 4.2 Qualifier Round */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">4.2 Qualifier Round (5 Teams)</h3>
                <p className="text-white/70 mb-4">This stage also includes:</p>
                <ul className="space-y-2 list-disc list-inside text-white/70 ml-4">
                  <li>Buzzer Quiz Round (same credit system as Knockout Round)</li>
                  <li>Practical Round (same timing and scoring method as Knockout Round)</li>
                </ul>
                <p className="text-white/70 mt-4">Total Score = Quiz Score + Practical Score</p>
                <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/30 mt-4">
                  <p className="text-yellow-300">The top 3 schools will advance to the Grand Final Round.</p>
                </div>
              </div>

              {/* 4.3 Grand Final Round */}
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-4">4.3 Grand Final Round (3 Teams)</h3>
                <ul className="space-y-2 list-disc list-inside text-white/70">
                  <li>The format, rules, and workflow of the Grand Final Round will be revealed on the competition day.</li>
                  <li>The decision of the judges will be final and binding.</li>
                </ul>
              </div>
            </section>

            {/* 5. Organizing Committee Authority */}
            <section className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3" style={{ fontFamily: "'Racing Sans One', cursive" }}>
                <span className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white text-lg font-bold">5</span>
                Organizing Committee Authority
              </h2>
              <ul className="space-y-3 list-disc list-inside text-white/70">
                <li>The organizing committee reserves the right to modify rules if necessary.</li>
                <li>All decisions made by the judges and organizing committee are final.</li>
              </ul>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Rules

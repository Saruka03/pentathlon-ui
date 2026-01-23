import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"
import { motion } from "framer-motion"
import {
  FileText,
  FileSpreadsheet,
  FileImage,
  FileArchive,
  Download,
  Presentation,
} from "lucide-react"
import bg from "../assets/bg.jpg"

interface DocumentItem {
  id: string
  title: string
  description: string
  file_url: string
  file_type: string
}

const getFileIcon = (type: string) => {
  switch (type?.toLowerCase()) {
    case "pdf":
      return <FileText size={40} />
    case "doc":
    case "docx":
      return <FileText size={40} />
    case "xls":
    case "xlsx":
      return <FileSpreadsheet size={40} />
    case "ppt":
    case "pptx":
      return <Presentation size={40} />
    case "jpg":
    case "jpeg":
    case "png":
      return <FileImage size={40} />
    default:
      return <FileArchive size={40} />
  }
}

const UploadDocuments = () => {
  const [documents, setDocuments] = useState<DocumentItem[]>([])
  const [showForm, setShowForm] = useState(false)
  const [search, setSearch] = useState("")

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState<File | null>(null)

  /* Lock scroll */
  useEffect(() => {
    document.body.style.overflow = showForm ? "hidden" : "auto"
  }, [showForm])

  /* Fetch docs */
  const fetchDocuments = async () => {
    const { data } = await supabase
      .from("documents")
      .select("*")
      .order("created_at", { ascending: false })

    if (data) setDocuments(data)
  }

  useEffect(() => {
    fetchDocuments()
  }, [])

  /* Upload */
  const handleSave = async () => {
    if (!title || !file) {
      alert("Title and file required")
      return
    }

    const ext = file.name.split(".").pop() || ""
    const path = `${Date.now()}-${file.name}`

    const { error: uploadError } = await supabase.storage
      .from("documents")
      .upload(path, file)

    if (uploadError) return alert(uploadError.message)

    const { data: urlData } = supabase.storage
      .from("documents")
      .getPublicUrl(path)

    const { error } = await supabase.from("documents").insert({
      title,
      description,
      file_name: file.name,
      file_url: urlData.publicUrl,
      file_type: ext,
    })

    if (error) return alert(error.message)

    setShowForm(false)
    setTitle("")
    setDescription("")
    setFile(null)

    fetchDocuments()
  }

  const filteredDocs = documents.filter(
    (d) =>
      d.title.toLowerCase().includes(search.toLowerCase()) ||
      d.description?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      {/* BACKGROUND */}
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center px-6"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="w-full max-w-6xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10">
          <h1 className="text-3xl font-bold text-white text-center mb-8">
            Upload Documents
          </h1>

          {/* SEARCH */}
          <input
            placeholder="Search documents..."
            className="mb-8 w-full px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="grid gap-6 md:grid-cols-3">
            {/* ADD */}
            <div
              onClick={() => setShowForm(true)}
              className="cursor-pointer h-44 rounded-2xl bg-white/10 border border-dashed border-white/30 flex items-center justify-center text-white text-lg font-semibold"
            >
              + Add Document
            </div>

            {/* CARDS */}
            {filteredDocs.map((doc) => (
              <motion.div
                key={doc.id}
                whileHover={{ scale: 1.05 }}
                className="relative h-44 rounded-2xl bg-white/10 border border-white/20 text-white p-4 flex flex-col justify-between"
              >
                <a
                  href={doc.file_url}
                  target="_blank"
                  className="flex flex-col items-center text-center gap-2"
                >
                  {getFileIcon(doc.file_type)}
                  <p className="font-semibold line-clamp-2">{doc.title}</p>
                  <p className="text-xs opacity-60">
                    {doc.file_type?.toUpperCase()}
                  </p>
                </a>

                {/* DOWNLOAD */}
                <a
                  href={doc.file_url}
                  download
                  className="absolute bottom-3 right-3 p-2 rounded-full bg-blue-500 hover:bg-blue-600"
                >
                  <Download size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="relative w-full max-w-2xl">

            <div className="absolute inset-0 rounded-3xl bg-blue-500/20 blur-3xl opacity-80" />

            <div className="relative bg-white/10 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-10 space-y-8 shadow-[0_0_60px_rgba(59,130,246,0.45)]">
              <h2 className="text-white text-2xl font-bold text-center">
                Upload Document
              </h2>

              <input
                placeholder="Document Title"
                className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <textarea
                placeholder="Description"
                rows={3}
                className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white resize-none"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <label className="cursor-pointer flex flex-col items-center justify-center h-40 rounded-2xl border border-dashed border-white/30 text-white">
                Drag & drop files here
                <span className="opacity-70 text-sm mt-1">or click to browse</span>
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
              </label>

              {file && (
                <p className="text-white text-sm text-center">
                  {file.name}
                </p>
              )}

              <div className="flex justify-end gap-6 pt-4">
                <button
                  onClick={() => setShowForm(false)}
                  className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-8 py-3 rounded-full bg-blue-500 text-white font-semibold shadow-[0_0_20px_rgba(59,130,246,0.8)] hover:shadow-[0_0_35px_rgba(59,130,246,1)] transition"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default UploadDocuments

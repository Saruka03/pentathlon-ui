import { useEffect, useState, useRef } from "react"
import { supabase } from "../lib/supabase"
import { motion } from "framer-motion"
import { Edit2, Trash2 } from "lucide-react"
import ScrollToTop from "../components/ScrollToTop"

interface Announcement {
  id: string
  comment: string
  image_url: string
  created_at: string
}

const Announcements = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [showForm, setShowForm] = useState(false)
  const [showView, setShowView] = useState(false)
  const [viewAnnouncement, setViewAnnouncement] = useState<Announcement | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [comment, setComment] = useState("")
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [existingImageUrl, setExistingImageUrl] = useState("")
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = (showForm || showView) ? "hidden" : "auto"
  }, [showForm, showView])

  /* Fetch Announcements */
  const fetchAnnouncements = async () => {
    try {
      setAnnouncements([])
      await new Promise(resolve => setTimeout(resolve, 100))
      
      const { data: freshData, error: freshError } = await supabase
        .from("announcements")
        .select("id, comment, image_url, created_at")
        .order("created_at", { ascending: false })

      console.log("Fetched announcements:", freshData)
      if (freshError) {
        console.error("Fetch error:", freshError)
      } else if (freshData) {
        setAnnouncements(freshData)
      }
    } catch (err) {
      console.error("Unexpected fetch error:", err)
    }
  }

  useEffect(() => {
    fetchAnnouncements()
  }, [])

  /* Handle image selection */
  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
    }
  }

  /* Open view modal */
  const openViewModal = (announcement: Announcement) => {
    setViewAnnouncement(announcement)
    setShowView(true)
  }

  /* Open edit modal */
  const openEditModal = (announcement: Announcement) => {
    setIsEditing(true)
    setEditingId(announcement.id)
    setComment(announcement.comment)
    setExistingImageUrl(announcement.image_url)
    setImageFile(null)
    setShowForm(true)
  }

  /* Open add modal */
  const openAddModal = () => {
    setIsEditing(false)
    setEditingId(null)
    setComment("")
    setExistingImageUrl("")
    setImageFile(null)
    setShowForm(true)
  }

  /* Delete Announcement */
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this announcement?")) return

    console.log("Deleting announcement:", id)
    const { error } = await supabase
      .from("announcements")
      .delete()
      .eq("id", id)

    console.log("Delete result:", { error })
    if (error) {
      alert(`Failed to delete: ${error.message}`)
    } else {
      await new Promise(resolve => setTimeout(resolve, 300))
      fetchAnnouncements()
    }
  }

  /* Save Announcement (Add or Edit) */
  const handleSubmit = async () => {
    if (!comment.trim()) return alert("Comment is required")
    
    setUploading(true)
    let imageUrl = existingImageUrl

    if (imageFile) {
      const fileExt = imageFile.name.split(".").pop()
      const fileName = `${Date.now()}.${fileExt}`
      const filePath = `${fileName}`

      try {
        const { error: uploadError, data } = await supabase.storage
          .from("announcement-images")
          .upload(filePath, imageFile)

        if (uploadError) {
          console.warn("Image upload failed:", uploadError)
        } else if (data) {
          const bucketUrl = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/announcement-images/`
          imageUrl = `${bucketUrl}${filePath}`
        }
      } catch (e) {
        console.warn("Storage error, saving without new image", e)
      }
    }

    if (isEditing && editingId) {
      console.log("Updating announcement:", editingId)
      const { error } = await supabase
        .from("announcements")
        .update({ comment, image_url: imageUrl })
        .eq("id", editingId)

      console.log("Update result:", { error })
      if (error) {
        setUploading(false)
        return alert(`Failed to update: ${error.message}`)
      }
    } else {
      const { error } = await supabase
        .from("announcements")
        .insert({ comment, image_url: imageUrl })
        .select()

      if (error) {
        setUploading(false)
        return alert(`Failed to save: ${error.message}`)
      }
    }

    setShowForm(false)
    setComment("")
    setImageFile(null)
    setExistingImageUrl("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
    setUploading(false)
    
    await new Promise(resolve => setTimeout(resolve, 500))
    fetchAnnouncements()
  }

  const newestAnnouncement = announcements[0]
  const otherAnnouncements = announcements.slice(1)

  return (
    <>
      {/* Main container - LearnMore style */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="relative min-h-screen overflow-hidden"
      >
        {/* BACKGROUND - LearnMore style */}
        <div className="absolute inset-0 bg-[#050816]" />
        
        {/* Ambient gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-500/30 rounded-full blur-[120px]" />
          <div className="absolute top-[30%] right-[-15%] w-[60%] h-[60%] bg-purple-500/25 rounded-full blur-[140px]" />
          <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] bg-pink-500/20 rounded-full blur-[100px]" />
          <div className="absolute top-[10%] right-[20%] w-[30%] h-[30%] bg-cyan-400/15 rounded-full blur-[120px]" />
        </div>

        {/* Glass overlay */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl" />

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="relative z-10 min-h-screen px-6 py-12"
        >
          {/* Glass panel */}
          <div className="
            max-w-6xl mx-auto
            bg-white/5 backdrop-blur-md
            border border-white/10
            rounded-3xl
            shadow-2xl shadow-black/20
            p-10
          ">
            {/* Header */}
            <div className="flex justify-between items-center mb-12">
              <h1 className="text-3xl font-semibold text-white tracking-wide">
                Announcements
              </h1>
              <button
                onClick={openAddModal}
                className="
                  px-6 py-3 rounded-full
                  bg-white/10 text-white
                  border border-white/20
                  hover:bg-white/20 hover:border-white/30
                  transition-all duration-300
                "
              >
                + Add Announcement
              </button>
            </div>

            {/* Hero Section - newest announcement */}
            {newestAnnouncement && (
              <div
                key={newestAnnouncement.id}
                className="mb-16"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left: Image Card - Clickable */}
                  <motion.div
                    key={`image-${newestAnnouncement.id}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative cursor-pointer group"
                    onClick={() => openViewModal(newestAnnouncement)}
                  >
                    <div className="
                      relative
                      h-[420px] rounded-2xl
                      overflow-hidden
                      shadow-xl
                      group-hover:shadow-2xl transition-shadow duration-300
                    ">
                      {/* Label badge */}
                      <div className="
                        absolute top-4 left-4 z-10
                        px-3 py-1
                        bg-white/10 backdrop-blur-md
                        rounded-full
                        text-xs font-medium text-white
                        border border-white/20
                      ">
                        LATEST
                      </div>

                      {/* Image */}
                      {newestAnnouncement.image_url ? (
                        <img
                          src={newestAnnouncement.image_url}
                          alt="Announcement"
                          className="
                            w-full h-full object-cover
                            transition-transform duration-500
                            group-hover:scale-105
                          "
                        />
                      ) : (
                        <div className="
                          w-full h-full
                          bg-white/5
                          flex items-center justify-center
                        ">
                          <span className="text-6xl">📢</span>
                        </div>
                      )}
                    </div>
                  </motion.div>

                  {/* Right: Content */}
                  <motion.div
                    key={`content-${newestAnnouncement.id}`}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-2 text-white/60">
                      <span className="text-sm font-medium">
                        {new Date(newestAnnouncement.created_at).toLocaleDateString()}
                      </span>
                    </div>

                    <p className="text-white/90 text-lg leading-relaxed line-clamp-4 cursor-pointer hover:text-white/100 transition-colors" onClick={() => openViewModal(newestAnnouncement)}>
                      {newestAnnouncement.comment}
                    </p>

                    {/* View full button */}
                    <button
                      onClick={() => openViewModal(newestAnnouncement)}
                      className="
                        text-white/70 hover:text-white
                        text-sm font-medium
                        transition-colors duration-300
                      "
                    >
                      View full announcement →
                    </button>

                    {/* Edit/Delete buttons */}
                    <div className="flex gap-4 pt-4">
                      <button
                        onClick={() => openEditModal(newestAnnouncement)}
                        className="
                          px-5 py-2.5 rounded-xl
                          bg-white/5 border border-white/20
                          text-white text-sm font-medium
                          hover:bg-white/10 hover:border-white/30
                          transition-all duration-300
                        "
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(newestAnnouncement.id)}
                        className="
                          px-5 py-2.5 rounded-xl
                          bg-white/5 border border-white/20
                          text-white/70 text-sm font-medium
                          hover:bg-red-500/20 hover:border-red-400/30 hover:text-red-400
                          transition-all duration-300
                        "
                      >
                        Delete
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}

            {/* Other Announcements Grid */}
            {otherAnnouncements.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-white mb-8">
                  Previous Announcements
                </h2>

                <div className="flex flex-col gap-6">
                  {otherAnnouncements.map((announcement) => (
                    <motion.div
                      key={announcement.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="
                        flex flex-row gap-6
                        bg-white/5 backdrop-blur-lg
                        border border-white/10
                        rounded-2xl
                        overflow-hidden
                        cursor-pointer
                        hover:bg-white/10 hover:border-white/20
                        transition-all duration-300
                      "
                      onClick={() => openViewModal(announcement)}
                    >
                      {announcement.image_url && (
                        <div className="w-1/3 min-w-[200px] max-w-[300px] overflow-hidden">
                          <img
                            src={announcement.image_url}
                            alt="Announcement"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                      <div className="flex-1 p-6 space-y-4">
                        <p className="text-white/90 whitespace-pre-wrap">
                          {announcement.comment}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-white/50 text-sm">
                            {new Date(announcement.created_at).toLocaleDateString()}
                          </span>
                          <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                            <button
                              onClick={() => openEditModal(announcement)}
                              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                            >
                              <Edit2 size={14} className="text-white/60" />
                            </button>
                            <button
                              onClick={() => handleDelete(announcement.id)}
                              className="p-2 rounded-lg hover:bg-red-500/20 transition-colors"
                            >
                              <Trash2 size={14} className="text-white/60 hover:text-red-400" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {announcements.length === 0 && (
              <div className="text-center text-white/50 py-12">
                No announcements yet
              </div>
            )}
          </div>
        </motion.div>

        {/* Floating Add Button */}
        <button
          onClick={openAddModal}
          className="
            fixed bottom-8 right-8
            w-14 h-14 rounded-full
            bg-white/10 backdrop-blur-lg
            text-white font-semibold
            border border-white/20
            shadow-lg shadow-blue-500/20
            flex items-center justify-center
            hover:bg-white/20 hover:scale-105
            transition-all duration-300
            z-40
          "
        >
          +
        </button>

        {/* Footer */}
        <footer className="relative z-10 bg-white/5 backdrop-blur-lg border-t border-white/10 py-8">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-white/60 text-sm">
              © 2025 Pentathlon. All rights reserved.
            </p>
          </div>
        </footer>
      </motion.section>

      <ScrollToTop />

      {/* VIEW ANNOUNCEMENT MODAL */}
      {showView && viewAnnouncement && (
        <div 
          className="fixed inset-0 bg-[#050816]/80 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          onClick={() => setShowView(false)}
        >
          <div 
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glass Modal */}
            <div className="
              relative
              bg-white/10 backdrop-blur-2xl
              border border-white/15
              rounded-3xl
              shadow-2xl shadow-black/20
              overflow-hidden
            ">
              {/* Header */}
              <div className="p-8 border-b border-white/10">
                <div className="flex justify-between items-start">
                  <span className="text-white/60 text-sm">
                    {new Date(viewAnnouncement.created_at).toLocaleDateString()}
                  </span>
                  <button
                    onClick={() => setShowView(false)}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {viewAnnouncement.image_url && (
                  <div className="mb-6 rounded-2xl overflow-hidden">
                    <img
                      src={viewAnnouncement.image_url}
                      alt="Announcement"
                      className="w-full h-auto"
                    />
                  </div>
                )}
                <p className="text-white/90 text-lg leading-relaxed">
                  {viewAnnouncement.comment}
                </p>
              </div>

              {/* Actions */}
              <div className="p-6 border-t border-white/10 flex justify-end gap-4">
                <button
                  onClick={() => {
                    setShowView(false)
                    openEditModal(viewAnnouncement)
                  }}
                  className="
                    px-5 py-2.5 rounded-xl
                    bg-white/5 border border-white/20
                    text-white text-sm font-medium
                    hover:bg-white/10 hover:border-white/30
                    transition-all duration-300
                  "
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    setShowView(false)
                    handleDelete(viewAnnouncement.id)
                  }}
                  className="
                    px-5 py-2.5 rounded-xl
                    bg-white/5 border border-white/20
                    text-white/70 text-sm font-medium
                    hover:bg-red-500/20 hover:border-red-400/30 hover:text-red-400
                    transition-all duration-300
                  "
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ADD/EDIT FORM MODAL */}
      {showForm && (
        <div 
          className="fixed inset-0 bg-[#050816]/80 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          onClick={() => setShowForm(false)}
        >
          <div 
            className="relative w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glass Modal */}
            <div className="
              relative
              bg-white/10 backdrop-blur-2xl
              border border-white/15
              rounded-3xl
              shadow-2xl shadow-black/20
              overflow-hidden
            ">
              {/* Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-white">
                    {isEditing ? "Edit Announcement" : "Add Announcement"}
                  </h2>
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Form */}
              <div className="p-6 space-y-6">
                <div>
                  <label className="block text-white/70 text-sm mb-2">
                    Comment
                  </label>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows={5}
                    className="
                      w-full px-4 py-3 rounded-xl
                      bg-white/5 border border-white/20
                      text-white placeholder-white/40
                      focus:outline-none focus:border-white/40
                      transition-colors duration-300
                    "
                    placeholder="Enter announcement comment..."
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">
                    Image (optional)
                  </label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageSelect}
                    className="
                      w-full px-4 py-3 rounded-xl
                      bg-white/5 border border-white/20
                      text-white file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-white/10 file:text-white
                      hover:file:bg-white/20
                      transition-colors duration-300
                    "
                  />
                </div>

                {existingImageUrl && (
                  <div className="relative">
                    <p className="text-white/60 text-sm mb-2">Current image:</p>
                    <img
                      src={existingImageUrl}
                      alt="Current"
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="p-6 border-t border-white/10 flex justify-end gap-4">
                <button
                  onClick={() => setShowForm(false)}
                  className="
                    px-5 py-2.5 rounded-xl
                    bg-white/5 border border-white/20
                    text-white text-sm font-medium
                    hover:bg-white/10 hover:border-white/30
                    transition-all duration-300
                  "
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={uploading}
                  className="
                    px-5 py-2.5 rounded-xl
                    bg-white/10 border border-white/20
                    text-white text-sm font-medium
                    hover:bg-white/20 hover:border-white/30
                    disabled:opacity-50
                    transition-all duration-300
                  "
                >
                  {uploading ? "Saving..." : "Save"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Announcements

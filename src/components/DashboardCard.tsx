
interface Props {
  title: string
  onClick: () => void
}

const DashboardCard = ({ title, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="
        cursor-pointer
        h-40
        rounded-2xl
        bg-white/10
        backdrop-blur-lg
        border border-white/20
        flex items-center justify-center
        text-white text-xl font-semibold
        transition
        hover:bg-white/20
        hover:scale-105
      "
    >
      {title}
    </div>
  )
}

export default DashboardCard

import Sidebar from "./Sidebar"

export default function PlayerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen gap-2 px-2 pt-2">
      <aside>
        <Sidebar />
      </aside>
      <main>{children}</main>
    </div>
  )
}

import { Outlet } from "@remix-run/react"
import Sidebar from "~/components/sidebar"

export default function MainLayout() {
  return (
    <div className="flex flex-1 border-2 border-yellow-400">
      <Sidebar />
      <Outlet />
    </div>
  )
}

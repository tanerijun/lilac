export default function Sidebar() {
  return (
    <div className="w-[300px] border-2 border-red-500">
      <nav className="flex flex-col gap-4" aria-label="sidebar">
        <div>
          <ul>
            <li>Home</li>
            <li>Search</li>
          </ul>
        </div>
        <div>Your library</div>
      </nav>
    </div>
  )
}

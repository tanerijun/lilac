import { RiSearch2Line } from "react-icons/ri"

export default function Sidebar() {
  return (
    <nav className="flex h-full w-[320px] flex-col gap-2 border border-red-600">
      <div className="rounded-md border border-yellow-600 p-4">
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-4">
            <span>Home</span>
          </li>
          <li className="flex items-center gap-4">
            <RiSearch2Line />
            <span>Search</span>
          </li>
        </ul>
      </div>
      <div className="border border-emerald-950">
        <header className="flex justify-between">
          <button>Your Library</button>
          <div>
            <button>+</button>
            <button>{"->"}</button>
          </div>
        </header>

        <div>
          <ul id="filter">
            <li>
              <button>Playlists</button>
              <button>Artists</button>
              <button>Albums</button>
              <button>Podcasts & Shows</button>
            </li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between">
            <button>Search</button>

            <button>Sort by</button>
          </div>
          <div>
            <ul>
              <li>Album1</li>
              <li>Album2</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

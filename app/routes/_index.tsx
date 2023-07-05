import type { V2_MetaFunction } from "@remix-run/cloudflare"

export const meta: V2_MetaFunction = () => {
  return [{ title: "Lilac" }, { name: "description", content: "A Spotify client" }]
}

export default function Index() {
  return <div className="fire container mx-3 flex bg-red-300">Hello from Lilac</div>
}

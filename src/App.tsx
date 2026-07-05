import { SECTIONS } from "@/constants.ts"
import PortalSection from "@/components/portal-section.tsx"

export function App() {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 p-6">
      {SECTIONS.map((section) => (
        <PortalSection key={section.title} {...section} />
      ))}
    </div>
  )
}

export default App

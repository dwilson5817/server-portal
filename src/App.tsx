import { SECTIONS } from "@/constants.ts"
import PortalSection from "@/components/portal-section.tsx"
import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input.tsx"

interface UseFilteredSectionsProps {
  search: string
}

function useFilteredSections({ search }: UseFilteredSectionsProps) {
  return useMemo(
    () =>
      SECTIONS.map((section) => ({
        ...section,
        services: section.services.filter((service) => {
          return (
            service.title.toLowerCase().includes(search.toLowerCase()) ||
            service.description.toLowerCase().includes(search.toLowerCase()) ||
            service.domain.toLowerCase().includes(search.toLowerCase())
          )
        }),
      })).filter((section) => section.services.length > 0),
    [search]
  )
}

export function App() {
  const [search, setSearch] = useState("")
  const filteredSections = useFilteredSections({ search })

  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 p-6">
      <div className="ml-auto max-w-xs">
        <Input
          type="search"
          placeholder="Search..."
          autoFocus
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {filteredSections.map((section) => (
        <PortalSection key={section.title} {...section} />
      ))}
    </div>
  )
}

export default App

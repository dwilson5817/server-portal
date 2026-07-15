import { SECTIONS } from "@/constants.ts"
import PortalSection from "@/components/portal-section.tsx"
import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input.tsx"
import Logo from "@/assets/logo.svg"

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
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 p-6 md:gap-y-8">
      <div className="grid grid-cols-1 items-center gap-y-6 md:grid-cols-2 md:gap-y-8">
        <div className="flex flex-1 items-center gap-3">
          <img src={Logo} alt="Logo" className="h-6 md:h-8" />
          <h1 className="inline-block bg-linear-to-r from-white to-gray-200 bg-clip-text text-lg font-bold text-transparent md:text-2xl">
            Server Portal
          </h1>
        </div>
        <div className="flex md:max-w-xs">
          <Input
            type="search"
            placeholder="Search..."
            autoFocus
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      {filteredSections.map((section) => (
        <PortalSection key={section.title} {...section} />
      ))}
    </div>
  )
}

export default App

import type { Service } from "@/types.ts"
import ServiceCard from "@/components/service-card.tsx"
import { ItemGroup } from "@/components/ui/item.tsx"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx"
import { Button } from "@/components/ui/button.tsx"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible.tsx"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface PortalSectionProps {
  title: string
  description: string
  services: Service[]
}

const PortalSection = ({
  title,
  description,
  services,
}: PortalSectionProps) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex flex-col gap-2"
    >
      <Card className="mx-auto w-full max-w-4xl">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <CardAction>
            <CollapsibleTrigger
              render={
                <Button variant="secondary" size="icon" className="size-12" />
              }
            >
              {isOpen ? <ChevronUp /> : <ChevronDown />}
              <span className="sr-only">Toggle details</span>
            </CollapsibleTrigger>
          </CardAction>
        </CardHeader>
        <CollapsibleContent>
          <CardContent className="-mb-(--card-spacing)">
            <div className="-mx-(--card-spacing) space-y-4 border-t bg-muted/50 px-(--card-spacing) py-4 text-sm leading-relaxed">
              <ItemGroup className="gap-4">
                {services.map((service) => (
                  <ServiceCard key={service.title} service={service} />
                ))}
              </ItemGroup>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  )
}

export default PortalSection

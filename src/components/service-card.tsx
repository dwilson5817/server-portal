import type { Project, Service } from "@/types.ts"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "./ui/item"
import { buttonVariants } from "./ui/button"
import { ExternalLinkIcon } from "lucide-react"

interface ServiceCardProps {
  service: Service | Project
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Item key={service.title} variant="outline" role="listitem">
      {"image" in service ? (
        <ItemMedia variant="image">
          <img src={service.image} alt={service.title} width={32} height={32} />
        </ItemMedia>
      ) : null}
      <ItemContent>
        <ItemTitle className="line-clamp-1">{service.title}</ItemTitle>
        <ItemDescription>{service.description}</ItemDescription>
      </ItemContent>
      <ItemActions>
        {service.links.map((link) => (
          <a
            key={`${service.title} ${link.text}`}
            href={link.url}
            className={buttonVariants({ variant: "default", size: "sm" })}
          >
            {link.text}
            <ExternalLinkIcon className="ml-1 h-4 w-4" />
          </a>
        ))}
      </ItemActions>
    </Item>
  )
}

export default ServiceCard

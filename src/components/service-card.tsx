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

interface ServiceCardProps {
  service: Service | Project
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Item
      key={service.title}
      variant="outline"
      role="listitem"
      render={
        <div>
          {"image" in service && (
            <ItemMedia variant="image">
              <img
                src={service.image}
                alt={service.title}
                width={32}
                height={32}
                className="rounded-xs"
              />
            </ItemMedia>
          )}
          <ItemContent>
            <ItemTitle className="line-clamp-1">
              {service.title} -{" "}
              <span className="text-muted-foreground">{service.domain}</span>
            </ItemTitle>
            <ItemDescription>{service.description}</ItemDescription>
          </ItemContent>
          <ItemActions>
            {service.links.map((link) => (
              <a
                key={`${service.title} ${link.text}`}
                href={link.url}
                className={buttonVariants({ variant: "default", size: "lg" })}
              >
                {link.text}
              </a>
            ))}
          </ItemActions>
        </div>
      }
    />
  )
}

export default ServiceCard

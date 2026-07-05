import type { Service } from "@/types.ts"
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
  service: Service
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
            <ItemMedia variant="image" className="rounded-md">
              <img
                src={service.image}
                alt={service.title}
                width={32}
                height={32}
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

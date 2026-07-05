export interface Link {
  text: string
  url: string
}

export interface Service {
  image?: string
  title: string
  description: string
  domain: string
  links: Link[]
}

export interface Section {
  title: string
  description: string
  services: Service[]
}

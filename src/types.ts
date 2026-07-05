export interface Link {
  text: string
  url: string
}

export interface Service {
  title: string
  description: string
  domain: string
  links: Link[]
}

export interface Project extends Service {
  image: string
}

export interface Section {
  title: string
  description: string
  services: (Service | Project)[]
}

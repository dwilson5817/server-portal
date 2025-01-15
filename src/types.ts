export interface Link {
    text: string,
    url: string,
}

export interface Service {
    title: string,
    subtitle: string,
    description: string,
    links: Link[]
}

export interface Project extends Service {
    image: string
}

export type ProjectLink = {
  label: string
  href: string
  kind: "preview" | "repository"
}

export type Project = {
  title: string
  image: string
  imageAlt: string
  stack: string
  description: string
  links: ProjectLink[]
}
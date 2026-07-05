import AT from "./assets/antrim-tiling-website-128px.png"
import CC from "./assets/check-character-calculator-128px.png"
import UW from "./assets/utility-website-128px.png"
import type { Project, Section, Service } from "./types.ts"

const EXTERNAL_SERVICES: Service[] = [
  {
    title: "OVHcloud",
    description: "Cloud computing company",
    domain: "www.ovhcloud.com",
    links: [{ text: "Manager", url: "https://www.ovh.com/manager/" }],
  },
  {
    title: "Amazon Web Services",
    description: "IT service management company",
    domain: "aws.amazon.com",
    links: [
      { text: "Root", url: "https://console.aws.amazon.com/" },
      { text: "SSO", url: "https://dylanw.awsapps.com/start/" },
    ],
  },
  {
    title: "rsync.net",
    description: "Cloud storage",
    domain: "www.rsync.net",
    links: [
      { text: "Home", url: "https://rsync.net/index.html" },
      { text: "Account", url: "https://rsync.net/am" },
    ],
  },
]

const INFRASTRUCTURE: Service[] = [
  {
    title: "Proxmox VE",
    description: "Open source server virtualization management",
    domain: "london.dylanw.net",
    links: [{ text: "London", url: "https://london.dylanw.net/" }],
  },
  {
    title: "mailcow",
    description: "Mailserver suite",
    domain: "mail.dylanw.net",
    links: [
      { text: "Admin", url: "https://mail.dylanw.net/admin/" },
      { text: "Login", url: "https://mail.dylanw.net/" },
    ],
  },
  {
    title: "Grafana",
    description: "Open-source monitoring platform",
    domain: "monitoring.dylanw.net",
    links: [{ text: "Open", url: "https://monitoring.dylanw.net/" }],
  },
  {
    title: "Vault",
    description: "Secrets management",
    domain: "vault.dylanw.net",
    links: [{ text: "Open", url: "https://vault.dylanw.net/" }],
  },
  {
    title: "Prometheus",
    description: "Monitoring system & time series database",
    domain: "prometheus.dylanw.net",
    links: [
      { text: "Query", url: "https://prometheus.dylanw.net/query" },
      { text: "Alerts", url: "https://prometheus.dylanw.net/alerts" },
    ],
  },
  {
    title: "DMARC Analyser",
    description: "DMARC reports analysis tool",
    domain: "dmarc.dylanw.net",
    links: [
      { text: "Dashboard", url: "https://dmarc.dylanw.net/dashboard" },
      { text: "Reports", url: "https://dmarc.dylanw.net/reports" },
    ],
  },
  {
    title: "Pocket ID",
    description: "OIDC provider",
    domain: "auth.dylanw.net",
    links: [{ text: "Open", url: "https://auth.dylanw.net/" }],
  },
]

const PROJECTS: (Service | Project)[] = [
  {
    title: "GitLab",
    description: "Web-based DevOps lifecycle tool",
    domain: "gitlab.dylanw.dev",
    links: [
      { text: "Explore", url: "https://gitlab.dylanw.dev/" },
      { text: "Sign in", url: "https://gitlab.dylanw.dev/users/sign_in" },
    ],
  },
  {
    image: UW,
    title: "Utility Website",
    description: "A collection of small utilities",
    domain: "tools.dylanw.dev",
    links: [{ text: "Open", url: "https://tools.dylanw.dev/" }],
  },
  {
    image: CC,
    title: "Check Character Calculator",
    description: "Calculate the check character in an Argos stockroom",
    domain: "check.dylanw.dev",
    links: [{ text: "Open", url: "https://check.dylanw.dev/" }],
  },
  {
    image: AT,
    title: "Antrim Tiling",
    description: "Professional tiling services in County Antrim",
    domain: "www.antrimtiling.com",
    links: [{ text: "Open", url: "https://www.antrimtiling.com/" }],
  },
]

const PROFESSIONAL: Service[] = [
  {
    title: "Personal Website",
    description: "My personal website",
    domain: "www.dylanwilson.dev",
    links: [{ text: "Open", url: "https://www.dylanwilson.dev/" }],
  },
  {
    title: "Personal Blog",
    description: "My personal website",
    domain: "blog.dylanwilson.dev",
    links: [{ text: "Open", url: "https://www.dylanwilson.dev/" }],
  },
  {
    title: "Resume Website",
    description: "A simple PDF viewer which displays my CV.",
    domain: "resume.dylanw.dev",
    links: [{ text: "Open", url: "https://resume.dylanwilson.dev/" }],
  },
]

const MINERSREALM: Service[] = [
  {
    title: "MinersRealm",
    description: "Survival, creative and minigames Minecraft server ",
    domain: "www.minersrealm.net",
    links: [{ text: "Open", url: "https://www.minersrealm.net/" }],
  },
  {
    title: "Pterodactyl",
    description: "Game server management panel",
    domain: "panel.minersrealm.net",
    links: [{ text: "Open", url: "https://panel.minersrealm.net/" }],
  },
]

export const SECTIONS: Section[] = [
  {
    title: "External",
    description: "External services",
    services: EXTERNAL_SERVICES,
  },
  {
    title: "Infrastructure",
    description: "dylanw.net",
    services: INFRASTRUCTURE,
  },
  {
    title: "Projects",
    description: "dylanw.dev",
    services: PROJECTS,
  },
  {
    title: "Professional",
    description: "dylanwilson.dev",
    services: PROFESSIONAL,
  },
  {
    title: "Minecraft",
    description: "minersrealm.net",
    services: MINERSREALM,
  },
]

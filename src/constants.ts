import AT from "./assets/antrim-tiling-website-128px.png"
import CC from "./assets/check-character-calculator-128px.png"
import DW from "./assets/personal-website-128px.png"
import MR from "./assets/miners-realm-128px.png"
import RW from "./assets/resume-website-128px.png"
import UW from "./assets/utility-website-128px.png"
import type { Project, Section, Service } from "./types.ts"

export const SERVICES: Service[] = [
  {
    title: "OVHcloud",
    subtitle: "Cloud computing company",
    description:
      "OVH is a French cloud computing company which offers VPS, dedicated servers, and other web services.  The company was founded in 1999 and is headquartered in Roubaix, France.",
    links: [{ text: "Manager", url: "https://www.ovh.com/manager/" }],
  },
  {
    title: "Proxmox VE",
    subtitle: "Open source server virtualization management",
    description:
      "An open-source software server for virtualization management. It is a hosted Type-1 hypervisor that can run operating systems including Linux and Windows on x64 hardware.",
    links: [{ text: "London", url: "https://london.dylanw.net/" }],
  },
  {
    title: "Amazon Web Services",
    subtitle: "IT service management company",
    description:
      "Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis",
    links: [
      { text: "Root", url: "https://console.aws.amazon.com/" },
      { text: "SSO", url: "https://dylanw.awsapps.com/start/" },
    ],
  },
  {
    title: "GitLab",
    subtitle: "Web-based DevOps lifecycle tool",
    description:
      "With GitLab, you get a complete CI/CD toolchain in a single application. One interface. One conversation. One permission model. Thousands of features.",
    links: [
      { text: "Explore", url: "https://gitlab.dylanw.dev/" },
      { text: "Sign in", url: "https://gitlab.dylanw.dev/users/sign_in" },
    ],
  },
  {
    title: "mailcow",
    subtitle: "The mailserver suite",
    description:
      "mailcow is a mail server suite based on Dovecot, Postfix and other open source software, that provides a modern web UI for user/server administration.",
    links: [
      { text: "Admin", url: "https://mail.dylanw.net/admin/" },
      { text: "Login", url: "https://mail.dylanw.net/" },
    ],
  },
  {
    title: "Grafana",
    subtitle: "Open-source monitoring platform",
    description:
      "Grafana is a multi-platform open source analytics and interactive visualization web application. It provides charts, graphs, and alerts for the web when connected to supported data sources.",
    links: [{ text: "Access", url: "https://monitoring.dylanw.net/" }],
  },
  {
    title: "Pterodactyl",
    subtitle: "Open-source game server management panel",
    description:
      "Game server management panel built with PHP, React, and Go. Designed with security in mind all game servers in isolated Docker containers while exposing a beautiful and intuitive UI to end users.",
    links: [{ text: "Access", url: "https://panel.minersrealm.net/" }],
  },
  {
    title: "Vault",
    subtitle: "Secrets management",
    description:
      "Vault secures, stores, and tightly controls access to tokens, passwords, certificates, API keys, and other secrets in modern computing.",
    links: [{ text: "Access", url: "https://vault.dylanw.net/" }],
  },
  {
    title: "rsync.net",
    subtitle: "Cloud storage",
    description:
      "We give you an empty UNIX filesystem to access with any SSH tool.  Built on ZFS for data security and fault tolerance",
    links: [
      { text: "Home", url: "https://rsync.net/index.html" },
      { text: "Account", url: "https://rsync.net/am" },
    ],
  },
  {
    title: "Prometheus",
    subtitle: "Monitoring system & time series database",
    description:
      "An open-source monitoring system with a dimensional data model, flexible query language, efficient time series database and modern alerting approach.",
    links: [
      { text: "Query", url: "https://prometheus.dylanw.net/query" },
      { text: "Alerts", url: "https://prometheus.dylanw.net/alerts" },
    ],
  },
  {
    title: "DMARC Analyser",
    subtitle: "DMARC reports analysis tool",
    description:
      "A simple web application to monitor your authentication and analyse DMARC reports across domains.",
    links: [
      { text: "Dashboard", url: "https://dmarc.dylanw.net/dashboard" },
      { text: "Reports", url: "https://dmarc.dylanw.net/reports" },
    ],
  },
  {
    title: "Pocket ID",
    subtitle: "OIDC provider",
    description:
      "A simple and easy-to-use OIDC provider that allows users to authenticate with their passkeys to your services.",
    links: [{ text: "Access", url: "https://auth.dylanw.net/" }],
  },
]

export const PROJECTS: Project[] = [
  {
    image: DW,
    title: "Personal Website",
    subtitle: "www.dylanwilson.dev",
    description: "My personal website",
    links: [{ text: "Access", url: "https://www.dylanwilson.dev/" }],
  },
  {
    image: UW,
    title: "Utility Website",
    subtitle: "utils.dylanw.dev",
    description: "Link shortening and image hosting website",
    links: [{ text: "Access", url: "https://utils.dylanw.dev/" }],
  },
  {
    image: CC,
    title: "Check Character Calculator",
    subtitle: "check.dylanw.dev",
    description: "Calculate check character",
    links: [{ text: "Access", url: "https://check.dylanw.dev/" }],
  },
  {
    image: RW,
    title: "Resume Website",
    subtitle: "resume.dylanw.dev",
    description: "A simple PDF viewer which displays my CV.",
    links: [{ text: "Access", url: "https://resume.dylanw.dev/" }],
  },
  {
    image: AT,
    title: "Antrim Tiling",
    subtitle: "www.antrimtiling.com",
    description: "Professional tiling services in County Antrim",
    links: [{ text: "Access", url: "https://www.antrimtiling.com/" }],
  },
  {
    image: MR,
    title: "MinersRealm",
    subtitle: "www.minersrealm.net",
    description: "Survival, creative and minigames Minecraft server ",
    links: [{ text: "Access", url: "https://www.minersrealm.net/" }],
  },
]

export const SECTIONS: Section[] = [
  {
    title: "Services",
    description: "A list of services",
    services: SERVICES,
  },
  {
    title: "Projects",
    description: "A list of projects",
    services: PROJECTS,
  },
]

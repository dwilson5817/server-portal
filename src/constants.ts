import AT from './assets/AT-128px.png';
import CC from './assets/CC-128px.png';
import DW from './assets/DW-128px.png';
import MR from './assets/MR-128px.png';
import RW from './assets/RW-128px.png';
import UW from './assets/UW-128px.png';
import { Project, Service } from './types.ts';

export const SERVICES: Service[] = [
    {
        title: "ReliableSite",
        subtitle: "Dedicated server provider",
        description: "ReliableSite is a Dedicated Server provider out of NY, Miami, and Los Angeles that offers affordable and reliable server solutions for small to large.",
        links: [
            { text: "Billing", url: "https://payments.reliablesite.net/" },
            { text: "Dedicated", url: "https://dedicated.reliablesite.net/" },
            { text: "Support", url: "https://support.reliablesite.net/" },
        ],
    },
    {
        title: "Proxmox VE",
        subtitle: "Open source server virtualization management",
        description: "An open-source software server for virtualization management. It is a hosted Type-1 hypervisor that can run operating systems including Linux and Windows on x64 hardware.",
        links: [
            { text: "New York", url: "https://new-york.dylanw.net/" },
        ],
    },
    {
        title: "Amazon Web Services",
        subtitle: "IT service management company",
        description: "Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis",
        links: [
            { text: "Root", url: "https://console.aws.amazon.com/" },
            { text: "SSO", url: "https://dylanw.awsapps.com/start/" },
        ],
    },
    {
        title: "GitLab",
        subtitle: "Web-based DevOps lifecycle tool",
        description: "With GitLab, you get a complete CI/CD toolchain in a single application. One interface. One conversation. One permission model. Thousands of features.",
        links: [
            { text: "Explore", url: "https://gitlab.dylanw.dev/" },
            { text: "Sign in", url: "https://gitlab.dylanw.dev/users/sign_in" },
        ],
    },
    {
        title: "mailcow",
        subtitle: "The mailserver suite",
        description: "mailcow is a mail server suite based on Dovecot, Postfix and other open source software, that provides a modern web UI for user/server administration.",
        links: [
            { text: "Admin", url: "https://mail.dylanw.net/" },
            { text: "Webmail", url: "https://mail.dylanw.net/SOGo/" },
        ],
    },
    {
        title: "Grafana",
        subtitle: "Open-source monitoring platform",
        description: "Grafana is a multi-platform open source analytics and interactive visualization web application. It provides charts, graphs, and alerts for the web when connected to supported data sources.",
        links: [
            { text: "Access", url: "https://monitoring.dylanw.net/" },
        ],
    },
    {
        title: "Pterodactyl",
        subtitle: "Open-source game server management panel",
        description: "Game server management panel built with PHP, React, and Go. Designed with security in mind all game servers in isolated Docker containers while exposing a beautiful and intuitive UI to end users.",
        links: [
            { text: "Access", url: "https://panel.minersrealm.net/" },
        ],
    },
    {
        title: "Vault",
        subtitle: "Secrets management",
        description: "Vault secures, stores, and tightly controls access to tokens, passwords, certificates, API keys, and other secrets in modern computing.",
        links: [
            { text: "Access", url: "https://vault.dylanw.net/" },
        ],
    },
]

export const PROJECTS: Project[] = [
    {
        image: DW,
        title: "Personal Website",
        subtitle: "www.dylanwilson.dev",
        description: "My personal website",
        links: [
            { text: "Access", url: "https://www.dylanwilson.dev/" },
        ],
    },
    {
        image: UW,
        title: "Utility Website",
        subtitle: "utils.dylanw.dev",
        description: "Link shortening and image hosting website",
        links: [
            { text: "Access", url: "https://utils.dylanw.dev/" },
        ],
    },
    {
        image: CC,
        title: "Check Character Calculator",
        subtitle: "check.dylanw.dev",
        description: "Calculate check character",
        links: [
            { text: "Access", url: "https://check.dylanw.dev/" },
        ],
    },
    {
        image: RW,
        title: "Resume Website",
        subtitle: "resume.dylanw.dev",
        description: "A simple PDF viewer which displays my CV.",
        links: [
            { text: "Access", url: "https://resume.dylanw.dev/" },
        ],
    },
    {
        image: AT,
        title: "Antrim Tiling",
        subtitle: "www.antrimtiling.com",
        description: "Professional tiling services in County Antrim",
        links: [
            { text: "Access", url: "https://www.antrimtiling.com/" },
        ],
    },
    {
        image: MR,
        title: "MinersRealm",
        subtitle: "www.minersrealm.net",
        description: "Survival, creative and minigames Minecraft server ",
        links: [
            { text: "Access", url: "https://www.minersrealm.net/" },
        ],
    },
]
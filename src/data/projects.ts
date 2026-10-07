import type { Project } from "../ts/models/project"
import blogImage from "../assets/images/projects/blog.png"
import ecommerceImage from "../assets/images/projects/e-com.png"
import performanceImage from "../assets/images/projects/performance.png"
import restaurantImage from "../assets/images/projects/restaurant.png"
import saathiImage from "../assets/images/projects/saathi.png"

export const projects: Project[] = [
  {
    title: "Performance Monitoring System",
    image: performanceImage,
    imageAlt: "Performance Monitoring System Screenshot",
    stack:
      "Java / Spring Boot / Microservices / Kafka / PostgreSQL / Docker / React / TypeScript",
    description:
      "A microservices-based monitoring platform for collecting, processing, and visualizing system performance metrics. Includes service discovery with Eureka, an API Gateway, JWT-based authentication, asynchronous Kafka notifications, and a React + TypeScript monitoring dashboard.",
    links: [
      {
        label: "Repo URL",
        href: "https://github.com/lakshaybxt/performance-monitoring-system",
        kind: "repository",
      },
    ],
  },
  {
    title: "Event-Driven E-Commerce",
    image: ecommerceImage,
    imageAlt: "Event Driven E-Commerce Screenshot",
    stack:
      "Java 21 / Spring Boot / Microservices / Kafka / PostgreSQL / Docker / Spring Security",
    description:
      "A microservices-based e-commerce platform with dedicated services for products, orders, users, and payments. Built around distributed service architecture with Kafka, PostgreSQL, Docker, service discovery, and CI workflows.",
    links: [
      {
        label: "Live Preview",
        href: "https://seasons-e-commerce.netlify.app/",
        kind: "preview",
      },
      {
        label: "Repo URL",
        href: "https://github.com/lakshaybxt/event-driven-ecommerce",
        kind: "repository",
      },
    ],
  },
  {
    title: "Safe Route Finder",
    image: saathiImage,
    imageAlt: "Safe Route Finder Screenshot",
    stack: "Java / Spring Boot / Docker / TypeScript / React",
    description:
      "A location-based safety and crime awareness app that uses real-time APIs to display area safety scores, recent crime reports, and testimonials.",
    links: [
      {
        label: "Documentation",
        href: "https://western-aluminum-170.notion.site/Saathi-App-Documentation-21fe44bc5a7f80d38857f80537adb39e",
        kind: "preview",
      },
      {
        label: "Repo URL",
        href: "https://github.com/lakshaybxt/Saathi-Safe-Route-Finder.git",
        kind: "repository",
      },
    ],
  },
  {
    title: "Restaurant Review Platform",
    image: restaurantImage,
    imageAlt: "Restaurant Review Platform Screenshot",
    stack: "Java / Spring Boot / Elasticsearch / Keycloak / Docker / Kibana",
    description:
      "A restaurant review platform with Keycloak-based authentication, Elasticsearch-powered full-text search, geolocation-based restaurant discovery, review management, photo uploads, and Kibana analytics.",
    links: [
      {
        label: "Documentation",
        href: "https://western-aluminum-170.notion.site/Restaurant-Review-Platform-API-Documentation-204e44bc5a7f8029a4e3d3d6153a6ffa?pvs=74",
        kind: "preview",
      },
      {
        label: "Repo URL",
        href: "https://github.com/lakshaybxt/restaurant-review-platform",
        kind: "repository",
      },
    ],
  },
  {
    title: "Blog Platform",
    image: blogImage,
    imageAlt: "Blog Platform Screenshot",
    stack:
      "Java 21 / Spring Boot / Spring Security / JWT / PostgreSQL / MapStruct / Docker",
    description:
      "A secure multi-user blogging backend providing REST APIs for users, posts, comments, tags, and categories. Features JWT authentication, DTO mapping with MapStruct, validation, centralized exception handling, and PostgreSQL containerization with Docker.",
    links: [
      {
        label: "Documentation",
        href: "https://western-aluminum-170.notion.site/API-Documentation-Blog-Platform-1f4e44bc5a7f80e6867bdc48c53e4b43?pvs=74",
        kind: "preview",
      },
      {
        label: "Repo URL",
        href: "https://github.com/lakshaybxt/Blog-Platform",
        kind: "repository",
      },
    ],
  },
]

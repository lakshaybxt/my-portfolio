import kafkaImage from "../assets/images/kafka-blog.png"
import microservicesImage from "../assets/images/microservices-blog.png"
import ragImage from "../assets/images/rag-blog.png"

export type BlogPost = {
  title: string
  href: string
  image: string
  imageAlt: string
  date: string
  readingTime: string
  description: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [

  {
    title: "What Is RAG (Retrieval-Augmented Generation)? How It Works Explained",
    href: "https://medium.com/@lakshaybisht.dev/what-is-rag-retrieval-augmented-generation-how-it-works-explained-d8700c83d9a0",
    image: ragImage,
    imageAlt: "Retrieval-Augmented Generation (RAG) Architecture Blog Thumbnail",
    date: "October 14, 2026",
    readingTime: "5 min read",
    description:
      "An introduction to Retrieval-Augmented Generation (RAG) and how it works, covering document ingestion, text chunking, embeddings, vector databases, semantic search, context retrieval, and LLM-powered answer generation.",
    tags: [
      "#rag",
      "#generativeai",
      "#artificialintelligence",
      "#java",
      "#softwareengineering",
    ],
  },
  {
    title:
      "Kafka in Microservices: Concepts, Architecture & Real-Time Data Pipeline",
    href: "https://medium.com/@lakshaybisht.dev/kafka-in-microservices-concepts-architecture-setup-and-real-time-data-pipeline-with-kafka-cfb5d2922970",
    image: kafkaImage,
    imageAlt: "Kafka in Microservices Blog Thumbnail",
    date: "November 27, 2025",
    readingTime: "8 min read",
    description:
      "A practical guide to using Apache Kafka with microservices, covering producers, consumers, partitions, offsets, consumer groups, KRaft, Spring Boot integration, Kafka Connect, Debezium, and a real-time MySQL → Kafka → PostgreSQL data pipeline.",
    tags: ["#kafka", "#microservices", "#springboot", "#debezium", "#eventdriven"],
  },
  {
    title:
      "Microservices Architecture & Comparison: Microservices vs Monoliths",
    href: "https://medium.com/@lakshaybisht.dev/microservices-architecture-comparison-microservices-vs-monoliths-89d9a3133e24",
    image: microservicesImage,
    imageAlt: "Microservices Architecture Blog Thumbnail",
    date: "August 18, 2025",
    readingTime: "3 min read",
    description:
      "An introduction to microservices architecture and how it compares with monolithic applications, covering service boundaries, database-per-service, synchronous and asynchronous communication, API Gateway, service discovery, and event-driven architecture.",
    tags: [
      "#microservices",
      "#java",
      "#springboot",
      "#architecture",
      "#softwareengineering",
    ],
  },
]

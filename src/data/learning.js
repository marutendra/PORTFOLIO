// Add, remove, or rename learning items here. The UI updates automatically.
export const learningTopics = [
  {
    category: "Java",
    summary: "Core language fundamentals, object-oriented programming, collections, streams, and concurrency.",
    topics: [
      "Core Java",
      "OOP",
      "Exception Handling",
      "Inner Classes",
      "Wrapper Classes",
      "Enums",
      "Generics",
      "Collections",
      "Stream API",
      "Collectors",
      "Multithreading",
      "Synchronization",
      "Locks",
      "ReadWriteLock",
      "Thread Communication",
      "Deadlocks",
    ],
  },
  {
    category: "Spring Boot",
    summary: "Backend application development with APIs, validation, persistence, security, and authentication.",
    topics: [
      "Spring Core",
      "Dependency Injection",
      "REST APIs",
      "Spring Data JPA",
      "Validation",
      "Global Exception Handling",
      "Spring Security",
      "CSRF",
      "JWT",
      "OAuth2",
      "Junit And Mockito",
      
    ],
  },
  {
  category: "Microservices",
  summary: "Building distributed backend systems with independent services, service discovery, inter-service communication, and fault tolerance.",
  topics: [
    "Microservices Architecture",
    "Service Decomposition",
    "Spring Cloud",
    "Netflix Eureka",
    "Service Discovery",
    "OpenFeign",
    "Inter-Service Communication",
    "API Gateway",
    "Circuit Breaker",
    "Resilience4j",
    "Distributed Tracing"
  ],
},
{
  category: "Testing",
  summary: "Backend application testing to ensure code reliability, correctness, and maintainability.",
  topics: [
    "Unit Testing",
    "Integration Testing",
    "JUnit 5",
    "Mockito",
    "Mocking and Stubbing",
    "Assertions",
    "Spring Boot Testing",
    "MockMvc"
  ],
},
  {
    category: "DataBases and Persistence",
    summary: "Learned database connectivity, CRUD operations, JDBC, Hibernate, JPA, Spring Data JPA, and MongoDB.",
    topics: [
      "JDBC",
      "Hibernate",
      "Spring Data JPA ",
      "MongoDB",
      "MySQL",
      "Entity Realtionship",
      "CRUD Operations",
      
    ],
  },
  {
    category: "DSA",
    summary: "Structured problem solving with foundational data structures and algorithms.",
    topics: [
      "Arrays",
      "Searching",
      "Sorting",
      "Recursion",
      "Problem Solving",
    ],
  },

];

export const learningTimeline = [
  {
    period: "Foundation",
    title: "Java Core Concepts",
    description: "Built confidence with syntax, OOP, exception handling, collections, generics, and streams.",
  },
  {
    period: "Backend",
    title: "Spring Boot Development",
    description: "Started creating REST APIs with layered architecture, validation, JPA, and exception handling.",
  },
  {
    period: "Security",
    title: "Authentication And Authorization",
    description: "Practicing Spring Security, JWT, OAuth2, and secure API design patterns.",
  },
  {
    period: "Growth",
    title: "Projects And Problem Solving",
    description: "Applying backend concepts through portfolio projects and regular DSA practice.",
  },
];

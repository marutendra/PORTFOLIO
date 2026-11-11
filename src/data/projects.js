// Add project cards and expanded details here.
export const projects = [
    {
  name: "E-Commerce Microservices Backend",
  description:
    "A backend-focused e-commerce application built using a microservices architecture, consisting of independent User, Order, and Seller services with separate MongoDB databases.",
  techStack: [
    "Java",
    "Spring Boot",
    "Microservices",
    "Spring Cloud",
    "Eureka Server",
    "OpenFeign",
    "Spring Security",
    "JWT",
    "MongoDB",
    "REST APIs"
  ],
  github: "https://github.com/marutendra/E-Commerce-Backend",
  why: "I built this project to understand microservices architecture, service discovery, inter-service communication, JWT-based authentication, and independent database management.",
  features: [
    "Three independent microservices: User, Order, and Seller",
    "Service discovery using Eureka Server",
    "Inter-service communication using OpenFeign with Request/Response DTOs",
    "JWT-based authentication and user management",
    "Cart management: add items, update quantity, and remove items",
    "Order creation from cart, order history, status tracking, and cancellation",
    "Seller management, product management, and category management",
    "Stock management with automatic inventory updates during order processing"
  ],
  challenges: [
    "Managing communication between independent microservices",
    "Implementing service discovery using Eureka Server",
    "Handling inter-service requests using OpenFeign and DTOs",
    "Managing separate MongoDB databases for each microservice",
    "Maintaining stock consistency between Order-Service and Seller-Service",
    "Implementing JWT-based authentication and securing APIs"
  ],
  learned: [
    "Microservices architecture and service decomposition",
    "Service discovery using Netflix Eureka",
    "Inter-service communication using OpenFeign",
    "JWT authentication using Spring Security",
    "Independent database management in microservices",
    "DTO-based communication between services",
    "Building scalable REST APIs using Spring Boot"
  ],
  future: [
    "Implement API Gateway using Spring Cloud Gateway",
    "Integrate Resilience4j for circuit breaker and fault tolerance",
    "Add payment gateway integration",
    "Implement centralized logging and monitoring",
    "Containerize services using Docker"
  ],
  },
  {
  name: "Railway Reservation System",
  description:
    "A full-stack railway reservation application with a Spring Boot backend and HTML, CSS, and JavaScript frontend, providing train search, ticket booking, seat availability, and PNR status tracking.",
  techStack: [
    "Java",
    "Spring Boot",
    "Spring Data MongoDB",
    "MongoDB",
    "Spring Security",
    "JWT",
    "REST APIs",
    "HTML",
    "CSS",
    "JavaScript"
  ],
  github: "https://github.com/marutendra/MyRailway",
  why: "I built this project to understand real-world railway reservation workflows, REST API development, JWT authentication, role-based authorization, and backend system design.",
  features: [
    "Train search and availability checking",
    "Ticket booking and reservation management",
    "Real-time PNR status tracking",
    "JWT-based authentication and authorization",
    "Separate authentication flows for passengers and administrators",
    "Admin panel for train management",
    "Train schedule updates and booking oversight",
    "Protected REST APIs for administrative operations"
  ],
  challenges: [
    "Designing REST APIs for railway reservation workflows",
    "Implementing secure JWT-based authentication",
    "Managing role-based access for passengers and administrators",
    "Handling train search and seat availability operations",
    "Structuring backend services for maintainability",
    "Integrating frontend functionality with backend REST APIs"
  ],
  learned: [
    "Spring Boot REST API development",
    "Spring Security and JWT authentication",
    "Role-based access control",
    "MongoDB database integration",
    "Frontend and backend integration",
    "Secure API design and authorization",
    "Implementing real-world booking workflows"
  ],
  future: [
    "Implement payment gateway integration",
    "Add seat selection and coach management",
    "Implement automated ticket cancellation and refund processing",
    "Add email and SMS booking notifications",
    "Introduce Redis for caching train availability",
    "Improve concurrent booking and seat allocation handling"
  ],
},
  {
  name: "Hotel FrontDesk System",
  description:
    "A secure hotel management REST API with JWT authentication and role-based authorization for managing hotel staff, guests, managers, and founders.",

  techStack: [
    "Java 17",
    "Spring Boot",
    "Spring Security",
    "JWT",
    "MongoDB",
    "Maven",
    "Lombok",
  ],

  github: "https://github.com/marutendra/Hotel-FrontDesk-System",

  why:
    "I built it to implement secure backend authentication and authorization while practicing role-based access control in a real-world hotel management scenario.",

  features: [
    "JWT-based authentication",
    "Role-based authorization",
    "Secure REST APIs with Spring Security",
    "CRUD operations",
    "MongoDB persistence",
    "Password hashing using BCrypt",
  ],

  challenges: [
    "Implementing JWT authentication securely",
    "Designing role-based access control",
    "Restricting APIs according to user roles",
    "Handling authentication and authorization errors",
  ],

  learned: [
    "Spring Security fundamentals",
    "JWT authentication flow",
    "Role-based authorization",
    "BCrypt password hashing",
    "Securing REST APIs",
    "Designing backend access-control logic",
  ],

  future: [
    "Add refresh token support",
    "Add Swagger API documentation",
    "Dockerize the application",
    "Add Redis caching",
    "Add email verification",
    "Add unit testing",
  ],
},
{
  name: "Email Service API",
  description:
    "A Spring Boot REST API for sending emails through Gmail SMTP, designed for handling contact form submissions securely and reliably.",

  techStack: [
    "Java",
    "Spring Boot",
    "Maven",
    "Gmail SMTP",
  ],

  github: "https://github.com/marutendra/emailservice",
  liveDemo: "",

  why:
    "I built it to understand how backend applications integrate with external email services and to implement a practical contact-form email workflow.",

  features: [
    "Send emails through Gmail SMTP",
    "REST API endpoint for contact form submissions",
    "Request validation",
    "SMTP authentication",
    "Backend email service integration",
  ],

  challenges: [
    "Configuring Gmail SMTP correctly",
    "Handling SMTP authentication securely",
    "Validating incoming email requests",
    "Handling email-sending failures gracefully",
  ],

  learned: [
    "Integrating external services with Spring Boot",
    "SMTP configuration",
    "Request validation in REST APIs",
    "Service-layer implementation",
    "Handling external service failures",
  ],

  future: [
    "Add email templates",
    "Add centralized exception handling",
    "Add unit and integration testing",
    "Add rate limiting",
    "Support multiple email providers",
  ],
},
];



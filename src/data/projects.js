// Add project cards and expanded details here.
export const projects = [
  {
    name: "Expense Tracker",
    description:
      "A backend-focused expense management app for tracking income, spending categories, and monthly summaries.",
    techStack: ["Java", "Spring Boot", "Spring Data JPA", "MongoDB", "REST APIs"],
    github: "https://github.com/your-username/expense-tracker",
    liveDemo: "",
    why: "I built it to practice real-world CRUD flows, REST API design, database relationships, and validation.",
    features: [
      "Add, update, delete, and filter expenses",
      "Category-wise spending summaries",
      "REST endpoints for income and expense records",
      "Validation and clean error responses",
    ],
    challenges: [
      "Designing clear entity relationships",
      "Keeping API responses consistent",
      "Handling invalid input gracefully",
    ],
    learned: [
      "Spring Data JPA repositories",
      "DTO-style request and response thinking",
      "Service-layer separation",
    ],
    future: [
      "Add JWT authentication",
      "Add monthly reports",
      "Create a simple frontend dashboard",
    ],
  },
  {
    name: "NaamJapa Counter",
    description:
      "A focused counter app for tracking mantra repetitions with clean state management .",
    techStack: ["Java", "Spring Boot", "REST APIs", "MongoDB"],
    github: "https://github.com/marutendra/namajapacounter",
    liveDemo: "",
    why: "I built it to combine a meaningful daily-use idea with backend persistence.",
    features: [
      "Create and continue counting sessions",
      "Save total repetitions",
      "View daily progress",
      "Reset or update session counts",
    ],
    challenges: [
      "Keeping count updates reliable",
      "Structuring simple but useful data models",
      "Making the app easy to resume later",
    ],
    learned: [
      "Practical CRUD design",
      "User Loginand Verification System",
      "Persisting user progress",
      "Thinking about user habits and simple workflows",
    ],
    future: [
      "Add streak tracking",
      "Add mobile-friendly reminders",
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

  github: "YOUR_HOTEL_FRONTDESK_GITHUB_URL",
  liveDemo: "",

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



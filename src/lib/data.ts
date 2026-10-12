import { Course, Technology, TechnologyUpdate, BlogPost, Resource, InterviewQuestion, ProjectItem, Instructor } from "@/types";

export const GYADEEN: Instructor = {
  id: "gyadeen-001",
  name: "Gyadeen",
  headline: "Salesforce Developer | AI & Automation Enthusiast | Technology Educator",
  avatar: "/images/gyadeen.jpg",
  bio: "Senior Salesforce Developer and AI Automation specialist with deep expertise across Apex, LWC, Agentforce, Data Cloud, and Enterprise Integrations. Passionate about empowering engineers and career pivoters with actionable, industry-grade architectures.",
  linkedin: "https://www.linkedin.com/in/gyadeen-ahirwar-282b2b223/",
  email: "gyadeenahirwar563@gmail.com",
  github: "https://github.com/Gyadeenahirwar",
};

export const COURSES: Course[] = [
  {
    id: "c-001",
    title: "Salesforce Developer Fundamentals",
    slug: "salesforce-developer-fundamentals",
    subtitle: "Master the foundational pillars of the Salesforce development platform from the ground up.",
    description: "A comprehensive zero-to-hero primer covering the core Salesforce developer architecture, metadata architecture, SOQL/SOSL queries, Apex basics, Governor Limits, and modern developer tooling (SFDX / Code Builder / VS Code). Perfect for beginners and transitioning admins.",
    thumbnail: "/images/courses/salesforce-dev-fundamentals.jpg",
    category: "Salesforce",
    level: "BEGINNER",
    status: "PUBLISHED",
    isFree: true,
    price: 0,
    currency: "INR",
    durationHours: 14.5,
    lessonsCount: 32,
    studentsCount: 3420,
    rating: 4.9,
    reviewsCount: 428,
    technologies: ["Salesforce", "Apex", "SOQL", "SFDX"],
    isFeatured: true,
    requirements: [
      "Basic understanding of programming concepts (variables, loops, conditions)",
      "Free Salesforce Developer Edition Org",
      "VS Code installed with Salesforce Extension Pack",
    ],
    learningOutcomes: [
      "Understand multi-tenant cloud architecture and governor limits",
      "Write high-efficiency SOQL and SOSL queries avoiding N+1 anti-patterns",
      "Develop custom Apex classes, methods, and unit tests with 90%+ code coverage",
      "Deploy and manage scratch orgs and source-tracked metadata using modern CLI",
    ],
    modules: [
      {
        id: "m-1",
        title: "Module 1: Salesforce Architecture & Developer Setup",
        orderIndex: 1,
        lessons: [
          { id: "l-1", title: "Welcome & Course Roadmap", slug: "welcome-roadmap", durationMin: 12, orderIndex: 1, isFreePreview: true, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { id: "l-2", title: "Multi-Tenant Architecture & Governor Limits Explained", slug: "multi-tenant-architecture", durationMin: 22, orderIndex: 2, isFreePreview: true },
          { id: "l-3", title: "Setting Up VS Code, CLI, and Developer Orgs", slug: "dev-environment-setup", durationMin: 18, orderIndex: 3, isFreePreview: false },
        ],
      },
      {
        id: "m-2",
        title: "Module 2: SOQL, SOSL & Data Manipulation",
        orderIndex: 2,
        lessons: [
          { id: "l-4", title: "Writing Robust SOQL Queries & Relationship Traversal", slug: "soql-relationship-queries", durationMin: 25, orderIndex: 4, isFreePreview: false },
          { id: "l-5", title: "Bulk DML Operations and Database Class Methods", slug: "bulk-dml-operations", durationMin: 30, orderIndex: 5, isFreePreview: false },
        ],
      },
      {
        id: "m-3",
        title: "Module 3: Object-Oriented Apex & Testing",
        orderIndex: 3,
        lessons: [
          { id: "l-6", title: "Apex OOP: Classes, Interfaces & Polymorphism", slug: "apex-oop-principles", durationMin: 35, orderIndex: 6, isFreePreview: false },
          { id: "l-7", title: "Writing Production Test Classes with TestDataFactory", slug: "unit-testing-best-practices", durationMin: 40, orderIndex: 7, isFreePreview: false },
        ],
      },
    ],
    faqs: [
      { question: "Is this course really 100% free?", answer: "Yes, this entire foundational course is completely free for all community members." },
      { question: "Will I receive a certificate of completion?", answer: "Yes, completing all modules and quizzes issues a downloadable, verifiable certificate." },
    ],
    instructor: GYADEEN,
    updatedAt: "2026-09-15",
  },
  {
    id: "c-002",
    title: "Apex & Trigger Masterclass",
    slug: "apex-and-trigger-masterclass",
    subtitle: "Enterprise-grade Apex patterns, Trigger frameworks, concurrency management, and async processing.",
    description: "Deep dive into production Apex engineering. Learn battle-tested trigger handler frameworks (one trigger per object, context routing), recursion prevention, unit of work, asynchronous Apex (Queueable, Batchable, Schedulable), and defensive programming against governor bottlenecks.",
    thumbnail: "/images/courses/apex-trigger-masterclass.jpg",
    category: "Apex",
    level: "INTERMEDIATE",
    status: "PUBLISHED",
    isFree: false,
    price: 1499,
    discountPrice: 999,
    currency: "INR",
    durationHours: 22.0,
    lessonsCount: 48,
    studentsCount: 1890,
    rating: 4.95,
    reviewsCount: 310,
    technologies: ["Salesforce", "Apex", "Triggers", "Async Apex", "Enterprise Patterns"],
    isFeatured: true,
    requirements: [
      "Familiarity with basic Apex syntax and SOQL queries",
      "Salesforce Developer Edition Org",
    ],
    learningOutcomes: [
      "Implement scalable Trigger Handler patterns with recursion prevention",
      "Design resilient Queueable and Batch Apex jobs with transaction finalizers",
      "Master Heap Size, CPU Timeout, and SOQL 101 governor limit debugging",
      "Apply the Enterprise Apex Library (Selector, Domain, Service, and UnitOfWork layers)",
    ],
    modules: [
      {
        id: "m-1",
        title: "Module 1: Advanced Trigger Engineering",
        orderIndex: 1,
        lessons: [
          { id: "l-8", title: "The Anatomy of Trigger Execution & Context Variables", slug: "trigger-execution-contexts", durationMin: 24, orderIndex: 1, isFreePreview: true },
          { id: "l-9", title: "Building a Production Trigger Handler Framework", slug: "trigger-handler-framework", durationMin: 38, orderIndex: 2, isFreePreview: false },
          { id: "l-10", title: "Preventing Trigger Recursion in Complex Order of Execution", slug: "trigger-recursion-prevention", durationMin: 30, orderIndex: 3, isFreePreview: false },
        ],
      },
      {
        id: "m-2",
        title: "Module 2: Asynchronous Apex Mastery",
        orderIndex: 2,
        lessons: [
          { id: "l-11", title: "Queueable Apex vs Future vs Batch: When and Why", slug: "async-apex-comparison", durationMin: 32, orderIndex: 4, isFreePreview: false },
          { id: "l-12", title: "Chaining Queueables & Transaction Finalizers", slug: "chaining-queueables-finalizers", durationMin: 45, orderIndex: 5, isFreePreview: false },
        ],
      },
    ],
    faqs: [
      { question: "How long do I retain access to the course?", answer: "Enrolling gives you lifetime access, including all future updates and downloadable source code." },
      { question: "Are real enterprise scenarios covered?", answer: "Yes, every module uses real enterprise production scenarios rather than toy examples." },
    ],
    instructor: GYADEEN,
    updatedAt: "2026-09-28",
  },
  {
    id: "c-003",
    title: "Lightning Web Components (LWC) Pro",
    slug: "lightning-web-components-pro",
    subtitle: "Modern Web Standards in Salesforce: Reactive properties, Lightning Data Service, and Workspace API.",
    description: "Master modern frontend development on Salesforce using Lightning Web Components. From reactivity models, component communication (Pub/Sub, LMS), LDS wire adapters, custom UI components, to rendering optimization and headless LWC for flow screens and quick actions.",
    thumbnail: "/images/courses/lwc-pro.jpg",
    category: "LWC",
    level: "INTERMEDIATE",
    status: "PUBLISHED",
    isFree: false,
    price: 1999,
    discountPrice: 1299,
    currency: "INR",
    durationHours: 26.5,
    lessonsCount: 54,
    studentsCount: 2210,
    rating: 4.92,
    reviewsCount: 385,
    technologies: ["LWC", "JavaScript ES6+", "HTML5", "SLDS", "Lightning Message Service"],
    isFeatured: true,
    requirements: [
      "Modern JavaScript ES6+ basics (Promises, Arrow functions, Array methods)",
      "HTML & CSS fundamentals",
      "Salesforce Developer Edition Org",
    ],
    learningOutcomes: [
      "Build high-performance LWC components matching Salesforce Lightning Design System (SLDS)",
      "Harness Wire Service, `@wire`, and imperative Apex calling with error handling",
      "Master cross-component communication using Lightning Message Service (LMS)",
      "Build complex modal dialogs, datatables with inline editing, and responsive dashboards",
    ],
    modules: [
      {
        id: "m-1",
        title: "Module 1: Modern LWC Core Architecture",
        orderIndex: 1,
        lessons: [
          { id: "l-13", title: "LWC Philosophy: Standard Web Components on Salesforce", slug: "lwc-philosophy-standards", durationMin: 20, orderIndex: 1, isFreePreview: true },
          { id: "l-14", title: "Component Lifecycle Hooks Explained Deeply", slug: "lwc-lifecycle-hooks", durationMin: 34, orderIndex: 2, isFreePreview: false },
        ],
      },
      {
        id: "m-2",
        title: "Module 2: Reactive Data & Lightning Data Service",
        orderIndex: 2,
        lessons: [
          { id: "l-15", title: "Lightning Data Service: getRecord, updateRecord & Cache Invalidation", slug: "lds-deep-dive", durationMin: 42, orderIndex: 3, isFreePreview: false },
          { id: "l-16", title: "Lightning Message Service (LMS) in Multi-Page Consoles", slug: "lightning-message-service", durationMin: 36, orderIndex: 4, isFreePreview: false },
        ],
      },
    ],
    faqs: [
      { question: "Does this course cover Jest unit testing for LWC?", answer: "Yes, dedicated modules cover unit testing with the `@salesforce/sfdx-lwc-jest` framework." },
    ],
    instructor: GYADEEN,
    updatedAt: "2026-10-01",
  },
  {
    id: "c-004",
    title: "Agentforce Fundamentals",
    slug: "agentforce-fundamentals",
    subtitle: "Demystifying Autonomous AI Agents, Atlas Reasoning Engine, and Actions in Salesforce.",
    description: "Learn how Salesforce's landmark Agentforce revolutionizes enterprise automation with autonomous, goal-driven agents. Master the Atlas Reasoning Engine, Agent Studio, Topics, Instructions, Guardrails, and grounding with Data Cloud.",
    thumbnail: "/images/courses/agentforce-fundamentals.jpg",
    category: "Agentforce",
    level: "BEGINNER",
    status: "PUBLISHED",
    isFree: true,
    price: 0,
    currency: "INR",
    durationHours: 10.0,
    lessonsCount: 24,
    studentsCount: 4120,
    rating: 4.98,
    reviewsCount: 520,
    technologies: ["Agentforce", "AI", "Atlas Engine", "Prompt Studio", "Data Cloud"],
    isFeatured: true,
    requirements: [
      "Basic understanding of Salesforce CRM concepts",
      "No prior AI / Machine Learning mathematics required",
    ],
    learningOutcomes: [
      "Understand the shift from deterministic chatbots to autonomous Agentforce reasoning",
      "Configure Agent Topics, Action Triggers, and Safety Guardrails",
      "Ground agent reasoning with Data Cloud unified customer graphs",
      "Test, inspect, and evaluate agent conversations in Agent Studio",
    ],
    modules: [
      {
        id: "m-1",
        title: "Module 1: The Autonomous Agent Era",
        orderIndex: 1,
        lessons: [
          { id: "l-17", title: "What is Agentforce and Atlas Reasoning Engine?", slug: "what-is-agentforce-atlas", durationMin: 18, orderIndex: 1, isFreePreview: true },
          { id: "l-18", title: "Agent Studio Walkthrough & Architecture", slug: "agent-studio-tour", durationMin: 26, orderIndex: 2, isFreePreview: true },
        ],
      },
    ],
    faqs: [
      { question: "Do I need an enterprise license to learn Agentforce?", answer: "No, we guide you through Salesforce Developer Edition orgs and free Trailhead agent playgrounds." },
    ],
    instructor: GYADEEN,
    updatedAt: "2026-10-04",
  },
  {
    id: "c-005",
    title: "Agentforce Real-World Projects & Custom Actions",
    slug: "agentforce-real-world-projects",
    subtitle: "Build production autonomous AI agents connected to custom Apex, External APIs, and Flow.",
    description: "Go beyond basic configurations: build end-to-end autonomous agents that interact with legacy ERPs, trigger custom Apex actions, execute multi-step business logic, and autonomously resolve high-volume customer tickets with human-in-the-loop escalations.",
    thumbnail: "/images/courses/agentforce-projects.jpg",
    category: "Agentforce",
    level: "ADVANCED",
    status: "UPCOMING",
    isFree: false,
    price: 2499,
    discountPrice: 1699,
    currency: "INR",
    durationHours: 18.0,
    lessonsCount: 38,
    studentsCount: 0,
    rating: 5.0,
    reviewsCount: 0,
    technologies: ["Agentforce", "Apex Invocable", "REST API", "Data Cloud", "Prompt Engineering"],
    isFeatured: true,
    requirements: [
      "Completion of Agentforce Fundamentals",
      "Solid understanding of Apex and Salesforce Flows",
    ],
    learningOutcomes: [
      "Develop custom Invocable Apex actions parameterized for LLM agent execution",
      "Connect Agentforce with external REST services using Named Credentials",
      "Implement multi-agent routing between Service Agents and Sales Coaches",
      "Audit agent reasoning tokens, execution trails, and safety compliance",
    ],
    modules: [],
    faqs: [
      { question: "When will this course launch?", answer: "This course is scheduled to launch next month. Register to get early bird notifications and 40% launch discount." },
    ],
    instructor: GYADEEN,
    updatedAt: "2026-10-05",
  },
  {
    id: "c-006",
    title: "Salesforce Integration & REST API Masterclass",
    slug: "salesforce-integration-and-rest-api",
    subtitle: "Connect Salesforce to the world: Custom REST APIs, Named Credentials, Webhooks, and Event-Driven Architecture.",
    description: "The complete engineering blueprint for enterprise integrations. Build custom REST web services with `@RestResource`, consume external REST/SOAP APIs with OAuth 2.0 PKCE, configure Named Credentials & External Credentials, stream events with Platform Events and Change Data Capture (CDC), and implement idempotency.",
    thumbnail: "/images/courses/salesforce-integration-api.jpg",
    category: "Integration",
    level: "ADVANCED",
    status: "PUBLISHED",
    isFree: false,
    price: 1899,
    discountPrice: 1199,
    currency: "INR",
    durationHours: 24.0,
    lessonsCount: 44,
    studentsCount: 1640,
    rating: 4.96,
    reviewsCount: 275,
    technologies: ["REST API", "Named Credentials", "OAuth 2.0", "Platform Events", "Apex"],
    isFeatured: true,
    requirements: [
      "Intermediate Apex experience",
      "Basic understanding of HTTP request methods and JSON payloads",
    ],
    learningOutcomes: [
      "Architect inbound REST web services with robust error handling and status codes",
      "Configure modern OAuth 2.0 External Credentials without hard-coded tokens",
      "Design event-driven architectures with Salesforce Platform Events and CometD / PubSub API",
      "Implement retry mechanisms, batch syncs, and webhook verification",
    ],
    modules: [
      {
        id: "m-1",
        title: "Module 1: Inbound & Outbound REST Engineering",
        orderIndex: 1,
        lessons: [
          { id: "l-19", title: "Building Secure Custom REST Services with @RestResource", slug: "custom-rest-services", durationMin: 32, orderIndex: 1, isFreePreview: true },
          { id: "l-20", title: "Configuring Modern Named Credentials & External Credentials", slug: "named-credentials-guide", durationMin: 28, orderIndex: 2, isFreePreview: false },
        ],
      },
    ],
    faqs: [
      { question: "Does this cover OAuth 2.0 flows?", answer: "Yes, including Web Server flow, JWT Bearer flow, and Client Credentials flow." },
    ],
    instructor: GYADEEN,
    updatedAt: "2026-09-20",
  },
];

export const TECHNOLOGIES: Technology[] = [
  {
    id: "tech-sf",
    name: "Salesforce",
    slug: "salesforce",
    iconName: "Cloud",
    color: "#00a1e0",
    category: "Cloud CRM",
    description: "The world's #1 AI CRM platform. Architecture, development patterns, lifecycle management, and core ecosystem engineering.",
    updatesCount: 18,
    coursesCount: 5,
  },
  {
    id: "tech-af",
    name: "Agentforce",
    slug: "agentforce",
    iconName: "Bot",
    color: "#6366f1",
    category: "Autonomous AI",
    description: "Autonomous AI agents reasoning across enterprise CRM, data graphs, and external tools to transform service and sales workflows.",
    updatesCount: 14,
    coursesCount: 2,
  },
  {
    id: "tech-ai",
    name: "AI & Machine Learning",
    slug: "ai",
    iconName: "Sparkles",
    color: "#ec4899",
    category: "Artificial Intelligence",
    description: "Large Language Models, vector embeddings, retrieval-augmented generation (RAG), and agentic workflows for software engineers.",
    updatesCount: 12,
    coursesCount: 2,
  },
  {
    id: "tech-dc",
    name: "Data Cloud / Data 360",
    slug: "data-cloud",
    iconName: "Database",
    color: "#0ea5e9",
    category: "Data Platform",
    description: "Real-time unified customer data platforms, zero-copy architecture with Snowflake and BigQuery, and identity resolution.",
    updatesCount: 9,
    coursesCount: 1,
  },
  {
    id: "tech-gcp",
    name: "Google Cloud",
    slug: "google-cloud",
    iconName: "Server",
    color: "#4285f4",
    category: "Cloud Infrastructure",
    description: "Google Cloud SQL, BigQuery, Vertex AI, and serverless compute pipelines powering enterprise-scale architectures.",
    updatesCount: 11,
    coursesCount: 1,
  },
  {
    id: "tech-web",
    name: "Web & Fullstack",
    slug: "web-development",
    iconName: "Code2",
    color: "#10b981",
    category: "Fullstack Engineering",
    description: "Next.js, TypeScript, React 19, Tailwind CSS, REST APIs, and modern developer tooling for building high-performance web applications.",
    updatesCount: 8,
    coursesCount: 2,
  },
];

export const TECHNOLOGY_UPDATES: TechnologyUpdate[] = [
  {
    id: "upd-01",
    title: "Salesforce Unveils Agentforce 2.0 with Dynamic Multi-Agent Collaboration",
    slug: "salesforce-agentforce-2-multi-agent-collaboration",
    summary: "Salesforce has announced groundbreaking upgrades to the Atlas Reasoning Engine, allowing autonomous agents to dynamically negotiate, delegate tasks, and maintain shared contextual state across Service and Sales domains.",
    content: "The latest Agentforce release introduces collaborative agent topologies where specialist agents (such as Billing Investigator and Schedule Optimizer) work in concert under an Orchestration Agent. Grounding pipelines now support sub-second zero-copy lookups against Data Cloud vector stores without copying relational records.",
    technology: "Agentforce",
    technologySlug: "agentforce",
    publishedAt: "2026-10-04",
    author: "Gyadeen",
    readTime: "3 min read",
    tags: ["Agentforce", "AI", "Salesforce", "Atlas Engine"],
    featured: true,
  },
  {
    id: "upd-02",
    title: "Data Cloud Zero-Copy Integration with Google BigQuery Reaches General Availability",
    slug: "data-cloud-zero-copy-google-bigquery-ga",
    summary: "Enterprises can now federate data bidirectionally between Salesforce Data Cloud and Google Cloud BigQuery without ETL pipelines, reducing pipeline latency to zero.",
    content: "With Zero-Copy data federation, Salesforce users can query petabyte-scale BigQuery analytical tables directly within Flow, Apex, and Agentforce actions. Simultaneously, BigQuery ML models can access unified Salesforce customer graph data directly using open Iceberg table formats.",
    technology: "Data Cloud / Data 360",
    technologySlug: "data-cloud",
    publishedAt: "2026-09-29",
    author: "Gyadeen",
    readTime: "4 min read",
    tags: ["Data Cloud", "Google Cloud", "BigQuery", "Zero-Copy"],
    featured: true,
  },
  {
    id: "upd-03",
    title: "Apex 2026 Innovations: Native JSON Deserialization Performance Boost",
    slug: "apex-2026-json-deserialization-performance",
    summary: "New compiler-level optimizers in the Apex runtime deliver up to 4x faster JSON parsing and lower heap allocation during large REST API response processing.",
    content: "Salesforce developers handling megabyte-scale API payloads in outbound callouts can now take advantage of enhanced stream-based JSON tokens, avoiding classic apex heap limit exceptions (12MB/6MB) during bulk integrations.",
    technology: "Salesforce",
    technologySlug: "salesforce",
    publishedAt: "2026-09-22",
    author: "Gyadeen",
    readTime: "2 min read",
    tags: ["Apex", "Performance", "REST API", "Salesforce"],
    featured: false,
  },
  {
    id: "upd-04",
    title: "Vertex AI Studio Adds Enterprise Grounding with Private Data Adapters",
    slug: "vertex-ai-studio-private-data-adapters",
    summary: "Google Cloud expands Gemini 1.5 enterprise grounding capabilities, enabling developers to link private document repositories with audit-compliant citation logs.",
    content: "For engineers building custom LLM backends to supplement CRM data, Google Cloud Vertex AI now provides turnkey connector agents with automatic chunking, metadata extraction, and enterprise IAM permission boundary inheritance.",
    technology: "Google Cloud",
    technologySlug: "google-cloud",
    publishedAt: "2026-09-18",
    author: "Gyadeen",
    readTime: "3 min read",
    tags: ["Google Cloud", "Vertex AI", "Gemini", "Enterprise"],
    featured: false,
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b-01",
    title: "Understanding Trigger.new vs Trigger.old: The Comprehensive Field-Level Guide",
    slug: "understanding-trigger-new-vs-trigger-old",
    excerpt: "Master the exact mechanics of Apex context variables, DML event availability, read-only constraints, and clean change-detection patterns.",
    content: `When building robust Salesforce automation, understanding exactly when and how context variables like \`Trigger.new\` and \`Trigger.old\` operate is the difference between clean code and intermittent production defects.

### The Core Difference

- **\`Trigger.new\`**: Returns a list of the sObject records with the **new / proposed** version of the data. Available in **Insert**, **Update**, and **Undelete** triggers.
- **\`Trigger.old\`**: Returns a list of the sObject records with the **old / pre-modification** version of the data. Available in **Update** and **Delete** triggers.

### Context Availability Matrix

| Event | Trigger.new | Trigger.old | Trigger.newMap | Trigger.oldMap |
| :--- | :--- | :--- | :--- | :--- |
| **before insert** | Available (Modifiable) | null | null | null |
| **after insert** | Available (Read-only) | null | Available | null |
| **before update** | Available (Modifiable) | Available (Read-only) | Available | Available |
| **after update** | Available (Read-only) | Available (Read-only) | Available | Available |
| **before delete** | null | Available (Read-only) | null | Available |
| **after delete** | null | Available (Read-only) | null | Available |

### Production Change-Detection Pattern

Here is the battle-tested pattern to detect whether a specific field changed during an update:

\`\`\`apex
public with sharing class OpportunityTriggerHelper {
    public static void handleStageChange(List<Opportunity> newOpps, Map<Id, Opportunity> oldOppMap) {
        List<Opportunity> stageChangedOpps = new List<Opportunity>();
        
        for (Opportunity opp : newOpps) {
            Opportunity oldOpp = oldOppMap.get(opp.Id);
            // Check if StageName specifically changed to Closed Won
            if (opp.StageName != oldOpp.StageName && opp.StageName == 'Closed Won') {
                stageChangedOpps.add(opp);
            }
        }
        
        if (!stageChangedOpps.isEmpty()) {
            NotificationService.sendExecutiveAlert(stageChangedOpps);
        }
    }
}
\`\`\`

Always avoid running logic unconditionally in update triggers; always verify field delta!`,
    category: "Salesforce",
    author: GYADEEN,
    coverImage: "/images/courses/apex-trigger-masterclass.jpg",
    publishedAt: "2026-10-02",
    readTimeMin: 5,
    viewsCount: 1420,
    tags: ["Apex", "Triggers", "Best Practices", "Salesforce"],
    isFeatured: true,
  },
  {
    id: "b-02",
    title: "How to Build Custom Invocable Actions for Agentforce in Apex",
    slug: "build-custom-invocable-actions-for-agentforce",
    excerpt: "Turn your Apex business logic into tools that autonomous AI agents can reason about and invoke reliably.",
    content: `Agentforce relies on clear semantic contracts to understand what actions exist and when to invoke them. The bridge between your CRM codebase and the Atlas Reasoning Engine is the \`@InvocableMethod\` annotation.

### Anatomy of an Agentforce Invocable Action

To ensure an LLM agent uses your action properly, you must provide rich descriptions for both the method and each individual input/output parameter.

\`\`\`apex
public with sharing class CaseResolutionAgentService {
    
    public class RequestInput {
        @InvocableVariable(
            label='Case Record ID'
            description='The 18-character Salesforce Id of the Case record to expedite'
            required=true
        )
        public Id caseId;
        
        @InvocableVariable(
            label='Priority Tier'
            description='Escalation level: High, Critical, or Executive'
            required=true
        )
        public String priorityTier;
    }
    
    public class ResponseOutput {
        @InvocableVariable(
            label='Operation Success'
            description='True if the escalation succeeded, false otherwise'
        )
        public Boolean isSuccess;
        
        @InvocableVariable(
            label='Summary Message'
            description='Natural language summary of action taken for the agent response'
        )
        public String statusSummary;
    }

    @InvocableMethod(
        label='Escalate Support Case'
        description='Escalates a support case to a specialist tier and notifies the assigned account executive.'
        category='Customer Support'
    )
    public static List<ResponseOutput> escalateCase(List<RequestInput> inputs) {
        List<ResponseOutput> results = new List<ResponseOutput>();
        // Implementation logic
        return results;
    }
}
\`\`\`

With concise, expressive descriptions, the Atlas Reasoning Engine will accurately identify when a user's prompt warrants invoking this action!`,
    category: "Agentforce",
    author: GYADEEN,
    coverImage: "/images/courses/agentforce-fundamentals.jpg",
    publishedAt: "2026-09-25",
    readTimeMin: 7,
    viewsCount: 2180,
    tags: ["Agentforce", "Apex", "AI", "Invocable"],
    isFeatured: true,
  },
];

export const RESOURCES: Resource[] = [
  {
    id: "r-01",
    title: "Apex & Trigger Architecture Cheat Sheet",
    slug: "apex-trigger-architecture-cheat-sheet",
    description: "A quick-reference PDF summarizing Trigger Context Variables, Order of Execution flowchart, Governor Limits tables, and Trigger Handler templates.",
    type: "CHEAT_SHEET",
    category: "Apex",
    isFree: true,
    format: "PDF",
    size: "2.4 MB",
    downloadsCount: 3840,
  },
  {
    id: "r-02",
    title: "100+ Salesforce Developer & Admin Interview Questions & Answers",
    slug: "100-salesforce-developer-admin-interview-questions",
    description: "Curated real-world scenario questions asked at top consulting firms and product companies, complete with in-depth technical explanations and code samples.",
    type: "INTERVIEW_QUESTIONS",
    category: "Interview Prep",
    isFree: true,
    format: "PDF & Web",
    size: "5.1 MB",
    downloadsCount: 6120,
  },
  {
    id: "r-03",
    title: "Production-Grade LWC Component Boilerplate Suite",
    slug: "production-lwc-component-boilerplate",
    description: "Ready-to-deploy LWC starter kit with custom modal dialogs, data table with inline debounce search, toast dispatcher, and Jest test specs.",
    type: "CODE_PROJECT",
    category: "LWC",
    isFree: false,
    price: 499,
    format: "ZIP / GitHub",
    size: "12.8 MB",
    downloadsCount: 890,
  },
  {
    id: "r-04",
    title: "Agentforce Architecture Blueprint & Implementation Guide",
    slug: "agentforce-architecture-blueprint-guide",
    description: "Step-by-step enterprise handbook covering Topic Design, Prompt Templates, Guardrails, Atlas Engine Debugging, and Data Cloud grounding.",
    type: "PDF_GUIDE",
    category: "Agentforce",
    isFree: true,
    format: "PDF",
    size: "8.6 MB",
    downloadsCount: 2470,
  },
];

export const INTERVIEW_QUESTIONS: InterviewQuestion[] = [
  {
    id: "iq-01",
    question: "What is Trigger.new and in which trigger events is it available or modifiable?",
    category: "Apex",
    difficulty: "Beginner",
    answer: "Trigger.new is a contextual variable in Apex that returns a list of the sObject records with the new versions of the data. It is available in insert, update, and undelete events. Crucially, it can ONLY be modified in 'before' events (before insert and before update). In 'after' events, Trigger.new is read-only, and any attempt to modify its fields will throw a FinalException.",
    codeSnippet: `trigger AccountTrigger on Account (before insert, after insert) {
    if (Trigger.isBefore && Trigger.isInsert) {
        for (Account acc : Trigger.new) {
            // Valid: Modifiable in before insert without explicit DML
            acc.Description = 'Verified via automation';
        }
    }
    if (Trigger.isAfter && Trigger.isInsert) {
        // acc.Description = 'error'; // Would throw FinalException!
    }
}`,
    tags: ["Apex", "Triggers", "Context Variables"],
    relatedQuestions: ["What is the difference between Trigger.new and Trigger.old?", "Can we perform DML on Trigger.new?"],
  },
  {
    id: "iq-02",
    question: "How do you avoid governor limit 101 (Too many SOQL queries: 101) in Apex?",
    category: "Apex",
    difficulty: "Beginner",
    answer: "The SOQL 101 error occurs when a transaction executes more than 100 SOQL queries synchronously. The golden rule is to NEVER write a SOQL query inside a loop (for, while, do-while). Always collect IDs in a Set, query once outside the loop, store results in a Map or List, and iterate through the in-memory collections.",
    codeSnippet: `// ❌ BAD: SOQL inside loop
for (Contact con : contacts) {
    Account acc = [SELECT Id, Name FROM Account WHERE Id = :con.AccountId];
}

// ✅ GOOD: Bulkified SOQL outside loop
Set<Id> accountIds = new Set<Id>();
for (Contact con : contacts) {
    if (con.AccountId != null) accountIds.add(con.AccountId);
}
Map<Id, Account> accountMap = new Map<Id, Account>(
    [SELECT Id, Name FROM Account WHERE Id IN :accountIds]
);`,
    tags: ["Apex", "SOQL", "Governor Limits", "Bulkification"],
    relatedQuestions: ["What are governor limits in Salesforce?", "What is the difference between SOQL and SOSL?"],
  },
  {
    id: "iq-03",
    question: "What is the Atlas Reasoning Engine in Agentforce and how does it differ from traditional bots?",
    category: "Agentforce",
    difficulty: "Intermediate",
    answer: "Traditional chatbots (like Einstein Bots) rely on static decision trees, regex patterns, or fixed intent classification. If a user asks a question outside predetermined branches, the bot fails. The Atlas Reasoning Engine is an autonomous AI agent brain that constantly evaluates the user's intent, inspects available Topics and Actions, queries enterprise Data Cloud for grounding context, formulates an execution plan, invokes necessary tools/APIs, and evaluates the output against safety guardrails before responding.",
    tags: ["Agentforce", "AI", "Atlas Engine"],
    relatedQuestions: ["What are Topics in Agentforce?", "How do you ground an Agentforce agent with Data Cloud?"],
  },
  {
    id: "iq-04",
    question: "Explain the difference between `@wire` with a property vs `@wire` with a function in LWC.",
    category: "LWC",
    difficulty: "Intermediate",
    answer: "In Lightning Web Components, `@wire` allows reactive data fetching from Lightning Data Service or Apex methods. When wired to a property (`@wire(getRecord, {...}) myProperty`), LWC automatically assigns `{ data, error }` object to that property. When wired to a function (`@wire(getRecord, {...}) wiredRecord({ error, data })`), the function executes every time the wire adapter emits new values. This allows developers to run custom transformation logic, populate nested lists, or trigger conditional state updates whenever data arrives or fails.",
    codeSnippet: `import { LightningElement, wire, api } from 'lwc';
import getAccountDetails from '@salesforce/apex/AccountController.getAccountDetails';

export default class AccountSummary extends LightningElement {
    @api recordId;
    accountData;
    errorMessage;

    // Wired to a function for custom post-processing
    @wire(getAccountDetails, { accountId: '$recordId' })
    wiredAccount({ error, data }) {
        if (data) {
            this.accountData = { ...data, formattedRevenue: '$' + data.AnnualRevenue };
            this.errorMessage = undefined;
        } else if (error) {
            this.errorMessage = error.body ? error.body.message : error.message;
            this.accountData = undefined;
        }
    }
}`,
    tags: ["LWC", "Wire Service", "JavaScript", "Reactivity"],
  },
  {
    id: "iq-05",
    question: "Scenario: An integration must handle 50,000 updates per day from an ERP system without exceeding Apex CPU and SOQL limits. How would you architect this?",
    category: "Scenario",
    difficulty: "Advanced",
    answer: "1. Inbound REST / Composite API: Expose composite REST endpoints or use the Salesforce Bulk API v2, which processes records in parallel batches asynchronously without consuming synchronous transaction limits.\n2. Staging Object Pattern: If using custom webhooks, immediately write incoming payloads into a lightweight Staging Custom Object with minimal triggers, returning HTTP 200/202 to the caller in sub-second time.\n3. Batch / Queueable Worker: Run a scheduled or event-driven Queueable/Batch Apex job that chunks records into batches of 200, bulkifying all validations and database updates with proper Unit of Work.\n4. Platform Events: Alternatively, publish Platform Events for incoming events, and process them via an asynchronous Platform Event Trigger with customized batch sizes.",
    tags: ["Architecture", "Integration", "Scenario", "Scalability"],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "p-01",
    title: "Gym Management & Membership Billing System",
    slug: "gym-management-system",
    shortDesc: "End-to-end fitness club automation with automated recurring invoicing, check-in QR scanner LWC, and trainer scheduling.",
    problem: "Fitness clubs struggle with manual cash handling, expired membership tracking, double-booked personal trainers, and missed renewals.",
    solution: "A complete Salesforce custom app featuring custom Member, Membership Plan, Trainer, and Attendance objects, paired with an interactive LWC member check-in terminal and automated payment reminder batch jobs.",
    architecture: "Salesforce Custom App + LWC Front-Office Portal + Apex Queueables for Payment Gateway Sync + Scheduled Apex for Expired Membership Revocation.",
    features: [
      "Member Registration & KYC verification flow",
      "QR Code check-in scanner built with LWC camera API",
      "Recurring membership billing and PDF invoice generation",
      "Trainer availability calendar with collision detection",
      "Executive analytics dashboard tracking Monthly Recurring Revenue (MRR)",
    ],
    technologies: ["Salesforce", "Apex", "LWC", "Flows", "Reports & Dashboards"],
    learningOutcomes: [
      "Design normalized relational custom object schemas",
      "Implement multi-record DML with transaction rollback on partial failure",
      "Build interactive SLDS-compliant LWC components",
    ],
    difficulty: "INTERMEDIATE",
    githubUrl: "https://github.com/Gyadeenahirwar/salesforce-gym-management",
  },
  {
    id: "p-02",
    title: "Autonomous AI Customer Assistant with Agentforce",
    slug: "ai-customer-assistant-agentforce",
    shortDesc: "Self-reasoning customer service agent that verifies orders, issues refunds within policy limits, and escalates complex queries.",
    problem: "Customer service departments face high ticket backlogs for repetitive tier-1 inquiries such as order status checks, address corrections, and refund requests.",
    solution: "Deployed an Agentforce autonomous agent grounded in customer purchase history via Data Cloud, armed with secure Invocable Apex actions for refund processing within pre-approved authorization thresholds.",
    architecture: "Agentforce Atlas Reasoning Engine + Data Cloud Unified Customer Profile + Apex Invocable Action Layer + External Shipping REST API Named Credentials.",
    features: [
      "Autonomous intent parsing and multi-step plan execution",
      "Dynamic policy guardrails preventing unauthorized refunds > ₹2,000",
      "Real-time shipping API integration with UPS/FedEx tracking",
      "Seamless human agent transfer with full conversation transcript summarization",
    ],
    technologies: ["Agentforce", "Apex", "Data Cloud", "Named Credentials", "Prompt Studio"],
    learningOutcomes: [
      "Define agent topics and semantic instructions",
      "Build secure Invocable Apex methods with rich parameter metadata",
      "Ground LLM agents on real-time external data sources",
    ],
    difficulty: "ADVANCED",
    githubUrl: "https://github.com/Gyadeenahirwar/agentforce-customer-assistant",
  },
  {
    id: "p-03",
    title: "Salesforce + Slack Real-Time Event Hub",
    slug: "salesforce-slack-realtime-hub",
    shortDesc: "Bi-directional integration syncing deal escalations, high-priority case alerts, and interactive approvals directly inside Slack channels.",
    problem: "Sales and executive leadership lose precious hours toggling between Slack and Salesforce to review critical discount requests and high-priority outage cases.",
    solution: "Built an event-driven hub utilizing Salesforce Platform Events, Change Data Capture (CDC), and Slack Block Kit webhooks to enable single-click approvals directly inside Slack.",
    architecture: "Salesforce Change Data Capture + Platform Events + Custom Apex Outbound Webhook Dispatcher + Slack App with Interactive Modals.",
    features: [
      "Instant Slack notification when an Opportunity exceeds ₹10,00,000",
      "Interactive 'Approve / Reject' buttons inside Slack with reason modal",
      "Bi-directional sync updating Opportunity and Case records in real time",
      "Audit logging table tracking every remote authorization event",
    ],
    technologies: ["Salesforce", "Apex", "Platform Events", "Slack API", "OAuth 2.0"],
    learningOutcomes: [
      "Configure modern Named Credentials with OAuth 2.0 Client Credentials",
      "Publish and subscribe to Salesforce Platform Events",
      "Handle Slack interactive payload webhooks securely",
    ],
    difficulty: "ADVANCED",
    githubUrl: "https://github.com/Gyadeenahirwar/salesforce-slack-event-hub",
  },
];

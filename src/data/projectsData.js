export const handsOnProjects = [
  {
    id: "rag-assistant",
    title: "Document Q&A RAG Assistant",
    category: "Knowledge Systems",
    difficulty: "Intermediate",
    badgeColor: "indigo",
    summary: "A search and question-answering assistant that indexes custom PDF documents, chunks text, creates vector embeddings, and answers queries with exact citations.",
    techStack: ["OpenAI API", "Vector Store", "Python/JS", "RAG Pipeline"],
    keyLearnings: [
      "Document chunking and token optimization",
      "Cosine similarity and semantic indexing",
      "Hallucination reduction using ground truth context"
    ],
    metric: "Source-grounded answers with page citations"
  },
  {
    id: "market-research-agent",
    title: "Autonomous Market Research Agent",
    category: "AI Agents",
    difficulty: "Advanced",
    badgeColor: "purple",
    summary: "A multi-step autonomous agent that searches the web, summarizes industry trends, analyzes competitive landscapes, and outputs structured markdown executive briefs.",
    techStack: ["Agent Workflows", "Web Search API", "n8n / Node.js", "Prompt Chaining"],
    keyLearnings: [
      "Multi-agent planner and summarizer roles",
      "Handling unstructured web content into structured JSON",
      "Automated scheduled email reports"
    ],
    metric: "Executes 10-step research loop autonomously"
  },
  {
    id: "code-review-bot",
    title: "Intelligent Code Review & Security Auditor",
    category: "Developer Tools",
    difficulty: "Intermediate",
    badgeColor: "cyan",
    summary: "An automated assistant that analyzes pull requests, flags anti-patterns, evaluates security vulnerabilities (OWASP top 10), and writes inline refactored code suggestions.",
    techStack: ["GitHub Webhooks", "Anthropic Claude API", "AST Parsing", "JavaScript"],
    keyLearnings: [
      "System prompts tailored for code analysis",
      "Structured diff parsing and code context injection",
      "Writing automated test generators"
    ],
    metric: "Instant feedback on syntax, security & tests"
  },
  {
    id: "resume-interview-copilot",
    title: "Career Copilot: Resume Matcher & Mock Interviewer",
    category: "Interactive Tools",
    difficulty: "Beginner-Friendly",
    badgeColor: "emerald",
    summary: "An interactive application that compares job descriptions against student resumes to identify skill gaps and conducts simulated voice/text interview rounds with actionable feedback.",
    techStack: ["Prompt Engineering", "React UI", "LLM Structured Output", "TTS/STT"],
    keyLearnings: [
      "Keyword matching and semantic gap analysis",
      "Dynamic prompt state management for conversational back-and-forth",
      "Scoring rubrics using automated few-shot evaluations"
    ],
    metric: "Actionable rubric scoring on student responses"
  },
  {
    id: "customer-triage-pipeline",
    title: "Automated Ticket Triage & Response Pipeline",
    category: "Workflow Automation",
    difficulty: "Beginner-Friendly",
    badgeColor: "blue",
    summary: "A workflow automation that classifies incoming support messages by urgency and sentiment, drafts personalized resolutions, and routes complex queries to human teams.",
    techStack: ["n8n / Zapier", "Sentiment Classification", "Webhooks", "JSON Schema"],
    keyLearnings: [
      "Deterministic classification with temperature zero",
      "Guarding against prompt injection attacks",
      "Human-in-the-loop review architecture"
    ],
    metric: "Classifies & routes requests in < 3 seconds"
  },
  {
    id: "creative-multimodal-studio",
    title: "Multimodal Creative Studio Pipeline",
    category: "Generative Media",
    difficulty: "Intermediate",
    badgeColor: "rose",
    summary: "An end-to-end creative assistant that converts a single campaign brief into multi-channel copy variants, matching visual prompts, and localized social media snippets.",
    techStack: ["Vision Models", "Image Generation APIs", "Prompt Templates", "React"],
    keyLearnings: [
      "Cross-modal prompting for consistent artistic style",
      "Tone customization for different target demographics",
      "Exporting structured campaign packages"
    ],
    metric: "Generates multi-platform assets in minutes"
  }
];

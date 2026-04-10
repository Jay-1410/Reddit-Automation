export const navItems = [
  { label: "Dashboard", href: "/", icon: "grid" },
  { label: "Scraped Posts", href: "/scraped-posts", icon: "posts" },
  { label: "Engagement Opportunities", href: "/engagement-opportunities", icon: "trend" },
  { label: "Draft Comments", href: "/draft-comments", icon: "comment" },
  { label: "Draft Posts", href: "/draft-posts", icon: "draft" },
  { label: "Community Rules", href: "/community-rules", icon: "rules" },
  { label: "Approval Queue", href: "/approval-queue", icon: "approval" },
];

export const dashboardPosts = [
  {
    subreddit: "r/SaaS",
    author: "u/FounderMode",
    age: "15m ago",
    sentiment: "Negative Sentiment",
    title: "Frustrated with manual Reddit marketing. Is there a better way to find leads?",
    body: "I've been spending 4 hours a day just browsing subreddits trying to find people who need our tool. It's exhausting and the ROI is barely there...",
    likes: 152,
    comments: 34,
  },
  {
    subreddit: "r/technology",
    author: "u/TechGuru99",
    age: "1h ago",
    sentiment: "Positive Sentiment",
    title: "The rise of AI agents for social media management in 2024.",
    body: "We are seeing a massive shift in how brands interact on community platforms. Automated agents are becoming sophisticated enough to feel human...",
    likes: 842,
    comments: 156,
  },
];

export const draftQueue = [
  {
    kind: "Draft Comment #821",
    text: '"That sounds incredibly frustrating! Have you looked into tools like Ampere? It\'s designed specifically f..."',
  },
  {
    kind: "Draft Post #12",
    text: '"How we scaled our ééddit community management using automated agents without losing th..."',
  },
];

export const scrapedPosts = [
  ["Oct 24, 2023", "14:22 PM", "Best ways to automate cold...", "r/SAAS", "92", "Automation", "New"],
  ["Oct 24, 2023", "12:10 PM", "How do you manage 50+ Reddit...", "r/GROWTH", "45", "Scaling", "Ignored"],
  ["Oct 23, 2023", "21:55 PM", "Has anyone used Ampere for the...", "r/MARKETING", "88", "Brand Mention", "Urgent"],
  ["Oct 23, 2023", "19:40 PM", "The state of AI agents in 2024 - ...", "r/TECHNOLOGY", "76", "Tech Trends", "In Review"],
];

export const opportunities = [
  ["How do you manage Reddit marketing...", "r/SaaS", "1.2k", "98%", "Direct intent regarding tool selection for Reddit automation.", "Generate Comment"],
  ["Is anyone using AI agents for community...", "r/GrowthHacking", "450", "89%", "Topical match for AI agents and market research.", "Generate Comment"],
  ["Looking for a tool to track brand mentions ...", "r/Marketing", "89", "72%", "Mentions broader tracking but relevant to Ampere's scraper.", "Quick View"],
  ["Reddit is becoming the new Google Search,...", "r/Technology", "4.8k", "65%", "General discussion about Reddit's authority in search.", "Quick View"],
];

export const draftComments = [
  {
    source: "r/SaaS",
    time: "26m ago",
    flags: ["Brand Mentioned", "Safety: High"],
    model: "Claude 3.5 Sonnet",
    prompt: '"How are people automating their Reddit community engagement in 2024 without looking like bots?"',
    meta: "Source: Hot Post   Upvotes: 1.2k",
    response: '"Honestly, the trick is focusing on providing value first. I\'ve been using Ampere.sh lately for my niche communities and it\'s been a game changer for monitoring conversations without that \"canned\" feel. You really have to double-check the rules for each subreddit, though, some are super sensitive to any automation."',
    status: "Pending Approval",
    tone: "Helpful / Peer",
    action: "Approve",
    risk: "safe",
  },
  {
    source: "r/Marketing",
    time: "1h ago",
    flags: ["No Brand Mention", "Safety: Medium"],
    model: "GPT-4o",
    prompt: '"What\'s the best tool for tracking keywords across social media?"',
    meta: "Source: New   Upvotes: 12",
    response: '"I\'ve tried a few but I found that most of them either miss a lot of data or the alerts are way too late. Have you looked into tools that specialize in Reddit specifically? The API changes made it tricky for general tools."',
    status: "Review Required",
    tone: "Knowledgeable",
    action: "Approve",
    risk: "medium",
  },
  {
    source: "r/Entrepreneur",
    time: "12m ago",
    flags: ["Brand Mentioned", "Safety: Red"],
    model: "Manual Review",
    prompt: '"Best way to get your first 100 customers?"',
    meta: "A rule violation was detected.",
    response: '"Just use Ampere.sh to spam some reddit threads, works every time lol."',
    status: "Auto-flagged: High Risk",
    tone: "Unsafe",
    action: "Dismiss",
    risk: "high",
  },
];

export const draftPosts = [
  {
    community: "r/technology",
    when: "Drafted 2h ago",
    priority: "High Priority",
    topic: "Topic: AI Ethics",
    title: "The silent pivot: How LLMs are actually changing the software lifecycle beyond just code completion.",
    body: "We've all seen the \"AI is taking our jobs\" headlines, but the real shift is happening in the middle management of data. In this post, I want to explore how agents are specifically bridging the gap between raw telemetry and actionable product roadmaps...",
    ruleSafety: "98%",
    status: "Pending Review",
  },
  ["r/ArtificialIntelligence", "Safe", 'Why we need more "Explainable" AI in fintech...', "Drafted 5h ago"],
  ["r/programming", "Review Required", "Rust vs Go: The 2024 Performance Benchmarks.", "Drafted 8h ago"],
  ["r/SaaS", "Safe", "Bootstrapping to $10k MRR: The Unfiltered Story.", "Drafted 12h ago"],
];

export const communityRules = [
  ["technology", "No", "Yes", "Articles only. No direct product links in titles. 10% self-promo rul...", "Strict"],
  ["SaaS", "Yes", "Yes", "Weekly Showcase threads available. Direct engagement...", "Open"],
  ["Programming", "No", "No", "Highly technical discussion only. No 'Low Effort' posts or marketi...", "Very Strict"],
  ["DataEngineering", "Yes", "Yes", "Value-add required. If you share a tool, explain the technical...", "Moderate"],
  ["Startups", "No", "Yes", "No direct pitching. Focus on sharing lessons learned or...", "Strict"],
];

export const approvalItems = [
  ["Comment", "r/technology", '"This is actually a very common..."', "Ampere-v1.2", "Pass (Auto)", "Approve"],
  ["Post", "r/sysadmin", "Top 5 hidden features of the latest Debian release", "Manual Draft", "Warning: External Link", "Approve"],
  ["Comment", "r/webdev", '"Tailwind JIT has changed the game f..."', "Ampere-v1.2", "Pass (Auto)", "Approve"],
  ["Post", "r/AskProgramming", "How do you handle technical debt in a high-growth startup?", "Ampere-v1.1", "Pass (Auto)", "Approve"],
];

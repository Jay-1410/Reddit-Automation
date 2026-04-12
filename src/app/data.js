export const navItems = [
  { label: "Dashboard", href: "/", icon: "grid" },
  { label: "Scraped Posts", href: "/scraped-posts", icon: "posts" },
  { label: "Draft Comments", href: "/draft-comments", icon: "comment" },
  { label: "Draft Posts", href: "/draft-posts", icon: "draft" },
  { label: "Approval Queue", href: "/approval-queue", icon: "approval" },
  { label: "Deliver Agents", href: "/deliver-agents", icon: "trend" },
];

export const dashboardMetrics = [
  { label: "Posts scanned", value: "1,284", note: "Last 24h" },
  { label: "High-intent hits", value: "42", note: "6.5% match" },
  { label: "Ready drafts", value: "18", note: "Awaiting review" },
  { label: "Live communities", value: "124", note: "Tracked now" },
];

export const dashboardTimeline = [
  { label: "New post detected", detail: "r/SaaS, 2 min ago", tone: "high" },
  { label: "Draft approved", detail: "r/Marketing, 14 min ago", tone: "safe" },
  { label: "Rule update synced", detail: "r/Technology, 48 min ago", tone: "neutral" },
];

export const dashboardPosts = [
  {
    id: "post-1",
    subreddit: "r/SaaS",
    author: "u/FounderMode",
    age: "15m ago",
    urgency: "High",
    title: "Frustrated with manual Reddit marketing. Is there a better way to find leads?",
    body: "I've been spending 4 hours a day just browsing subreddits trying to find people who need our tool. It's exhausting and the ROI is barely there...",
    likes: 152,
    comments: 34,
  },
  {
    id: "post-2",
    subreddit: "r/technology",
    author: "u/TechGuru99",
    age: "1h ago",
    urgency: "Medium",
    title: "The rise of AI agents for social media management in 2024.",
    body: "We are seeing a massive shift in how brands interact on community platforms. Automated agents are becoming sophisticated enough to feel human...",
    likes: 842,
    comments: 156,
  },
];

export const scrapedPosts = [
  { id: "sp-1", date: "Oct 24, 2023", time: "14:22", title: "Best ways to automate cold outreach?", subreddit: "r/SaaS", score: "92", topic: "Automation", status: "New", body: ["A founder is asking for the best way to automate outreach without losing quality.", "The discussion is active and directly matches the product use case."], keyword: "cold outreach" },
  { id: "sp-2", date: "Oct 24, 2023", time: "12:10", title: "How do you manage 50+ Reddit accounts?", subreddit: "r/GrowthHacking", score: "45", topic: "Scaling", status: "Ignored", body: ["This post is less relevant, but it still shows a potential power user workflow.", "It can be used as a reference signal for growth-related users."], keyword: "manage reddit accounts" },
  { id: "sp-3", date: "Oct 23, 2023", time: "21:55", title: "Has anyone used Ampere for the...", subreddit: "r/Marketing", score: "88", topic: "Brand Mention", status: "Urgent", body: ["Someone explicitly mentions the product and wants a recommendation.", "This should immediately go to draft comment generation."], keyword: "ampere" },
  { id: "sp-4", date: "Oct 23, 2023", time: "19:40", title: "The state of AI agents in 2024 - ...", subreddit: "r/Technology", score: "76", topic: "Tech Trends", status: "In Review", body: ["High-level industry discussion around AI agents and automation.", "Useful for educational content and top-of-funnel awareness."], keyword: "ai agents" },
];

export const draftComments = [
  { source: "r/SaaS", time: "26m ago", flags: ["Brand Mentioned", "Safety: High"], model: "Claude 3.5 Sonnet", prompt: '"How are people automating their Reddit community engagement in 2024 without looking like bots?"', meta: "Source: Hot Post   Upvotes: 1.2k", response: '"Honestly, the trick is focusing on providing value first. I\'ve been using Ampere.sh lately for my niche communities and it\'s been a game changer for monitoring conversations without that \"canned\" feel. You really have to double-check the rules for each subreddit, though, some are super sensitive to any automation."', status: "Pending Approval", tone: "Helpful / Peer", action: "Queue", risk: "safe" },
  { source: "r/Marketing", time: "1h ago", flags: ["No Brand Mention", "Safety: Medium"], model: "GPT-4o", prompt: '"What\'s the best tool for tracking keywords across social media?"', meta: "Source: New   Upvotes: 12", response: '"I\'ve tried a few but I found that most of them either miss a lot of data or the alerts are way too late. Have you looked into tools that specialize in Reddit specifically? The API changes made it tricky for general tools."', status: "Review Required", tone: "Knowledgeable", action: "Queue", risk: "medium" },
  { source: "r/Entrepreneur", time: "12m ago", flags: ["Brand Mentioned", "Safety: Red"], model: "Manual Review", prompt: '"Best way to get your first 100 customers?"', meta: "A rule violation was detected.", response: '"Just use Ampere.sh to spam some reddit threads, works every time lol."', status: "Auto-flagged: High Risk", tone: "Unsafe", action: "Queue", risk: "high" },
];

export const draftPosts = [
  { community: "r/technology", when: "Drafted 2h ago", priority: "High Priority", topic: "Topic: AI Ethics", title: "The silent pivot: How LLMs are actually changing the software lifecycle beyond just code completion.", body: "We've all seen the \"AI is taking our jobs\" headlines, but the real shift is happening in the middle management of data. In this post, I want to explore how agents are specifically bridging the gap between raw telemetry and actionable product roadmaps...", ruleSafety: "98%", status: "Pending Review" },
  ["r/ArtificialIntelligence", "Safe", 'Why we need more "Explainable" AI in fintech...', "Drafted 5h ago"],
  ["r/programming", "Review Required", "Rust vs Go: The 2024 Performance Benchmarks.", "Drafted 8h ago"],
  ["r/SaaS", "Safe", "Bootstrapping to $10k MRR: The Unfiltered Story.", "Drafted 12h ago"],
];

export const approvalItems = [
  ["Comment", "r/technology", '"This is actually a very common..."', "Ampere-v1.2", "Pass (Auto)", "Submit"],
  ["Post", "r/sysadmin", "Top 5 hidden features of the latest Debian release", "Manual Draft", "Warning: External Link", "Submit"],
  ["Comment", "r/webdev", '"Tailwind JIT has changed the game f..."', "Ampere-v1.2", "Pass (Auto)", "Submit"],
  ["Post", "r/AskProgramming", "How do you handle technical debt in a high-growth startup?", "Ampere-v1.1", "Pass (Auto)", "Submit"],
];

export const agents = [
  { name: "Agent 1", reddit: "@agent.one", status: "Ready", window: "09:12", assigned: "r/technology", item: "Comment", history: ["Submitted comment in r/technology", "Queued post in r/SaaS"] },
  { name: "Agent 2", reddit: "@agent.two", status: "Busy", window: "09:18", assigned: "r/sysadmin", item: "Post", history: ["Submitted post in r/sysadmin", "Reviewed draft in r/webdev"] },
  { name: "Agent 3", reddit: "@agent.three", status: "Ready", window: "09:26", assigned: "r/webdev", item: "Comment", history: ["Queued comment in r/webdev", "Submitted post in r/AskProgramming"] },
  { name: "Agent 4", reddit: "@agent.four", status: "Ready", window: "09:33", assigned: "r/SaaS", item: "Post", history: ["Submitted post in r/SaaS", "Queued comment in r/technology"] },
  { name: "Agent 5", reddit: "@agent.five", status: "Idle", window: "09:41", assigned: "r/Marketing", item: "Comment", history: ["Reviewed queue items", "Saved execution history"] },
];

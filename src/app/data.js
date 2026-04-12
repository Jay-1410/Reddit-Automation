export const navItems = [
  { label: "Home", href: "/", icon: "grid" },
  { label: "Post Scraping", href: "/scraped-posts", icon: "posts" },
  { label: "Comment Queue", href: "/approval-queue", icon: "comment" },
  { label: "AI Agents", href: "/deliver-agents", icon: "trend" },
  { label: "Draft Comments", href: "/draft-comments", icon: "draft" },
  { label: "Draft Posts", href: "/draft-posts", icon: "approval" },
];

export const dashboardStats = [
  { label: "Total Keywords", value: "482", note: "Monitoring 142 subreddits", accent: "+12%" },
  { label: "Posts Scraped Today", value: "12,841", note: "Peak activity: 14:00 EST", accent: "+4.2k" },
  { label: "Comments Generated", value: "856", note: "24 active agent threads", accent: "+12%" },
  { label: "Queue Size", value: "1,240", note: "Estimated processing: 42m", accent: "High" },
  { label: "Comments Submitted", value: "742", note: "of 856 generated", accent: "" },
  { label: "Active Agents", value: "18", note: "/ 24 total", accent: "" },
  { label: "Success Rate", value: "94.8%", note: "+0.4% from last period", accent: "" },
  { label: "Failed Submissions", value: "42", note: "Manual review needed", accent: "" },
];

export const activityFeed = [
  ["Agent 3 submitted in r/technology", "Excellent point about neural networks...", "2m ago"],
  ["Scraper detected high-value post", "Subreddit: r/startups", "5m ago"],
  ["Agent 12 entered Cooldown", "Rate limit safety triggered", "12m ago"],
  ["Submission Failed", "u/BetaTest - Shadowban check needed", "18m ago"],
  ["New Account Authenticated", "u/SignalMaster_v2", "45m ago"],
];

export const queueRows = [
  ["r/coding", "What is the best...", "Alpha-1", "14:20 (In 2m)", ""],
  ["r/saas", "Looking for auto...", "Beta-4", "14:25 (In 7m)", ""],
  ["r/marketing", "Social media str...", "Alpha-7", "14:32 (In 14m)", ""],
  ["r/worldnews", "Breaking: New ...", "Omega-2", "14:40 (In 22m)", ""],
];

export const scrapedPosts = [
  { id: "sp1", subreddit: "r/technology", meta: "posted by u/tech_titan • 4 hours ago", title: "Apple’s new vision for spatial computing is finally here, but is the market ready for a $3k headset?", body: "The latest release from Cupertino has sparked massive debates across multiple subreddits. We’re seeing a lot of mixed sentiment regarding the pricing vs. utility for enterprise users...", score: "1.2k" },
  { id: "sp2", subreddit: "r/saas", meta: "posted by u/bootstrapped_guy • 8 hours ago", title: "How we grew our Micro-SaaS to $10k MRR using only Reddit communities without getting banned.", body: "Authenticity is key. We spent months just contributing to discussions before even mentioning our product. Here is the step-by-step breakdown of our strategy...", score: "842" },
  { id: "sp3", subreddit: "r/marketing", meta: "posted by u/brand_guru • 12 hours ago", title: "The death of the cookie: Why first-party data is the only thing that will save your ad budget in 2024.", body: "Most marketers are still sleeping on the impending changes to tracking. If you aren’t building a direct community now, you’re going to pay 3x for acquisition by Q3...", score: "3.5k" },
];

export const queueItems = [
  ["#CM-8492", "That’s an interesting perspective. Hav...", "r/saas", "2m ago", "READY", "Agent Alpha"],
  ["#CM-8491", "I’ve been using a similar stack and fou...", "r/backend", "15m ago", "ASSIGNED", "Moderator Sam"],
  ["#CM-8488", "Waiting for AI generation completion...", "r/indiehackers", "42m ago", "PENDING", "Processing..."],
  ["#CM-8482", "Great point about the Tailwind vs CSS...", "r/reactjs", "1h ago", "READY", "Agent Beta"],
];

export const agentCards = [
  ["Nexus-01", "u/CyberObserver", "ACTIVE", "98.2% SUC"],
  ["Ghost-Pro", "u/SpectralThread", "BUSY", "42ms DEL"],
  ["Turing-X", "u/AlgoArchitect", "COOLDOWN", "14m REM"],
  ["Void-Walker", "u/EmptyNester9", "ACTIVE", "92% REL"],
  ["Sentry-6", "u/QuietGuard", "OFFLINE", "Err: 403"],
];

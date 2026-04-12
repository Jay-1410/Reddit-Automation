"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { DashboardShell, Panel } from "../components";
import { scrapedPosts } from "../data";
import styles from "../ui.module.css";

const timeRangeOptions = ["Last 1 Hour", "Last 3 Hours", "Last 6 Hours", "Last 9 Hours", "Last 12 Hours", "Last 24 Hours", "This Week"];
const subredditOptions = ["/all", "r/technology", "r/saas", "r/marketing"];
const sortOptions = ["Relevance", "Newest", "Highest Score", "Most Comments"];

export default function ScrapedPostsPage() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [subreddit, setSubreddit] = useState("/all");
  const [sortBy, setSortBy] = useState("Relevance");
  const [timeRange, setTimeRange] = useState("Last 24 Hours");
  const [minimumKarma, setMinimumKarma] = useState("100");
  const [selectedPost, setSelectedPost] = useState(scrapedPosts[0]);

  const filtered = useMemo(() => {
    const q = keyword.trim().toLowerCase();
    return scrapedPosts.filter((post) => {
      const keywordMatch = !q || [post.title, post.subreddit, post.meta].join(" ").toLowerCase().includes(q);
      const subredditMatch = subreddit === "/all" || post.subreddit === subreddit;
      return keywordMatch && subredditMatch;
    });
  }, [keyword, subreddit, sortBy, timeRange, minimumKarma]);

  const openDraftComments = (post) => router.push(`/draft-comments?source=${encodeURIComponent(post.title)}&subreddit=${encodeURIComponent(post.subreddit)}`);

  return (
    <DashboardShell
      title="Post Scraping"
      subtitle="Search by keyword and inspect findings in a split view."
      searchPlaceholder="Search keywords..."
      actions={<button className={styles.actionButton}>Scrape Posts</button>}
    >
      <section className={styles.searchRow}>
        <input className={styles.input} value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Search keywords (e.g. SaaS growth, UI design trends)..." />
      </section>

      <section className={styles.filterBar}>
        <div className={styles.filterBox}>
          <label>Subreddit</label>
          <select className={styles.select} value={subreddit} onChange={(e) => setSubreddit(e.target.value)}>
            {subredditOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
        <div className={styles.filterBox}>
          <label>Sort By</label>
          <select className={styles.select} value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            {sortOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
        <div className={styles.filterBox}>
          <label>Time Range</label>
          <select className={styles.select} value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
            {timeRangeOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
        <div className={styles.filterBox}>
          <label>Minimum Karma</label>
          <input className={styles.input} value={minimumKarma} onChange={(e) => setMinimumKarma(e.target.value)} />
        </div>
      </section>

      <section className={styles.dashboardSplit}>
        <Panel title="Recent Findings" right={<span className={styles.note}>{filtered.length} Results</span>}>
          <div className={styles.findingsList}>
            {filtered.map((row) => (
              <button key={row.id} className={`${styles.findingCard} ${selectedPost?.id === row.id ? styles.findingActive : ""}`} onClick={() => setSelectedPost(row)}>
                <div className={styles.voteRail}><span>↑</span><strong>{row.score}</strong><span>↓</span></div>
                <div className={styles.findingBody}>
                  <div className={styles.feedMeta}><span className={styles.tag}>{row.subreddit}</span><span>{row.meta}</span></div>
                  <h4>{row.title}</h4>
                  <p>{row.body}</p>
                </div>
                <div className={styles.findingActionArea}>
                  <button className={styles.softButton} onClick={(e) => { e.stopPropagation(); openDraftComments(row); }}>Generate Comment</button>
                  <button className={styles.iconButton} onClick={(e) => e.stopPropagation()}>↗</button>
                </div>
              </button>
            ))}
          </div>
        </Panel>

        <Panel title="Selected Post">
          {selectedPost ? (
            <div className={styles.selectedPostCard}>
              <div className={styles.feedMeta}><span className={styles.tag}>{selectedPost.subreddit}</span><span>{selectedPost.meta}</span></div>
              <h4>{selectedPost.title}</h4>
              <p className={styles.previewText}>{selectedPost.body}</p>
              <div className={styles.previewFooter}><span className={styles.note}>Open to generate a comment</span><button className={styles.actionButton} onClick={() => openDraftComments(selectedPost)}>Generate Comment</button></div>
            </div>
          ) : null}
        </Panel>
      </section>
    </DashboardShell>
  );
}

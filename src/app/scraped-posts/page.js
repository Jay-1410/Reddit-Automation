"use client";

import { useMemo, useState } from "react";
import { DashboardShell, Panel } from "../components";
import { scrapedPosts } from "../data";
import styles from "../ui.module.css";

const timeRangeOptions = ["Last 1 Hour", "Last 3 Hours", "Last 6 Hours", "Last 9 Hours", "Last 12 Hours", "Last 24 Hours", "This Week"];
const subredditOptions = ["/all", "r/technology", "r/saas", "r/marketing"];
const sortOptions = ["Relevance", "Newest", "Highest Score", "Most Comments"];

export default function ScrapedPostsPage() {
  const [keyword, setKeyword] = useState("");
  const [subreddit, setSubreddit] = useState("/all");
  const [sortBy, setSortBy] = useState("Relevance");
  const [timeRange, setTimeRange] = useState("Last 24 Hours");
  const [minimumKarma, setMinimumKarma] = useState("100");
  const [selectedPost, setSelectedPost] = useState(scrapedPosts[0]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [generatedComment, setGeneratedComment] = useState(
    "That’s a really interesting point. It feels like the real challenge is not just finding signals, but joining them into a workflow that stays human and useful."
  );

  const filtered = useMemo(() => {
    const q = keyword.trim().toLowerCase();
    return scrapedPosts.filter((post) => {
      const keywordMatch = !q || [post.title, post.subreddit, post.meta].join(" ").toLowerCase().includes(q);
      const subredditMatch = subreddit === "/all" || post.subreddit === subreddit;
      return keywordMatch && subredditMatch;
    });
  }, [keyword, subreddit, sortBy, timeRange, minimumKarma]);

  const openDrawer = (post) => {
    setSelectedPost(post);
    setDrawerOpen(true);
  };

  const regenerateComment = () => {
    setGeneratedComment(
      "I think the best approach is to keep the response short, specific, and grounded in the actual thread. That usually feels more natural and gets better engagement."
    );
  };

  const addToQueue = () => {
    setDrawerOpen(false);
  };

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
                  <button className={styles.softButton} onClick={(e) => { e.stopPropagation(); openDrawer(row); }}>Generate Comment</button>
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
              <div className={styles.previewFooter}><span className={styles.note}>Open to generate a comment</span><button className={styles.actionButton} onClick={() => openDrawer(selectedPost)}>Generate Comment</button></div>
            </div>
          ) : null}
        </Panel>
      </section>

      {drawerOpen ? (
        <div className={styles.drawerOverlay} onClick={() => setDrawerOpen(false)}>
          <aside className={styles.drawer} onClick={(e) => e.stopPropagation()}>
            <div className={styles.drawerHeader}>
              <div>
                <p className={styles.eyebrow}>AI Comment Generator</p>
                <h3>Generate Comment</h3>
              </div>
              <button className={styles.iconButton} onClick={() => setDrawerOpen(false)}>✕</button>
            </div>

            <div className={styles.drawerSection}>
              <p className={styles.eyebrow}>Source Post</p>
              <div className={styles.sourceBanner}>
                <div className={styles.feedMeta}><span className={styles.tag}>{selectedPost.subreddit}</span><span>{selectedPost.meta}</span></div>
                <h4>{selectedPost.title}</h4>
                <p className={styles.previewText}>{selectedPost.body}</p>
              </div>
            </div>

            <div className={styles.drawerGrid}>
              <div className={styles.filterBox}>
                <label>Tone</label>
                <select className={styles.select}><option>Insightful</option><option>Friendly</option><option>Direct</option></select>
              </div>
              <div className={styles.filterBox}>
                <label>Length</label>
                <select className={styles.select}><option>Short (1-2 sentences)</option><option>Medium</option><option>Long</option></select>
              </div>
            </div>

            <div className={styles.drawerSection}>
              <div className={styles.drawerSectionHead}>
                <p className={styles.eyebrow}>Generated Comment</p>
                <button className={styles.softButton} onClick={regenerateComment}>Regenerate</button>
              </div>
              <textarea className={styles.commentEditor} value={generatedComment} onChange={(e) => setGeneratedComment(e.target.value)} />
            </div>

            <div className={styles.drawerSection}>
              <p className={styles.eyebrow}>Internal Notes</p>
              <input className={styles.input} placeholder="Add a label for tracking..." />
            </div>

            <div className={styles.drawerFooter}>
              <button className={styles.softButton} onClick={() => setDrawerOpen(false)}>Discard</button>
              <button className={styles.actionButton} onClick={addToQueue}>Add to Queue</button>
            </div>
          </aside>
        </div>
      ) : null}
    </DashboardShell>
  );
}

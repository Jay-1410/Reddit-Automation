"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { DashboardShell, Panel } from "../components";
import { scrapedPosts } from "../data";
import styles from "../ui.module.css";

const dateRangeOptions = [
  "Last 1 Hour",
  "Last 3 Hours",
  "Last 6 Hours",
  "Last 12 Hours",
  "Last 24 Hours",
  "Yesterday",
  "This Week",
];

export default function ScrapedPostsPage() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [dateRange, setDateRange] = useState("Last 24 Hours");
  const [selectedPost, setSelectedPost] = useState(scrapedPosts[0]);

  const filtered = useMemo(() => {
    const q = keyword.trim().toLowerCase();
    return scrapedPosts.filter((post) => !q || [post.title, post.subreddit, post.topic, post.keyword].join(" ").toLowerCase().includes(q));
  }, [keyword, dateRange]);

  const scrapePosts = () => {
    const q = keyword.trim().toLowerCase();
    const match = scrapedPosts.find((post) => [post.title, post.subreddit, post.topic, post.keyword].join(" ").toLowerCase().includes(q));
    setSelectedPost(match || scrapedPosts[0]);
  };

  const openDraftComments = (post) => {
    const params = new URLSearchParams({ source: post.title, subreddit: post.subreddit, keyword: post.keyword });
    router.push(`/draft-comments?${params.toString()}`);
  };

  return (
    <DashboardShell
      title="Scraped Posts"
      subtitle="Type a keyword, scrape matching posts, then open any row to see the full content and move it into draft comments."
      searchPlaceholder="Search scraped posts..."
      actions={<><button className={styles.softButton}>↓ Export CSV</button><button className={styles.actionButton} onClick={scrapePosts}>Scrape</button></>}
    >
      <section className={styles.filterBar}>
        <div className={styles.filterBox}>
          <label>Keyword</label>
          <input className={styles.input} value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Enter keyword to scrape" />
        </div>

        <div className={styles.filterBox}>
          <label>Date Range</label>
          <select className={styles.select} value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
            {dateRangeOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>

        <div className={styles.filterBox}>
          <label>Subreddit</label>
          <div className={styles.filterValue}>All Communities <span>▾</span></div>
        </div>
      </section>

      <section className={styles.dashboardSplit}>
        <Panel title="Scraped Results" right={<span className={styles.note}>{filtered.length} matched</span>}>
          <div className={styles.tableHeader}>
            <span>Date</span><span>Post Title</span><span>Subreddit</span><span>Score</span><span>Topic</span><span>Status</span><span>Action</span>
          </div>
          {filtered.map((row) => (
            <button key={row.id} className={`${styles.tableRow} ${selectedPost?.id === row.id ? styles.rowActive : ""}`} onClick={() => setSelectedPost(row)}>
              <div><div className={styles.cellTitle}>{row.date}</div><div className={styles.tableCellMuted}>{row.time}</div></div>
              <div><div className={styles.cellTitle}>{row.title}</div><div className={styles.tableCellMuted}>Open to see full post</div></div>
              <span className={styles.tag}>{row.subreddit}</span>
              <span className={styles.scoreBubble}>{row.score}</span>
              <span className={styles.pill}>{row.topic}</span>
              <span className={row.status === "Urgent" ? styles.statusUrgent : row.status === "In Review" ? styles.statusReview : row.status === "Ignored" ? styles.statusIgnored : styles.statusNew}>{row.status}</span>
              <span className={styles.actionRowInline}><button className={styles.softButton} onClick={(e) => { e.stopPropagation(); openDraftComments(row); }}>Generate Comment</button></span>
            </button>
          ))}
        </Panel>

        <Panel title="Full Post Preview" right={<span className={styles.smallBadge}>Selected</span>}>
          {selectedPost ? (
            <div className={styles.postPreview}>
              <div className={styles.feedMeta}>
                <span className={styles.tag}>{selectedPost.subreddit}</span>
                <span>{selectedPost.date}</span>
                <span>{selectedPost.time}</span>
                <span className={styles.pill}>{selectedPost.topic}</span>
              </div>
              <h4>{selectedPost.title}</h4>
              {selectedPost.body.map((line) => <p key={line} className={styles.previewText}>{line}</p>)}
              <div className={styles.previewFooter}>
                <span className={styles.note}>Keyword: {selectedPost.keyword}</span>
                <button className={styles.actionButton} onClick={() => openDraftComments(selectedPost)}>Generate Comment</button>
              </div>
            </div>
          ) : null}
        </Panel>
      </section>
    </DashboardShell>
  );
}

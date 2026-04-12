"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { DashboardShell, Panel } from "../components";
import { scrapedPosts } from "../data";
import styles from "../ui.module.css";

const dateRangeOptions = ["Last 1 Hour", "Last 3 Hours", "Last 6 Hours", "Last 12 Hours", "Last 24 Hours", "Yesterday", "This Week"];

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
      title="Post Scraping"
      subtitle="Search by keyword, refine the source filters, and generate comments from any post you open."
      searchPlaceholder="Search keywords, subreddits, or agents..."
      actions={<><button className={styles.softButton}>Date Range</button><button className={styles.actionButton} onClick={scrapePosts}>Scrape Posts</button></>}
    >
      <section className={styles.searchRow}>
        <input className={styles.input} value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Search keywords (e.g. SaaS growth, UI design trends)..." />
      </section>

      <section className={styles.filterBar}>
        <div className={styles.filterBox}><label>Subreddit</label><select className={styles.select}><option>/all</option></select></div>
        <div className={styles.filterBox}><label>Sort By</label><select className={styles.select}><option>Relevance</option></select></div>
        <div className={styles.filterBox}><label>Time Range</label><select className={styles.select} value={dateRange} onChange={(e) => setDateRange(e.target.value)}>{dateRangeOptions.map((opt) => <option key={opt}>{opt}</option>)}</select></div>
        <div className={styles.filterBox}><label>Minimum Karma</label><input className={styles.input} defaultValue="100" /></div>
      </section>

      <section className={styles.dashboardSplit}>
        <Panel title="Recent Findings" right={<span className={styles.note}>{filtered.length} Results</span>}>
          <div className={styles.findingsList}>
            {filtered.map((row) => (
              <button key={row.id} className={`${styles.findingCard} ${selectedPost?.id === row.id ? styles.findingActive : ""}`} onClick={() => setSelectedPost(row)}>
                <div className={styles.voteRail}><span>↑</span><strong>{row.score}</strong><span>↓</span></div>
                <div className={styles.findingBody}>
                  <div className={styles.feedMeta}><span className={styles.tag}>{row.subreddit}</span><span>Posted by u/SignalUser</span><span>4 hours ago</span></div>
                  <h4>{row.title}</h4>
                  <p>{row.body[0]}</p>
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
              <div className={styles.feedMeta}><span className={styles.tag}>{selectedPost.subreddit}</span><span>{selectedPost.date}</span><span>{selectedPost.time}</span><span className={styles.pill}>{selectedPost.topic}</span></div>
              <h4>{selectedPost.title}</h4>
              {selectedPost.body.map((line) => <p key={line} className={styles.previewText}>{line}</p>)}
              <div className={styles.previewFooter}><span className={styles.note}>Keyword: {selectedPost.keyword}</span><button className={styles.actionButton} onClick={() => openDraftComments(selectedPost)}>Generate Comment</button></div>
            </div>
          ) : null}
        </Panel>
      </section>
    </DashboardShell>
  );
}

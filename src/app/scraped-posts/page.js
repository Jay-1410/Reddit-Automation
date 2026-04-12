"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { DashboardShell, Panel } from "../components";
import { scrapedPosts } from "../data";
import styles from "../ui.module.css";

export default function ScrapedPostsPage() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [selectedPost, setSelectedPost] = useState(scrapedPosts[0]);
  const filtered = useMemo(() => scrapedPosts.filter((post) => !keyword || [post.title, post.subreddit].join(" ").toLowerCase().includes(keyword.toLowerCase())), [keyword]);
  const openDraftComments = (post) => router.push(`/draft-comments?source=${encodeURIComponent(post.title)}&subreddit=${encodeURIComponent(post.subreddit)}`);

  return (
    <DashboardShell title="Post Scraping" subtitle="Search by keyword and inspect findings in a split view." searchPlaceholder="Search keywords..." actions={<button className={styles.actionButton}>Scrape Posts</button>}>
      <section className={styles.searchRow}><input className={styles.input} value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Search keywords (e.g. SAAS growth, UI design trends)..." /></section>
      <section className={styles.filterBar}><div className={styles.filterBox}><label>Subreddit</label><select className={styles.select}><option>/all</option></select></div><div className={styles.filterBox}><label>Sort By</label><select className={styles.select}><option>Relevance</option></select></div><div className={styles.filterBox}><label>Time Range</label><select className={styles.select}><option>Last 24 Hours</option></select></div><div className={styles.filterBox}><label>Minimum Karma</label><input className={styles.input} defaultValue="100" /></div></section>
      <section className={styles.dashboardSplit}>
        <Panel title="Recent Findings" right={<span className={styles.note}>{filtered.length} Results</span>}>
          <div className={styles.findingsList}>{filtered.map((row) => <button key={row.id} className={`${styles.findingCard} ${selectedPost?.id === row.id ? styles.findingActive : ""}`} onClick={() => setSelectedPost(row)}><div className={styles.voteRail}><span>↑</span><strong>{row.score}</strong><span>↓</span></div><div className={styles.findingBody}><div className={styles.feedMeta}><span className={styles.tag}>{row.subreddit}</span><span>{row.meta}</span></div><h4>{row.title}</h4><p>{row.body}</p></div><div className={styles.findingActionArea}><button className={styles.softButton} onClick={(e) => { e.stopPropagation(); openDraftComments(row); }}>Generate Comment</button><button className={styles.iconButton} onClick={(e) => e.stopPropagation()}>↗</button></div></button>)}</div>
        </Panel>
        <Panel title="Selected Post"><div className={styles.selectedPostCard}><div className={styles.feedMeta}><span className={styles.tag}>{selectedPost.subreddit}</span><span>{selectedPost.meta}</span></div><h4>{selectedPost.title}</h4><p className={styles.previewText}>{selectedPost.body}</p><div className={styles.previewFooter}><span className={styles.note}>Open to generate a comment</span><button className={styles.actionButton} onClick={() => openDraftComments(selectedPost)}>Generate Comment</button></div></div></Panel>
      </section>
    </DashboardShell>
  );
}

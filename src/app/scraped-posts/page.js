import { DashboardShell, Panel } from "../components";
import { scrapedPosts } from "../data";
import styles from "../ui.module.css";

export default function ScrapedPostsPage() {
  return (
    <DashboardShell
      title="Scraped Posts"
      subtitle="Monitoring 128 active subreddits for relevant engagement triggers."
      searchPlaceholder="Search posts, subreddits..."
      actions={<><button className={styles.softButton}>↓ Export CSV</button><button className={styles.actionButton}>◌ Force Sync</button></>}
    >
      <section className={styles.filterBar}>
        {[
          ["Date Range", "Last 24 Hours"],
          ["Subreddit", "All Communities"],
          ["Min. Relevance", "70%"],
        ].map(([label, value]) => (
          <div key={label} className={styles.filterBox}>
            <label>{label}</label>
            <div className={styles.filterValue}>{value} <span>▾</span></div>
          </div>
        ))}
      </section>

      <Panel>
        <div className={styles.tableHeader}>
          <span>Date</span><span>Post Title</span><span>Subreddit</span><span>Score</span><span>Topic</span><span>Status</span><span>Action</span>
        </div>
        {scrapedPosts.map((row) => (
          <div key={row[2]} className={styles.tableRow}>
            <div><div className={styles.cellTitle}>{row[0]}</div><div className={styles.tableCellMuted}>{row[1]}</div></div>
            <div><div className={styles.cellTitle}>{row[2]}</div><div className={styles.tableCellMuted}>reddit.com/r/comments/x7...</div></div>
            <span className={styles.tag}>{row[3]}</span>
            <span className={styles.scoreBubble}>{row[4]}</span>
            <span className={styles.pill}>{row[5]}</span>
            <span className={row[6] === "Urgent" ? styles.statusUrgent : row[6] === "In Review" ? styles.statusReview : row[6] === "Ignored" ? styles.statusIgnored : styles.statusNew}>{row[6]}</span>
            <button className={styles.iconButton}>⋮</button>
          </div>
        ))}
        <div className={styles.bottomBar}>
          <span className={styles.note}>Showing 1 to 4 of 1,248 entries</span>
          <div className={styles.pagination}><button className={styles.iconButton}>‹</button><button className={styles.softButton}>1</button><button className={styles.iconButton}>2</button><button className={styles.iconButton}>3</button><button className={styles.iconButton}>32</button><button className={styles.iconButton}>›</button></div>
        </div>
      </Panel>

      <section className={styles.grid3} style={{ marginTop: 18 }}>
        <div className={styles.card}><p className={styles.eyebrow}>Trending Community</p><h3>r/ProductHunt</h3><p className={styles.note}>+24% Activity surge</p></div>
        <div className={styles.card}><p className={styles.eyebrow}>Top Conversion Topic</p><h3>Outreach Automation</h3><p className={styles.note}>14.2% Click-thru rate</p></div>
        <div className={styles.card}><p className={styles.eyebrow}>Sentiment Index</p><h3>Mostly Positive</h3><p className={styles.note}>Based on 4.2k signals</p></div>
      </section>
    </DashboardShell>
  );
}

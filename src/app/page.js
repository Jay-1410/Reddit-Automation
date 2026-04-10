import { DashboardShell, Panel, StatCard } from "./components";
import { dashboardPosts, draftQueue } from "./data";
import styles from "./ui.module.css";

export default function HomePage() {
  return (
    <DashboardShell
      title="Command Central"
      subtitle="Monitoring r/technology, r/saas, and 4 others."
      searchPlaceholder="Search across Reddit threads..."
      actions={<StatCard title="Global Agent Status" note="Operational" footer={<div className={styles.progressTrack}><div className={styles.progressFill} style={{ width: "100%" }} /></div>} />}
    >
      <section className={styles.grid3}>
        <StatCard eyebrow="Total posts scraped today" value="1,284" note="↗12%" />
        <StatCard eyebrow="Relevant posts found" value="42" note="3.2% Hit Rate" />
        <StatCard title="High Engagement Posts" note="Top threads requiring immediate attention." footer={<div className={styles.stacked}><div className={styles.filterValue}>⚡ “How do you automate your Red...” <span>42 Comments • 2h ago</span></div><div className={styles.filterValue}>⚡ “Anyone tried Ampere.sh yet? Lo...” <span>12 Comments • 45m ago</span></div></div>} large />
      </section>

      <section className={styles.twoCol}>
        <Panel title="Recent Scraped Posts" right={<span className={styles.note}>View All Posts</span>}>
          <div className={styles.feedList}>
            {dashboardPosts.map((post) => (
              <article key={post.title} className={styles.feedCard}>
                <div className={styles.feedMeta}>
                  <span className={styles.tag}>{post.subreddit}</span>
                  <span>Posted by {post.author}</span>
                  <span>{post.age}</span>
                  <span className={styles.pill}>{post.sentiment}</span>
                </div>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
                <div className={styles.feedFooter}>
                  <div className={styles.inlineMeta}>
                    <span>♡ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                  </div>
                  <button className={styles.softButton}>Generate Draft</button>
                </div>
              </article>
            ))}
          </div>
        </Panel>

        <div className={styles.stacked}>
          <section className={styles.queueCard}>
            <div className={styles.queueTop}>
              <div className={styles.panelHeader}>
                <h3>Drafts Queue</h3>
                <span className={styles.smallBadge}>08</span>
              </div>
              <p className={styles.note}>Waiting for your approval</p>
            </div>
            <div className={styles.queueBody}>
              {draftQueue.map((item) => (
                <div key={item.kind}>
                  <p className={styles.eyebrow}>{item.kind}</p>
                  <p>{item.text}</p>
                  <div className={styles.actionRow} style={{ marginTop: 12 }}>
                    <button className={styles.actionButton}>Approve</button>
                    <button className={styles.iconButton}>🗑</button>
                    <button className={styles.iconButton}>✎</button>
                  </div>
                </div>
              ))}
              <button className={styles.softButton}>See full queue</button>
            </div>
          </section>

          <section className={styles.card}>
            <h3>Daily Engagement Reach</h3>
            <div className={styles.miniChart}>
              {[44, 72, 33, 86, 58, 97, 53, 79, 103].map((h, i) => (
                <span key={i} style={{ height: `${h}px` }} />
              ))}
            </div>
          </section>
        </div>
      </section>

      <button className={styles.plusFloat}>⚡</button>
    </DashboardShell>
  );
}

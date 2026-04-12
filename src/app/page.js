import { DashboardShell, Panel, StatCard } from "./components";
import { dashboardMetrics, dashboardPosts, dashboardTimeline } from "./data";
import styles from "./ui.module.css";

export default function HomePage() {
  return (
    <DashboardShell
      title="Campaign Overview"
      subtitle="A focused workspace for monitoring posts, generating drafts, and reviewing approvals."
      searchPlaceholder="Search campaigns, posts, or communities..."
      actions={<><button className={styles.softButton}>Export</button><button className={styles.actionButton}>New Campaign</button></>}
    >
      <section className={styles.metricGrid}>
        {dashboardMetrics.map((item) => (
          <StatCard key={item.label} eyebrow={item.label} value={item.value} note={item.note} />
        ))}
      </section>

      <section className={styles.dashboardSplit}>
        <Panel title="Priority Feed" right={<span className={styles.note}>Live ranking</span>}>
          <div className={styles.feedList}>
            {dashboardPosts.map((post) => (
              <article key={post.id} className={styles.feedCard}>
                <div className={styles.feedMeta}>
                  <span className={styles.tag}>{post.subreddit}</span>
                  <span>{post.author}</span>
                  <span>{post.age}</span>
                  <span className={styles.pill}>{post.urgency}</span>
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

        <div className={styles.stackColumn}>
          <Panel title="Pipeline Status">
            <div className={styles.miniPills}>
              <div className={styles.filterValue}>Scraping <span className={styles.safe}>On</span></div>
              <div className={styles.filterValue}>Drafting <span className={styles.pill}>18 ready</span></div>
              <div className={styles.filterValue}>Review <span className={styles.pill}>7 pending</span></div>
            </div>
          </Panel>

          <Panel title="Recent Activity">
            <div className={styles.tableList}>
              {dashboardTimeline.map((item) => (
                <div key={item.label} className={styles.timelineItem}>
                  <span className={`${styles.dot} ${styles[item.tone]}`} />
                  <div>
                    <strong>{item.label}</strong>
                    <p>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </section>
    </DashboardShell>
  );
}

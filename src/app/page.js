import { DashboardShell, Panel, StatCard } from "./components";
import { dashboardMetrics, dashboardPosts, dashboardTimeline } from "./data";
import styles from "./ui.module.css";

export default function HomePage() {
  return (
    <DashboardShell
      title="Analytics"
      subtitle="Track keyword coverage, scraped volume, generated comments, and queue health across the workspace."
      searchPlaceholder="Search signals, agents, or subreddits..."
    >
      <section className={styles.metricGrid}>
        {dashboardMetrics.map((item) => (
          <StatCard key={item.label} eyebrow={item.label} value={item.value} note={item.note} />
        ))}
      </section>

      <section className={styles.dashboardSplit}>
        <Panel title="Network Performance" right={<div className={styles.segmentPillGroup}><span className={styles.segmentActive}>Posts</span><span className={styles.segment}>Comments</span></div>}>
          <div className={styles.chartCard}>
            <div className={styles.chartLine} />
          </div>
        </Panel>

        <div className={styles.stackColumn}>
          <Panel title="Top Keyword">
            <div className={styles.miniCardEmphasis}>
              <div>
                <p className={styles.eyebrow}>Trending now</p>
                <h3>AI Automation</h3>
                <p className={styles.note}>248 matches today</p>
              </div>
            </div>
          </Panel>

          <Panel title="Best Agent">
            <div className={styles.miniCardEmphasis}>
              <div>
                <p className={styles.eyebrow}>Highest success</p>
                <h3>Agent Alpha-7</h3>
                <p className={styles.note}>98% positive sentiment score</p>
              </div>
            </div>
          </Panel>
        </div>
      </section>

      <section className={styles.dashboardTwoCol}>
        <Panel title="Live Signal Feed">
          <div className={styles.feedList}>
            {dashboardTimeline.map((item) => (
              <div key={item.label} className={styles.signalRow}>
                <span className={`${styles.dot} ${styles[item.tone]}`} />
                <div>
                  <strong>{item.label}</strong>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Queue Snapshot" right={<span className={styles.note}>View Full Queue</span>}>
          <div className={styles.queueTable}>
            {dashboardPosts.map((post) => (
              <div key={post.id} className={styles.queueRow}>
                <div className={styles.queueSub}>{post.subreddit}</div>
                <div>
                  <div className={styles.queueTitle}>{post.title}</div>
                  <div className={styles.tableCellMuted}>{post.author} • {post.age}</div>
                </div>
                <div className={styles.queueStatus}>{post.urgency}</div>
              </div>
            ))}
          </div>
        </Panel>
      </section>
    </DashboardShell>
  );
}

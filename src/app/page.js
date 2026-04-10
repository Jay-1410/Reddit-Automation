import { DashboardShell, Panel, StatCard } from "./components";
import { dashboardPosts, draftQueue } from "./data";
import styles from "./ui.module.css";

export default function HomePage() {
  return (
    <DashboardShell
      title="Command Central"
      subtitle="Monitoring r/technology, r/saas, and 4 others."
      searchPlaceholder="Search across Reddit threads..."
    >
      <section className={styles.grid3}>
        <StatCard eyebrow="Total posts scraped today" value="1,284" note="↗12%" />
        <StatCard eyebrow="Relevant posts found" value="42" note="3.2% Hit Rate" />
      </section>

      <section className={styles.dashboardTwoCol}>
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
          <Panel title="Notifications" right={<span className={styles.smallBadge}>Live</span>}>
            <div className={styles.tableList}>
              <div className={styles.filterValue}>⚡ New high relevance post detected <span className={styles.pill}>r/SaaS</span></div>
              <div className={styles.filterValue}>🕒 Scraper cycle completed <span className={styles.pill}>2 min ago</span></div>
              <div className={styles.filterValue}>✅ 3 drafts approved today <span className={styles.pill}>Safe</span></div>
              <div className={styles.filterValue}>🔔 1 rule update detected <span className={styles.pill}>Review</span></div>
            </div>
          </Panel>

          <Panel title="Activity">
            <div className={styles.tableList}>
              <div className={styles.feedMeta}><span className={styles.tag}>System</span><span>Indexed 1,284 posts</span><span className={styles.note}>today</span></div>
              <div className={styles.feedMeta}><span className={styles.tag}>Queue</span><span>7 items waiting</span><span className={styles.note}>now</span></div>
              <div className={styles.feedMeta}><span className={styles.tag}>Rules</span><span>5 communities monitored</span><span className={styles.note}>active</span></div>
            </div>
          </Panel>
        </div>
      </section>

      <button className={styles.plusFloat}>⚡</button>
    </DashboardShell>
  );
}

import { DashboardShell, Panel, StatCard } from "../components";
import { opportunities } from "../data";
import styles from "../ui.module.css";

export default function EngagementPage() {
  return (
    <DashboardShell
      title="High Engagement Opportunities"
      subtitle="Leverage high-velocity threads matching your core product pillars. Priorities are determined by reach potential and community sentiment."
      searchPlaceholder="Search opportunities..."
      profileName="Alex Chen"
      profileRole=""
      brandIcon
      actions={<><button className={styles.softButton}>☰ Filters</button><button className={styles.softButton}>⇩ Export</button></>}
    >
      <section className={styles.grid3}>
        <StatCard eyebrow="Active Pulse" value="142 Posts" note="↗ +22% vs yesterday" large accent="purple" />
        <StatCard eyebrow="Avg. Relevance" value="94%" footer={<div className={styles.progressTrack}><div className={styles.progressFill} style={{ width: "94%" }} /></div>} />
        <StatCard title="Top Subreddit" value="r/SaaS" note="32 active threads tracked" />
      </section>

      <Panel title={null}>
        <div className={styles.panelHeader} style={{ marginBottom: 10 }}>
          <div className={styles.feedFooter}><span className={styles.pill}>High Relevance</span><span className={styles.note}>New Arrivals</span><span className={styles.note}>Trending</span></div>
          <span className={styles.note}>Showing 42 of 142 results</span>
        </div>
        <div className={styles.opportunitiesHeader}>
          <span>Post Title</span><span>Subreddit</span><span>Engagement</span><span>Relevance</span><span>Why it matches</span><span>Action</span>
        </div>
        {opportunities.map((row) => (
          <div key={row[0]} className={styles.opportunityRow}>
            <div><div className={styles.cellTitle}>{row[0]}</div><div className={styles.tableCellMuted}>Posted by community member</div></div>
            <span className={styles.tag}>{row[1]}</span>
            <div><div className={styles.cellTitle}>{row[2]}</div><div className={styles.tableCellMuted}>84 comments</div></div>
            <span>{row[3]}</span>
            <p className={styles.tableCellMuted}>{row[4]}</p>
            <button className={row[5] === "Generate Comment" ? styles.actionButton : styles.softButton}>{row[5]}</button>
          </div>
        ))}
        <div className={styles.bottomBar}><span className={styles.note}>Load More Opportunities ˅</span></div>
      </Panel>
    </DashboardShell>
  );
}

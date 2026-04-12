import { DashboardShell, Panel, StatCard } from "./components";
import { activityFeed, dashboardStats, queueRows } from "./data";
import styles from "./ui.module.css";

export default function HomePage() {
  return (
    <DashboardShell title="Analytics" subtitle="Global scrape and generation rates across the last 24 hours." searchPlaceholder="Quick search...">
      <section className={styles.metricGrid}>
        {dashboardStats.slice(0, 4).map((item) => <StatCard key={item.label} eyebrow={item.label} value={item.value} note={item.note} accent={item.accent === "High" ? "high" : "neutral"} />)}
      </section>
      <section className={styles.metricGrid}>
        {dashboardStats.slice(4).map((item) => <StatCard key={item.label} eyebrow={item.label} value={item.value} note={item.note} />)}
      </section>

      <section className={styles.dashboardSplit}>
        <Panel title="Network Performance" right={<div className={styles.segmentPillGroup}><span className={styles.segmentActive}>Posts</span><span className={styles.segment}>Comments</span></div>}>
          <div className={styles.chartCard}><div className={styles.chartLine} /></div>
        </Panel>
        <div className={styles.stackColumn}>
          <Panel title="Top Keyword"><div className={styles.miniCardEmphasis}><div><p className={styles.eyebrow}>Top Keyword</p><h3>AI Automation</h3><p className={styles.note}>248 matches today</p></div></div></Panel>
          <Panel title="Best Agent"><div className={styles.miniCardEmphasis}><div><p className={styles.eyebrow}>Best Agent</p><h3>Agent Alpha-7</h3><p className={styles.note}>98% positive sentiment score</p></div></div></Panel>
        </div>
      </section>

      <section className={styles.dashboardTwoCol}>
        <Panel title="Live Signal Feed">
          <div className={styles.feedList}>{activityFeed.map((item) => <div key={item[0]} className={styles.signalRow}><span className={styles.dot} /><div><strong>{item[0]}</strong><p>{item[1]}</p></div><span className={styles.note}>{item[2]}</span></div>)}</div>
        </Panel>
        <Panel title="Queue Snapshot" right={<span className={styles.note}>View Full Queue</span>}>
          <div className={styles.queueTable}>{queueRows.map((row) => <div key={row[0]} className={styles.queueRow}><div className={styles.queueSub}>{row[0]}</div><div><div className={styles.queueTitle}>{row[1]}</div><div className={styles.tableCellMuted}>{row[2]}</div></div><div className={styles.queueStatus}>{row[3]}</div></div>)}</div>
        </Panel>
      </section>
    </DashboardShell>
  );
}

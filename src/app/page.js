import { DashboardShell, Panel, StatCard } from "./components";
import { activityFeed, dashboardStats, queueRows, sourceRules, sourceStatuses } from "./data";
import styles from "./ui.module.css";

export default function HomePage() {
  return (
    <DashboardShell title="Analytics" subtitle="Global source and generation rates across the last 24 hours." searchPlaceholder="Quick search...">
      <section className={styles.metricGrid}>
        {dashboardStats.slice(0, 4).map((item) => <StatCard key={item.label} eyebrow={item.label} value={item.value} note={item.note} accent={item.accent === "High" ? "high" : "neutral"} />)}
      </section>
      <section className={styles.metricGrid}>
        {dashboardStats.slice(4).map((item) => <StatCard key={item.label} eyebrow={item.label} value={item.value} note={item.note} />)}
      </section>

      <section className={styles.dashboardSplit}>
        <Panel title="Source Health" right={<span className={styles.note}>Approved sources only</span>}>
          <div className={styles.sourceHealthList}>
            {sourceStatuses.map((item) => <div key={item[0]} className={styles.sourceHealthRow}><div><div className={styles.queueTitle}>{item[0]}</div><div className={styles.tableCellMuted}>{item[2]}</div></div><span className={item[1] === "Connected" ? styles.statusNew : styles.statusReview}>{item[1]}</span></div>)}
          </div>
        </Panel>
        <div className={styles.stackColumn}>
          <Panel title="Source Rules"><div className={styles.tableList}>{sourceRules.map((item) => <div key={item[0]} className={styles.filterValue}><span>{item[0]}</span><span className={styles.pill}>{item[1]}</span></div>)}</div></Panel>
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

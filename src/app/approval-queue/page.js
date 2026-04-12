import { DashboardShell, Panel } from "../components";
import { approvalItems } from "../data";
import styles from "../ui.module.css";

export default function ApprovalQueuePage() {
  return (
    <DashboardShell
      title="Comment Queue"
      subtitle="Review queued comments and posts, then remove or submit them into the delivery workflow."
      searchPlaceholder="Search queue or agents..."
      actions={<><button className={styles.softButton}>Filters</button><button className={styles.actionButton}>Submit Selected</button></>}
    >
      <section className={styles.metricGrid}>
        <div className={styles.card}><p className={styles.eyebrow}>Total Queued</p><div className={styles.metricValue}>1,284</div></div>
        <div className={styles.card}><p className={styles.eyebrow}>Ready</p><div className={styles.metricValue}>842</div></div>
        <div className={styles.card}><p className={styles.eyebrow}>Assigned</p><div className={styles.metricValue}>312</div></div>
        <div className={styles.card}><p className={styles.eyebrow}>Flagged</p><div className={styles.metricValue}>13</div></div>
      </section>

      <Panel title="Queue Snapshot" right={<span className={styles.note}>Review and submit</span>}>
        <div className={styles.queueTableHead}><span>Subreddit</span><span>Trigger Post</span><span>Assigned Agent</span><span>Scheduled</span><span>Action</span></div>
        {approvalItems.map((row, idx) => (
          <div key={row[2]} className={styles.queueTableRow}>
            <div className={styles.queueSub}>{row[1]}</div>
            <div className={styles.tableCellMuted}>{row[2]}</div>
            <div className={styles.queueAgent}>{`Alpha-${idx + 1}`}</div>
            <div className={styles.tableCellMuted}>{14 + idx * 5}:20</div>
            <div className={styles.queueActions}><button className={styles.softButton}>Remove</button><button className={styles.actionButton}>{row[5]}</button></div>
          </div>
        ))}
      </Panel>
    </DashboardShell>
  );
}

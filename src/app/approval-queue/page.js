import { DashboardShell } from "../components";
import { approvalItems } from "../data";
import styles from "../ui.module.css";

export default function ApprovalQueuePage() {
  return (
    <DashboardShell
      title="Approval Queue"
      subtitle="Review queued comments and posts, then choose whether to remove or submit."
      searchPlaceholder="Search queue..."
      actions={<section className={styles.feedFooter}><div className={styles.card} style={{ minWidth: 140 }}><p className={styles.eyebrow}>Queue Depth</p><div className={styles.metricValue} style={{ fontSize: 38 }}>24</div><p className={styles.note}>Items</p></div><div className={styles.card} style={{ minWidth: 140 }}><p className={styles.eyebrow}>Health Rate</p><div className={styles.metricValue} style={{ fontSize: 38 }}>98%</div></div></section>}
    >
      <section className={styles.tableWrap}>
        <div className={styles.panelHeader}><div className={styles.feedFooter}><button className={styles.softButton}>All Items</button><button className={styles.ghostButton}>Comments Only</button><button className={styles.ghostButton}>Posts Only</button></div><span className={styles.note}>Sort by: Newest</span></div>
        <div className={styles.approvalHeader}><span>Type</span><span>Subreddit</span><span>Draft Content</span><span>Source/Model</span><span>Rule Safety</span><span>Actions</span></div>
        {approvalItems.map((row) => (
          <div key={row[2]} className={styles.approvalRow}>
            <span className={styles.tag}>{row[0]}</span>
            <div className={styles.cellTitle}>{row[1]}</div>
            <div><div className={styles.cellTitle}>{row[2]}</div><div className={styles.tableCellMuted}>Ready to review before queue submission</div></div>
            <div className={styles.tableCellMuted}>{row[3]}</div>
            <div className={row[4].includes("Warning") ? styles.statusUrgent : styles.safe}>{row[4]}</div>
            <div className={styles.actionRow}><button className={styles.iconButton}>✕</button><button className={styles.actionButton}>{row[5]}</button></div>
          </div>
        ))}
      </section>

      <div className={styles.bottomBar}>
        <div className={styles.pagination}><span className={styles.note}>Showing 1 to 4 of 24 items</span><button className={styles.softButton}>1</button><button className={styles.iconButton}>2</button><button className={styles.iconButton}>3</button></div>
        <div className={styles.feedFooter}><span className={styles.eyebrow}>Queue Status: Healthy</span><div className={styles.progressTrack} style={{ width: 140 }}><div className={styles.progressFill} style={{ width: "96%" }} /></div></div>
      </div>
    </DashboardShell>
  );
}

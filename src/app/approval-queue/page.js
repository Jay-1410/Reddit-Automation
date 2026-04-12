"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { DashboardShell, Panel } from "../components";
import { queueRows } from "../data";
import styles from "../ui.module.css";

function ApprovalQueueContent() {
  const params = useSearchParams();
  const queuedTitle = params.get("title");
  const queuedComment = params.get("comment");
  const queuedSubreddit = params.get("subreddit");

  return (
    <DashboardShell title="Comment Queue" subtitle="Review queued comments and posts, then remove or submit them into the delivery workflow." searchPlaceholder="Search queue or agents..." actions={<><button className={styles.softButton}>Filters</button><button className={styles.actionButton}>Submit Selected</button></>}>
      <section className={styles.metricGrid}>
        <div className={styles.card}><p className={styles.eyebrow}>Total Queued</p><div className={styles.metricValue}>1,284</div><p className={styles.note}>All queued posts and comments</p></div>
        <div className={styles.card}><p className={styles.eyebrow}>Ready</p><div className={styles.metricValue}>842</div><p className={styles.note}>Waiting for agent assignment</p></div>
        <div className={styles.card}><p className={styles.eyebrow}>Assigned</p><div className={styles.metricValue}>312</div><p className={styles.note}>Already mapped to agents</p></div>
        <div className={styles.card}><p className={styles.eyebrow}>Flagged</p><div className={styles.metricValue}>13</div><p className={styles.note}>Needs manual review</p></div>
      </section>

      {queuedTitle ? (
        <Panel title="Just Added" right={<span className={styles.statusNew}>New</span>}>
          <div className={styles.queueTableHead}><span>Assigned Agent</span><span>Scheduled</span><span>Action</span></div>
          <div className={styles.queueTableRow}>
            <div className={styles.queueAgent}>Alpha-1</div>
            <div className={styles.tableCellMuted}>14:20 (In 2m)</div>
            <div className={styles.queueActions}><button className={styles.softButton}>Remove</button><button className={styles.actionButton}>Submit</button></div>
          </div>
          <div className={styles.queueTableRow}>
            <div className={styles.queueAgent}>Beta-4</div>
            <div className={styles.tableCellMuted}>14:25 (In 7m)</div>
            <div className={styles.queueActions}><button className={styles.softButton}>Remove</button><button className={styles.actionButton}>Submit</button></div>
          </div>
          <div className={styles.queueTableRow}>
            <div className={styles.queueAgent}>Alpha-7</div>
            <div className={styles.tableCellMuted}>14:32 (In 14m)</div>
            <div className={styles.queueActions}><button className={styles.softButton}>Remove</button><button className={styles.actionButton}>Submit</button></div>
          </div>
          {queuedTitle ? (
            <div className={styles.queueTableRow}>
              <div className={styles.queueAgent}>Omega-2</div>
              <div className={styles.tableCellMuted}>14:40 (In 22m)</div>
              <div className={styles.queueActions}><button className={styles.softButton}>Remove</button><button className={styles.actionButton}>Submit</button></div>
            </div>
          ) : null}
        </Panel>
      ) : null}

      <Panel title="Queue Snapshot" right={<span className={styles.note}>Review and submit</span>}>
        <div className={styles.queueTableHead}><span>Subreddit</span><span>Trigger Post</span><span>Assigned Agent</span><span>Scheduled</span><span>Action</span></div>
        {queueRows.map((row) => (
          <div key={row[0]} className={styles.queueTableRow}>
            <div className={styles.queueSub}>{row[0]}</div>
            <div className={styles.tableCellMuted}>{row[1]}</div>
            <div className={styles.queueAgent}>{row[2]}</div>
            <div className={styles.tableCellMuted}>{row[3]}</div>
            <div className={styles.queueActions}><button className={styles.softButton}>Remove</button><button className={styles.actionButton}>Submit</button></div>
          </div>
        ))}
      </Panel>
    </DashboardShell>
  );
}

export default function ApprovalQueuePage() {
  return <Suspense fallback={null}><ApprovalQueueContent /></Suspense>;
}

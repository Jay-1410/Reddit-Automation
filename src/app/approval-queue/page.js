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

  const renderRow = (subreddit, post, agent, scheduled, selected = false) => (
    <div className={`${styles.queueTableRow} ${selected ? styles.queueRowSelected : ""}`}>
      <div className={styles.queueSub}>{subreddit}</div>
      <div className={styles.tableCellMuted}>{post}</div>
      <div className={styles.queueAgent}>{agent}</div>
      <div className={styles.tableCellMuted}>{scheduled}</div>
      <div className={styles.queueActions}><button className={styles.softButton}>Remove</button><button className={styles.actionButton}>Submit</button></div>
    </div>
  );

  return (
    <DashboardShell title="Comment Queue" subtitle="Review queued comments and posts, then remove or submit them into the delivery workflow." searchPlaceholder="Search queue or agents..." actions={<><button className={styles.softButton}>Filters</button><button className={styles.actionButton}>Submit Selected</button></>}>
      <section className={styles.metricGrid}>
        <div className={styles.card}><p className={styles.eyebrow}>Total Queued</p><div className={styles.metricValue}>1,284</div><p className={styles.note}>All queued posts and comments</p></div>
        <div className={styles.card}><p className={styles.eyebrow}>Ready</p><div className={styles.metricValue}>842</div><p className={styles.note}>Waiting for agent assignment</p></div>
        <div className={styles.card}><p className={styles.eyebrow}>Assigned</p><div className={styles.metricValue}>312</div><p className={styles.note}>Already mapped to agents</p></div>
        <div className={styles.card}><p className={styles.eyebrow}>Flagged</p><div className={styles.metricValue}>13</div><p className={styles.note}>Needs manual review</p></div>
      </section>

      <Panel title="Queue Snapshot" right={<span className={styles.note}>Review and submit</span>}>
        <div className={styles.queueTableHead}><span>Subreddit</span><span>Trigger Post</span><span>Assigned Agent</span><span>Scheduled</span><span>Action</span></div>
        {queuedTitle ? renderRow(queuedSubreddit || "r/technology", `${queuedTitle} • ${queuedComment || "Queued from Post Scraping"}`, "Alpha-1", "14:20 (In 2m)", true) : null}
        {queueRows.map((row) => renderRow(row[0], row[1], row[2], row[3]))}
      </Panel>
    </DashboardShell>
  );
}

export default function ApprovalQueuePage() {
  return <Suspense fallback={null}><ApprovalQueueContent /></Suspense>;
}

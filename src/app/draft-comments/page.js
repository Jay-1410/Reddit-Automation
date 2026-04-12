"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { DashboardShell, Panel } from "../components";
import { queueItems } from "../data";
import styles from "../ui.module.css";

function DraftCommentsContent() {
  const params = useSearchParams();
  const source = params.get("source");
  const subreddit = params.get("subreddit");
  return (
    <DashboardShell title="Comment Queue" subtitle={source ? `Generated from ${subreddit} • ${source}` : "Review, edit, and queue generated replies before they reach the approval queue."} searchPlaceholder="Search comments..." actions={<><button className={styles.softButton}>Status</button><button className={styles.actionButton}>Add to Queue</button></>}>
      <section className={styles.dashboardSplit}>
        <Panel title="Generated Drafts" right={<span className={styles.note}>Selected source</span>}>
          <div className={styles.sourceBanner}><div><p className={styles.eyebrow}>Source Post</p><h3>{source || "No source selected"}</h3><p className={styles.note}>{subreddit || "r/SaaS"}</p></div></div>
          <div className={styles.stackColumn}>{queueItems.slice(0, 3).map((item) => <article key={item[0]} className={styles.commentCard}><div><div className={styles.feedMeta}><span className={styles.tag}>r/SaaS</span><span>{item[3]}</span></div><p className={styles.commentPrompt}>{item[1]}</p><div className={styles.feedMeta}><span className={styles.pill}>Source: Hot Post</span></div></div><div><textarea className={styles.commentEditor} defaultValue="Edit this generated comment before queueing it." /><div className={styles.feedMeta} style={{ marginTop: 12 }}><span>Status READY</span><span>Tone Helpful</span></div></div><div className={styles.stacked}><button className={styles.actionButton}>Add to Queue</button><button className={styles.iconButton}>✎</button></div></article>)}</div>
        </Panel>
        <Panel title="Builder"><div className={styles.tableList}><div className={styles.filterValue}>Tone <span className={styles.pill}>Helpful / Peer</span></div><div className={styles.filterValue}>Length <span className={styles.pill}>Short</span></div><div className={styles.filterValue}>Safety <span className={styles.safe}>Validated</span></div><button className={styles.actionButton}>Add to Queue</button></div></Panel>
      </section>
    </DashboardShell>
  );
}
export default function DraftCommentsPage() { return <Suspense fallback={null}><DraftCommentsContent /></Suspense>; }

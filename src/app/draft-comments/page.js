"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { DashboardShell, Panel } from "../components";
import { draftComments } from "../data";
import styles from "../ui.module.css";

function DraftCommentsContent() {
  const params = useSearchParams();
  const source = params.get("source");
  const subreddit = params.get("subreddit");

  return (
    <DashboardShell
      title="Draft Comments"
      subtitle={source ? `Generated from ${subreddit} • ${source}` : "Review AI-generated responses tailored to community sentiment and subreddit nuances."}
      searchPlaceholder="Search comments..."
      actions={<><button className={styles.softButton}>Filter</button><button className={styles.actionButton}>Approve All</button></>}
    >
      <section className={styles.dashboardSplit}>
        <Panel title="Selected Source" right={<span className={styles.smallBadge}>Live</span>}>
          <div className={styles.commentSourceBox}>
            <p className={styles.note}>This area shows the post that was sent from Scraped Posts via Generate Comment.</p>
            <div className={styles.feedMeta} style={{ marginTop: 10 }}>
              <span className={styles.tag}>{subreddit || "r/SaaS"}</span>
              <span>{source || "No source selected"}</span>
            </div>
          </div>

          <div className={styles.stackColumn} style={{ marginTop: 12 }}>
            {draftComments.map((item) => (
              <section key={item.prompt} className={`${styles.commentCard} ${item.risk === "high" ? styles.riskHigh : ""}`}>
                <div>
                  <div className={styles.feedMeta}><span className={styles.tag}>{item.source}</span><span>{item.time}</span></div>
                  <p className={styles.commentPrompt}>{item.prompt}</p>
                  <div className={styles.feedMeta}><span className={styles.pill}>{item.meta}</span></div>
                </div>
                <div>
                  <div className={styles.feedMeta}>
                    {item.flags.map((flag) => <span key={flag} className={styles.pill}>{flag}</span>)}
                    <span className={styles.note}>Model: {item.model}</span>
                  </div>
                  <p className={styles.commentBody}>{item.response}</p>
                  <div className={styles.feedMeta} style={{ marginTop: 12 }}><span>Status {item.status}</span><span>Tone {item.tone}</span></div>
                </div>
                <div className={styles.stacked}>
                  {item.risk === "high" ? <button className={styles.dangerButton}>Dismiss</button> : <button className={styles.actionButton}>{item.action}</button>}
                  <button className={styles.iconButton}>✎</button>
                  {item.risk === "high" ? <button className={styles.softButton}>Re-generate</button> : <button className={styles.iconButton}>✕</button>}
                </div>
              </section>
            ))}
          </div>
        </Panel>

        <Panel title="Comment Builder">
          <div className={styles.tableList}>
            <div className={styles.filterValue}>Tone <span className={styles.pill}>Helpful / Peer</span></div>
            <div className={styles.filterValue}>Length <span className={styles.pill}>Short</span></div>
            <div className={styles.filterValue}>Safety <span className={styles.safe}>Validated</span></div>
            <button className={styles.actionButton}>Generate Another Comment</button>
          </div>
        </Panel>
      </section>
    </DashboardShell>
  );
}

export default function DraftCommentsPage() {
  return <Suspense fallback={null}><DraftCommentsContent /></Suspense>;
}

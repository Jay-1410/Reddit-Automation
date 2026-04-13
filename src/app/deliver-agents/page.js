"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { DashboardShell, Panel } from "../components";
import { agentCards } from "../data";
import styles from "../ui.module.css";

const historyRows = [
  ["14:22:01", "Nexus-01", "r/tech_trends/88s2j...", "This automation stack is changing how we deploy...", "DELIVERED"],
  ["14:18:45", "Ghost-Pro", "r/marketing/92h1k...", "The signal-to-noise ratio in these threads is high...", "PENDING"],
  ["14:15:30", "Sentry-6", "r/devops/a2f9k...", "I found that using Kubernetes for these tasks is like...", "FAILED"],
  ["14:12:12", "Nexus-01", "r/startups/u3n5m...", "Have you tried diversifying your traffic sources...", "DELIVERED"],
  ["14:10:05", "Nexus-01", "r/webdev/m9n2k...", "The new Next.js App Router has some learning curve...", "DELIVERED"],
];

function DeliverAgentsContent() {
  const params = useSearchParams();
  const submittedTitle = params.get("title");
  const submittedComment = params.get("comment");
  const submittedSubreddit = params.get("subreddit");

  const submittedRow = submittedTitle ? [
    "just now",
    "Nexus-01",
    `${submittedSubreddit || "r/technology"} / queued submission`,
    submittedComment || submittedTitle,
    "DELIVERED",
  ] : null;

  return (
    <DashboardShell
      title="Agent Command"
      subtitle="Operational management of automated Reddit identity clusters."
      searchPlaceholder="Quick search..."
    >
      <section className={styles.agentGrid}>
        {agentCards.map((agent, index) => {
          const status = agent[2];
          const width = status === "ACTIVE" ? "78%" : status === "BUSY" ? "52%" : status === "COOLDOWN" ? "34%" : "18%";
          const dotClass = status === "ACTIVE" ? styles.agentDotOrange : status === "BUSY" ? styles.agentDotBlue : status === "COOLDOWN" ? styles.agentDotGray : styles.agentDotOrange;
          return (
            <article key={agent[0]} className={styles.agentThemeCard}>
              <div className={styles.agentThemeTop}>
                <div className={styles.agentPortraitWrap}>
                  <div className={styles.agentPortrait}>{agent[0].slice(0, 2)}</div>
                  <span className={`${styles.agentStatusDot} ${dotClass}`}></span>
                </div>
                <div className={styles.agentThemeMenu}>⋮</div>
              </div>
              <h3 className={styles.agentThemeName}>{agent[0]}</h3>
              <p className={styles.agentThemeHandle}>{agent[1]}</p>
              <div className={styles.agentThemeDivider} />
              <div className={styles.agentThemeMetaRow}>
                <span className={styles.agentThemeStatus}>{status}</span>
                <span className={styles.agentThemeMetric}>{agent[3]}</span>
              </div>
              <div className={styles.agentThemeTrack}><span className={styles.agentThemeFill} style={{ width }} /></div>
              <button className={styles.agentThemeButton}>VIEW DETAILS</button>
            </article>
          );
        })}
      </section>

      <section className={styles.historyPanelWrap}>
        <Panel title="Detailed Execution History" right={<div className={styles.segmentPillGroup}><span className={styles.segmentActive}>All</span><span className={styles.segment}>Failed</span><span className={styles.segment}>Success</span></div>}>
          <div className={styles.historyTable}>
            <div className={styles.queueTableHead}><span>TIMESTAMP</span><span>AGENT</span><span>SOURCE POST</span><span>SUBMISSION PREVIEW</span><span>STATUS</span></div>
            {submittedRow ? (
              <div className={`${styles.queueTableRow} ${styles.queueRowSelected}`}>
                <div className={styles.tableCellMuted}>{submittedRow[0]}</div>
                <div className={styles.queueAgent}>{submittedRow[1]}</div>
                <div className={styles.tableCellMuted}>{submittedRow[2]}</div>
                <div className={styles.tableCellMuted}>{submittedRow[3]}</div>
                <div className={styles.queueStatus}>{submittedRow[4]}</div>
              </div>
            ) : null}
            {historyRows.map((row) => (
              <div key={row[0]} className={styles.queueTableRow}>
                <div className={styles.tableCellMuted}>{row[0]}</div>
                <div className={styles.queueAgent}>{row[1]}</div>
                <div className={styles.tableCellMuted}>{row[2]}</div>
                <div className={styles.tableCellMuted}>{row[3]}</div>
                <div className={`${styles.queueStatus} ${row[4] === "FAILED" ? styles.statusUrgent : row[4] === "PENDING" ? styles.statusReview : styles.statusNew}`}>{row[4]}</div>
              </div>
            ))}
          </div>
          <div className={styles.historyFooter}><span className={styles.note}>Showing 5 of 1,280 submissions</span><div className={styles.feedFooter}><span className={styles.note}>PREV</span><span className={styles.note}>NEXT</span></div></div>
        </Panel>
      </section>
    </DashboardShell>
  );
}

export default function DeliverAgentsPage() {
  return <Suspense fallback={null}><DeliverAgentsContent /></Suspense>;
}

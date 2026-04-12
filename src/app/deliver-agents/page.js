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

export default function DeliverAgentsPage() {
  return (
    <DashboardShell
      title="Agent Command"
      subtitle="Operational management of automated Reddit identity clusters."
      searchPlaceholder="Quick search..."
      actions={<><button className={styles.softButton}>Date Range</button><button className={styles.actionButton}>+ New Scrape</button></>}
    >
      <section className={styles.agentGrid}>
        {agentCards.map((agent) => (
          <article key={agent[0]} className={styles.agentCard}>
            <div className={styles.agentTop}>
              <div><div className={styles.agentAvatar}>{agent[0].slice(0, 2)}</div><h3>{agent[0]}</h3><p className={styles.note}>{agent[1]}</p></div>
              <span className={styles.agentDots}>⋮</span>
            </div>
            <div className={styles.agentStatusRow}><span className={styles.statusNew}>{agent[2]}</span><span className={styles.agentMini}>{agent[3]}</span></div>
            <div className={styles.agentProgress}><span className={styles.progressFill} style={{ width: agent[2] === "ACTIVE" ? "78%" : agent[2] === "BUSY" ? "62%" : agent[2] === "COOLDOWN" ? "34%" : "18%" }} /></div>
            <button className={styles.agentDetailsButton}>VIEW DETAILS</button>
          </article>
        ))}
        <article className={styles.addAgentCard}><div className={styles.addAgentCircle}>+</div><p>ADD AGENT</p></article>
      </section>

      <section className={styles.historyPanelWrap}>
        <Panel title="Detailed Execution History" right={<div className={styles.segmentPillGroup}><span className={styles.segmentActive}>All</span><span className={styles.segment}>Failed</span><span className={styles.segment}>Success</span></div>}>
          <div className={styles.historyTable}>
            <div className={styles.queueTableHead}><span>TIMESTAMP</span><span>AGENT</span><span>SOURCE POST</span><span>SUBMISSION PREVIEW</span><span>STATUS</span></div>
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

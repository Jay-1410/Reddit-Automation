import { DashboardShell, Panel } from "../components";
import { agents } from "../data";
import styles from "../ui.module.css";

export default function DeliverAgentsPage() {
  return (
    <DashboardShell
      title="AI Agents"
      subtitle="Five dedicated agents with separate accounts, staggered execution windows, and submission history."
      searchPlaceholder="Search agents, history, or posts..."
      actions={<button className={styles.actionButton}>Sync Status</button>}
    >
      <section className={styles.agentGrid}>
        {agents.map((agent) => (
          <article key={agent.name} className={styles.agentCard}>
            <div className={styles.agentTop}><div><h3>{agent.name}</h3><p className={styles.note}>{agent.reddit}</p></div><span className={styles.statusNew}>{agent.status}</span></div>
            <div className={styles.agentMetaGrid}><div><p className={styles.eyebrow}>Window</p><div className={styles.cellTitle}>{agent.window}</div></div><div><p className={styles.eyebrow}>Queue</p><div className={styles.cellTitle}>{agent.assigned}</div></div><div><p className={styles.eyebrow}>Type</p><div className={styles.cellTitle}>{agent.item}</div></div></div>
          </article>
        ))}
      </section>

      <section className={styles.dashboardTwoCol}>
        <Panel title="Assignment Board">
          <div className={styles.queueTableHead}><span>Agent</span><span>Account</span><span>Window</span><span>Assigned</span><span>Status</span></div>
          {agents.map((agent) => (
            <div key={agent.name} className={styles.queueTableRow}>
              <div className={styles.queueAgent}>{agent.name}</div>
              <div className={styles.tableCellMuted}>{agent.reddit}</div>
              <div className={styles.tableCellMuted}>{agent.window}</div>
              <div className={styles.cellTitle}>{agent.assigned}</div>
              <div className={styles.statusNew}>{agent.status}</div>
            </div>
          ))}
        </Panel>

        <Panel title="Execution History">
          <div className={styles.feedList}>
            {agents.map((agent) => (
              <div key={agent.name} className={styles.historyCard}>
                <div className={styles.feedMeta}><span className={styles.tag}>{agent.name}</span><span>{agent.window}</span></div>
                <p className={styles.note}>Last actions: {agent.history.join(" • ")}</p>
              </div>
            ))}
          </div>
        </Panel>
      </section>
    </DashboardShell>
  );
}

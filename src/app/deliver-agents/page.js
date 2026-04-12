import { DashboardShell, Panel } from "../components";
import { agents } from "../data";
import styles from "../ui.module.css";

export default function DeliverAgentsPage() {
  return (
    <DashboardShell
      title="Deliver Agents"
      subtitle="Assign queued items to one of five agents, keep execution windows staggered, and review submission history."
      searchPlaceholder="Search agents or history..."
      actions={<button className={styles.actionButton}>Sync Agent Status</button>}
    >
      <section className={styles.metricGrid}>
        {agents.map((agent) => (
          <Panel key={agent.name} title={agent.name} right={<span className={styles.smallBadge}>{agent.status}</span>}>
            <div className={styles.tableList}>
              <div className={styles.filterValue}>Reddit Account <span className={styles.pill}>{agent.reddit}</span></div>
              <div className={styles.filterValue}>Next Window <span className={styles.pill}>{agent.window}</span></div>
              <div className={styles.filterValue}>Assigned Queue <span className={styles.tag}>{agent.assigned}</span></div>
              <div className={styles.filterValue}>Item Type <span className={styles.pill}>{agent.item}</span></div>
            </div>
          </Panel>
        ))}
      </section>

      <section className={styles.dashboardSplit}>
        <Panel title="Assignment Board">
          <div className={styles.tableHeader}><span>Agent</span><span>Account</span><span>Window</span><span>Assigned</span><span>Status</span></div>
          {agents.map((agent) => (
            <div key={agent.name} className={styles.approvalRow}>
              <div className={styles.cellTitle}>{agent.name}</div>
              <div className={styles.tableCellMuted}>{agent.reddit}</div>
              <div className={styles.tableCellMuted}>{agent.window}</div>
              <div className={styles.cellTitle}>{agent.assigned}</div>
              <div className={styles.safe}>{agent.status}</div>
            </div>
          ))}
        </Panel>

        <Panel title="Submission History">
          <div className={styles.stackColumn}>
            {agents.map((agent) => (
              <div key={agent.name} className={styles.feedCard}>
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

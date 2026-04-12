import { DashboardShell, Panel } from "../components";
import { agentCards } from "../data";
import styles from "../ui.module.css";

export default function DeliverAgentsPage() {
  return (
    <DashboardShell title="AI Agents" subtitle="Five dedicated agents with separate accounts, staggered execution windows, and submission history." searchPlaceholder="Search agents, history, or posts..." actions={<button className={styles.actionButton}>Sync Status</button>}>
      <section className={styles.agentGrid}>{agentCards.map((agent) => <article key={agent[0]} className={styles.agentCard}><div className={styles.agentTop}><div><h3>{agent[0]}</h3><p className={styles.note}>{agent[1]}</p></div><span className={styles.statusNew}>{agent[2]}</span></div><div className={styles.agentMetaGrid}><div><p className={styles.eyebrow}>State</p><div className={styles.cellTitle}>{agent[2]}</div></div><div><p className={styles.eyebrow}>Signal</p><div className={styles.cellTitle}>{agent[3]}</div></div><div><p className={styles.eyebrow}>Window</p><div className={styles.cellTitle}>Random</div></div></div></article>)}</section>
      <section className={styles.dashboardTwoCol}>
        <Panel title="Assignment Board"><div className={styles.queueTableHead}><span>Agent</span><span>Account</span><span>Window</span><span>Assigned</span><span>Status</span></div>{agentCards.map((agent) => <div key={agent[0]} className={styles.queueTableRow}><div className={styles.queueAgent}>{agent[0]}</div><div className={styles.tableCellMuted}>{agent[1]}</div><div className={styles.tableCellMuted}>Staggered</div><div className={styles.cellTitle}>Queue Work</div><div className={styles.statusNew}>{agent[2]}</div></div>)}</Panel>
        <Panel title="Execution History"><div className={styles.feedList}>{agentCards.map((agent) => <div key={agent[0]} className={styles.historyCard}><div className={styles.feedMeta}><span className={styles.tag}>{agent[0]}</span><span>{agent[1]}</span></div><p className={styles.note}>Last actions: submitted content, reviewed queue, saved history.</p></div>)}</div></Panel>
      </section>
    </DashboardShell>
  );
}

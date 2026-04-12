import { DashboardShell, Panel } from "../components";
import styles from "../ui.module.css";

export default function DraftPostsPage() {
  return (
    <DashboardShell title="Accounts" subtitle="Connected accounts, profile status, and draft post history." searchPlaceholder="Search accounts..." actions={<button className={styles.actionButton}>Add Account</button>}>
      <section className={styles.dashboardTwoCol}>
        <Panel title="Draft Post Queue"><div className={styles.emptyState}><h3>Draft posts stay ready here</h3><p className={styles.note}>This screen keeps the draft-post workflow simple and separate from scraping and queue review.</p></div></Panel>
        <Panel title="Account Health"><div className={styles.emptyState}><h3>All connected accounts</h3><p className={styles.note}>Monitor account health, auth state, and posting readiness here.</p></div></Panel>
      </section>
    </DashboardShell>
  );
}

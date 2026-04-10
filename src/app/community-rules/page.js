import { DashboardShell } from "../components";
import { communityRules } from "../data";
import styles from "../ui.module.css";

export default function CommunityRulesPage() {
  return (
    <DashboardShell
      title="Community Rules"
      subtitle="Global compliance overview for target subreddits. Ensure your outreach aligns with local moderation standards to maintain high reputation scores."
      searchPlaceholder="Search communities..."
      profileName="Admin Profile"
      profileRole="Lead Strategist"
      actions={<><button className={styles.softButton}>▾ Filter Subreddits</button><button className={styles.actionButton}>↻ Update Database</button></>}
    >
      <section className={styles.grid4}>
        <div className={styles.card}><p className={styles.eyebrow}>Monitored</p><div className={styles.metricValue}>124</div></div>
        <div className={styles.card}><p className={styles.eyebrow}>Strict Rules</p><div className={styles.metricValue}>42</div></div>
        <div className={styles.card}><p className={styles.eyebrow}>Promo Friendly</p><div className={styles.metricValue}>18</div></div>
        <div className={styles.card}><p className={styles.eyebrow}>Avg Sentiment</p><div className={styles.metricValue}>78%</div></div>
      </section>

      <section className={styles.tableWrap}>
        <div className={styles.panelHeader}><h3>Subreddit Guidelines Matrix</h3><div className={styles.feedMeta}><span className={styles.note}>● Low Risk</span><span className={styles.statusUrgent}>● High Risk</span></div></div>
        <div className={styles.rulesHeader}><span>Subreddit</span><span>Self Promo Allowed</span><span>Link Allowed</span><span>Posting Notes</span><span>Rule Status</span></div>
        {communityRules.map((row) => (
          <div key={row[0]} className={styles.rulesRow}>
            <div className={styles.cellTitle}>r/{row[0]}</div>
            <span className={row[1] === "Yes" ? styles.safe : styles.statusUrgent}>{row[1]}</span>
            <span className={row[2] === "Yes" ? styles.safe : styles.statusUrgent}>{row[2]}</span>
            <p className={styles.tableCellMuted}>{row[3]}</p>
            <div><div className={styles.progressTrack}><div className={styles.progressFill} style={{ width: row[4] === "Open" ? "38%" : row[4] === "Moderate" ? "58%" : row[4] === "Very Strict" ? "88%" : "76%" }} /></div><p className={styles.note} style={{ marginTop: 8 }}>{row[4]}</p></div>
          </div>
        ))}
        <div className={styles.bottomBar}><span className={styles.note}>Showing 5 of 124 subreddits</span><div className={styles.pagination}><button className={styles.softButton}>Previous</button><button className={styles.softButton}>Next</button></div></div>
      </section>

      <section className={styles.insightsGrid} style={{ marginTop: 18 }}>
        <article className={styles.card}>
          <h3>Strategy Insights</h3>
          <section className={styles.grid3} style={{ gridTemplateColumns: "1fr 1fr", marginTop: 16 }}>
            <div><p className={styles.eyebrow}>Compliance Trends</p><p className={styles.note}>AI detection tools are increasingly used in tech subreddits. Manual review of all drafts is recommended.</p><p className={styles.note}>Direct URL acceptance rate has dropped 15% this quarter across 'General' communities.</p></div>
            <div><p className={styles.eyebrow}>Best Practices</p><p className={styles.note}>Engagement-first strategy has a 4x higher retention rate than direct link posting.</p><p className={styles.note}>Weekend moderation is lighter in hobbyist subreddits, but stricter in professional ones.</p></div>
          </section>
        </article>
        <article className={styles.card}>
          <h3>Risk Profile</h3>
          <div style={{ display: "grid", placeItems: "center", margin: "18px 0" }}>
            <div style={{ width: 150, height: 150, borderRadius: "999px", border: "10px solid #b582ff", display: "grid", placeItems: "center" }}><div style={{ textAlign: "center" }}><strong style={{ fontSize: 30 }}>Low</strong><p className={styles.note}>Overall Risk</p></div></div>
          </div>
          <p className={styles.note}>Your current campaign settings are optimized for high-authority, low-risk engagement.</p>
          <button className={styles.softButton} style={{ marginTop: 18, width: "100%" }}>View Detailed Audit</button>
        </article>
      </section>
    </DashboardShell>
  );
}

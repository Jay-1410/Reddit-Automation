import { DashboardShell, Panel } from "../components";
import { draftComments } from "../data";
import styles from "../ui.module.css";

export default function DraftCommentsPage() {
  return (
    <DashboardShell
      title="Draft Comments"
      subtitle="Review AI-generated responses tailored to community sentiment and subreddit nuances. Approve or refine before live deployment."
      searchPlaceholder="Search comments..."
      profileName="Admin"
      profileRole="Tier 1"
      actions={<><button className={styles.softButton}>☰ Filter</button><button className={styles.actionButton}>✓ Approve All</button></>}
    >
      <section className={styles.grid4}>
        <div className={styles.card}><p className={styles.eyebrow}>Pending Review</p><div className={styles.metricValue}>24</div><div className={styles.progressTrack}><div className={styles.progressFill} style={{ width: "48%" }} /></div></div>
        <div className={styles.card}><p className={styles.eyebrow}>Sentiment Score</p><div className={styles.metricValue}>8.4</div><p className={styles.note}>+12%</p></div>
        <div className={styles.card}><p className={styles.eyebrow}>Brand Mentions</p><div className={styles.metricValue}>12</div><p className={styles.note}>In current draft batch</p></div>
        <div className={styles.card}><p className={styles.eyebrow}>Safe for Post</p><div className={styles.metricValue}>92%</div><p className={styles.note}>Rule compliance score</p></div>
      </section>

      <div className={styles.stacked}>
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
              <div className={styles.feedMeta} style={{ marginTop: 16 }}><span>Status {item.status}</span><span>Tone {item.tone}</span></div>
            </div>
            <div className={styles.stacked}>
              {item.risk === "high" ? <button className={styles.dangerButton}>Dismiss</button> : <button className={styles.actionButton}>{item.action}</button>}
              <button className={styles.iconButton}>✎</button>
              {item.risk === "high" ? <button className={styles.softButton}>Re-generate</button> : <button className={styles.iconButton}>✕</button>}
            </div>
          </section>
        ))}
      </div>

      <Panel title="Agent Confidence Scoring" className={styles.card}>
        <p className={styles.note}>Our system uses a dual-layer validation process. First, it analyzes the subreddit's unspoken rules and “mood.” Second, it simulates user reaction to prevent the “AI-detector” look.</p>
        <section className={styles.grid3} style={{ marginTop: 18 }}>
          <div><p className={styles.eyebrow}>Sentiment Engine</p><div className={styles.metricValue}>94%</div><p className={styles.note}>Accuracy on r/SaaS</p></div>
          <div><p className={styles.eyebrow}>Post Timing</p><div className={styles.metricValue}>Auto</div><p className={styles.note}>Optimal Window Only</p></div>
        </section>
      </Panel>

      <button className={styles.plusFloat}>＋</button>
    </DashboardShell>
  );
}

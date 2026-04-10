import { DashboardShell } from "../components";
import { draftPosts } from "../data";
import styles from "../ui.module.css";

export default function DraftPostsPage() {
  const [featured, ...cards] = draftPosts;

  return (
    <DashboardShell
      title="Draft Posts"
      subtitle="Reviewing community-ready content for deployment"
      searchPlaceholder="Search drafts..."
      actions={<><button className={styles.softButton}>☰ Filter</button><button className={styles.softButton}>☷ Sort</button></>}
    >
      <section className={styles.twoCol}>
        <article className={styles.draftLarge}>
          <div className={styles.feedMeta}><span>{featured.community}</span><span>{featured.when}</span><span className={styles.smallBadge}>{featured.priority}</span><span className={styles.pill}>{featured.topic}</span></div>
          <h4>{featured.title}</h4>
          <div className={styles.panel}><p>{featured.body}</p><div className={styles.feedMeta} style={{ marginTop: 16 }}><span className={styles.safe}>Rule Safety: {featured.ruleSafety}</span><span>Status: {featured.status}</span></div></div>
          <div className={styles.feedFooter} style={{ marginTop: 18 }}><span>👥 +3</span><div className={styles.actionRow}><button className={styles.softButton}>Edit</button><button className={styles.dangerButton}>Reject</button><button className={styles.actionButton}>Approve</button></div></div>
        </article>
        <aside className={styles.card}>
          <h3>Queue Health</h3>
          <div style={{ marginTop: 24 }}>
            <p className={styles.note}>Pending Approval</p>
            <div className={styles.feedFooter}><strong style={{ fontSize: 34 }}>14</strong></div>
            <div className={styles.progressTrack}><div className={styles.progressFill} style={{ width: "66%" }} /></div>
          </div>
          <section className={styles.grid3} style={{ gridTemplateColumns: "1fr 1fr", marginTop: 24 }}>
            <div className={styles.panel}><p className={styles.eyebrow}>Approved Today</p><div className={styles.metricValue} style={{ fontSize: 34 }}>28</div></div>
            <div className={styles.panel}><p className={styles.eyebrow}>Safety Score</p><div className={styles.metricValue} style={{ fontSize: 34 }}>94%</div></div>
          </section>
        </aside>
      </section>

      <section className={styles.grid3} style={{ marginTop: 18 }}>
        {cards.map((card) => (
          <article key={card[2]} className={styles.postMini}>
            <div className={styles.feedMeta}><span>{card[0]}</span><span className={card[1] === "Safe" ? styles.safe : styles.statusUrgent}>{card[1]}</span></div>
            <h4>{card[2]}</h4>
            <p>{card[3]}</p>
            <div className={styles.feedFooter}><span className={styles.note}>Drafted hours ago</span><div className={styles.inlineActions}><button className={styles.iconButton}>✎</button><button className={styles.actionButton}>✓</button></div></div>
          </article>
        ))}
      </section>

      <section className={styles.emptyState} style={{ marginTop: 18 }}>
        <div>
          <div style={{ fontSize: 36, marginBottom: 18 }}>▣</div>
          <h3>Want to generate more content?</h3>
          <p>Our AI agent has finished its current scrape cycle. Start a new campaign to populate more community-specific drafts.</p>
          <button className={styles.softButton} style={{ marginTop: 18 }}>Refresh Scraper</button>
        </div>
      </section>

      <button className={styles.plusFloat}>＋</button>
    </DashboardShell>
  );
}

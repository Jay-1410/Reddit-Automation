"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./data";
import styles from "./ui.module.css";

function Icon({ type }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" };
  switch (type) {
    case "grid": return <svg {...common}><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>;
    case "posts": return <svg {...common}><path d="M4 5h16v14H4z" /><path d="M8 9h8" /><path d="M8 13h8" /><path d="M8 17h5" /></svg>;
    case "trend": return <svg {...common}><path d="M4 16l5-5 4 4 7-7" /><path d="M20 8v5h-5" /></svg>;
    case "comment": return <svg {...common}><path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
    case "draft": return <svg {...common}><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4Z" /></svg>;
    case "rules": return <svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg>;
    case "approval": return <svg {...common}><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>;
    default: return <svg {...common}><circle cx="12" cy="12" r="9" /></svg>;
  }
}

export function DashboardShell({ title, subtitle, searchPlaceholder, children, actions, brandTitle = "Reddit Automation" }) {
  const pathname = usePathname();

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div>
          <div className={styles.brandWrap}>
            <div className={styles.brandIcon}>⚡</div>
            <div>
              <h2>{brandTitle}</h2>
            </div>
          </div>

          <nav className={styles.nav}>
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} className={`${styles.navItem} ${active ? styles.navActive : ""}`}>
                  <Icon type={item.icon} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className={styles.sidebarBottom}>
          <button className={styles.ghostButton}>⚙ Settings</button>
          <button className={styles.ghostButton}>❔ Support</button>
        </div>
      </aside>

      <section className={styles.mainArea}>
        <header className={styles.topbar}>
          <div className={styles.searchBar}>⌕ <span>{searchPlaceholder}</span></div>
          <div className={styles.topbarRight}>
            <div className={styles.agentPill}><span className={styles.agentDot} /> Agent Online</div>
            <div className={styles.bell}>◔</div>
          </div>
        </header>

        <main className={styles.content}>
          <section className={styles.pageHeading}>
            <div>
              <h1>{title}</h1>
              <p>{subtitle}</p>
            </div>
            {actions ? <div className={styles.pageActions}>{actions}</div> : null}
          </section>
          {children}
        </main>
      </section>
    </div>
  );
}

export function StatCard({ eyebrow, title, value, note, large = false, footer, accent = "purple" }) {
  return (
    <article className={`${styles.card} ${large ? styles.largeCard : ""}`}>
      {eyebrow ? <p className={`${styles.eyebrow} ${styles[accent]}`}>{eyebrow}</p> : null}
      {title ? <h3>{title}</h3> : null}
      {value ? <div className={styles.metricValue}>{value}</div> : null}
      {note ? <p className={styles.note}>{note}</p> : null}
      {footer ? <div className={styles.cardFooter}>{footer}</div> : null}
    </article>
  );
}

export function Panel({ title, right, children, className = "" }) {
  return (
    <section className={`${styles.panel} ${className}`}>
      {(title || right) ? (
        <div className={styles.panelHeader}>
          <h3>{title}</h3>
          {right ? <div>{right}</div> : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}

/**
 * SectionHeader — label + titre + sous-titre réutilisables.
 * Évite de répéter la même structure dans chaque section.
 */
export default function SectionHeader({ label, title, sub, accentClass = 'text-forest-muted', children }) {
  return (
    <header className="section-header">
      {label && (
        <div className="section-label" aria-hidden="true">
          {label}
        </div>
      )}
      <h2 className="section-title text-balance">
        {typeof title === 'string'
          ? title
          : title /* permet du JSX avec <span> */}
      </h2>
      {sub && <p className="section-sub text-balance">{sub}</p>}
      {children}
    </header>
  );
}

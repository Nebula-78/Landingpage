import { useState, useId } from 'react';

/**
 * FaqItem — accordion accessible.
 * Utilise aria-expanded + aria-controls pour les lecteurs d'écran.
 */
export default function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const panelId  = `faq-panel-${id}`;
  const buttonId = `faq-btn-${id}`;

  return (
    <div className="border-b border-cloud/[0.08]">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="w-full flex justify-between items-center gap-4
                     py-5 text-left font-semibold text-[0.97rem] text-cloud
                     transition-colors duration-200 hover:text-forest-muted
                     focus-visible:outline-none focus-visible:ring-2
                     focus-visible:ring-forest-muted focus-visible:ring-offset-2
                     focus-visible:ring-offset-midnight select-none"
        >
          <span>{question}</span>
          <span
            aria-hidden="true"
            className={`w-7 h-7 rounded-full flex-shrink-0
                       flex items-center justify-center text-base
                       transition-all duration-300
                       ${open
                         ? 'bg-forest text-cloud rotate-45'
                         : 'bg-cloud/[0.08] text-cloud/55'
                       }`}
          >
            +
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className={`text-[0.9rem] text-cloud/55 leading-relaxed
                   overflow-hidden transition-all duration-300
                   ${open ? 'pb-5' : ''}`}
      >
        {answer}
      </div>
    </div>
  );
}

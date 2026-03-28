/**
 * Button — composant réutilisable avec variants.
 *
 * Usage :
 *   <Button variant="primary" href="#pricing">CTA</Button>
 *   <Button variant="gold" onClick={fn}>Acheter</Button>
 */

const VARIANTS = {
  primary:   'btn-primary',
  secondary: 'btn-secondary',
  ghost:     'btn-ghost',
  gold:      'btn-gold',
};

const SIZES = {
  sm: 'btn-sm',
  md: '',
};

export default function Button({
  variant = 'primary',
  size    = 'md',
  href,
  onClick,
  type    = 'button',
  disabled = false,
  className = '',
  children,
  'aria-label': ariaLabel,
}) {
  const classes = [
    VARIANTS[variant] ?? VARIANTS.primary,
    SIZES[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('https');
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

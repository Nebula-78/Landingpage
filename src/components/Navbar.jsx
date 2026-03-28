import { navLinks } from '../data/index.js';
import { useMenu }   from '../hooks/useMenu.js';
import Button         from './Button.jsx';

export default function Navbar() {
  const { isOpen, close, toggle } = useMenu();

  return (
    <header role="banner">
      <nav
        aria-label="Navigation principale"
        className="fixed inset-x-0 top-0 z-50 bg-midnight/95 backdrop-blur-md border-b border-cloud/[0.08]"
      >
        <div className="container-page flex items-center justify-between h-[68px]">

          {/* Logo */}
          <a
            href="#hero"
            className="font-serif text-[1.25rem] font-extrabold text-cloud tracking-tight
                       flex items-center gap-0.5 z-[201] focus-visible:outline-none
                       focus-visible:ring-2 focus-visible:ring-forest-muted rounded-sm"
            aria-label="Steve.dev — retour à l'accueil"
            onClick={close}
          >
            Steve<span className="text-gold" aria-hidden="true">.</span>dev
            <span
              className="hidden sm:inline font-sans text-[0.66rem] font-semibold text-forest-muted
                         tracking-widest uppercase ml-2.5 pl-2.5 border-l border-cloud/15"
            >
              Landing Pages
            </span>
          </a>

          {/* Desktop nav */}
          <ul
            role="list"
            className="hidden md:flex items-center gap-1.5 list-none"
          >
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm font-medium text-cloud/55 px-3.5 py-2 rounded-lg
                             transition-all duration-200 hover:text-cloud hover:bg-cloud/[0.08]
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-muted"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <Button
                variant="primary"
                href="#pricing"
                size="sm"
                className="ml-2 !animate-none"
              >
                Commencer →
              </Button>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            type="button"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={toggle}
            className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10
                       bg-transparent border-none cursor-pointer z-[201] p-1
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-muted rounded-sm"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`block h-0.5 bg-cloud rounded-sm transition-all duration-300 origin-center
                  ${i === 0 && isOpen ? 'translate-y-[7px] rotate-45' : ''}
                  ${i === 1 && isOpen ? 'opacity-0 scale-x-0' : ''}
                  ${i === 2 && isOpen ? '-translate-y-[7px] -rotate-45' : ''}
                `}
              />
            ))}
          </button>
        </div>

        {/* Mobile menu overlay */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
          className={`md:hidden fixed inset-0 bg-midnight-deep z-[200]
                     flex flex-col justify-center items-center gap-2
                     transition-transform duration-350 ease-in-out
                     ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <ul role="list" className="list-none w-full px-8 flex flex-col gap-2">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={close}
                  className="block text-[1.1rem] font-semibold text-cloud/70 px-6 py-4
                             rounded-xl text-center transition-all duration-200
                             hover:bg-cloud/[0.08] hover:text-cloud
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-muted"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <Button
                variant="primary"
                href="#pricing"
                onClick={close}
                className="w-full justify-center !animate-none"
              >
                Commencer →
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

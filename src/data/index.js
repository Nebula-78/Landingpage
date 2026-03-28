// ─── WHATSAPP ───────────────────────────────────────────
export const WA_NUMBER = '+2250000000000';
export const waLink = (msg = '') =>
  `https://wa.me/${WA_NUMBER}${msg ? `?text=${encodeURIComponent(msg)}` : ''}`;

// ─── NAVIGATION ─────────────────────────────────────────
export const navLinks = [
  { label: 'Services', href: '#benefits' },
  { label: 'Tarifs',   href: '#pricing'  },
  { label: 'FAQ',      href: '#faq'      },
];

// ─── TRUST BAR ──────────────────────────────────────────
export const trustBrands = ['AgriConnect', 'CoachAya', 'Dropci', 'DialloBoutique', 'FintechCI'];

// ─── HERO AVATARS ────────────────────────────────────────
export const heroAvatars = [
  { initials: 'KA', bg: '#3a5a48' },
  { initials: 'AT', bg: '#7a5a0a' },
  { initials: 'IK', bg: '#2a4a3a' },
  { initials: 'MD', bg: '#3a3530' },
  { initials: '+8', bg: '#4F735C' },
];

// ─── PAIN POINTS ────────────────────────────────────────
export const painPoints = [
  {
    icon: '⏳',
    title: 'Des semaines perdues à bidouiller un site',
    desc: `Vous passez vos soirées sur des outils compliqués au lieu de développer votre business. Votre temps vaut plus que ça.`,
  },
  {
    icon: '💸',
    title: 'Les agences demandent 300 000 FCFA minimum',
    desc: `Et après des semaines d'attente, le résultat est générique — une page sans vraie stratégie de vente.`,
  },
  {
    icon: '📉',
    title: `Vos visiteurs arrivent... et repartent sans acheter`,
    desc: `Chaque visiteur qui part sans convertir, c'est de l'argent laissé sur la table. Chaque semaine.`,
  },
  {
    icon: '😰',
    title: `Vous ne savez pas si votre page marche`,
    desc: `Pas de structure claire, pas de call-to-action fort. Vous espérez que ça fonctionne. L'espoir n'est pas une stratégie.`,
  },
];

// ─── ABOUT CHECKLIST ────────────────────────────────────
export const aboutChecklist = [
  {
    title: 'Une page prête à convertir',
    desc: 'Pas juste belle — stratégiquement conçue pour transformer vos visiteurs en clients.',
  },
  {
    title: 'Un copy rédigé pour vous',
    desc: `Je rédige les textes avec les techniques de copywriting éprouvées. Vous n'écrivez rien.`,
  },
  {
    title: 'Livraison ce weekend',
    desc: 'Brief samedi, page live dimanche. Pas dans 3 semaines. Ce weekend.',
  },
  {
    title: 'Paiement Mobile Money',
    desc: 'Orange Money, MTN MoMo, Wave — le mode de paiement que vous utilisez déjà.',
  },
];

export const aboutStats = [
  { value: '12+',  label: 'Pages livrées' },
  { value: '48h',  label: 'Délai moyen'   },
  { value: '100%', label: 'Satisfaits'    },
];

// ─── BENEFITS ───────────────────────────────────────────
export const benefits = [
  {
    icon: '⚡',
    title: `Lancez en 48–72h, pas en 3 mois`,
    desc: 'Votre page est prête à déployer ce weekend. Zéro attente, zéro allers-retours sans fin.',
    tag: 'Rapidité',
  },
  {
    icon: '📱',
    title: 'Parfaite sur mobile, dès le premier pixel',
    desc: '80% de vos visiteurs arrivent sur mobile. Votre page sera irréprochable sur tous les écrans.',
    tag: 'Mobile-first',
  },
  {
    icon: '✍️',
    title: 'Un copy qui convertit, pas qui informe',
    desc: `Les textes sont rédigés pour convaincre et pousser à l'action — pas pour faire joli.`,
    tag: 'Persuasion',
  },
  {
    icon: '🎨',
    title: `Design premium sans budget d'agence`,
    desc: `L'esthétique d'une grande marque, au prix que vous pouvez vous permettre.`,
    tag: 'Qualité/prix',
  },
  {
    icon: '🚀',
    title: 'Mise en ligne incluse, zéro effort',
    desc: `Je m'occupe du déploiement. Vous recevez un lien live — sans rien installer ni configurer.`,
    tag: 'Clé en main',
  },
  {
    icon: '🔁',
    title: `Révisions jusqu'à votre satisfaction`,
    desc: `Vous aimez ou on retravaille. Votre satisfaction est non-négociable.`,
    tag: 'Garanti',
  },
];

// ─── PROCESS STEPS ──────────────────────────────────────
export const steps = [
  {
    num: '01',
    title: `Brief & Découverte`,
    desc: 'Vous répondez à 10 questions sur votre projet, votre cible et vos objectifs.',
    time: 'Samedi matin',
  },
  {
    num: '02',
    title: `Design & Rédaction`,
    desc: 'Je conçois votre page et rédige chaque texte pour convaincre votre cible spécifique.',
    time: `Samedi après-midi`,
  },
  {
    num: '03',
    title: `Révisions & Peaufinage`,
    desc: `Vous donnez votre avis, j'ajuste jusqu'à ce que ce soit parfait pour vous.`,
    time: 'Dimanche matin',
  },
  {
    num: '04',
    title: 'Livraison & Go Live',
    desc: 'Vous recevez un lien live. Votre page est en ligne, prête à convertir.',
    time: 'Dimanche soir 🎉',
  },
];

// ─── TESTIMONIALS ────────────────────────────────────────
export const testimonials = [
  {
    name: 'Kouamé Assi',
    role: 'Fondateur, AgriConnect CI',
    initials: 'KA',
    bg: '#3a5a48',
    result: '+312% de leads en 30 jours',
    featured: true,
    quote: `Steve a livré ma landing page en un weekend complet. Je n'y croyais pas trop au départ, mais le résultat est bluffant. Mes visiteurs restent sur la page et convertissent vraiment. C'est pro, rapide et rentable.`,
  },
  {
    name: 'Aya Traoré',
    role: `Coach bien-être, Abidjan`,
    initials: 'AT',
    bg: '#7a5a0a',
    result: '3 premiers clients en 7 jours',
    quote: `J'avais essayé de faire ma page moi-même pendant 2 mois. Steve l'a faite en un weekend. Moderne, mobile, et le texte est tellement bien écrit. J'ai eu mes 3 premiers clients la semaine suivante.`,
  },
  {
    name: 'Ibrahim Koné',
    role: `Dropshippeur, Côte d'Ivoire`,
    initials: 'IK',
    bg: '#2a4a3a',
    result: 'ROI x4 en 3 semaines',
    quote: `J'ai payé par Mobile Money, tout s'est passé nickel. La page a multiplié mes conversions par 4 par rapport à mon ancienne. Steve sait vraiment ce qu'il fait. Je recommande à tous les entrepreneurs ivoiriens.`,
  },
  {
    name: 'Marie-Claire Diallo',
    role: 'Vendeuse en ligne, Dakar',
    initials: 'MD',
    bg: '#3a3530',
    result: '100 ventes dès le premier mois',
    quote: `Je suis au Sénégal et j'avais peur que ça ne marche pas. Mais Steve a tout géré à distance, rapidement et professionnellement. Ma boutique n'a jamais autant converti. Merci !`,
  },
];

// ─── PRICING ────────────────────────────────────────────
export const plans = [
  {
    id: 'kit',
    plan: 'Pour les autonomes',
    name: 'Kit Lancement Rapide',
    desc: `Toutes les ressources pour construire votre page vous-même : templates, structures et guides prêts à l'emploi.`,
    price: '9 990',
    currency: 'FCFA',
    popular: false,
    features: [
      '30+ templates de sections prêts à personnaliser',
      'Guide de structure de page qui convertit (PDF)',
      'Bibliothèque de formules de copywriting',
      'Checklist de lancement en 48h',
      `Accès à vie + mises à jour incluses`,
    ],
    cta: 'Obtenir le Kit Lancement',
  },
  {
    id: 'custom',
    plan: 'Je fais tout pour vous',
    name: 'Landing Page Sur Mesure',
    desc: `Vous me donnez votre vision le samedi matin. Le dimanche soir, votre page est live et prête à convertir. Vous ne touchez à rien.`,
    price: '149 000',
    currency: 'FCFA',
    popular: true,
    features: [
      'Page complète livrée en 1 weekend',
      'Design premium sur mesure pour votre marque',
      'Textes rédigés pour convaincre et vendre',
      'Version mobile irréprochable',
      'SEO de base intégré',
      `Déploiement inclus (0 FCFA d'hébergement)`,
      '2 cycles de révisions garantis',
      'Support WhatsApp 30 jours après livraison',
    ],
    cta: 'Je veux ma page ce weekend',
  },
];

// ─── FAQ ────────────────────────────────────────────────
export const faqs = [
  {
    question: 'Quel est le délai de livraison réel ?',
    answer: `Pour le service Sur Mesure : vous m'envoyez votre brief le samedi matin, je livre votre page le dimanche soir — soit 48h maximum. Si vous commandez en semaine, je planifie la livraison pour le weekend suivant. Pour le Kit Lancement, accès immédiat après paiement.`,
  },
  {
    question: 'Comment puis-je payer ? Le Mobile Money est accepté ?',
    answer: `Oui — Orange Money, MTN Mobile Money et Wave sont tous acceptés. Le virement bancaire est également disponible. Vous payez avec ce que vous utilisez déjà, sans complication.`,
  },
  {
    question: `Est-ce que je peux voir des exemples de pages déjà créées ?`,
    answer: `Absolument. Envoyez-moi un message WhatsApp et je vous envoie mon portfolio avec des exemples concrets dans différents secteurs : coaching, e-commerce, services B2B, formations en ligne.`,
  },
  {
    question: `Je n'y connais rien en technique. Comment ma page sera-t-elle mise en ligne ?`,
    answer: `Je m'en occupe entièrement. Je déploie votre page sur une plateforme gratuite et professionnelle, et je vous envoie votre lien live directement. Si vous avez déjà un domaine, je peux l'y connecter.`,
  },
  {
    question: 'Et si le résultat ne me convainc pas ?',
    answer: `Deux cycles de révisions sont inclus dans le prix — je retravaille jusqu'à ce que vous soyez pleinement satisfait. Si après ces révisions vous estimez que le travail ne correspond pas à ce qui était convenu, je vous rembourse intégralement.`,
  },
];

// ─── FOOTER LINKS ────────────────────────────────────────
export const footerLinks = [
  { label: 'Services',    href: '#benefits'     },
  { label: 'Tarifs',      href: '#pricing'      },
  { label: 'FAQ',         href: '#faq'          },
  { label: `Témoignages`, href: '#testimonials' },
];
  {
    icon: '📉',
    title: 'Vos visiteurs arrivent... et repartent sans acheter',
    desc: 'Chaque visiteur qui part sans convertir, c'est de l'argent laissé sur la table. Chaque semaine.',
  },
  {
    icon: '😰',
    title: 'Vous ne savez pas si votre page « marche »',
    desc: 'Pas de structure claire, pas de call-to-action fort. Vous espérez que ça fonctionne. L'espoir n'est pas une stratégie.',
  },
];

// ─── ABOUT CHECKLIST ───────────────────────────────────
export const aboutChecklist = [
  {
    title: 'Une page prête à convertir',
    desc: 'Pas juste belle — stratégiquement conçue pour transformer vos visiteurs en clients.',
  },
  {
    title: 'Un copy rédigé pour vous',
    desc: `Je rédige les textes avec les techniques de copywriting éprouvées. Vous n'écrivez rien.`,
  },
  {
    title: 'Livraison ce weekend',
    desc: 'Brief samedi, page live dimanche. Pas dans 3 semaines. Ce weekend.',
  },
  {
    title: 'Paiement Mobile Money',
    desc: 'Orange Money, MTN MoMo, Wave — le mode de paiement que vous utilisez déjà.',
  },
];

export const aboutStats = [
  { value: '12+', label: 'Pages livrées'  },
  { value: '48h', label: 'Délai moyen'    },
  { value: '100%', label: 'Satisfaits'   },
];

// ─── BENEFITS ──────────────────────────────────────────
export const benefits = [
  {
    icon: '⚡',
    title: 'Lancez en 48–72h, pas en 3 mois',
    desc: 'Votre page est prête à déployer ce weekend. Zéro attente, zéro allers-retours sans fin.',
    tag: 'Rapidité',
  },
  {
    icon: '📱',
    title: 'Parfaite sur mobile, dès le premier pixel',
    desc: '80% de vos visiteurs arrivent sur mobile. Votre page sera irréprochable sur tous les écrans.',
    tag: 'Mobile-first',
  },
  {
    icon: '✍️',
    title: 'Un copy qui convertit, pas qui informe',
    desc: `Les textes sont rédigés pour convaincre et pousser à l'action — pas pour faire joli.`,
    tag: 'Persuasion',
  },
  {
    icon: '🎨',
    title: `Design premium sans budget d'agence`,
    desc: `L'esthétique d'une grande marque, au prix que vous pouvez vous permettre.`,
    tag: 'Qualité/prix',
  },
  {
    icon: '🚀',
    title: 'Mise en ligne incluse, zéro effort',
    desc: `Je m'occupe du déploiement. Vous recevez un lien live — sans rien installer ni configurer.`,
    tag: 'Clé en main',
  },
  {
    icon: '🔁',
    title: `Révisions jusqu'à votre satisfaction`,
    desc: 'Vous aimez ou on retravaille. Votre satisfaction est non-négociable.',
    tag: 'Garanti',
  },
];

// ─── PROCESS STEPS ─────────────────────────────────────
export const steps = [
  {
    num: '01',
    title: 'Brief & Découverte',
    desc: 'Vous répondez à 10 questions sur votre projet, votre cible et vos objectifs.',
    time: 'Samedi matin',
  },
  {
    num: '02',
    title: 'Design & Rédaction',
    desc: 'Je conçois votre page et rédige chaque texte pour convaincre votre cible spécifique.',
    time: 'Samedi après-midi',
  },
  {
    num: '03',
    title: 'Révisions & Peaufinage',
    desc: `Vous donnez votre avis, j'ajuste jusqu'à ce que ce soit parfait pour vous.`,
    time: 'Dimanche matin',
  },
  {
    num: '04',
    title: 'Livraison & Go Live',
    desc: 'Vous recevez un lien live. Votre page est en ligne, prête à convertir.',
    time: 'Dimanche soir 🎉',
  },
];

// ─── TESTIMONIALS ───────────────────────────────────────
export const testimonials = [
  {
    name: 'Kouamé Assi',
    role: 'Fondateur, AgriConnect CI',
    initials: 'KA',
    bg: '#3a5a48',
    result: '+312% de leads en 30 jours',
    featured: true,
    quote:
      `Steve a livré ma landing page en un weekend complet. Je n'y croyais pas trop au départ, mais le résultat est bluffant. Mes visiteurs restent sur la page et convertissent vraiment. C'est pro, rapide et rentable.`,
  },
  {
    name: 'Aya Traoré',
    role: 'Coach bien-être, Abidjan',
    initials: 'AT',
    bg: '#7a5a0a',
    result: '3 premiers clients en 7 jours',
    quote:
      `J'avais essayé de faire ma page moi-même pendant 2 mois. Steve l'a faite en un weekend. Moderne, mobile, et le texte est tellement bien écrit. J'ai eu mes 3 premiers clients la semaine suivante.`,
  },
  {
    name: 'Ibrahim Koné',
    role: `Dropshippeur, Côte d'Ivoire`,
    initials: 'IK',
    bg: '#2a4a3a',
    result: 'ROI ×4 en 3 semaines',
    quote:
      `J'ai payé par Mobile Money, tout s'est passé nickel. La page a multiplié mes conversions par 4 par rapport à mon ancienne. Steve sait vraiment ce qu'il fait. Je recommande à tous les entrepreneurs ivoiriens.`,
  },
  {
    name: 'Marie-Claire Diallo',
    role: 'Vendeuse en ligne, Dakar',
    initials: 'MD',
    bg: '#3a3530',
    result: '100 ventes dès le premier mois',
    quote:
      `Je suis au Sénégal et j'avais peur que ça ne marche pas. Mais Steve a tout géré à distance, rapidement et professionnellement. Ma boutique n'a jamais autant converti. Merci !`,
  },
];

// ─── PRICING ───────────────────────────────────────────
export const plans = [
  {
    id: 'kit',
    plan: 'Pour les autonomes',
    name: 'Kit Lancement Rapide',
    desc: 'Toutes les ressources pour construire votre page vous-même : templates, structures et guides prêts à l'emploi.',
    price: '9 990',
    currency: 'FCFA',
    popular: false,
    features: [
      '30+ templates de sections prêts à personnaliser',
      'Guide de structure de page qui convertit (PDF)',
      'Bibliothèque de formules de copywriting',
      'Checklist de lancement en 48h',
      'Accès à vie + mises à jour incluses',
    ],
    cta: 'Obtenir le Kit Lancement',
  },
  {
    id: 'custom',
    plan: 'Je fais tout pour vous',
    name: 'Landing Page Sur Mesure',
    desc: 'Vous me donnez votre vision le samedi matin. Le dimanche soir, votre page est live et prête à convertir. Vous ne touchez à rien.',
    price: '149 000',
    currency: 'FCFA',
    popular: true,
    features: [
      'Page complète livrée en 1 weekend',
      'Design premium sur mesure pour votre marque',
      'Textes rédigés pour convaincre et vendre',
      'Version mobile irréprochable',
      'SEO de base intégré',
      'Déploiement inclus (0 FCFA d'hébergement)',
      '2 cycles de révisions garantis',
      'Support WhatsApp 30 jours après livraison',
    ],
    cta: 'Je veux ma page ce weekend',
  },
];

// ─── FAQ ───────────────────────────────────────────────
export const faqs = [
  {
    question: 'Quel est le délai de livraison réel ?',
    answer:
      `Pour le service Sur Mesure : vous m'envoyez votre brief le samedi matin, je livre votre page le dimanche soir — soit 48h maximum. Si vous commandez en semaine, je planifie la livraison pour le weekend suivant. Pour le Kit Lancement, accès immédiat après paiement.`,
  },
  {
    question: 'Comment puis-je payer ? Le Mobile Money est accepté ?',
    answer:
      'Oui — Orange Money, MTN Mobile Money et Wave sont tous acceptés. Le virement bancaire est également disponible. Vous payez avec ce que vous utilisez déjà, sans complication.',
  },
  {
    question: 'Est-ce que je peux voir des exemples de pages déjà créées ?',
    answer:
      'Absolument. Envoyez-moi un message WhatsApp et je vous envoie mon portfolio avec des exemples concrets dans différents secteurs : coaching, e-commerce, services B2B, formations en ligne.',
  },
  {
    question: `Je n'y connais rien en technique. Comment ma page sera-t-elle mise en ligne ?`,
    answer:
      `Je m'en occupe entièrement. Je déploie votre page sur une plateforme gratuite et professionnelle, et je vous envoie votre lien live directement. Si vous avez déjà un domaine, je peux l'y connecter.`,
  },
  {
    question: 'Et si le résultat ne me convainc pas ?',
    answer:
      `Deux cycles de révisions sont inclus dans le prix — je retravaille jusqu'à ce que vous soyez pleinement satisfait. Si après ces révisions vous estimez que le travail ne correspond pas à ce qui était convenu, je vous rembourse intégralement.`,
  },
];

// ─── FOOTER LINKS ──────────────────────────────────────
export const footerLinks = [
  { label: 'Services',    href: '#benefits'    },
  { label: 'Tarifs',      href: '#pricing'     },
  { label: 'FAQ',         href: '#faq'         },
  { label: 'Témoignages', href: '#testimonials' },
];

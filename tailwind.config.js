/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#2F2F2F',
          deep:    '#1e1e1e',
          mid:     '#363636',
          darker:  '#161616',
        },
        forest: {
          DEFAULT: '#4F735C',
          light:   '#5E8A6E',
          muted:   '#7aaa90',
        },
        gold: {
          DEFAULT: '#C9960A',
          light:   '#F5C842',
          dark:    '#B8850A',
        },
        cloud: '#F2EDE7',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['clamp(2.2rem, 4.8vw, 3.5rem)', { lineHeight: '1.1',  letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.9rem, 4vw, 2.75rem)',   { lineHeight: '1.15', letterSpacing: '-0.02em'  }],
        'display-sm': ['clamp(1.9rem, 4vw, 3rem)',       { lineHeight: '1.15', letterSpacing: '-0.02em'  }],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        pulseRing: {
          '0%':   { boxShadow: '0 0 0 0 rgba(201,150,10,0.45)' },
          '70%':  { boxShadow: '0 0 0 14px rgba(201,150,10,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(201,150,10,0)' },
        },
        slideIn: {
          from: { transform: 'translateX(100%)' },
          to:   { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease both',
        'fade-up-1':  'fadeUp 0.6s ease 0.1s both',
        'fade-up-2':  'fadeUp 0.6s ease 0.2s both',
        'fade-up-3':  'fadeUp 0.6s ease 0.35s both',
        'float':      'float 4s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.5s infinite',
        'slide-in':   'slideIn 0.35s cubic-bezier(0.4,0,0.2,1)',
      },
      boxShadow: {
        'card':  '0 4px 16px rgba(0,0,0,0.35)',
        'card-lg': '0 12px 40px rgba(0,0,0,0.45)',
        'forest': '0 8px 24px rgba(79,115,92,0.45)',
        'gold':   '0 8px 24px rgba(201,150,10,0.45)',
        'glow-forest': '0 0 0 3px rgba(79,115,92,0.4)',
      },
    },
  },
  plugins: [],
};

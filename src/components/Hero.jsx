import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

/* ─── Code data ────────────────────────────────────── */
const rawLines = [
  { indent: 0, tokens: [{ t: 'import', c: 'kw' }, { t: ' { ', c: 'p' }, { t: 'crearApp', c: 'fn' }, { t: ' } ', c: 'p' }, { t: 'from', c: 'kw' }, { t: " 'etlc'", c: 's' }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ t: 'const', c: 'kw' }, { t: ' app = ', c: 'p' }, { t: 'crearApp', c: 'fn' }, { t: '({', c: 'p' }] },
  { indent: 1, tokens: [{ t: 'nombre', c: 'pr' }, { t: ': ', c: 'p' }, { t: '"Tu Proyecto"', c: 's' }, { t: ',', c: 'p' }] },
  { indent: 1, tokens: [{ t: 'auth', c: 'pr' }, { t: ': ', c: 'p' }, { t: 'true', c: 'kw' }, { t: ',', c: 'p' }] },
  { indent: 1, tokens: [{ t: 'database', c: 'pr' }, { t: ': ', c: 'p' }, { t: '"PostgreSQL"', c: 's' }, { t: ',', c: 'p' }] },
  { indent: 1, tokens: [{ t: 'pagos', c: 'pr' }, { t: ': ', c: 'p' }, { t: '"Stripe"', c: 's' }, { t: ',', c: 'p' }] },
  { indent: 1, tokens: [{ t: 'analytics', c: 'pr' }, { t: ': ', c: 'p' }, { t: 'true', c: 'kw' }] },
  { indent: 0, tokens: [{ t: '})', c: 'p' }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ t: 'await', c: 'kw' }, { t: ' app.', c: 'p' }, { t: 'build', c: 'fn' }, { t: '()', c: 'p' }] },
  { indent: 0, tokens: [{ t: 'await', c: 'kw' }, { t: ' app.', c: 'p' }, { t: 'deploy', c: 'fn' }, { t: '()', c: 'p' }] },
  { indent: 0, tokens: [{ t: '// ✓ En producción', c: 'cm' }] },
];

const colors = { kw: 'text-purple-400', fn: 'text-emerald-400', s: 'text-amber-300', pr: 'text-cyan-300', p: 'text-slate-300', cm: 'text-emerald-500' };

// Flatten all characters with their colors and line/indent info for char-by-char rendering
function buildCharMap() {
  const chars = [];
  for (const line of rawLines) {
    const indent = '  '.repeat(line.indent);
    if (indent) {
      for (const ch of indent) chars.push({ ch, color: 'p' });
    }
    for (const token of line.tokens) {
      for (const ch of token.t) chars.push({ ch, color: token.c });
    }
    chars.push({ ch: '\n', color: 'p' }); // newline marker
  }
  return chars;
}

const CHAR_MAP = buildCharMap();
const TOTAL_CHARS = CHAR_MAP.length;

const TYPING_INTERVAL = 35; // ms per character
const BUILD_DURATION = 1600;
const DASHBOARD_DURATION = 7000;

/* ─── Main component ──────────────────────────────── */
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const [phase, setPhase] = useState('typing');
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [cycleKey, setCycleKey] = useState(0);

  const resetCycle = useCallback(() => {
    setCharIndex(0);
    setPhase('typing');
    setCycleKey(k => k + 1);
  }, []);

  // Char-by-char typing
  useEffect(() => {
    if (phase !== 'typing') return;
    if (charIndex < TOTAL_CHARS) {
      const timer = setTimeout(() => setCharIndex(i => i + 1), TYPING_INTERVAL);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setPhase('building'), 500);
      return () => clearTimeout(timer);
    }
  }, [phase, charIndex]);

  // Building → app
  useEffect(() => {
    if (phase !== 'building') return;
    const timer = setTimeout(() => setPhase('app'), BUILD_DURATION);
    return () => clearTimeout(timer);
  }, [phase]);

  // App → restart
  useEffect(() => {
    if (phase !== 'app') return;
    const timer = setTimeout(resetCycle, DASHBOARD_DURATION);
    return () => clearTimeout(timer);
  }, [phase, resetCycle]);

  // Cursor blink
  useEffect(() => {
    const id = setInterval(() => setShowCursor(v => !v), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-white dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.08) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white dark:from-slate-950 to-transparent z-[1]" />

      <motion.div className="container mx-auto px-6 lg:px-8 relative z-10 pt-24 pb-20" style={{ y, opacity }}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-emerald-600 dark:text-emerald-400">
                <span className="w-8 h-px bg-emerald-600 dark:bg-emerald-400" />
                ETLC Systems
              </span>
            </motion.div>
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-[1.1] tracking-tight mb-6" variants={fadeInUp}>
              Construimos el software que tu negocio
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">necesita para crecer</span>
            </motion.h1>
            <motion.p className="text-lg text-slate-500 dark:text-slate-400 max-w-lg mb-10 leading-relaxed" variants={fadeInUp}>
              Desde aplicaciones web hasta sistemas empresariales complejos. No vendemos templates — diseñamos soluciones reales para problemas reales.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeInUp}>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="group flex items-center justify-center gap-2 bg-emerald-500 text-slate-950 px-7 py-3.5 rounded-lg font-bold text-sm hover:bg-emerald-400 transition-colors">
                Hablemos de tu proyecto
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 px-7 py-3.5 rounded-lg font-medium text-sm hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                Ver proyectos
              </button>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-lg mx-auto lg:max-w-none"
          >
            <AnimatePresence mode="wait">
              {phase !== 'app' ? (
                <TerminalView key={`t-${cycleKey}`} phase={phase} charIndex={charIndex} showCursor={showCursor} />
              ) : (
                <DashboardView key={`d-${cycleKey}`} />
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* ─── Terminal with char-by-char typing ─────────────── */
function TerminalView({ phase, charIndex, showCursor }) {
  // Build rendered lines from char index
  const renderedLines = useMemo(() => {
    const lines = [];
    let currentLine = [];
    for (let i = 0; i < Math.min(charIndex, TOTAL_CHARS); i++) {
      const { ch, color } = CHAR_MAP[i];
      if (ch === '\n') {
        lines.push(currentLine);
        currentLine = [];
      } else {
        currentLine.push({ ch, color });
      }
    }
    if (currentLine.length > 0 || charIndex < TOTAL_CHARS) {
      lines.push(currentLine);
    }
    return lines;
  }, [charIndex]);

  return (
    <motion.div
      className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl shadow-black/50"
      exit={{ scale: 0.92, opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/80">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-slate-500 font-mono">proyecto.ts</span>
      </div>

      <div className="p-4 md:p-5 font-mono text-[11px] md:text-[13px] leading-6 md:leading-7 min-h-[280px] md:min-h-[370px] whitespace-pre overflow-x-auto">
        {renderedLines.map((line, li) => (
          <div key={li}>
            {line.length === 0 ? '\u00A0' : line.map((char, ci) => (
              <span key={ci} className={colors[char.color]}>{char.ch}</span>
            ))}
          </div>
        ))}

        {/* Blinking cursor */}
        {phase === 'typing' && (
          <span
            className="inline-block w-[8px] h-[18px] bg-emerald-400 rounded-sm align-middle"
            style={{ opacity: showCursor ? 1 : 0 }}
          />
        )}

        {/* Building */}
        {phase === 'building' && (
          <motion.div className="mt-4 flex items-center gap-2 text-emerald-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}>
              <Zap className="w-4 h-4" />
            </motion.div>
            <span className="text-xs font-mono">Compilando... desplegando...</span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

/* ─── Dashboard with animated charts ───────────────── */
function DashboardView() {
  // Bar heights in pixels (not percentages)
  const maxBarPx = 64;
  const barData = [40, 65, 45, 80, 55, 90, 70];

  const [liveUsers, setLiveUsers] = useState(2841);
  const [liveRevenue, setLiveRevenue] = useState(48200);

  useEffect(() => {
    const id = setInterval(() => {
      setLiveUsers(v => v + Math.floor(Math.random() * 5) + 1);
      setLiveRevenue(v => v + Math.floor(Math.random() * 80) + 20);
    }, 1500);
    return () => clearInterval(id);
  }, []);

  const activities = [
    { text: 'Nuevo usuario registrado', time: '2s', color: 'bg-emerald-400' },
    { text: 'Pago procesado $129', time: '8s', color: 'bg-cyan-400' },
    { text: 'Deploy exitoso v2.4.1', time: '23s', color: 'bg-purple-400' },
  ];

  return (
    <motion.div
      className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl shadow-emerald-500/10"
      initial={{ scale: 0.92, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Browser bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900/80">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex items-center gap-1.5 bg-slate-800 rounded-md px-3 py-1">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-slate-400 font-mono">tu-app.com</span>
        </div>
        <div className="w-16" />
      </div>

      <div className="p-4 md:p-5 min-h-[280px] md:min-h-[370px]">
        {/* Header */}
        <motion.div className="flex items-center justify-between mb-5" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <div>
            <div className="text-white font-bold text-sm">Dashboard</div>
            <div className="text-[11px] text-slate-500">Datos en tiempo real</div>
          </div>
          <div className="flex items-center gap-2">
            <motion.div className="w-2 h-2 rounded-full bg-emerald-400" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
            <span className="text-[11px] text-emerald-400 font-mono">LIVE</span>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2.5 mb-4">
          {[
            { label: 'Usuarios', value: liveUsers.toLocaleString(), delta: '+12%' },
            { label: 'Ingresos', value: `$${(liveRevenue / 1000).toFixed(1)}k`, delta: '+8.3%' },
            { label: 'Uptime', value: '99.9%', delta: 'estable', muted: true },
          ].map((stat, i) => (
            <motion.div key={i} className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-3"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.12 }}>
              <div className="text-[10px] text-slate-500 mb-1">{stat.label}</div>
              <div className="text-sm font-bold text-white leading-none mb-1">{stat.value}</div>
              <div className={`text-[10px] ${stat.muted ? 'text-slate-500' : 'text-emerald-400'}`}>{stat.delta}</div>
            </motion.div>
          ))}
        </div>

        {/* Chart — using fixed pixel heights */}
        <motion.div className="bg-slate-800/30 border border-slate-700/30 rounded-lg p-3.5 mb-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-[11px] text-slate-500">Actividad semanal</span>
            <motion.span className="text-[10px] text-emerald-400 font-mono" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }}>
              actualizando
            </motion.span>
          </div>
          <div className="flex items-end gap-1.5" style={{ height: `${maxBarPx}px` }}>
            {barData.map((pct, i) => {
              const px = Math.round((pct / 100) * maxBarPx);
              return (
                <motion.div
                  key={i}
                  className="flex-1 rounded-sm relative overflow-hidden bg-emerald-500/20"
                  initial={{ height: 0 }}
                  animate={{ height: px }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-emerald-400/50 to-transparent"
                    animate={{ opacity: [0.2, 0.6, 0.2] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.2 }}
                  />
                </motion.div>
              );
            })}
          </div>
          <div className="flex justify-between mt-1.5 text-[9px] text-slate-600 font-mono">
            {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map(d => <span key={d}>{d}</span>)}
          </div>
        </motion.div>

        {/* Activity feed */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
          <div className="text-[11px] text-slate-500 mb-2">Actividad reciente</div>
          <div className="space-y-2">
            {activities.map((act, i) => (
              <motion.div key={i} className="flex items-center gap-2.5 text-[11px]"
                initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 + i * 0.25 }}>
                <motion.div className={`w-1.5 h-1.5 rounded-full ${act.color} flex-shrink-0`}
                  animate={{ scale: [1, 1.6, 1] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }} />
                <span className="text-slate-400 flex-1">{act.text}</span>
                <span className="text-slate-600 font-mono flex-shrink-0">{act.time}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;

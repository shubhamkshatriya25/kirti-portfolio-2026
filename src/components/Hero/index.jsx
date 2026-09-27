import { useCallback, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.css";

const HERO = "I BREAK THINGS SO YOU DON'T HAVE TO.";

const chars = "!@#$%^&*0123456789ZX<>?/";

function randomChar() {
  return chars[Math.floor(Math.random() * chars.length)];
}

function Letter({ char, index, active, origin, onTrigger }) {
  const [scramble, setScramble] = useState(char);
  const timer = useRef(null);

  const handleEnter = useCallback(() => {
    onTrigger(index);
    clearInterval(timer.current);

    let ticks = 0;
    timer.current = setInterval(() => {
      setScramble(randomChar());
      ticks += 1;
      if (ticks > 7) {
        clearInterval(timer.current);
        setScramble(char);
      }
    }, 35);
  }, [char, index, onTrigger]);

  if (char === " ") return <span className="letter space">&nbsp;</span>;

  const distance = origin === null ? 0 : Math.abs(index - origin);
  const delay = active ? Math.min(distance * 0.018, 0.5) : 0;

  return (
    <motion.span
      className={`letter ${active ? "falling" : ""}`}
      onMouseEnter={handleEnter}
      onTouchStart={handleEnter}
      animate={
        active
          ? {
              y: [0, -10, 4, 80, 260, 560],
              x: [0, (index % 2 ? 1 : -1) * 3, (index % 3 - 1) * 8, (index % 2 ? 1 : -1) * 18, (index % 3 - 1) * 35],
              rotate: [0, -2, 8, -18, 38, 82],
              opacity: [1, 1, 0.95, 0.72, 0.25, 0],
              filter: ["blur(0px)", "blur(0px)", "blur(0.5px)", "blur(1px)", "blur(4px)", "blur(10px)"],
            }
          : { y: 0, x: 0, rotate: 0, opacity: 1, filter: "blur(0px)" }
      }
      transition={{ duration: 1.45, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {scramble}
    </motion.span>
  );
}

export function Hero() {
  const [destroyed, setDestroyed] = useState(false);
  const [origin, setOrigin] = useState(null);
  const [run, setRun] = useState(0);

  const trigger = useCallback((index) => {
    setOrigin(index);
    setDestroyed(true);
  }, []);

  const reset = () => {
    setDestroyed(false);
    setOrigin(null);
    setRun((x) => x + 1);
  };

  const letters = useMemo(
    () => HERO.split("").map((char, index) => ({ char, index })),
    [run]
  );

  return (
    <main className="hero" onDoubleClick={reset}>
      <div className="side-mark left">[ SYS ]</div>

      <section className="hero-content" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="green">[</span> CYBERSECURITY ENGINEER <span className="green">]</span></div>

          <h1 aria-label={HERO}>
            {letters.map(({ char, index }) => (
              <Letter
                key={`${index}-${run}`}
                char={char}
                index={index}
                active={destroyed}
                origin={origin}
                onTrigger={trigger}
              />
            ))}
          </h1>

          <p className="intro">
            <span className="green">&gt;</span><br />
            I find vulnerabilities others miss.<br />
            I break systems to make them stronger.<br />
          </p>
        </div>

        <motion.aside
          className="terminal hero-terminal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <div className="terminal-head">
            <div className="lights"><i /><i /><i /></div>
            <span className="terminal-path">~/personal_info.sh</span>
          </div>
          <div className="terminal-body">
            <p><b>&gt; NAME:</b><br />Kirtikumar A.R.</p>
            <p><b>&gt; SPECIALIZATION:</b><br />Web Security, Penetration Testing,<br />Red Teaming</p>
            <p><b>&gt; EXPERIENCE:</b><br />5+ Years</p>
            <p><b>&gt; LOCATION:</b><br />Earth 🌐</p>
            <p><b>&gt; STATUS:</b><br />Hunting Bugs</p>
          </div>
        </motion.aside>
      </section>

      <div className="bottom-ui">
        <div>
        </div>
        <div className="scroll">◉<br /><span>SCROLL DOWN</span><strong>↓</strong></div>
      </div>

      <button className={`reset ${destroyed ? "visible" : ""}`} onClick={reset}>
        [ REBOOT TEXT ]
      </button>

      <div className="corners"><i/><i/><i/><i/></div>
    </main>
  );
}
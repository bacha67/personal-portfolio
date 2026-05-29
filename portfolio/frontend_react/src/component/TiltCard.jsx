import React, { useRef, useCallback } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const TILT = 11; // max degrees

const TiltCard = ({ children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-1, 1], [TILT, -TILT]);
  const rotateY = useTransform(x, [-1, 1], [-TILT, TILT]);

  const cfg = { stiffness: 280, damping: 24, mass: 0.8 };
  const rX = useSpring(rotateX, cfg);
  const rY = useSpring(rotateY, cfg);

  const onMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const nx = ((e.clientX - left) / width) * 2 - 1;
    const ny = ((e.clientY - top) / height) * 2 - 1;
    x.set(nx);
    y.set(ny);
    // CSS vars for inner spotlight (inherited by children)
    el.style.setProperty('--mx', `${((nx + 1) / 2) * 100}%`);
    el.style.setProperty('--my', `${((ny + 1) / 2) * 100}%`);
  }, [x, y]);

  const onLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <div style={{ perspective: '900px', height: '100%' }}>
      <motion.div
        ref={ref}
        className="tilt-card"
        style={{
          rotateX: rX,
          rotateY: rY,
          transformStyle: 'preserve-3d',
          height: '100%',
          position: 'relative',
        }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TiltCard;

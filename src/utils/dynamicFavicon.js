/**
 * Dynamic Analytics Favicon Controller for RAK Analytics
 * 
 * Features:
 * - Real-time animated telemetry bars & trendline rendered via offscreen canvas
 * - RAK brand colors: Dark Ink background with vibrant RAK Orange (#ef6000) gradients
 * - Dynamic pulse & surge reactions during page navigation / user actions
 * - Battery & CPU friendly: throttled to ~12 FPS, automatically pauses when tab is hidden
 * - Full support for 'prefers-reduced-motion' (freezes into clean static analytics chart)
 * - Cross-browser support (Chrome, Edge, Safari, Firefox)
 */

let canvas = null;
let ctx = null;
let linkElement = null;
let animFrameId = null;
let lastUpdateTime = 0;
let surgeLevel = 0;
let isRunning = false;

// Initialize offscreen canvas and link tag
function init() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return false;

  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    ctx = canvas.getContext('2d', { willReadFrequently: false });
  }

  // Find or create favicon link element
  linkElement = document.getElementById('dynamic-favicon');
  if (!linkElement) {
    linkElement = document.querySelector("link[rel*='icon']");
  }
  if (!linkElement) {
    linkElement = document.createElement('link');
    linkElement.rel = 'icon';
    linkElement.type = 'image/png';
    document.head.appendChild(linkElement);
  }
  linkElement.id = 'dynamic-favicon';

  return !!ctx;
}

// Fallback rounded rect for older canvas implementations
function drawRoundedRect(context, x, y, width, height, radius) {
  if (context.roundRect) {
    context.roundRect(x, y, width, height, radius);
  } else {
    const r = typeof radius === 'number' ? radius : 4;
    context.moveTo(x + r, y);
    context.arcTo(x + width, y, x + width, y + height, r);
    context.arcTo(x + width, y + height, x, y + height, r);
    context.arcTo(x, y + height, x, y, r);
    context.arcTo(x, y, x + width, y, r);
  }
}

/**
 * Render one frame of the dynamic analytics favicon
 */
function renderFrame(timeSec, surge = 0) {
  if (!ctx || !canvas) return;

  const w = 64;
  const h = 64;
  ctx.clearRect(0, 0, w, h);

  // 1. Dark Premium Container Squircle
  ctx.save();
  ctx.beginPath();
  drawRoundedRect(ctx, 2, 2, 60, 60, 14);
  const bgGrad = ctx.createLinearGradient(0, 0, 60, 60);
  bgGrad.addColorStop(0, '#1a1d24');
  bgGrad.addColorStop(1, '#0c0e11');
  ctx.fillStyle = bgGrad;
  ctx.fill();

  // Subtle border
  ctx.strokeStyle = '#2d3440';
  ctx.lineWidth = 1.6;
  ctx.stroke();
  ctx.restore();

  // 2. Metric Grid Lines
  ctx.save();
  ctx.strokeStyle = '#1d232c';
  ctx.lineWidth = 1;
  ctx.setLineDash([2, 3]);

  ctx.beginPath();
  ctx.moveTo(9, 26);
  ctx.lineTo(55, 26);
  ctx.moveTo(9, 39);
  ctx.lineTo(55, 39);
  ctx.stroke();

  // Baseline
  ctx.setLineDash([]);
  ctx.strokeStyle = '#272f3a';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(9, 52);
  ctx.lineTo(55, 52);
  ctx.stroke();
  ctx.restore();

  // 3. Dynamic Bar Heights (Ascending Telemetry + Harmonic Sine Motion)
  const baseY = 52;
  const barWidth = 7;
  const barGap = 4;
  const startX = 10;

  // Real-time micro harmonic offsets
  const osc1 = Math.sin(timeSec * 2.4) * 4;
  const osc2 = Math.sin(timeSec * 2.1 + 1.2) * 5;
  const osc3 = Math.sin(timeSec * 2.6 + 2.4) * 4.5;
  const osc4 = Math.sin(timeSec * 1.9 + 3.6) * 3.5;

  const surgeVal = surge * 5;

  const rawH1 = Math.max(12, Math.min(26, 18 + osc1 + surgeVal * 0.6));
  const rawH2 = Math.max(18, Math.min(36, 27 + osc2 + surgeVal * 0.8));
  const rawH3 = Math.max(26, Math.min(43, 37 + osc3 + surgeVal * 1.0));
  const rawH4 = Math.max(34, Math.min(46, 43 + osc4 + surgeVal * 0.7));

  const heights = [rawH1, rawH2, rawH3, rawH4];
  const barData = [];

  for (let i = 0; i < 4; i++) {
    const x = startX + i * (barWidth + barGap);
    const bh = heights[i];
    const y = baseY - bh;
    barData.push({ x, y, cx: x + barWidth / 2, h: bh });
  }

  // 4. Subtle Area Glow under trendline
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(barData[0].cx, barData[0].y);
  for (let i = 1; i < 4; i++) {
    ctx.lineTo(barData[i].cx, barData[i].y);
  }
  ctx.lineTo(barData[3].cx, baseY);
  ctx.lineTo(barData[0].cx, baseY);
  ctx.closePath();
  const areaGrad = ctx.createLinearGradient(0, 10, 0, baseY);
  areaGrad.addColorStop(0, 'rgba(239, 96, 0, 0.28)');
  areaGrad.addColorStop(1, 'rgba(239, 96, 0, 0.0)');
  ctx.fillStyle = areaGrad;
  ctx.fill();
  ctx.restore();

  // 5. Draw 4 Ascending Brand Orange Bars
  barData.forEach((bar, idx) => {
    ctx.save();
    ctx.beginPath();
    drawRoundedRect(ctx, bar.x, bar.y, barWidth, bar.h, [3.5, 3.5, 1, 1]);

    const barGrad = ctx.createLinearGradient(0, bar.y, 0, baseY);
    if (idx === 0) {
      barGrad.addColorStop(0, '#ff9944');
      barGrad.addColorStop(1, '#ef6000');
    } else if (idx === 1) {
      barGrad.addColorStop(0, '#ff8822');
      barGrad.addColorStop(1, '#e05300');
    } else if (idx === 2) {
      barGrad.addColorStop(0, '#ffa83b');
      barGrad.addColorStop(1, '#ef6000');
    } else {
      barGrad.addColorStop(0, '#ffbe5d');
      barGrad.addColorStop(1, '#ff6700');
    }
    ctx.fillStyle = barGrad;
    ctx.fill();
    ctx.restore();
  });

  // 6. Upward Dynamic Trendline
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(barData[0].cx, barData[0].y - 1);
  // Smooth curve through peaks
  for (let i = 1; i < 4; i++) {
    const prev = barData[i - 1];
    const curr = barData[i];
    const midX = (prev.cx + curr.cx) / 2;
    const midY = (prev.y + curr.y) / 2 - 1;
    ctx.quadraticCurveTo(prev.cx, prev.y - 1, midX, midY);
    if (i === 3) {
      ctx.lineTo(curr.cx, curr.y - 1);
    }
  }

  const lineGrad = ctx.createLinearGradient(12, 40, 48, 8);
  lineGrad.addColorStop(0, 'rgba(255, 160, 60, 0.85)');
  lineGrad.addColorStop(0.7, '#ffffff');
  lineGrad.addColorStop(1, '#38bdf8');

  ctx.strokeStyle = lineGrad;
  ctx.lineWidth = 2.2;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.stroke();
  ctx.restore();

  // 7. Peak Beacon & Expanding Radar Ping
  const peak = barData[3];
  const beaconX = peak.cx;
  const beaconY = peak.y - 1;

  // Expanding radar ring
  const pingCycle = (timeSec * 1.5) % 1; // 0 to 1
  const pingRadius = 3 + pingCycle * 5;
  const pingAlpha = Math.max(0, 0.85 * (1 - pingCycle));

  ctx.save();
  ctx.beginPath();
  ctx.arc(beaconX, beaconY, pingRadius, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(56, 189, 248, ${pingAlpha.toFixed(2)})`;
  ctx.lineWidth = 1.2;
  ctx.stroke();

  // Core glowing telemetry dot
  ctx.beginPath();
  ctx.arc(beaconX, beaconY, 2.6, 0, Math.PI * 2);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.strokeStyle = '#ef6000';
  ctx.lineWidth = 1.4;
  ctx.stroke();
  ctx.restore();

  // Update favicon link href
  try {
    if (linkElement) {
      linkElement.href = canvas.toDataURL('image/png');
    }
  } catch {
    // Fail gracefully if canvas export is restricted
  }
}

/**
 * Main animation ticker loop
 */
function tick(timestamp) {
  if (!isRunning) return;

  // Throttle to ~12 FPS (approx every 83ms) to save CPU/battery while remaining silky
  if (timestamp - lastUpdateTime >= 83) {
    lastUpdateTime = timestamp;
    const timeSec = timestamp / 1000;

    // Decay surge effect
    if (surgeLevel > 0.02) {
      surgeLevel *= 0.9;
    } else {
      surgeLevel = 0;
    }

    renderFrame(timeSec, surgeLevel);
  }

  animFrameId = requestAnimationFrame(tick);
}

/**
 * Trigger an analytics surge / burst (e.g. on route change or data interaction)
 */
export function triggerAnalyticsSurge() {
  surgeLevel = 1.0;
  if (!isRunning) {
    renderFrame(performance.now() / 1000, surgeLevel);
  }
}

/**
 * Start the dynamic analytics favicon loop
 */
export function startDynamicFavicon() {
  if (typeof window === 'undefined') return () => {};
  if (!init()) return () => {};

  // Respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    renderFrame(1.5, 0); // Render single crisp static state
    return () => {};
  }

  isRunning = true;
  lastUpdateTime = 0;
  surgeLevel = 0.5; // Initial warm-up surge
  animFrameId = requestAnimationFrame(tick);

  // Pause when tab is backgrounded, resume when active
  const handleVisibilityChange = () => {
    if (document.hidden) {
      isRunning = false;
      if (animFrameId) cancelAnimationFrame(animFrameId);
    } else {
      if (!isRunning) {
        isRunning = true;
        surgeLevel = 0.8; // Brief pulse when returning to tab
        lastUpdateTime = 0;
        animFrameId = requestAnimationFrame(tick);
      }
    }
  };

  document.addEventListener('visibilitychange', handleVisibilityChange);

  // Return cleanup function
  return () => {
    isRunning = false;
    if (animFrameId) cancelAnimationFrame(animFrameId);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
  };
}

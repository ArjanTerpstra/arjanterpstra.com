const PEAKS = {"come-with-me-now":[0.03,0.2,0.36,0.23,0.19,0.22,0.24,0.22,0.2,0.18,0.16,0.23,0.2,0.16,0.14,0.13,0.2,0.23,0.34,0.38,0.42,0.61,0.78,0.95,0.95,0.91,0.73,0.69,0.84,0.77,0.88,0.96,0.97,0.98,1,1,0.99,1,0.99,1,1,0.97,0.99,1,0.99,0.99,1,0.97,0.96,0.98,0.96,0.98,1,0.98,0.99,0.99,0.98,1,0.96,0.97,0.98,0.97,0.98,0.97,0.98,1,0.96,0.98,0.97,0.98,0.96,0.95,0.99,0.95,0.97,0.97,0.97,0.96,0.97,0.95,0.95,0.96,0.95,0.99,1,0.95,0.39,0.27,0.26,0.19,0.77,0.94,0.62,0.28,0.54,0.66,0.5,0.53,0.76,0.98,0.98,0.97,0.97,0.99,0.98,0.95,0.95,1,0.99,0.98,0.98,0.98,1,0.96,1,0.95,0.97,0.96,0.92,0.74,0.9,0.94,0.96,0.96,0.95,0.95,0.95,0.97,0.97,0.98,0.94,0.96,0.95,0.95,0.96,1,0.97,1,0.46,0.98,0.95,0.97,0.99,0.98,0.98,0.97,0.97,0.95,0.96,0.95,0.76,0.99,0.97,0.59,0.29,0.16,0.13,0.07,0.04,0.03],"will-time-end":[0.22,0.13,0.09,0.01,0.25,0.16,0.06,0,0.23,0.14,0.06,0.01,0.24,0.13,0.05,0.05,0.2,0.14,0.08,0.07,0.33,0.15,0.08,0.06,0.59,0.25,0.07,0.07,0.43,0.26,0.07,0.2,0.76,0.42,0.28,0.69,0.64,0.39,0.25,0.75,0.56,0.33,0.36,0.7,0.58,0.38,0.61,0.95,0.74,0.58,0.55,0.91,0.8,0.65,0.62,0.99,0.82,0.95,0.96,0.99,0.94,0.97,0.84,0.97,0.93,0.98,0.93,0.99,0.87,0.94,0.9,0.95,0.95,0.84,0.91,0.96,0.97,0.98,1,0.99,0.69,0.41,0.29,0.12,0.05,0.64,0.27,0.46,0.11,0.69,0.4,0.89,0.82,0.95,0.87,0.77,0.82,0.97,0.91,0.98,0.99,0.97,0.99,0.95,0.99,0.97,0.93,0.97,0.99,0.95,0.89,0.89,0.99,0.98,0.99,0.98,0.98,1,0.91,0.94,0.94,0.99,0.88,0.96,0.99,0.96,0.99,0.97,1,0.92,0.96,1,0.95,0.96,1,0.97,1,0.97,0.99,0.99,0.98,0.74,0.61,0.32,0.12,0.06,0.44,0.18,0.37,0.1,0.4,0.17,0.36,0.37,0.37,0.11,0.04,0,0,0],"when-gods-whisper":[0.54,0.36,0.11,0.05,0.03,0.03,0.03,0.04,0.06,0.07,0.07,0.18,0.38,0.99,0.64,0.41,0.29,0.2,0.2,0.3,0.75,0.59,0.45,0.38,0.29,0.32,0.96,0.79,0.71,0.36,0.26,0.27,0.2,0.93,0.67,0.4,0.68,0.63,0.54,0.69,0.89,0.53,0.5,0.94,0.84,0.7,0.63,0.65,0.68,0.97,0.96,0.83,0.62,0.72,0.69,0.62,0.95,0.97,0.78,0.81,0.67,0.8,0.75,0.93,0.96,0.67,0.94,0.69,0.95,0.95,0.97,0.48,0.43,0.42,0.42,0.4,0.39,0.39,0.96,0.92,0.42,0.64,0.91,0.96,0.68,0.72,0.95,0.95,0.9,0.95,0.98,0.8,0.97,0.97,0.96,0.93,0.87,0.94,0.96,0.98,0.97,0.9,0.84,0.97,0.98,0.84,0.98,0.97,0.89,0.83,0.96,0.96,0.97,0.98,0.99,0.98,0.96,0.92,0.98,0.98,0.94,0.97,0.93,0.99,0.86,0.96,0.98,0.92,0.57,0.77,0.9,0.99,0.88,0.94,0.87,0.94,0.97,0.93,0.99,0.86,0.94,0.94,0.83,1,0.94,0.98,0.96,0.74,0.34,0.84,0.97,0.65,0.42,0.27,0.16,0.08,0.01,0.01,0.01,0]};

  document.getElementById('year').textContent = new Date().getFullYear();

  const header = document.getElementById('siteHeader');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-in'); io.unobserve(entry.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach((el) => io.observe(el));
  }

  // Portfolio cards → local trailer in a lightbox (YouTube fallback when no mp4)
  (function () {
    const lb = document.getElementById('lightbox');
    const lbVideo = document.getElementById('lightboxVideo');
    const lbTitle = document.getElementById('lightboxTitle');
    const lbClose = document.getElementById('lightboxClose');
    const blobCache = {};
    let openToken = 0;
    const loadVideoBlob = (src) => {
      if (blobCache[src]) return Promise.resolve(blobCache[src]);
      return fetch(src)
        .then((r) => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.blob(); })
        .then((b) => { const u = URL.createObjectURL(b); blobCache[src] = u; return u; });
    };
    const openLb = (src, title) => {
      if (!lb) return;
      lbTitle.textContent = title || '';
      lb.classList.add('is-open', 'is-loading'); lb.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      const token = ++openToken;
      // Load as a Blob so iOS Safari can play it without server byte-range support.
      loadVideoBlob(src)
        .then((url) => {
          if (token !== openToken || !lb.classList.contains('is-open')) return;
          lb.classList.remove('is-loading');
          lbVideo.src = url;
          const p = lbVideo.play(); if (p && p.catch) p.catch(() => {});
        })
        .catch(() => {
          if (token !== openToken) return;
          lb.classList.remove('is-loading');
          lbVideo.src = src; // fallback to direct stream
          const p = lbVideo.play(); if (p && p.catch) p.catch(() => {});
        });
    };
    const closeLb = () => {
      if (!lb) return;
      ++openToken;
      lb.classList.remove('is-open', 'is-loading'); lb.setAttribute('aria-hidden', 'true');
      lbVideo.pause(); lbVideo.removeAttribute('src'); lbVideo.load();
      document.body.style.overflow = '';
    };
    if (lb) {
      lbClose.addEventListener('click', closeLb);
      lb.addEventListener('click', (e) => { if (e.target === lb) closeLb(); });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && lb.classList.contains('is-open')) closeLb(); });
    }
    document.querySelectorAll('.work-card[data-video], .work-card[data-mp4]').forEach((card) => {
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      const mp4 = card.getAttribute('data-mp4');
      const id = card.getAttribute('data-video');
      const title = (card.querySelector('h3') ? card.querySelector('h3').textContent : '');
      const activate = () => {
        if (mp4 && lb) openLb(mp4, title);
        else if (id) window.open('https://www.youtube.com/watch?v=' + id, '_blank', 'noopener');
      };
      card.addEventListener('click', activate);
      card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); } });
    });
  })();

  // Custom waveform player. NB: in a sandboxed artifact the mp3s aren't reachable,
  // so playback stays silent — the waveform, hover-time and active styling still demo the look.
  const tracks = [...document.querySelectorAll('.track[data-src]')];
  if (tracks.length) {
    const audio = document.getElementById('trackPlayer') || new Audio();
    audio.preload = 'metadata';
    let active = null;
    const DIM = 'rgba(237,234,227,0.24)';
    const litColor = () => (getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#EDEAE3');
    const HOVER = 'rgba(237,234,227,0.85)';
    const tip = document.createElement('div'); tip.className = 'wave-tip'; document.body.appendChild(tip);
    const durSec = (str) => { const [m, s] = String(str).split(':').map(Number); return (m * 60) + (s || 0); };
    let pendingSeek = null;
    const fmt = (s) => { if (!isFinite(s)) return '0:00'; return Math.floor(s / 60) + ':' + Math.floor(s % 60).toString().padStart(2, '0'); };
    const keyOf = (t) => t.getAttribute('data-src');

    const sizeCanvas = (c) => { const dpr = window.devicePixelRatio || 1; const r = c.getBoundingClientRect(); c.width = Math.max(1, Math.round(r.width * dpr)); c.height = Math.max(1, Math.round(r.height * dpr)); };

    const draw = (track, progress) => {
      const c = track._refs.canvas;
      const dpr = window.devicePixelRatio || 1;
      if (c.width <= 1 || Math.abs(c.width - c.clientWidth * dpr) > 2) sizeCanvas(c);
      const ctx = c.getContext('2d');
      const W = c.width, H = c.height;
      ctx.clearRect(0, 0, W, H);
      const p = PEAKS[keyOf(track)];
      if (!p) return;
      const n = p.length, gap = W / n, bw = Math.max(1, gap * 0.62), lit = progress * n;
      const LIT = litColor();
      for (let i = 0; i < n; i++) {
        const h = Math.max(H * 0.04, p[i] * H * 0.9);
        ctx.fillStyle = i < lit ? LIT : DIM;
        ctx.fillRect(i * gap + (gap - bw) / 2, (H - h) / 2, bw, h);
      }
      const hf = track._hoverFrac;
      if (hf != null) { const lw = Math.max(1, Math.round(dpr * 1.5)); ctx.fillStyle = HOVER; ctx.fillRect(Math.min(W - lw, Math.max(0, hf * W - lw / 2)), 0, lw, H); }
    };
    const redraw = () => tracks.forEach((t) => draw(t, t === active && audio.duration ? audio.currentTime / audio.duration : 0));

    // Seek that works whether or not metadata has loaded yet.
    const applySeek = (frac) => {
      frac = Math.min(1, Math.max(0, frac));
      if (audio.duration) audio.currentTime = Math.min(audio.duration - 0.05, frac * audio.duration);
      else pendingSeek = frac;        // applied on loadedmetadata
    };
    // Relative skip (seconds) on the active track.
    const skip = (delta) => {
      if (!active) return;
      if (audio.duration) {
        audio.currentTime = Math.min(audio.duration - 0.05, Math.max(0, audio.currentTime + delta));
      } else {
        const d = durSec(active._refs.duration) || 1;
        const base = (pendingSeek != null ? pendingSeek * d : 0);
        pendingSeek = Math.min(1, Math.max(0, (base + delta) / d));
      }
    };
    // Start (or restart) a track from an optional start fraction.
    // Audio is loaded fully as a Blob (object URL) so it is reliably seekable
    // even when the host doesn't serve HTTP byte-range requests.
    const loadBlobUrl = (track) => {
      if (track._blobUrl) return Promise.resolve(track._blobUrl);
      if (track._blobPromise) return track._blobPromise;
      track._blobPromise = fetch(track._refs.src)
        .then((r) => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.blob(); })
        .then((b) => { track._blobUrl = URL.createObjectURL(b); return track._blobUrl; })
        .catch((err) => { track._blobPromise = null; throw err; });
      return track._blobPromise;
    };
    let loadToken = 0;
    const startTrack = (track, seekFrac) => {
      if (active && active !== track) { active.classList.remove('is-active'); active._refs.btn.classList.remove('is-playing'); active._refs.time.textContent = active._refs.duration; draw(active, 0); }
      active = track; track.classList.add('is-active'); pendingSeek = seekFrac;
      track._refs.btn.classList.add('is-playing');
      track.classList.add('is-loading');
      const token = ++loadToken;
      loadBlobUrl(track)
        .then((url) => {
          if (token !== loadToken || active !== track) return; // superseded
          track.classList.remove('is-loading');
          if (audio.src !== url) { audio.src = url; }
          audio.play().catch(() => {});
        })
        .catch(() => {
          if (token !== loadToken) return;
          track.classList.remove('is-loading');
          // Fallback: stream directly (seeking may be limited without range support).
          if (audio.src !== new URL(track._refs.src, location.href).href) audio.src = track._refs.src;
          audio.play().catch(() => {});
        });
    };

    tracks.forEach((track) => {
      track._refs = {
        btn: track.querySelector('.track__play'),
        time: track.querySelector('.track__time'),
        canvas: track.querySelector('.track__wave'),
        src: track.getAttribute('data-audio') || track.getAttribute('data-src'),
        duration: track.querySelector('.track__time').textContent,
      };
      sizeCanvas(track._refs.canvas);

      const togglePlay = () => {
        if (active !== track) { startTrack(track, null); return; }
        if (audio.paused) audio.play().catch(() => {}); else audio.pause();
      };

      track._refs.btn.addEventListener('click', (e) => { e.stopPropagation(); togglePlay(); });
      // ← / → skip 5s on the active track (arrow keys while the play button is focused).
      track._refs.btn.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          e.preventDefault();
          if (active !== track) startTrack(track, null);
          skip(e.key === 'ArrowRight' ? 5 : -5);
        }
      });

      const canvas = track._refs.canvas;
      const progressOf = () => (track === active && audio.duration ? audio.currentTime / audio.duration : 0);
      const fracOf = (e) => { const r = canvas.getBoundingClientRect(); return Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)); };
      const showTip = (frac, clientX) => {
        const r = canvas.getBoundingClientRect();
        const dur = (track === active && audio.duration) ? audio.duration : durSec(track._refs.duration);
        tip.textContent = fmt(frac * dur); tip.style.left = clientX + 'px'; tip.style.top = r.top + 'px'; tip.classList.add('is-on');
      };
      let scrubbing = false;

      // pointerdown → seek immediately (and start the track if it's not the active one);
      // dragging keeps scrubbing live while playback continues.
      canvas.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        scrubbing = true;
        try { canvas.setPointerCapture(e.pointerId); } catch (_) {}
        const frac = fracOf(e);
        track._hoverFrac = frac;
        if (active !== track) startTrack(track, frac);
        else applySeek(frac);
        showTip(frac, e.clientX);
        draw(track, frac);
      });
      canvas.addEventListener('pointermove', (e) => {
        const frac = fracOf(e);
        track._hoverFrac = frac;
        showTip(frac, e.clientX);
        if (scrubbing && active === track) applySeek(frac);
        draw(track, (scrubbing && active === track) ? frac : progressOf());
      });
      const endScrub = (e) => { if (scrubbing) { scrubbing = false; try { canvas.releasePointerCapture(e.pointerId); } catch (_) {} } };
      canvas.addEventListener('pointerup', endScrub);
      canvas.addEventListener('pointercancel', endScrub);
      canvas.addEventListener('pointerleave', () => { if (scrubbing) return; track._hoverFrac = null; tip.classList.remove('is-on'); draw(track, progressOf()); });
    });

    audio.addEventListener('loadedmetadata', () => { if (pendingSeek != null && audio.duration) audio.currentTime = pendingSeek * audio.duration; pendingSeek = null; });
    audio.addEventListener('canplay', () => { if (pendingSeek != null && audio.duration) { audio.currentTime = pendingSeek * audio.duration; pendingSeek = null; } });
    audio.addEventListener('play', () => active && active._refs.btn.classList.add('is-playing'));
    audio.addEventListener('pause', () => active && active._refs.btn.classList.remove('is-playing'));
    audio.addEventListener('timeupdate', () => { if (!active || !audio.duration) return; active._refs.time.textContent = fmt(audio.currentTime); draw(active, audio.currentTime / audio.duration); });
    audio.addEventListener('ended', () => { if (!active) return; active._refs.btn.classList.remove('is-playing'); active._refs.time.textContent = active._refs.duration; draw(active, 0); active.classList.remove('is-active'); active = null; });
    window.addEventListener('resize', redraw);
    redraw();

    // ---- Volume fader + mute ----
    (function () {
      const fader = document.getElementById('volFader');
      const muteBtn = document.getElementById('volMute');
      if (!fader || !muteBtn) return;
      const KEY = 'at_volume';
      let stored = 0.8;
      try { const s = parseFloat(localStorage.getItem(KEY)); if (!isNaN(s)) stored = s; } catch (_) {}
      let lastVol = stored > 0 ? stored : 0.8;   // remembered level for unmute
      const save = (v) => { try { localStorage.setItem(KEY, String(v)); } catch (_) {} };
      const paint = () => {
        const silent = audio.muted || audio.volume === 0;
        const v = silent ? 0 : audio.volume;
        fader.value = v;
        const pct = Math.round(v * 100);
        fader.style.background = 'linear-gradient(90deg, var(--accent) ' + pct + '%, rgba(237,234,227,.18) ' + pct + '%)';
        muteBtn.classList.toggle('is-muted', silent);
        muteBtn.setAttribute('aria-pressed', String(silent));
        muteBtn.setAttribute('aria-label', silent ? 'Unmute' : 'Mute');
      };
      audio.volume = stored; audio.muted = false;
      paint();
      fader.addEventListener('input', () => {
        const v = parseFloat(fader.value);
        audio.muted = false; audio.volume = v;
        if (v > 0) lastVol = v;
        save(v); paint();
      });
      muteBtn.addEventListener('click', () => {
        if (audio.muted || audio.volume === 0) {
          audio.muted = false;
          if (audio.volume === 0) { audio.volume = lastVol; save(lastVol); }
        } else {
          audio.muted = true;
        }
        paint();
      });
      audio.addEventListener('volumechange', paint);
    })();
  }
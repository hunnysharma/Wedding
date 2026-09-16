/* ══════════════════════════════════════════════════════════════════
   Abhishek weds Yukta — wedding invitation
   Everything you may want to change lives in WEDDING below.
   All times are Indian Standard Time (UTC+05:30), 24-hour "HH:MM".
   ══════════════════════════════════════════════════════════════════ */

const WEDDING = {
  groom: 'Abhishek',
  bride: 'Yukta',
  hashtag: '#AbhishekWedsYukta',

  /* Sign-off under the invitation note. Leave '' to keep the default. */
  familyLine: '',

  /* Countdown target — the phere on the 25th. */
  countdownTo: '2026-11-25T23:30:00+05:30',
  countdownNote: 'Until the phere',
  countdownDone: 'The phere has begun',

  /* Background music: a YouTube video, started from `startAt` seconds on open. */
  music: { videoId: 'N__nnzyl5Uw', startAt: 45, volume: 30 },

  /* Add entries to reveal the RSVP section:
     { name: 'Rahul Sharma', role: 'Brother of the groom', phone: '+919876543210' } */
  rsvp: [],

  venues: {
    home: {
      tag: 'Where it all begins',
      name: 'आपणो घर',
      sub: 'Aapno Ghar · our home',
      address: 'H. No. 28, Shubham Homes, Jhalawar, Rajasthan',
      short: 'Aapno Ghar, Shubham Homes',
      map: 'https://www.google.com/maps?q=24.593712,76.171814'
    },
    mukundra: {
      tag: 'Baraat, sangeet and phere',
      name: 'New Mukundra',
      sub: 'The wedding venue',
      address: 'New Mukundra, Jhalawar, Rajasthan',
      short: 'New Mukundra, Jhalawar',
      map: 'https://maps.app.goo.gl/weGhxoH3EuMBgMEr8'
    }
  },

  /* name, time, end (optional, default +2h), onwards, icon, note, dress (optional) */
  days: [
    {
      date: '2026-11-22', venue: 'home', title: 'Vinayak Sthapana, Mata Pujan and more',
      events: [
        { name: 'Vinayak Sthapana', time: '09:00', end: '11:00', onwards: true, icon: 'temple_hindu',
          note: 'Seeking Shri Ganesh’s blessings as the wedding rituals begin.', dress: 'Pooja Attire' },
        { name: 'Mata Pujan', time: '11:00', end: '13:00', onwards: true, icon: 'volunteer_activism',
          note: 'Worship of our Kuldevi, inviting her grace upon the family.', dress: 'Pooja Attire' },
        { name: 'Ghodi Banna', time: '16:00', end: '19:00', onwards: true, icon: 'celebration',
          note: 'Traditional banna geet as the groom is honoured by everyone.', dress: 'Festive Ethnic' }
      ]
    },
    {
      date: '2026-11-23', venue: 'home', title: 'Tel, Mehndi and much more',
      events: [
        { name: 'Tel', time: '09:00', end: '10:30', icon: 'water_drop',
          note: 'The gentle oil ceremony, blessings poured by our elders.', dress: 'Pooja Attire' },
        { name: 'Mehndi', time: '11:00', end: '16:00', onwards: true, icon: 'spa',
          note: 'Henna, sweets and songs — colour everywhere.', dress: 'Shades of Green' }
      ]
    },
    {
      date: '2026-11-24', venue: 'mukundra', title: 'Mayra, Sagai, Sangeet and much more',
      events: [
        { name: 'Basan', time: '09:00', end: '10:30', icon: 'brush',
          note: 'Ubtan of turmeric and sandal for a glowing dulha.', dress: 'Casual Red Attire' },
        { name: 'Mayra', time: '11:00', end: '13:00', icon: 'redeem',
          note: 'The mamaji’s beloved tradition of gifts and blessings.', dress: 'Ethnic Wear' },
        { name: 'Sagai', time: '13:00', end: '15:00', icon: 'diamond',
          note: 'Rings exchanged, two families become one.', dress: 'Ethnic Wear' },
        { name: 'Sangeet', time: '19:00', end: '23:30', icon: 'music_note',
          note: 'Dhol, dance floor and a night that refuses to end.', dress: 'Indo Western (Black Shades)' }
      ]
    },
    {
      date: '2026-11-25', venue: 'mukundra', title: 'Haldi, Nikasi, Phere and much more',
      events: [
        { name: 'Haldi', time: '11:00', end: '13:00', icon: 'wb_sunny',
          note: 'Turmeric, laughter and the warmest mess of the week.', dress: 'Pastel Shades' },
        { name: 'Nikasi', time: '18:00', end: '19:00', icon: 'flare',
          note: 'The baraat sets off — band, baaja and our banna.', dress: 'Ethnic Wear' },
        { name: 'Reception', time: '19:00', end: '23:00', icon: 'restaurant',
          note: 'Come meet the couple, feast and celebrate with us.', dress: 'Ethnic Wear' },
        { name: 'Phere', time: '23:30', end: '2026-11-26T02:30', onwards: true, icon: 'local_fire_department',
          note: 'Seven sacred rounds, seven promises, one lifetime.', dress: 'Casual & Comfortable' }
      ]
    }
  ]
};

/* ═══════════════ helpers ═══════════════ */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const IST = '+05:30';
const MON = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const MON_FULL = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAY = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function istDate(date, time) {
  return new Date(`${time.includes('T') ? time : `${date}T${time}`}:00${IST}`);
}
function prettyTime(hhmm) {
  const [H, M] = (hhmm.includes('T') ? hhmm.split('T')[1] : hhmm).split(':').map(Number);
  return `${H % 12 === 0 ? 12 : H % 12}:${String(M).padStart(2, '0')} ${H >= 12 ? 'PM' : 'AM'}`;
}
/* "today" in IST, as YYYY-MM-DD, regardless of where the guest is */
function istToday() {
  return new Date(Date.now() + 5.5 * 3600e3).toISOString().slice(0, 10);
}
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove('show'), 2400);
}


/* Each dress code gets its own colour and a small figure in that attire.
   Add a line here if you invent a new code; anything unlisted falls back to gold. */
const DRESS = {
  'pooja':    { fig: 'kurta',   ink: '#8A5A12', hue: '#D79A2B', tint: 'rgba(215,154,43,.13)' },
  'shades of green': { fig: 'lehenga', ink: '#1F6B4C', hue: '#2E8B60', tint: 'rgba(46,139,96,.13)' },
  'casual red': { fig: 'kurta', ink: '#A8321F', hue: '#C74530', tint: 'rgba(199,69,48,.13)' },
  'ethnic':   { fig: 'lehenga', ink: '#8E1F3C', hue: '#B03A58', tint: 'rgba(176,58,88,.13)' },
  'indo western': { fig: 'blazer', ink: '#2B2F3A', hue: '#39404F', tint: 'rgba(43,47,58,.11)' },
  'pastel':   { fig: 'lehenga', ink: '#9C5B78', hue: '#E2A8BE', tint: 'rgba(226,168,190,.2)' },
  'casual':   { fig: 'casual',  ink: '#3C5F8A', hue: '#5B82B4', tint: 'rgba(91,130,180,.13)' },
  'festive':  { fig: 'kurta',   ink: '#A2571C', hue: '#D07A2C', tint: 'rgba(208,122,44,.14)' }
};
function dressStyle(name) {
  const k = String(name).toLowerCase();
  for (const key of Object.keys(DRESS)) if (k.includes(key)) return DRESS[key];
  return { fig: 'kurta', ink: '#8A6118', hue: '#BD8C2C', tint: 'rgba(189,140,44,.13)' };
}
function dressBadge(name) {
  const d = dressStyle(name);
  return `<span class="dress" style="--d-ink:${d.ink};--d-hue:${d.hue};--d-tint:${d.tint}">
      <svg class="dress-fig" viewBox="0 0 20 26" aria-hidden="true"><use href="#fig-${d.fig}"/></svg>${name}
    </span>`;
}

/* ═══════════════ render ═══════════════ */
function renderDayNav() {
  const today = istToday();
  $('#daynavTrack').innerHTML = WEDDING.days.map((day) => {
    const d = istDate(day.date, '12:00');
    return `<a class="chip${day.date === today ? ' today' : ''}" href="#d${d.getDate()}" data-chip="d${d.getDate()}">
      <span class="chip-day">${DAY[d.getDay()].slice(0, 3)}</span>
      <span class="chip-date">${d.getDate()}</span>
      <span class="chip-mon">${MON[d.getMonth()]}</span>
    </a>`;
  }).join('');
}

function renderDays() {
  $('#days').innerHTML = WEDDING.days.map((day, di) => {
    const v = WEDDING.venues[day.venue];
    const d = istDate(day.date, '12:00');

    const rasams = day.events.map((ev, ei) => `
      <li class="rasam">
        <span class="rasam-ico"><span class="ms">${ev.icon}</span></span>
        <div>
          <div class="rasam-top">
            <h3 class="rasam-name">${ev.name}</h3>
            <span class="rasam-time">${prettyTime(ev.time)}${ev.onwards ? ' onwards' : ''}</span>
          </div>
          ${ev.note ? `<p class="rasam-note">${ev.note}</p>` : ''}
        </div>
        <div class="rasam-foot">
          ${ev.dress ? dressBadge(ev.dress) : ''}
          <button class="btn btn-ghost btn-sm" type="button" data-cal="${di}-${ei}">
            <span class="ms">calendar_add_on</span>Add to calendar
          </button>
        </div>
      </li>`).join('');

    return `
      <article class="day rv" id="d${d.getDate()}">
        <div class="day-head">
          <div class="day-badge"><b>${d.getDate()}</b><span>${MON[d.getMonth()]}</span></div>
          <div class="day-meta">
            <p class="day-title">${DAY[d.getDay()]} · ${day.title}</p>
            <p class="day-where"><span class="ms">location_on</span>${v.short}</p>
          </div>
          <a class="btn btn-ghost btn-sm" href="${v.map}" target="_blank" rel="noopener">
            <span class="ms">near_me</span>Directions
          </a>
        </div>
        <ul class="rasams">${rasams}</ul>
      </article>`;
  }).join('');
}

function renderVenues() {
  $('#venueGrid').innerHTML = Object.entries(WEDDING.venues).map(([key, v]) => {
    const dates = WEDDING.days.filter(d => d.venue === key).map(d => istDate(d.date, '12:00').getDate());
    const line = dates.length ? `${dates.join(' & ')} ${MON_FULL[10]} 2026` : '';
    return `
      <article class="venue rv">
        <span class="venue-tag">${v.tag}</span>
        <h3 class="venue-name">${v.name}</h3>
        ${v.sub ? `<p class="venue-sub">${v.sub}</p>` : ''}
        <p class="venue-addr">${v.address}</p>
        ${line ? `<p class="venue-days">${line}</p>` : ''}
        <a class="btn btn-primary btn-sm" href="${v.map}" target="_blank" rel="noopener">
          <span class="ms">near_me</span>Open in Maps
        </a>
      </article>`;
  }).join('');
}

function renderRsvp() {
  if (!WEDDING.rsvp.length) return;
  $('#rsvp').hidden = false;
  $('#rsvpGrid').innerHTML = WEDDING.rsvp.map(p => `
    <div class="rsvp-card rv">
      <span class="rsvp-name">${p.name}</span>
      ${p.role ? `<span class="rsvp-role">${p.role}</span>` : ''}
      ${p.phone ? `<a class="btn btn-ghost btn-sm" href="tel:${p.phone.replace(/\s/g, '')}"><span class="ms">call</span>Call</a>` : ''}
    </div>`).join('');
}

/* ═══════════════ calendar ═══════════════ */
function icsEsc(t) {
  return String(t).replace(/\\/g, '\\\\').replace(/;/g, '\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n');
}
function icsStamp(d) {
  return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}
function eventToIcs(day, ev) {
  const v = WEDDING.venues[day.venue];
  const start = istDate(day.date, ev.time);
  const end = ev.end ? istDate(day.date, ev.end) : new Date(start.getTime() + 2 * 3600e3);
  const desc = [ev.note || '', ev.dress ? `Dress code: ${ev.dress}` : '',
    `${WEDDING.groom} weds ${WEDDING.bride} ${WEDDING.hashtag}`].filter(Boolean).join('\n');
  return [
    'BEGIN:VEVENT',
    `UID:${day.date}-${ev.name.replace(/\W+/g, '')}@abhishekyukta`,
    `DTSTAMP:${icsStamp(new Date())}`,
    `DTSTART:${icsStamp(start)}`,
    `DTEND:${icsStamp(end)}`,
    `SUMMARY:${icsEsc(`${ev.name} · ${WEDDING.groom} weds ${WEDDING.bride}`)}`,
    `LOCATION:${icsEsc(v.address)}`,
    `DESCRIPTION:${icsEsc(desc)}`,
    'BEGIN:VALARM', 'TRIGGER:-PT2H', 'ACTION:DISPLAY',
    `DESCRIPTION:${icsEsc(`${ev.name} starts soon`)}`, 'END:VALARM',
    'END:VEVENT'
  ].join('\r\n');
}
function downloadIcs(vevents, filename) {
  const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Abhishek weds Yukta//EN',
    'CALSCALE:GREGORIAN', 'METHOD:PUBLISH', ...vevents, 'END:VCALENDAR'].join('\r\n');
  const url = URL.createObjectURL(new Blob([ics], { type: 'text/calendar;charset=utf-8' }));
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

/* ═══════════════ countdown ═══════════════ */
function countdown() {
  const target = new Date(WEDDING.countdownTo).getTime();
  const c = { d: $('[data-cd="d"]'), h: $('[data-cd="h"]'), m: $('[data-cd="m"]'), s: $('[data-cd="s"]') };
  const t = istDate(WEDDING.countdownTo.slice(0, 10), '12:00');
  $('#cdTarget').textContent = `${DAY[t.getDay()]}, ${t.getDate()} ${MON_FULL[t.getMonth()]} ${t.getFullYear()}`;
  $('#cdNote').textContent = WEDDING.countdownNote;

  const tick = () => {
    const diff = target - Date.now();
    if (diff <= 0) {
      Object.values(c).forEach(el => el.textContent = '00');
      $('#cdNote').textContent = WEDDING.countdownDone;
      clearInterval(countdown._i);
      return;
    }
    const s = Math.floor(diff / 1000);
    c.d.textContent = String(Math.floor(s / 86400)).padStart(2, '0');
    c.h.textContent = String(Math.floor(s / 3600) % 24).padStart(2, '0');
    c.m.textContent = String(Math.floor(s / 60) % 60).padStart(2, '0');
    c.s.textContent = String(s % 60).padStart(2, '0');
  };
  tick();
  countdown._i = setInterval(tick, 1000);
}

/* ═══════════════ ambience ═══════════════ */
function petals() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const host = $('#petals');
  const n = innerWidth < 640 ? 7 : 12;
  for (let i = 0; i < n; i++) {
    const p = document.createElement('span');
    const w = 7 + Math.random() * 7;
    p.className = 'petal';
    p.style.cssText = `left:${Math.random() * 100}vw;width:${w}px;height:${w * 1.3}px;
      --dx:${(Math.random() * 140 - 70).toFixed(0)}px;
      animation-duration:${(15 + Math.random() * 14).toFixed(1)}s;
      animation-delay:-${(Math.random() * 22).toFixed(1)}s;`;
    host.appendChild(p);
  }
}

/* ═══════════════ scroll behaviour ═══════════════ */
function reveals() {
  const io = new IntersectionObserver((es) => {
    es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: .08, rootMargin: '0px 0px -6% 0px' });
  $$('.rv').forEach(el => io.observe(el));
}
function progressBar() {
  const bar = $('#progress');
  let queued = false;
  const paint = () => {
    queued = false;
    const h = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = `${h > 0 ? (scrollY / h) * 100 : 0}%`;
  };
  addEventListener('scroll', () => {
    if (!queued) { queued = true; requestAnimationFrame(paint); }
  }, { passive: true });
  paint();
}
/* highlight the day chip for whichever day panel is in view */
function spyDays() {
  const panels = $$('.day');
  const chips = new Map($$('.chip').map(c => [c.dataset.chip, c]));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      const chip = chips.get(e.target.id);
      if (!chip) return;
      if (e.isIntersecting) {
        chips.forEach(c => c.classList.remove('on'));
        chip.classList.add('on');
        /* keep the active chip in view by moving ONLY the rail, never the page */
        const rail = $('#daynavTrack');
        const want = chip.offsetLeft - (rail.clientWidth - chip.offsetWidth) / 2;
        const max = rail.scrollWidth - rail.clientWidth;
        if (max > 0) rail.scrollTo({ left: Math.max(0, Math.min(want, max)), behavior: 'smooth' });
      }
    });
  }, { rootMargin: '-28% 0px -58% 0px', threshold: 0 });
  panels.forEach(p => io.observe(p));
}

/* ═══════════════ share ═══════════════ */
async function share() {
  const data = {
    title: `${WEDDING.groom} weds ${WEDDING.bride}`,
    text: `You are invited! ${WEDDING.groom} & ${WEDDING.bride} · 22–25 November 2026 · Jhalawar ${WEDDING.hashtag}`,
    url: location.href
  };
  try {
    if (navigator.share) return void await navigator.share(data);
    await navigator.clipboard.writeText(`${data.text}\n${data.url}`);
    toast('Link copied');
  } catch (err) {
    if (err && err.name !== 'AbortError') toast('Copy the link from the address bar');
  }
}

/* ═══════════════ boot ═══════════════ */
/* ═══════════════ music ═══════════════ */
/* Phones only allow sound after a real tap, and only if the player is ALREADY
   running. So the player is created muted the moment the page loads, and the
   tap on the gate simply unmutes it — that is a gesture the browser accepts. */
let ytPlayer = null, musicReady = false, wantSound = false;

function initMusic() {
  const cfg = WEDDING.music;
  if (!cfg || !cfg.videoId || ytPlayer) return;

  window.onYouTubeIframeAPIReady = () => {
    ytPlayer = new YT.Player('ytHost', {
      videoId: cfg.videoId,
      playerVars: {
        autoplay: 1, mute: 1, controls: 0, start: cfg.startAt,
        playsinline: 1, rel: 0, modestbranding: 1
      },
      events: {
        onReady: (e) => {
          musicReady = true;
          e.target.setVolume(cfg.volume ?? 30);
          e.target.mute();          /* silent autoplay is allowed everywhere */
          e.target.playVideo();
          if (wantSound) enableSound();
          syncMusicBtn();
        },
        onStateChange: (e) => {
          if (e.data === YT.PlayerState.ENDED) { e.target.seekTo(cfg.startAt); e.target.playVideo(); }
          syncMusicBtn();
        },
        onError: () => { $('#musicBtn').hidden = true; }
      }
    });
  };

  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  tag.onerror = () => { $('#musicBtn').hidden = true; };
  document.head.appendChild(tag);
}

/* called from inside a real tap handler */
function enableSound() {
  if (!musicReady || !ytPlayer) { wantSound = true; return; }
  try {
    ytPlayer.unMute();
    ytPlayer.setVolume(WEDDING.music.volume ?? 30);
    ytPlayer.playVideo();
  } catch (err) { /* ignore — the button is still there to try again */ }
  syncMusicBtn();

  /* if the browser refused anyway, point the guest at the speaker button */
  clearTimeout(enableSound._t);
  enableSound._t = setTimeout(() => {
    if (ytPlayer && typeof ytPlayer.isMuted === 'function' && ytPlayer.isMuted()) {
      toast('Tap the speaker for music');
    }
    syncMusicBtn();
  }, 1600);
}

function syncMusicBtn() {
  const btn = $('#musicBtn'), icon = $('#musicIcon');
  if (!btn || !ytPlayer || typeof ytPlayer.isMuted !== 'function') return;
  const muted = ytPlayer.isMuted();
  btn.classList.toggle('off', muted);
  icon.textContent = muted ? 'volume_off' : 'volume_up';
  btn.setAttribute('aria-label', muted ? 'Play music' : 'Mute music');
}

function toggleMusic() {
  if (!ytPlayer) { initMusic(); wantSound = true; return; }
  if (typeof ytPlayer.isMuted === 'function' && ytPlayer.isMuted()) enableSound();
  else { ytPlayer.mute(); syncMusicBtn(); }
}

/* ═══════════════ open ═══════════════ */
function openInvitation() {
  const gate = $('#gate');
  if (gate.classList.contains('opening')) return;

  /* we are inside the tap — this is the moment sound is allowed */
  enableSound();
  if (WEDDING.music && WEDDING.music.videoId) $('#musicBtn').hidden = false;

  /* 1. the plaque steps aside while the doors are still shut — nothing overlaps */
  gate.classList.add('opening');

  /* 2. the doors swing open onto the page beneath */
  setTimeout(() => {
    gate.classList.add('open');
    document.body.classList.remove('is-locked');
    document.body.classList.add('opened');   /* hero rises in, stagger by stagger */
  }, 300);

  /* 3. take the gate out of the page once it is done */
  setTimeout(() => gate.classList.add('gone'), 1700);
}

document.addEventListener('DOMContentLoaded', () => {
  if (WEDDING.familyLine) $('#familyLine').textContent = WEDDING.familyLine;
  $('#hashLine').textContent = WEDDING.hashtag;

  renderDayNav();
  renderDays();
  renderVenues();
  renderRsvp();
  countdown();
  petals();
  reveals();
  progressBar();
  spyDays();

  $('#openBtn').addEventListener('click', openInvitation);
  $('#musicBtn').addEventListener('click', toggleMusic);
  initMusic();   /* starts muted in the background, ready for the tap */
  $('#shareBtn').addEventListener('click', share);

  $('#days').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-cal]');
    if (!btn) return;
    const [di, ei] = btn.dataset.cal.split('-').map(Number);
    const day = WEDDING.days[di], ev = day.events[ei];
    downloadIcs([eventToIcs(day, ev)], `${ev.name.toLowerCase().replace(/\s+/g, '-')}.ics`);
    toast(`${ev.name} added`);
  });

  $('#allCalBtn').addEventListener('click', () => {
    downloadIcs(WEDDING.days.flatMap(d => d.events.map(ev => eventToIcs(d, ev))), 'abhishek-weds-yukta.ics');
    toast('All events downloaded');
  });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      if (!document.fonts.check('24px "Material Symbols Rounded"')) document.body.classList.add('no-symbols');
    });
  }
});

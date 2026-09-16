# Abhishek weds Yukta — Wedding Invitation

A single-page invitation. No build step, no dependencies — upload the folder anywhere
static and it works.

```
index.html              structure
styles.css              the whole look (haveli ivory · deep rose · brass gold)
script.js               event data, countdown, music, calendar files, day navigation
assets/
  logo.png              the अ|y monogram — footer and favicon
  ganpati.jpg           Shri Ganesh, in the arch on the gate and in the header
  wood-door-l.svg       the left carved door leaf (arched vine panel + peacock)
  wood-door-r.svg       the right leaf, mirrored
  wood-arch.svg         the carved lintel and its scalloped arch
  wood-jamb.svg         the studded pilasters either side
  couple.jpg            the illustration in the invitation section
  og-couple.jpg         1200×630 link-preview card (WhatsApp, Instagram, iMessage)
  fonts/Satoshi-*.woff2 the typeface, self-hosted so the page never waits on a CDN
```

---

## Swapping the Ganesh picture

The gate and the header currently use a public-domain Nurpur miniature. To use your own
(the Pngtree one, or any other), save it as **`assets/ganpati.png`** — the page looks for
that file first and falls back to the miniature if it isn't there. A portrait crop around
3:4 sits best in the arch. No code change needed.

---

## The link preview

`og:image` is already set to `https://abhishekwedsyukta.vercel.app/assets/og-couple.jpg`, so
pasting the link into WhatsApp shows the couple card. If you ever move to another domain,
change the `og:url`, `og:image` and `twitter:image` lines at the top of `index.html`.

WhatsApp caches previews hard — if you change the picture later, add `?v=2` to the end of
the image URL so it re-fetches.

---

## Deploying

**GitHub Pages**
1. Create a repo, upload everything here (keep the `assets` folder structure).
2. Settings → Pages → Source: `Deploy from a branch` → `main` / `root` → Save.
3. Live at `https://<username>.github.io/<repo>/`.

**Netlify / Vercel** — drag the unzipped folder onto the dashboard. Done.

**cPanel / shared hosting** — upload the contents into `public_html`.

---

## The music

The background song plays from the YouTube video set in `script.js`:

```js
music: { videoId: 'N__nnzyl5Uw', startAt: 45, volume: 30 }
```

It starts the moment a guest opens the doors — browsers only allow sound after a tap, which
is exactly what that tap is for — and loops back to the 45-second mark each time it ends. A
speaker button sits in the top-right corner so anyone can mute it.

To change the song, swap `videoId` for the id in any YouTube URL (`youtu.be/<id>` or
`watch?v=<id>`) and set `startAt` to the second you want it to begin.

Two things worth knowing: it needs an internet connection, and if YouTube can't load, the
page simply stays quiet and the speaker button never appears — nothing breaks.

---

## Editing the content

Everything lives in the `WEDDING` object at the **top of `script.js`**.

### A rasam

```js
{ name: 'Sangeet',
  time: '19:00',          // 24-hour, Indian Standard Time
  end:  '23:30',          // optional — defaults to start + 2 hours
  onwards: true,          // optional — prints "onwards" after the time
  icon: 'music_note',     // any Material Symbols name
  note: 'Dhol, dance floor and a night that refuses to end.',
  dress: 'Indo-Western'   // optional — shows a badge; leave '' to hide it
}
```

An event crossing midnight takes a full timestamp as its end — that's how Phere is set up:
`end: '2026-11-26T02:30'`.

### Dress codes

Every event carries a `dress:` line, matched to the bride's card — Pooja Attire, Shades of
Green, Casual Red Attire, Ethnic Wear, Indo Western, Casual & Comfortable — with **Pastel
Shades** for Haldi. The five rasams that only appear on this card (Mata Pujan, Ghodi Banna,
Tel, Mayra, Nikasi) were given sensible matches; change any of them in one line.

### The rest

| What | Where |
|---|---|
| Countdown target | `countdownTo:` — currently the phere, 25 Nov 2026 at 11:30 PM |
| Day headings | `title:` on each day |
| Sign-off under the note | `familyLine:` |
| Dress codes | `dress:` on each event — each one picks up its own colour and a little figure in that attire, from the `DRESS` table above the render section |
| Venue names, addresses, map links | `venues:` (`name` is the big line, `sub` the small one) |
| RSVP contacts | `rsvp: []` — add entries and a hidden section appears |

---

## What's built in

- **A carved wooden darwaza** — the invitation sits behind a dark walnut gate: a scalloped
  carved lintel, studded pilasters, arched vine panels and peacock reliefs, with long brass
  pulls at the seam. Tap once and both leaves swing open onto the light beyond.
- **Sticky day bar** — Sun 22 / Mon 23 / Tue 24 / Wed 25 stays pinned while you scroll the
  schedule; tap any date to jump, and it follows the day you're reading. On the wedding days
  themselves, that day's chip is marked **Today**.
- **Countdown to the phere**, locked to IST so it reads correctly from anywhere.
- **Add to Calendar** — each rasam downloads a proper `.ics` with a 2-hour reminder; one
  button takes all thirteen. Works with Apple Calendar, Google Calendar and Outlook.
- **Directions** per day, plus a venues section.
- **Share** — native share sheet on phones, clipboard copy on desktop.
- Mobile-first throughout, with a print stylesheet so guests can print the schedule.

---

## Credits

`assets/ganpati.jpg` is a Nurpur miniature of Ganesha, circa 1810 — public domain, via
Wikimedia Commons. Type is [Satoshi](https://www.fontshare.com/fonts/satoshi) by Indian Type
Foundry, free under their font licence and self-hosted here.

Made with love. 🪔

# Vetri Tamil School — Website Build Roadmap

## Prioritized Order

1. ~~**1.1** Update events data (all current events are past-dated)~~ ✓
2. ~~**1.2** Fix tuition fee placeholder (`$XX`) in FAQ~~ ✓
3. ~~**1.3** Update home CTA copy from "2025–26" to "2026–27"~~ ✓
4. ~~**2.1** Wire contact form to real backend (Formspree)~~ ✓
5. ~~**2.2** Add Google Maps embed to contact page~~ removed
6. ~~**8.1** Edit class descriptions for each grade level~~ ✓
7. **6.2** Add badminton event to events
8. **8.2** Add principal's video message (About or Home page)
9. **3.1** Load Noto Sans Tamil from Google Fonts
10. **3.2** Add favicon
11. **3.3** Add Open Graph metadata
12. **3.4** Add social links to footer
13. **7.1** Add custom 404 page

---

## 1. Data & Content
*Affects every page — fix these first.*

| # | Issue | File | Detail |
|---|-------|------|--------|
| 1.1 | All 3 events are in 2025 — they show as **Past Events**, Upcoming is empty | `lib/data.ts` | Add 2025–26 school year events with current/future dates |
| 1.2 | Tuition fee shows `$XX` | `lib/data.ts` → FAQ | Fill in the real monthly fee |
| 1.3 | Home CTA says "2025–26 school year" | `app/page.tsx` | Update to 2026–27 |

---

## 2. Contact Page

| # | Issue | File | Detail |
|---|-------|------|--------|
| 2.1 | Form is **fake** — submission just waits 1 second, nothing is sent | `components/ContactForm.tsx` | Wire to Formspree (free, no backend needed) or email API |
| 2.2 | Map is a placeholder | `app/contact/page.tsx` | Add a real Google Maps embed iframe |

---

## 3. Global / Layout

| # | Issue | File | Detail |
|---|-------|------|--------|
| 3.1 | Tamil text uses system fonts (Latha, Tamil MN) — inconsistent across devices | `app/layout.tsx`, `globals.css` | Load **Noto Sans Tamil** from Google Fonts |
| 3.2 | No favicon | `public/` | Add `favicon.ico` / `icon.png` |
| 3.3 | No Open Graph metadata | `app/layout.tsx` | Add `og:title`, `og:description`, `og:image` for link previews |
| 3.4 | No social links in footer | `components/Footer.tsx` | Add Facebook / WhatsApp / Instagram icons |

---

## 4. About Page

| # | Issue | File | Detail |
|---|-------|------|--------|
| 4.1 | Tuition fee `$XX` in FAQ | `lib/data.ts` | Same as 1.2 — resolved together |
| 4.2 | Teachers and Board images | — | **Complete** |

---

## 5. Classes Page

| # | Issue | File | Detail |
|---|-------|------|--------|
| 5.1 | No critical issues | — | **Complete** |
| 5.2 | Curriculum section is hardcoded | `app/classes/page.tsx` | Move to `lib/data.ts` for easier editing |

---

## 6. Events Page

| # | Issue | File | Detail |
|---|-------|------|--------|
| 6.1 | Upcoming section is empty (all events are past-dated) | `lib/data.ts` | Blocked by item 1.1 |

---

## 8. Upcoming Content

| # | Item | File | Detail |
|---|------|------|--------|
| ~~8.1~~ | ~~Edit class descriptions for each grade level~~ | ~~`lib/data.ts`~~ | ✓ Done — English + Tamil descriptions added for all 7 levels |
| 8.2 | Principal's video message | `app/about/page.tsx` or `app/page.tsx` | Embed a YouTube/hosted video with an intro from the principal |

---

## 7. Nice-to-Haves

| # | Item | File |
|---|------|------|
| 7.1 | Custom 404 page | `app/not-found.tsx` |
| 7.2 | Logo image in Navbar instead of text | `components/Navbar.tsx`, `public/` |
| 7.3 | Photo gallery on About page or dedicated Gallery page | `app/gallery/page.tsx` |

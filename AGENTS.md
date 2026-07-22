# AGENTS.md

Istruzioni operative per agenti AI (e umani) che lavorano su questo repository.

## Scope del progetto

Sito ufficiale della band **Electric Circus** ([electriccircus.it](https://www.electriccircus.it/)).
È il sito vetrina permanente del progetto, statico-first: biografia, date live, contatti, social e presentazione delle uscite discografiche.

Al momento la release in evidenza è il singolo **"High Fever"** (Killer Groove Records) — countdown, artwork e callout in home ruotano attorno a quella. È però **contenuto di periodo, non lo scopo del sito**: in futuro arriveranno altri singoli e album che prenderanno quel posto. Quando tocchi la home o i componenti di release, tratta il riferimento a High Fever come dato sostituibile (`data/socials.ts`, `lib/release.tsx`), non hardcodarlo ulteriormente nella struttura.

Pagine (App Router):

| Route       | File                  | Contenuto                                          |
| ----------- | --------------------- | -------------------------------------------------- |
| `/`         | `app/page.tsx`        | Hero + countdown/artwork, ticker, video, callout album |
| `/bio`      | `app/bio/page.tsx`    | Biografia e crediti fotografici                    |
| `/shows`    | `app/shows/page.tsx`  | Date live (upcoming, fallback su past)             |
| `/contacts` | `app/contacts/page.tsx` | Booking, label, social                           |

Cose che il progetto **non** è: non ha database, non ha autenticazione, non ha route API proprie, non raccoglie dati utente. Se un task sembra richiedere una di queste cose, fermati e chiedi conferma.

## Tecnologie

- **Next.js 15** (App Router, React Server Components di default) + **React 19**
- **TypeScript 5.7** in strict mode — niente `any`, niente `@ts-ignore`
- **Tailwind CSS v4** via `@tailwindcss/postcss` (config CSS-first in `app/globals.css`, nessun `tailwind.config.js`)
- **Yarn** come package manager (`yarn.lock` è la fonte di verità — non introdurre `package-lock.json` o `pnpm-lock.yaml`)
- **Node 24.x** (vedi `engines` in `package.json`)
- `next/font` (Open Sans), `next/image` + `sharp` per l'ottimizzazione immagini
- **Bandsintown REST API** come unica sorgente dati esterna

### Struttura

```
app/         route, layout, metadata, globals.css, icon/opengraph
components/  componenti UI riutilizzabili (PascalCase.tsx)
lib/         accesso dati e logica condivisa
data/        contenuti statici tipizzati (social, release)
public/      immagini e PDF (press kit, tech rider)
```

Import interni sempre con l'alias `@/` (es. `@/components/Nav`), mai con path relativi risalenti (`../../`).

### Convenzioni di codice

- **Server Component di default.** Aggiungi `"use client"` solo se servono stato, effetti o event handler; tienilo il più in basso possibile nell'albero.
- I moduli che leggono variabili d'ambiente o chiamano API esterne importano `server-only` (vedi `lib/bandsintown.ts`).
- I dati remoti si prendono con `fetch` + `next: { revalidate }` (ISR), non con `useEffect` lato client.
- Il fetch dati deve **degradare in silenzio**: errore API o env var mancante ⇒ log su console e array vuoto, mai un crash della pagina.
- Attenzione alle **hydration mismatch**: tutto ciò che dipende da `Date.now()` o dal fuso orario del visitatore (countdown, stato pre/post release) va renderizzato dopo l'hydration (pattern in `lib/release.tsx`).

## Best practices di sicurezza

- **Segreti mai nel repository.** `BANDSINTOWN_APP_ID` vive in `.env.local` (già in `.gitignore`) e nelle env di Vercel. Non committare `.env*`, non stampare valori di env in log o messaggi, non incollarli nelle risposte.
- Le variabili d'ambiente **non** devono avere prefisso `NEXT_PUBLIC_` a meno che il valore sia davvero pubblico: il prefisso le inlinea nel bundle client.
- **Nessun segreto in Client Component**: se un modulo ha `"use client"`, non può leggere env server-side. Usa `server-only` per rendere l'errore esplicito a build time.
- **Input esterni non sono fidati.** La risposta Bandsintown va tipizzata e validata (controllo `Array.isArray`, campi opzionali con fallback) prima dell'uso. Non fare `dangerouslySetInnerHTML` con dati remoti.
- **URL esterni**: interpolare sempre i valori dinamici con `encodeURIComponent`. I link `target="_blank"` devono avere `rel="noopener noreferrer"`.
- **Domini immagini**: ogni host remoto va dichiarato in `next.config.ts` → `images.remotePatterns`. Non usare wildcard permissive.
- **Embed di terze parti**: YouTube va servito via `youtube-nocookie.com` con pattern facade (vedi `components/YouTubeFacade.tsx`) — niente iframe caricati di default.
- **Dipendenze**: aggiungi pacchetti solo se necessario, preferisci le API della piattaforma. Gli aggiornamenti di sicurezza si committano come `chore(security): ...` citando la CVE quando esiste. Il campo `resolutions` in `package.json` serve a forzare versioni patchate di dipendenze transitive.
- Non aggiungere script di analytics, tracker o pixel senza richiesta esplicita.

## Workflow di sviluppo

### Comandi

```bash
yarn dev        # dev server su http://localhost:3000
yarn build      # build di produzione
yarn start      # serve la build
yarn lint       # eslint (next/core-web-vitals + next/typescript)
yarn typecheck  # tsc --noEmit
```

**Dopo ogni step di implementazione esegui `yarn typecheck` e `yarn lint`.** Devono passare puliti prima di considerare il lavoro finito; per modifiche non banali esegui anche `yarn build`.

### Branch e commit

- Si lavora su `dev`; `main` è il branch di produzione e riceve modifiche via pull request.
- **Non eseguire `git push`**: i commit locali vanno bene, il push è responsabilità del maintainer.
- I file di piano/handoff stanno in `.claude/` (ignorato da git).

### Commit atomici

Un commit = un cambiamento logico completo e coerente.

- Se il messaggio di commit contiene "e" / "and" per unire due cose non correlate, sono due commit.
- Ogni commit deve lasciare il repo in stato funzionante (typecheck + lint verdi).
- Non mescolare refactor, formattazione e cambi di comportamento nello stesso commit.
- Non includere file generati (`.next/`, `*.tsbuildinfo`) o originali locali (`public/img/*_hq.*`).

### Conventional Commits

Formato: `<type>(<scope opzionale>): <descrizione all'imperativo, minuscola, senza punto finale>`

Type in uso nel repo:

| Type       | Quando                                                        |
| ---------- | ------------------------------------------------------------- |
| `feat`     | nuova funzionalità o contenuto visibile all'utente             |
| `fix`      | correzione di un bug                                           |
| `perf`     | miglioramento di performance (es. compressione immagini)       |
| `refactor` | riorganizzazione senza cambi di comportamento                  |
| `style`    | solo formattazione/CSS senza impatto logico                    |
| `chore`    | dipendenze, config, tooling — `chore(security)` per le patch CVE |
| `docs`     | documentazione                                                 |

Esempi presi dalla storia del repo:

```
feat: link shows to Bandsintown event page via Details button
fix: show Details button on mobile shows list
perf: compress hero and band photo images
chore(security): bump next to 15.5.18 and force postcss >=8.5.10
```

Breaking change: `!` dopo il type (`feat!: ...`) o footer `BREAKING CHANGE: ...`.
